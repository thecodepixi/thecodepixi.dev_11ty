const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

// Filters
const dateFilter = require('./src/filters/date-filter');
const tagsFilter = require('./src/filters/tags-filter');

module.exports = (config) => {
  // add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('tagsFilter', tagsFilter);
  // add collections
  config.addCollection('posts', (collection) => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });
  config.addCollection('todayILearned', (collection) => {
    return collection.getFilteredByGlob('./src/til/*.md');
  });
  config.addCollection('tinyTutorials', (collection) => {
    return collection.getFilteredByGlob('./src/tiny-tutorials/*.md');
  });
  // plugins 
  config.addPlugin(syntaxHighlight);
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
