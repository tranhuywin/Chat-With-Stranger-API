import { Socket, Server } from "socket.io";
import socket from ".";

export const Room = (io: Server, socket: Socket) => {
    function JoinRoom(room: string) {
        socket.join(room);
    }
    function LeaveRoom(room: string) {
        socket.leave(room);
    }
    function CreateRoom(idUser1: string, idUser2: string) {
        const user = [idUser1, idUser2];
        const room = user.sort().join("#");
        JoinRoom(room);
    }
    socket.on('room:join-room', JoinRoom);
    socket.on('room:leave-room', LeaveRoom);
    socket.on('room:create-room', CreateRoom);
}