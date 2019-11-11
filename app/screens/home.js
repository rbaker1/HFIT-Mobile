import React from 'react';
import { StyleSheet, Alert} from 'react-native';
import { Layout, Text, Button, Icon } from 'react-native-ui-kitten';
import Timer from '../components/Timer';

export const HomeScreen = () => (
  <Layout style={styles.container}>
    <Text style={styles.text} category='h4'>Handsfree Fitness app</Text>
    <Timer
    active = {false}
    start = {false}
    totalDuration = {5000} />
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
  }
});
