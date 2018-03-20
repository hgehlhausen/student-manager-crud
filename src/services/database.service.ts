import {Client, ClientConfig, QueryResult} from "pg";

/**
 * @type {string}
 */
const connectionString: string = 'postgres://studentmgr:studentmgr@localhost:5432/studentmgr';

export class PgClient {
    private client: Client;
    private static clientConfig: ClientConfig = {
        connectionString: connectionString
    };

    constructor() {
        this.client = new Client(PgClient.clientConfig);
    }

    /**
     *
     * @param {string} sqlString
     * @param {*[]} args
     * @param {Function} afterFn
     */
    public query(sqlString: string, args: any[], afterFn: Function): void {
        let queryPromise: Promise<QueryResult> = this.client.query(sqlString, args);
        this.client.connect()
            .then(() => queryPromise.then((result: QueryResult) => afterFn(result.rows)))
            .catch(function () {
                console.log('Error', arguments);
            });
    }
}