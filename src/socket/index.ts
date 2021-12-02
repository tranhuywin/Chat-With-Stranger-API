import { Socket, Server } from "socket.io";
import { Friend } from "./FriendSocket";
import { Message } from "./MessageSocket";
import {Room} from './RoomSocket';

export default function SocketIO(io: Server) {
    const queue: any = [];    // list of sockets waiting for peers
    const rooms:any = {};    // map socket.id => room
    const names: any = {};    // map socket.id => name
    const allUsers: any = {}; // map socket.id => socket

    io.on('connection', (socket: Socket) => {
        Message(io, socket, queue, rooms, names, allUsers);
        Friend(io, socket);
        Room(io, socket);

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    })
}