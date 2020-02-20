module.exports = {
  apps : [{
    name: 'portfolio',
    script: 'npm',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'run start:production',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'mgsolid543',
      host : 'localhost',
      ref  : 'origin/master',
      repo : 'git@github.com:mgsolid543/reactportfolio.git',
      path : '/Users/railink/when-the-zetas-fill-the-sky/reactjs/portfolio',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};

