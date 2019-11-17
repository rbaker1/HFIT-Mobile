import React, { Component } from 'react';
import { Layout, Text, Button, Icon } from 'react-native-ui-kitten';

import Styles from '../styles/styles';

export class ManageScreen extends Component {
  render() {
    return (
      <Layout style={Styles.mainContainer}>
        <Text style={Styles.text} category='h4'>Intervals setup</Text>
      </Layout>
    );
  }
}
