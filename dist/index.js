"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connector_1 = require("./modules/dexs/cetusConnector/connector");
// import {Arbitrage} from "./strategy/arbitrage";
const co = new connector_1.CetusConnector();
// console.log(co.logSuiUsdcPoolPrices);
co.logSuiUsdcPoolPrices();
// Arbitrage.prototype.evaluate
