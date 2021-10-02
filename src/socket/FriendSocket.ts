import { Socket, Server } from "socket.io";
import UserService from "../Services/UserService";
import { GetYMDHMS } from "../helpers/dateTime";

export const Friend = (io: Server, socket: Socket) => {
    async function RequestAddFriend(idFriend: string) {
        if (!idFriend) {
            socket.emit('friend:response-add-friend', { status: 404, detail: 'idFriend is null' });
            return;
        }
        await UserService.GetUser(idFriend)
            .then((user) => {
                const userRequestAddFriend = {
                    _id: user.id,
                    FirstName: user.FirstName,
                    LastName: user.LastName,
                    Avatar: user.Avatar,
                    idUserRequest: idFriend,
                    dateAt: GetYMDHMS(),
                }
                socket.to(idFriend)
                    .emit('friend:listen-add-friend', userRequestAddFriend);
            })
            .catch(Error => {
                socket.emit('friend:response-add-friend', { status: 404, detail: Error });
            })
    }

    function AcceptRequestAddFriend(IAddFriend: { _id: string, dateAt: string, _idFriend: string }) {
        UserService.AddFriend(IAddFriend._id, IAddFriend._idFriend)
            .then(() => {
                socket.to(IAddFriend._idFriend)
                    .emit('friend:listen-add-friend', { status: 200 });
                socket.emit('friend:response-add-friend', { status: 200 });
            })
            .catch(Error => {
                socket.to(IAddFriend._idFriend)
                    .emit('friend:listen-add-friend', { status: 200, detail: Error });
                socket.emit('friend:response-add-friend', { status: 200, detail: Error });
            });

    }

    socket.on('friend:request-add-friend', RequestAddFriend);
    socket.on('friend:accept-request-add-friend', AcceptRequestAddFriend);
}