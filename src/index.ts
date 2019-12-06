import database from './config/database'
import App from './config/app';
import { config } from "dotenv";

config()
database()

const app = new App();
app.start();