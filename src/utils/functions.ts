export function toStringDate(date: string): string {
    const dateObject: Date = new Date(date);
    const arrDateObjects = dateObject.toString().split(' ');
    return arrDateObjects[2] + " " + arrDateObjects[1] + " " + arrDateObjects[3] + ", " + arrDateObjects[4].substring(0, 5) + " WIB";
}