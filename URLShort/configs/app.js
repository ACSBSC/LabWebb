
const dotenv = require('dotenv');

dotenv.config();
  
const appConfig = {

  env: process.env.NODE_ENV || 'development',
  express_port: process.env.EXPRESS_PORT || 8000
}

module.exports = appConfig;