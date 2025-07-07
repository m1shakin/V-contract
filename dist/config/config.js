"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
exports.CONFIG = {
    // RPC endpoint для подключения к Sui (можно изменить на основной или тестовый узел)
    SUI_RPC_ENDPOINT: process.env.SUI_RPC_ENDPOINT || "https://fullnode.mainnet.sui.io"
};
