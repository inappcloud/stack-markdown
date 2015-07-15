module.exports = {
  name: 'toHtml',
  args: {
    markdown: {
      require: true
    }
  },

  call: function(ctx, args, done, error) {
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
