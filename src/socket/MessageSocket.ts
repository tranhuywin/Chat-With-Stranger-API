import { Socket, Server } from "socket.io";
import FilterMessage from "../helpers/FilterMessage";

export const Message = (io: Server, socket: Socket, queue: any, rooms: any, names: any, allUsers: any) => {

    function SendMessage(message: string) {
         const newMessage = FilterMessage(message);
        const date = new Date();
        const time = date.getHours() + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
         const data = {
             message: newMessage,
             name: names[socket.id],
             time: time
         };
         console.log(data);
        const room: any = rooms[socket.id];
        socket.emit('receive-message-from-room', data);
        socket.broadcast.to(room).emit('receive-message-from-room', data);
    }

    function StartSearchStranger(idUser: string, nameUser: string){
        names[socket.id] = nameUser;
        allUsers[socket.id] = socket;
        // now check if sb is in queue
        if (queue.length > 0) {
            const user = queue.shift();
            const room = `${idUser}#${user}`;

            rooms[socket.id] = room;
            rooms[user] = room;
            socket.join(room);
            socket.to(user).socketsJoin(room);
            socket.emit('start-search-stranger', {
                message: 'Bắt đầu chat',
            });
            socket.to(user).emit('start-search-stranger', {
                message: 'Bắt đầu chat',
            });
        } else {
            queue.push(socket.id);
            socket.emit('start-search-stranger', {message: 'Bắt đầu tìm kiếm'});
        }

    }

    function EndChatStranger(){
        let room = rooms[socket.id];
        if(!room) return
        socket.broadcast.to(room).emit('chat-end', {message: 'ket thuc chat'});
        socket.emit('chat-end', {message: 'ket thuc chat'});
        let peerID = room.split('#');
        peerID = peerID[0] === socket.id ? peerID[1] : peerID[0];
        delete rooms[socket.id];
        delete rooms[peerID];
        delete allUsers[socket.id];
        delete allUsers[peerID];
        socket.leave(room);
        socket.to(peerID).socketsLeave(room);
    }

    socket.on('message:send-message', SendMessage);
    socket.on('message:start-search-stranger', StartSearchStranger);
    socket.on('message:end-chat-stranger', EndChatStranger);
}