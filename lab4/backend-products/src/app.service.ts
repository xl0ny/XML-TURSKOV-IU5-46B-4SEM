import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class FileService<T> {
  private filePath: string;

  constructor(fileName: string) {
    this.filePath = path.resolve(__dirname, 'assets', fileName);
  }

  read(): T {
    const raw = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(raw) as T;
  }

  write(data: T): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2), 'utf-8');
  }
}