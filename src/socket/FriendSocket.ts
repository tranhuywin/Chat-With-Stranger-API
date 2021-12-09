import { Socket, Server } from "socket.io";
import UserService from "../Services/UserService";
import { GetYMDHMS } from "../helpers/dateTime";

export const Friend = (io: Server, socket: Socket, queue: any, rooms: any, names: any, allUsers: any) => {
    async function RequestAddFriend(email: string, idSocket: string) {
        if (!email) {
            socket.emit('friend:response-add-friend', { status: 404, detail: 'idFriend is null' });
            return;
        }
        await UserService.GetUserByEmail(email)
            .then((user) => {
                const userRequestAddFriend = {
                    _id: user.id,
                    FullName: user.FullName,
                    Avatar: user.Avatar,
                    Email: user.Email,
                    dateAt: GetYMDHMS(),
                }
                socket.to(idSocket)
                    .emit('friend:listen-add-friend', userRequestAddFriend);
            })
            .catch(Error => {
                socket.emit('friend:response-add-friend', { status: 404, detail: Error });
            })
    }

    function AcceptRequestAddFriend(IAddFriend: { fromEmail: string, dateAt: string, toEmail: string }) {
        const room: any = rooms[socket.id];
        UserService.AddFriend(IAddFriend.fromEmail, IAddFriend.toEmail)
            .then(() => {
                // socket.to(IAddFriend._idFriend)
                //     .emit('friend:listen-add-friend', { status: 200 });
                socket.broadcast.to(room).emit('friend:listen-add-friend', { status: 200 });
                socket.emit('friend:listen-add-friend', { status: 200 });
            })
            .catch(Error => {
                // socket.to(IAddFriend._idFriend)
                //     .emit('friend:listen-add-friend', { status: 200, detail: Error });
                // socket.emit('friend:response-add-friend', { status: 200, detail: Error });
            });

    }

    socket.on('friend:request-add-friend', RequestAddFriend);
    socket.on('friend:accept-request-add-friend', AcceptRequestAddFriend);
}