import {PgClient} from '../services/database.service';

/**
 * @typedef StudentsService
 */
export class StudentsService {

    protected client: PgClient;
    protected req: any;
    protected res: any;
    protected next: Function;

    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;

        this.client = new PgClient();
    }

    public list(): void {
        this.jsonResponse('SELECT * FROM students');
    }

    read() {
        this.jsonResponse('SELECT * FROM students WHERE id = $1', [this.req.body.id]);
    }

    /**
     * POST /api/student/:id
     */
    update() {
        this.jsonResponse(
            'UPDATE students SET name_first = $2, name_last = $3 WHERE id = $1',
            [
                this.req.body.id,
                this.req.body.name_first,
                this.req.body.name_last]);
    }

    /**
     * POST /api/student/create
     */
    create() {
        console.log('Getting Here');
        let name_first = this.req.body.name_first;
        let name_last = this.req.body.name_last;
        this.jsonResponse(
            'INSERT INTO students (name_first,  name_last) VALUES ($1, $2)',
            [name_first, name_last]);
    }

    /**
     * POST /api/student/delete/:id
     */
    delete() {
        this.jsonResponse('DELETE FROM students WHERE id = $1', [this.req.body.id]);
    }

    private jsonResponse(queryString: string, parameters: any[] = null): void {
        this.res.header("Access-Control-Allow-Origin", "*");
        this.res.header("Access-Control-Allow-Headers", "X-Requested-With");
        this.client.query(queryString, parameters, results => this.res.json(results));
    }
}