"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Capybot = void 0;
class Capybot {
    dataSources = {};
    pools = {};
    strategies = {};
    // public strategies: Record<string, Array<Strategy>> = {};
    // private keypair: Keypair;
    // private provider: JsonRpcProvider;
    // private signer: RawSigner;
    constructor() {
        //   this.keypair = keypair;
        //   this.provider = new JsonRpcProvider(mainnetConnection);
        //   this.signer = new RawSigner(this.keypair, this.provider);
    }
    async loop(duration, delay) {
        let startTime = new Date().getTime();
        while (new Date().getTime() - startTime < duration) {
            for (const uri in this.dataSources) {
                let dataSource = this.dataSources[uri];
                let data = await dataSource.getData();
                console.log({
                    price: data,
                }, "price");
                // Push new data to all strategies subscribed to this data source
                for (const strategy of this.strategies[uri]) {
                    // Get orders for this strategy.
                    let tradeOrders = strategy.evaluate(data);
                    // Create transactions for the suggested trades
                    // transactionBlock = new TransactionBlock();
                    for (const order of tradeOrders) {
                        console.log({ strategy: strategy.uri, decision: order }, "order");
                        let amountIn = Math.round(order.amountIn);
                        let amountOut = Math.round(order.estimatedPrice * amountIn);
                        const a2b = order.a2b;
                        const byAmountIn = true;
                        const slippage = 1; // TODO: Define this in a meaningful way. Perhaps by the strategies.
                        console.log("что-то", order);
                        //   if (this.pools[order.pool] instanceof CetusPool) {
                        //     transactionBlock = await this.pools[
                        //       order.pool
                        //     ].createSwapTransaction(transactionBlock, {
                        //       a2b,
                        //       amountIn,
                        //       amountOut,
                        //       byAmountIn,
                        //       slippage,
                        //     });
                        //   } else if (this.pools[order.pool] instanceof SuiswapPool) {
                        //     transactionBlock = await this.pools[
                        //       order.pool
                        //     ].createSwapTransaction(transactionBlock, {
                        //       a2b,
                        //       amountIn,
                        //     });
                        //   } else if (this.pools[order.pool] instanceof TurbosPool) {
                        //     transactionBlock = await this.pools[
                        //       order.pool
                        //     ].createSwapTransaction(transactionBlock, {
                        //       a2b,
                        //       amountIn,
                        //       amountSpecifiedIsInput: true,
                        //       slippage: 0,
                        //     });
                        //   }
                        // }
                        // Execute the transactions
                        // await this.executeTransactionBlock(transactionBlock, strategy);
                    }
                }
            }
        }
        await setTimeout('100');
    }
}
exports.Capybot = Capybot;
