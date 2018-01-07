const reactDocgen = require('react-docgen');
const createMarkdown = require('./create_markdown');

function docgen(path) {
  let componentInfo = null;
  let markdown = null;
  try {
    componentInfo = reactDocgen.parse(path);
  } catch (err2) {
    console.log('Error parsing', path);
    throw err2;
  }
  try {
    markdown = createMarkdown('Props', componentInfo);
    return markdown;
  } catch (err2) {
    console.log(`Create Markdown Error ${err2}`);
    throw err2;
  }
}

module.exports = docgen;
