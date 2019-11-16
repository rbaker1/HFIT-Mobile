import React, { Component } from 'react';
import { StyleSheet, Alert, TouchableHighlight} from 'react-native';
import { Layout, Text, Button, Icon } from 'react-native-ui-kitten';
import Timer from '../components/Timer';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Svg, { Circle } from 'react-native-svg';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 8000
    };
  }

  _renderStopStartButtons() {
    return (
      <Layout style={styles.buttonContainer}>
        <Button style={styles.button} icon={StartIcon} />
        <Button style={styles.button} icon={SyncIcon} />
      </Layout>
    )
  }

  render() {
    return (
      <Layout style={styles.mainContainer}>
        <Timer
        active = {false}
        start = {false}
        totalDuration = {this.state.duration} />
        <Layout>
          {this._renderStopStartButtons()}
        </Layout>
      </Layout>
    );
  }
}

const StartIcon = (style) => (
  <Icon name='play-circle' {...style} />
);

const StopIcon = (style) => (
  <Icon name='stop-circle' {...style} />
);

const PauseIcon = (style) => (
  <Icon name='pause-circle' {...style} />
);

const SyncIcon = (style) => (
  <Icon name='sync' {...style} />
);

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
