import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button, Icon } from 'react-native-ui-kitten';

export const ManageScreen = () => (
  <Layout style={styles.container}>
    <Text style={styles.text} category='h4'>Intervals setup</Text>
  </Layout>
);

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginVertical: 16
  },
});
