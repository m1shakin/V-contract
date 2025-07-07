"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CetusConnector = void 0;
const cetus_sui_clmm_sdk_1 = require("@cetusprotocol/cetus-sui-clmm-sdk");
class CetusConnector {
    wallet;
    cetusClmmSDK;
    constructor(wallet) {
        // Use provided wallet or default wallet
        this.wallet = wallet || "0xf07364b6dd31fea0de809945d4ad455fbdd254fde673c344b8a5cb4b24079498";
        this.cetusClmmSDK = (0, cetus_sui_clmm_sdk_1.initCetusSDK)({ network: 'mainnet', wallet: this.wallet });
    }
    // Function call to log and return the cetusClmmSDK instance
    call() {
        console.log(this.cetusClmmSDK);
        return this.cetusClmmSDK;
    }
    // Logs the prices for SUI/USDC pool tokens
    // Logs the prices for SUI/USDC pool tokens
    async logSuiUsdcPoolPrices() {
        try {
            // Получаем данные всех пулов через SDK
            //0xe01243f37f712ef87e556afb9b1d03d0fae13f96d324ec912daffc339dfdcbd2
            // let poolDeepSui = await this.cetusClmmSDK.Pool.getPool('0xe01243f37f712ef87e556afb9b1d03d0fae13f96d324ec912daffc339dfdcbd2')
            // while (true) {
            let poolUsdcSui = await this.cetusClmmSDK.Pool.getPool('0xb8d7d9e66a60c239e7a60110efcf8de6c705580ed924d0dde141f4a0e2c90105');
            let poolSuiDeep = await this.cetusClmmSDK.Pool.getPool('0xe01243f37f712ef87e556afb9b1d03d0fae13f96d324ec912daffc339dfdcbd2');
            let poolDeepUsdc = await this.cetusClmmSDK.Pool.getPool('0xefb30c2780bb10ffd4cf860049248dcc4b204927ca63c4c2e4d0ae5666a280d5');
            // console.log('Было 10 баксов')
            // console.log({ pool })
            let count = 100;
            let price = poolUsdcSui.current_sqrt_price ** 2 / 2 ** 128 * 10 ** -3;
            let fee = poolUsdcSui.fee_rate * 10 ** -6;
            let price1 = poolSuiDeep.current_sqrt_price ** 2 / 2 ** 128 * 10 ** -3;
            let fee1 = poolSuiDeep.fee_rate * 10 ** -6;
            let price2 = poolDeepUsdc.current_sqrt_price ** 2 / 2 ** 128;
            let fee2 = poolDeepUsdc.fee_rate * 10 ** -6;
            // let price2 = poolDeepSui.current_sqrt_price ** 2 / 2 ** 128 * 10 ** -3;
            // let feee = poolDeepSui.fee_rate * 10 ** -6;
            let res1 = 1 / price1;
            let res2 = price2;
            let final = count;
            final = final * price * (1 - fee);
            final = final * res1 * (1 - fee);
            final = final * res2 * (1 - fee);
            let USDC = price;
            let SUI = 1 / USDC;
            if (final < count) {
                console.log("ценв для свапа UCDC->SUI: ", price, "цена для свапа SUI->CETUS: ", res1, "ценв для свапа CETUS->UCDC: ", res2, 'Стало', final, 'баксов');
                await new Promise(resolve => setTimeout(resolve, 1000));
                ;
            }
            else {
                console.log("------------------------");
                console.log(" WIN");
                console.log("ценв для свапа UCDC->SUI: ", price);
                console.log("ценв для свапа SUI->Deep: ", res1);
                console.log("ценв для свапа Deep->UCDC: ", res2);
                console.log('Стало', final, 'баксов');
                console.log("------------------------");
                await new Promise(resolve => setTimeout(resolve, 500));
                ;
            }
            // console.log("DEEP: ", price2);
            // console.log("SUI: ", 1/price2);
            // }
        }
        catch (error) {
            console.error('Error fetching SUI/USDC pool prices:', error);
        }
    }
}
exports.CetusConnector = CetusConnector;
