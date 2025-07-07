"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinFetcher = void 0;
const client_1 = require("@mysten/sui/client");
class CoinFetcher {
    client;
    constructor() {
        const rpcUrl = (0, client_1.getFullnodeUrl)('mainnet');
        this.client = new client_1.SuiClient({ url: rpcUrl });
    }
    async connect(owner = '0x447d541c6aba73068d7a800cd3b8139339c07cc53fef7eaa9004ebb754c68c3e') {
        try {
            const temp = await this.client.getAllBalances({ owner });
            console.log('Кошелек успешно подключился к сети Sui:', temp);
        }
        catch (error) {
            console.error('Не удалось подключиться к сети Sui:', error);
        }
    }
}
exports.CoinFetcher = CoinFetcher;
