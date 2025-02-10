module.exports = {
    apps: [
      {
        name: 'astraliva',
        exec_mode: 'cluster',
        instances: 1, // Or a number of instances
        script: 'node_modules/next/dist/bin/next',
        args: 'start',
        env_local: {
          APP_ENV: 'local', 
          PORT:"3000"
        },
        env_dev: {
          APP_ENV: 'dev',
          PORT:"80" // APP_ENV=dev
        },
        env_prod: {
          APP_ENV: 'prod',
          PORT:"80" // APP_ENV=prod
        }
      }
    ]
  }
  
