import { readFileSync, writeFileSync } from "fs";

export function readArrayFromFile<T>(filename: string): T[] {
    let data = readFileSync(filename).toString();
    return JSON.parse(data) as T[]
}

export function pushToArrayInFile<T>(filename: string, obj: T) {
    let data = readArrayFromFile(filename);
    data.push(obj)
    writeFileSync(filename, JSON.stringify(data))
}