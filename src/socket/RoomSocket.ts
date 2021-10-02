import { Socket, Server } from "socket.io";

export const Room = (io: Server, socket: Socket) => {
    function JoinRoom(room: string) {
        socket.join(room);
    }
    socket.on('room:join-room', JoinRoom);
}