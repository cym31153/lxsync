module.exports = {
  apps: [
    {
      name: 'lx-music-sync-server',
      script: './index.js',
      // node_args: '-r ts-node/register -r tsconfig-paths/register',
      // script: './bin/www',
      max_memory_restart: '1024M',
      stop_exit_codes: [0],
      exp_backoff_restart_delay: 100,
      watch: false,
      ignore_watch: ['node_modules', 'logs', 'data'],
      env: {
        PORT: 9527,
        NODE_ENV: 'development',
      },
      env_production: {
         PORT: 9527, // 配置绑定的端口号默认9527
         BIND_IP: '0.0.0.0', // 配置绑定IP为0.0.0.0将接受所有IP访问
        CONFIG_PATH: '1',
         LOG_PATH: '2',
        DATA_PATH: '3',
        NODE_ENV: 'production',
      },
    },
  ],
}
