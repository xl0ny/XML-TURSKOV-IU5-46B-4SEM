import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';
import { FileService } from '../app.service';

@Injectable()
export class StocksService {
  constructor(private readonly fileService: FileService<Stock[]>) {}

  private getData(): Stock[] {
    return this.fileService.read();
  }

  private saveData(data: Stock[]) {
    this.fileService.write(data);
  }

  findAll(title?: string): Stock[] {
    const data = this.getData();
    return title
      ? data.filter(stock => stock.title.toLowerCase().includes(title.toLowerCase()))
      : data;
  }

  findOne(id: number): Stock {
    const data = this.getData();
    const stock = data.find(s => s.id === id);
    if (!stock) {
      throw new Error(`Stock with id ${id} not found`);
    }
    return stock;
  }

  create(createDto: CreateStockDto): Stock {
    const data = this.getData();
    const newStock: Stock = {
      id: data.length > 0 ? Math.max(...data.map(s => s.id)) + 1 : 1,
      ...createDto,
    };
    data.push(newStock);
    this.saveData(data);
    return newStock;
  }

  update(id: number, updateDto: UpdateStockDto): Stock {
    const data = this.getData();
    const index = data.findIndex(s => s.id === id);
    if (index === -1) {
      throw new Error(`Stock with id ${id} not found`);
    }
    data[index] = { ...data[index], ...updateDto };
    this.saveData(data);
    return data[index];
  }

  remove(id: number): void {
    const data = this.getData();
    const filtered = data.filter(s => s.id !== id);
    this.saveData(filtered);
  }
}