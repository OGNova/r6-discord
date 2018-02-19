const Docma = require('docma');
const Package = require('./package');

/*
const config = {
  src: [
    './src/*.js',
    './README.md'
  ],
  dest: './docs',
  template: {
    options: {
      title: Package.name,
      navItems: [
        {
          label: 'Documentation',
          href: '?api=r6-discord',
          iconClass: 'ico-book'
        },
        {
          label: 'GitHub',
          href: Package.homepage,
          target: '_blank',
          iconClass: 'ico-md ico-github'
        }
      ]
    }
  }
};

Docma.create()
  .build(config)
  .catch(error => {
    console.log(error);
  });
*/

Docma.create()
  .build({
    app: {
      title: Package.name,
      base: '/r6-discord',
      entrance: 'content:readme',
      routing: 'query',
      server: Docma.ServerType.GITHUB
    },
    markdown: {
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: true,
      sanitize: true,
      smartLists: true,
      smartypants: true,
      tasks: true,
      emoji: true
    },
    src: [
      { r6discord: './src/*.js' },
      { readme: './README.md' }
    ],
    dest: './docs',
    template: {
      options: {
        title: Package.name,
        navItems: [
          {
            label: 'Readme',
            href: '?content=readme'
          },
          {
            label: 'Documentation',
            href: '?api=r6-discord',
            iconClass: 'ico-book'
          },
          {
            label: 'GitHub',
            href: Package.homepage,
            target: '_blank',
            iconClass: 'ico-md ico-github'
          }
        ]
      }
    } 
  });