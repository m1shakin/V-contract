"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strategy = void 0;
class Strategy {
    uri;
    parameters;
    constructor(parameters) {
        this.parameters = parameters;
        // Generate short unique identifier for this strategy
        this.uri = "";
    }
    /**
     * Report key statistics to the logger.
     * @param status A map of key-value pairs to report.
     * @protected
     */
    logStatus(status) {
    }
}
exports.Strategy = Strategy;
