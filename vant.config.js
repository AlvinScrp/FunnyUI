module.exports = {
  name: 'FunnyUI',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/FunnyUI/',
    },
  },
  site: {
    title: 'FunnyUI',
    logo: 'https://staticimg.ngmm365.com/aa4c5b277183d95667034eb35ddbcd36-w129_h128.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'funny-button',
            title: 'FunnyButton',
          },
        ],
      },
    ],
  },
};
