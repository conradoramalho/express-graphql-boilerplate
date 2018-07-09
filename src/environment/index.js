import development from './development';
import production from './production';

const environment = process.env.NODE_ENV || 'development';

const config = {
  development,
  production,
};

export default config[environment];
