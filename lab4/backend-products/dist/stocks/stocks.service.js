"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksService = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../app.service");
let StocksService = class StocksService {
    fileService;
    constructor(fileService) {
        this.fileService = fileService;
    }
    getData() {
        return this.fileService.read();
    }
    saveData(data) {
        this.fileService.write(data);
    }
    findAll(title) {
        const data = this.getData();
        return title
            ? data.filter(stock => stock.title.toLowerCase().includes(title.toLowerCase()))
            : data;
    }
    findOne(id) {
        const data = this.getData();
        const stock = data.find(s => s.id === id);
        if (!stock) {
            throw new Error(`Stock with id ${id} not found`);
        }
        return stock;
    }
    create(createDto) {
        const data = this.getData();
        const newStock = {
            id: data.length > 0 ? Math.max(...data.map(s => s.id)) + 1 : 1,
            ...createDto,
        };
        data.push(newStock);
        this.saveData(data);
        return newStock;
    }
    update(id, updateDto) {
        const data = this.getData();
        const index = data.findIndex(s => s.id === id);
        if (index === -1) {
            throw new Error(`Stock with id ${id} not found`);
        }
        data[index] = { ...data[index], ...updateDto };
        this.saveData(data);
        return data[index];
    }
    remove(id) {
        const data = this.getData();
        const filtered = data.filter(s => s.id !== id);
        this.saveData(filtered);
    }
};
exports.StocksService = StocksService;
exports.StocksService = StocksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [app_service_1.FileService])
], StocksService);
//# sourceMappingURL=stocks.service.js.map