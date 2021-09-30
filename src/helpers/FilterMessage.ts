export default function FilterMessage(message: string): string {
    let ArrayVulgarWord = process.env.VULGAR_WORDS?.split(', ') || [];
    let newMessage: string = message;
    ArrayVulgarWord.map((word)=>{
        newMessage = message.split(word).join('***');
        message = newMessage;
    })
    return newMessage;
}