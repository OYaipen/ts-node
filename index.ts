import App from './config/app';
import database from './config/database'

database()
const app = new App();
app.start();