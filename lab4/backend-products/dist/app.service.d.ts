export declare class AppService {
    getHello(): string;
}
export declare class FileService<T> {
    private filePath;
    constructor(fileName: string);
    read(): T;
    write(data: T): void;
}
