module.exports = {
  development: {
    options: {
      compress: true,
      yuicompress: true,
      optimization: 2,
    },
    files: {
      "css/agency.css": "less/agency.less"
    }
  }
};
