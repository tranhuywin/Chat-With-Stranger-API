export default function IsResonReport(reson: string): boolean {
    const ArrayResonReport = process.env.RESON_REPORTS?.split(', ') || [];
    return ArrayResonReport.includes(reson);
}