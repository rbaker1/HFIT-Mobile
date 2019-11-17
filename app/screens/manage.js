import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Layout, Text } from 'react-native-ui-kitten';

import Styles, { KeyboardStyle } from '../styles/styles';
import { NumericKeyboard } from '../components/numerickeyboard'

export class ManageScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      minutes: '00',
      intervals: '0',
      focus: 'secs',
    }
    this._focusMins = this._focusMins.bind(this);
    this._focusSecs = this._focusSecs.bind(this);
    this._focusIntervals = this._focusIntervals.bind(this);
  }
  _focusMins() {
    this.setState({focus: 'mins'});
  }
  _focusSecs() {
    this.setState({focus: 'secs'});
  }
  _focusIntervals() {
    this.setState({focus: 'intervals'});
  }

  _renderTimer() {
    return (
      <Layout style={Styles.timerWrapperInner}>
        <TouchableOpacity onPress={this._focusMins}>
          <Text category='h1' style={Styles.manageTimer}>{this.state.minutes}</Text>
        </TouchableOpacity>
        <Text category='h1' style={Styles.manageTimer}>:</Text>
        <TouchableOpacity onPress={this._focusSecs}>
          <Text category='h1' style={Styles.manageTimer}>{this.state.seconds}</Text>
        </TouchableOpacity>
      </Layout>
    )
  }

  _renderIntervals() {
    return (
      <Layout style={Styles.timerWrapperInner}>
        <TouchableOpacity
         onPress={this._focusIntervals}>
          <Text category='s1'>x {this.state.intervals}</Text>
        </TouchableOpacity>
      </Layout>
    )
  }

  inputController(input) {
    if (this.state.focus === 'intervals') {
      this.inputProcessor(this.state.intervals, input);
    } else if (this.state.focus === 'mins') {
      this.inputProcessor(this.state.minutes, input);
    } else {
      this.inputProcessor(this.state.seconds, input);
    }
  }

  inputProcessor(val, input) {
    let curText = val;
		if (isNaN(input)) {
			if (input === 'back') {
				curText = curText.slice(0, -1);
			} else {
        if (curText.length < 2) {
          curText += input;
        }
			}
		} else if (curText.length < 2) {
			curText += input;
		}
    this.changeVal(curText);
	}

  changeVal(newVal) {
    if (this.state.focus === 'intervals') {
      this.setState({intervals: newVal});
    } else if (this.state.focus === 'mins') {
      this.setState({minutes: newVal});
    } else {
      this.setState({seconds: newVal});
    }
  }

  render() {
    return (
      <Layout style={Styles.mainContainer}>
        <Layout style={Styles.topContainer}>
          <Layout style={Styles.timerWrapper}>
            {this._renderTimer()}
            {this._renderIntervals()}
          </Layout>
        </Layout>
        <Layout style={Styles.bottomContainer}>
          <NumericKeyboard onPress={(val) => this.inputController(val)} />
        </Layout>
      </Layout>
    )
  }
}
