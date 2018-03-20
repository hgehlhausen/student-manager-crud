import * as express from 'express';
import * as apiRoutes from '../routes/api.route';
import * as wwwRoutes from '../routes/www.route';
import * as bodyParser from 'body-parser';

class App {
    public appInstance;

    constructor() {
        this.appInstance = express();
        this.middleWare();
        this.mountRoutes();
    }

    private mountRoutes(): void {
        let router = express.Router();

        router.all('/', (req, res, next) => {
            console.log('Checking All Calls');
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            next();
        });

        this.appInstance.use('/api', apiRoutes);
    }

    private middleWare(): void {
        this.appInstance.use(bodyParser.json());
        this.appInstance.use(bodyParser.urlencoded({extended: true}));
    }

}

export default new App().appInstance;