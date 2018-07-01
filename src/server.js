import startMongo from './config/mongo';
import startExpress from './config/express';

(() => {
  startExpress();
  startMongo();
})();
