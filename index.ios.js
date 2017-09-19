'use strict';

var React = require('react-native');
var {
  AppRegistry,
} = React;

var example = require('./Content.js');


AppRegistry.registerComponent('GooglePlacesAutocomplete', () => example);
