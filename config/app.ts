import express, { Application } from "express";
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import path from 'path';
import controllers from '../controllers';

class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.controllers()
        this.routes();
    }
    settings(): void {
        this.app.set('port', process.env.PORT || 5000);
        this.app.use(passport.initialize());
        this.app.use(passport.session())
        this.app.use(express.static(path.join(__dirname, 'public')));
    }
    middlewares(): void {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    controllers(): void {
        this.app.use(controllers);
    }
    routes(): void {
        this.app.use('/', (req, res) => {
            return res.json({
                message: "This is the base server of node.js"
            });
        });
    }
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port`, this.app.get('port'));
        });
    }

}
export default Server;