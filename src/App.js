import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import{
  Root,
  Body,
  Button,
  Container,
  Content,
  Header,
  Item,
  Input,
  List,
  ListItem,
  Thumbnail,
  Icon,
  Text,
  Toast,
  Spinner
} from 'native-base';

import ListScreen from './screens/Finder';

const KEY_GOOGLE = "AIzaSyD1z7ENUOr6O2QhY-DWrZbT4A6n_4OfdPw"; // <- Chave API GOOGLE Eduardo

export default class App extends Component {

  componentDidMount() {
    const config = {
      enableHighAccuracy: false
    };
    navigator.geolocation.getCurrentPosition(this.locationSuccess, this.locationError, config);
}
locationSuccess = (position) => { // quando a localização é obtida
    this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
    })
    this.EfetuarBuscarMapa()
}
// se por acaso obter algum tipo de erro
locationError = (error) => {
    console.warn(error);
}

  render() {
      <Container>
        <Header>
          <Item>
            <Icon color='#38345c' name='map' />
            <Input placeholder="Buscar"
                                returnKeyLabel='search'
                                returnKeyType='search'
                                onSubmitEditing={this.EfetuarBuscarMapa}
                                value={this.state.buscar}
                                onChangeText={(buscar) => this.setState({ buscar })} />
            <Button onPress={this.EfetuarBuscarMapa}><Button.
          </Item>
        </Header>
      </Container>
    );
  }
}

EfetuarBuscarMapa = () => {
    let erro = false
    let list = null
    let url = null
    let dialogVisible = false
    this.setState({
        load: true
    })
    if (this.state.buscar != null && this.state.buscar.length > 0) {
        url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + this.state.buscar + '&location=' + this.state.latitude + ',' + this.state.longitude + '&rankby=distance&key=' + KEY_GOOGLE
    } else {
        url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.state.latitude + ',' + this.state.longitude + '&rankby=distance&key=' + KEY_GOOGLE

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AppGooglePlacesEduardo', () => App);
