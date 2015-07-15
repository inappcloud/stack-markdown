var pkg = require('@inappcloud/stack').pkg;
var parse = require('./src/parse');
var parseWithFrontmatter = require('./src/parse-with-frontmatter');

module.exports = pkg([parse, parseWithFrontmatter]);
