module.exports = {
  title: 'Demo project',
  description: 'Just testing',

  themeConfig: {
    sidebar: [
      '/',
      ['/src/js/canvas/', 'Canvas'],
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Canvas', link: '/src/js/canvas/' },
      { text: 'Teemill', link: 'https://teemill.com' },
    ]
  },
  base: '/VuePress/',
  dest: './docs'
}
