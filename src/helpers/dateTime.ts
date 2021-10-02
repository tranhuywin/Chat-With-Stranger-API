function GetYMDHMS(): string {
    const datetime = new Date();
    const datestring = datetime.getFullYear() + "-" + (datetime.getMonth() + 1) + "-" + datetime.getDate() + " " +
        datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds();
    return datestring;
}

export { GetYMDHMS }