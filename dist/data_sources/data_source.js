"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSource = void 0;
/** A DataSource provides real-time price data for a pair of coins. This could be a trading pool or an exchange. */
class DataSource {
    uri;
    constructor(uri) {
        this.uri = uri;
    }
}
exports.DataSource = DataSource;
