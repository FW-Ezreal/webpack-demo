const pkg = require('./package.json');

module.exports = {
  version: pkg.version,
  name: pkg.name,
  pages: [
    {
      entry: 'index.html',
      src: './src/pages/index/index.js',
      title: '曲库首页',
      desc: '曲库首页'
    },
    {
      entry: 'homePage.html',
      src: './src/pages/homePage/index.js',
      title: '个人主页',
      desc: '个人主页'
    },
    {
      entry: 'playList.html',
      src: './src/pages/playList/index.js',
      title: '歌单详情',
      desc: '歌单详情'
    }
  ]

}