module.exports = {
  title: 'Demo project',
  description: 'Just testing',

  themeConfig: {
    sidebar: [
      '/',
      ['/src/js/canvas/', 'Canvas'],
      {
        title: 'Docker',
        path: '/src/docker',
        children: [
          ['/src/docker/commands/', 'Commands'],
        ],
      },
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Canvas', link: '/src/js/canvas/' },
      { text: 'Docker', link: '/src/docker/' },
      { text: 'Teemill', link: 'https://teemill.com' },
    ]
  },
  base: '/VuePress/',
  dest: './docs'
}
