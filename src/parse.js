module.exports = {
  name: 'parse',

  args: {
    markdown: {
      example: '# Hello World',
      required: true
    }
  },

  call: function(args, done, error) {
    var marked = require('marked');

    marked(args.markdown, function(err, content) {
      if (err) {
        error(err);
      } else {
        done(content);
      }
    });
  }
};