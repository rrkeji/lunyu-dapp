import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: './',
  publicPath: './',
  outputPath: './dist',
  hash: true,
  history: {
    type: 'hash',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: './',
          redirect: './home',
        },
        {
          path: './home',
          component: '@/pages/home/index',
        },
      ],
    },
  ],
  fastRefresh: {},
  proxy: {
    '/statics': {
      target: 'https://www.idns.link/',
      changeOrigin: true,
      secure: false,
      // "pathRewrite": { "^/ci": '' }
    },
  },
});
