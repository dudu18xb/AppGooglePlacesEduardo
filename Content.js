'use strict';

var React = require('react-native');

var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');

const homePlace = { description: 'Home', geometry: { location: { lat:48.8152937, lng: 2.4597668} } };
const workPlace = { description: 'Work', geometry: { location: { lat:48.8496818, lng: 2.2940881} } };

var Content = React.createClass ({
  render(){
    return (
      <GooglePlacesAutocomplete
      placeholder= 'Search'
      minLength={ 2 } // comprimento minimo da pesquisa do texto
      autoFocus= { false }
      fetchDetails= { true }
      onPress = { (data, details = null) => { // os 'details' são fornecidos quando fetchDetails for verdadeiro
              
      }}
    )
  }
})
