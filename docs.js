const Docma = require('docma');
const Package = require('./package');

const config = {
  src: [
    { readme: './README.md' },
    { r6discord: './src/*.js'}
  ],
  dest: './docs'
};

Docma.create()
  .build(config)
  .catch(error => {
    console.log(error);
  });