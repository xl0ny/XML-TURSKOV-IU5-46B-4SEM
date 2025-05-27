import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';
import { FileService } from '../app.service';
export declare class StocksService {
    private readonly fileService;
    constructor(fileService: FileService<Stock[]>);
    private getData;
    private saveData;
    findAll(title?: string): Stock[];
    findOne(id: number): Stock;
    create(createDto: CreateStockDto): Stock;
    update(id: number, updateDto: UpdateStockDto): Stock;
    remove(id: number): void;
}
