import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
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

    this.createTimer = this.createTimer.bind(this);
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

  createTimer() {
    //TODO: handle beginning behavior once timer is created
  }

  startTimer() {
    // TODO: Implement timer to start counting down
    const handleFinish = this.props.handleFinish
      ? this.props.handleFinish
      : () => alert("DEBUG: Timer finished");
    const finishedTime = new Date().getTime() + this.state.timeLeft;
    this.interval = setInterval(() => {
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
  render() {
    const styles = this.props.options ? this.props.options : this.defaultStyles;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.formatTime()}</Text>
      </View>
    );
  }
}

export default Timer;
