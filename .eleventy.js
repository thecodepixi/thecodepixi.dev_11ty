const dateFilter = require("./src/filters/date-filter");

module.exports = (config) => {
  // add filters 
  config.addFilter('dateFilter', dateFilter);
  // add collections
  config.addCollection('posts', (collection) => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });
  config.addCollection('TIL', (collection) => {
    return collection.getFilteredByGlob('./src/til/*.md');
  });
  config.addCollection('tinyTutorials', (collection) => {
    return collection.getFilteredByGlob('./src/tiny-tutorials/*.md');
  });
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
