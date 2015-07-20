module.exports = {
  name: 'parse',

  args: {
    markdown: {
      example: '# Hello World',
      required: true
    }
  },

  call: function(args, done) {
    var marked = require('marked');

    marked(args.markdown, function(err, content) {
      if (err) {
        done(err);
      } else {
        done(content);
      }
    });
  }
};
