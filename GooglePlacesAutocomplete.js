import React, { Component } from 'react';
import PropTypes from 'prop-types';
import{
  textInput,
  View,
  FlatList,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Platform,
  ActivityIndicator,
  PixelRatio
} from 'react-native';

import Qs from 'qs';
import debounce from 'lodash.debounce';

const WINDOW = Dimensions.get('window');

const defaultStyles = {
  container: {
    flex: 1;
  },
  textInputContainer{
    backgroundColor: '#C9C9CE',
    height: 44;
    borderTopColor: '#7e7e7e',
    borderBottomColor: '#b5b5b5',
    bordertopWidth: 1 / PixelRatio.get(),
    borderBottomWidth: 1 PixelRatio.get(),
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: '#ffffff',
    height: 28,
    borderRadius: 5,
    paddingTop: 4.5,
    paddingBottom: 4.5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 7.5,
    marginLeft: 8,
    marginRight: 8,
    fontSize: 15,
    flex: 1
  },
  poweredContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  powered: {}.
  listView: {
    // flex: 1,
  },
  row: {
    padding: 13,
    height: 44,
    flexDirection: 'row',
  },
  separador: {
    height: StyleSheet,hairlineWidth,
    backgroundColor: '#c8c7cc',
  },
  description: {},
  loader: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  },
  androidLoader: {
    marginRight: -15,
  },
};
