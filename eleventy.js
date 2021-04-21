module.exports = config => {
  // add collections 
  config.addCollection('posts', collection => {
    return [...collection.getFilteredByGlob('./src/blog/*.md')].reverse();
  });
  config.addCollection('TIL', collection => {
    return collection.getFilteredByGlob('./src/til/*.md')
  });
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}