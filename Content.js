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
          console.log(data);
          console.log(details);
      }}
      getDefaultValue = {() => {
        return ''; //  valor padrao de entrada de texto
      }}
      query = {{
        // minha key do google
        key: 'AIzaSyBpoEDWF6LYz_vA3nwwcMZ_P8ZaLSbTSVc',
        language: 'pt-br',
        types: '(cities)',
      }}
      styles = {{
        description: {
          fontWeight: 'bold',
        },
      predefinedPlacesDescription: {
        color: '#e31414',
      },
      }}

      currentLocation = { true } // adicionando um botao atual na parte superior da lista de lugares
      currentLocationLabel = "Current Location"
      nearbyPlacesAPI = 'GooglePlacesSearch'
      GoogleReverseGeocodingQuery = {{

      }}

      GooglePlacesSearchQuery = {{

        rank: 'distance',
        types: 'food',
      }}

      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

      predefinedPlaces={[homePlace, workPlace]}

      predefinedPlacesAlwaysVisible={true}

    )
  }
})
