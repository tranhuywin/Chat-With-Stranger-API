export default interface IUser {
    FirstName: string,
    LastName: string,
    Email: string,
    Avatar: string,
    Sex: string,
    Meet: {
        From: number,
        To: number,
        Sex: string
    }
    CodeAddFriend: string,
    NumberOfTimesReported: number,
}