import express from 'express';
import 'dotenv/config';
import Router from '../router/index.js';
import path  from 'path';



class Server {
  constructor() {
    this.router = Router;
    this.port = process.env.PORT;
    this.app = express();
  }

  start() {
    this._setupRoutes();
    this._listen();
    this._upload()
  }

  _setupRoutes() {
    this.router.create(this.app);
  }

  _listen() {
    this.app.listen(this.port, () => {
      console.log(`App is running on port ${this.port}`);
    });
  }

  _upload(){
    this.app.use('/uploads', express.static(path.join('uploads')))
  }

  
}

export default Server;
