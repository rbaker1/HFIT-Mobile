import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button, Icon } from 'react-native-ui-kitten';

export class ManageScreen extends Component {
  render() {
    return (
      <Layout style={styles.mainContainer}>
        <Text style={styles.text} category='h4'>Intervals setup</Text>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginVertical: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  button: {
    marginVertical: 4,
    marginHorizontal: 4,
  },
});
