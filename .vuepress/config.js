module.exports = {
  title: 'Demo project',
  description: 'Just testing',

  themeConfig: {
    sidebar: [
      '/',
      {
        title: 'Docker',
        path: '/src/docker',
        children: [
          ['/src/docker/commands/', 'Commands'],
          ['/src/docker/orchestration/', 'Orchestration'],
        ],
      },
      ['/src/js/canvas/', 'Canvas'],
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docker', link: '/src/docker/' },
      { text: 'Canvas', link: '/src/js/canvas/' },
      { text: 'Teemill', link: 'https://teemill.com' },
    ]
  },
  base: '/VuePress/',
  dest: './docs'
}
