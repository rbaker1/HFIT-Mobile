import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, Text, Button, Alert } from "react-native";
import { formatTimeToString } from "./TimerHelper";

class Timer extends PureComponent {
  // create a timer that can be initalized, set, ran and destroyed seemlessly
  // CLASS DOES NOT COMPILE YET
  static propTypes = {
    start: PropTypes.bool,
    reset: PropTypes.bool,
    options: PropTypes.object,
    handleFinish: PropTypes.func,
    totalDuration: PropTypes.number,
    getTime: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false, //determines if timer is active and ready to start
      started: this.props.start,
      timeLeft: props.totalDuration
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    //this.resetTimer = this.resetTimer.bind(this);

    const width = 150;
    this.defaultStyles = {
      container: {
        backgroundColor: "#000", // white - play with time later
        padding: 5, //
        borderRadius: 4,
        width: width // see if 150 is good
      },
      text: {
        fontSize: 16,
        color: "#FFF",
        marginLeft: 7
      },
      button: {
        color: "#ff0000"
      }
    };
  }

  componentDidMount() {
    if (this.props.start) {
      this.startTimer();
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //DONE FOR NOW, no reset functionality
    if (nextProps.start !== prevState.start) {
      return { start: nextProps.start };
    }
    //CONSIDER RESET
    else return null; // look at
  }

  componentDidUpdate(prevProps, prevState) {
    //DONE FOR NOW, no reset functionality
    if (prevProps.start !== this.state.started) {
      this.startTimer(); // see if this can handle state
    }
  }

  formatTime() {
    //TODO: Handle how much time is left
    //this will take this.state.timeLeft and output it into starting

    //timeNow will be in milliseconds

    const getTime = this.props;
    const timeNow = this.state.timeLeft;
    const formattedTime = formatTimeToString(timeNow); // TODO: formatTimeToString

    getTime === "function" && getTime(formattedTime);

    return formattedTime;
  }

  startTimer() {
    // TODO: Implement timer to start counting down
    const handleFinish = this.props.handleFinish
      ? this.props.handleFinish
      : () => alert("DEBUG: Timer finished");
    const finishedTime = new Date().getTime() + this.state.timeLeft;
    this.interval = setTimeout(() => {
      const timeRemaining = finishedTime - new Date();
      if (timeRemaining <= 1000) {
        this.setState({ timeLeft: 0 });
        this.stopTimer();
        handleFinish();
        return;
      }
      this.setState({ timeLeft: timeRemaining });
    }, 1);
  }

  stopTimer() {
    // TODO:
    // Tell timer to stop
    clearInterval(this.interval);
    this.setState({ started: false });
  }

  removeTimer() {
    //TODO: Implement logic if timer is told to remove
  }

  //resetTimer(...) {
  // TODO:
  // I do not believe this function will be implemented at first.
  //}
  /*

*/

  renderDebugInfo() {
    return null;
  }

  renderTime() {
    //Render only time
    const styles = this.props.options ? this.props.options: this.defaultStyles;

    return (
      <Text style={styles.text}>{this.formatTime()}</Text>
    );
  }

  renderStartTouchable() {
    //TODO: Probably have to change to TouchableOpacity
    return (
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'horizontal'}}>
      <Button
        title="Start"
        className
        color={styles.button}
        onPress={() => this.setState({ active: true, started: true })}
      />
      <Button
        title="Reset"
        className
        color={styles.button}
        onPress={() => this.setState({ active: true, started: false })}
      />
      </Layout>

    );
  }

  renderResetTouchable() {
    //TODO: Probably have to change to TouchableOpacity
      return (

    );
  }
  render() {
    // Just for early testing...
    const styles = this.props.options ? this.props.options : this.defaultStyles;

    return (
      <View style={styles.container}>
      // timer text
      //start button
        <Text style={styles.text}> {this.state.started.toString()} </Text>
        <Text style={styles.text}> {this.interval} </Text>
      </View>
    );
  }
}

export default Timer;
