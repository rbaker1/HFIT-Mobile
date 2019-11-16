import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button, Icon } from 'react-native-ui-kitten';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Svg, { Circle } from 'react-native-svg';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: 100,
    };
  }

  componentDidMount(){
    this.refs.circularProgress.animate(100, 8000);
  }

  render() {
    return (
      <Layout style={styles.container}>
        <AnimatedCircularProgress
          size={200}
          width={3}
          fill={this.state.fill}
          tintColor="#00e0ff"
          backgroundColor="#3d5875"
          ref='circularProgress'>
          {
            (fill) => (
              <Text>
                00:08.00
              </Text>
            )
          }
        </AnimatedCircularProgress>
        <Layout style={styles.buttonWrapper}>
          <StartButton style={styles.button} />
          <SyncButton style={styles.button}git checkou />
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

const StartButton = () => (
  <Button icon={StartIcon} />
);

const StopButton = () => (
  <Button icon={StopIcon} />
);

const PauseButton = () => (
  <Button icon={PauseIcon} />
);

const SyncButton = () => (
  <Button icon={SyncIcon} />
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
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 30,
  },
  button: {
    paddingLeft: 30,
    paddingRight: 30,
  }
});
