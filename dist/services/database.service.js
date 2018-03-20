"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
/**
 * @type {string}
 */
const connectionString = 'postgres://studentmgr:studentmgr@localhost:5432/studentmgr';
class PgClient {
    constructor() {
        this.client = new pg_1.Client(PgClient.clientConfig);
    }
    /**
     *
     * @param {string} sqlString
     * @param {*[]} args
     * @param {Function} afterFn
     */
    query(sqlString, args, afterFn) {
        let queryPromise = this.client.query(sqlString, args);
        this.client.connect()
            .then(() => queryPromise.then((result) => afterFn(result.rows)))
            .catch(function () { console.log('Error', arguments); });
    }
}
PgClient.clientConfig = {
    connectionString: connectionString
};
exports.PgClient = PgClient;
//# sourceMappingURL=database.service.js.map