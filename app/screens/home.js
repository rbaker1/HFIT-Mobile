import React, { Component } from 'react';
import { Layout, Button, Icon } from 'react-native-ui-kitten';

import Styles from '../styles/styles';
import Timer from '../components/Timer';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 8000
    };
  }

  _renderStopStartButtons() {
    return (
      <Layout style={Styles.buttonContainer}>
        <Button style={Styles.button} icon={StartIcon} />
        <Button style={Styles.button} icon={SyncIcon} />
      </Layout>
    )
  }

  render() {
    return (
      <Layout style={Styles.mainContainer}>
        <Layout style={Styles.topContainer}>
          <Timer
          active = {false}
          start = {false}
          totalDuration = {this.state.duration} />
        </Layout>
        <Layout style={Styles.bottomContainer}>
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
