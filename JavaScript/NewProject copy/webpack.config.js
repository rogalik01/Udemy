'use strict';

let path = require('path');

module.exports = {
  mode: 'development', // для разработки, после используется production
  entry: './js/script.js', 
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js' // __dirname - имя корневой пап ки
  },
  watch: true, // в позиции true webpack будет автоматически отслеживать изменения файлов и собирать проект каждый раз после их сохранения

  devtool: "source-map",

  module: {}
};
