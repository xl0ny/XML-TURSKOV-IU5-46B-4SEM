"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksModule = void 0;
const common_1 = require("@nestjs/common");
const stocks_service_1 = require("./stocks.service");
const stocks_controller_1 = require("./stocks.controller");
const app_service_1 = require("../app.service");
let StocksModule = class StocksModule {
};
exports.StocksModule = StocksModule;
exports.StocksModule = StocksModule = __decorate([
    (0, common_1.Module)({
        controllers: [stocks_controller_1.StocksController],
        providers: [
            stocks_service_1.StocksService,
            {
                provide: app_service_1.FileService,
                useFactory: () => new app_service_1.FileService('stocks.json'),
            },
        ],
    })
], StocksModule);
//# sourceMappingURL=stocks.module.js.map