import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {View } from 'react-native';
import { formatTimeToString } from './TimerHelper';

class Timer extends Component {
  // create a timer that can be initalized, set, ran and destroyed seemlessly
  // CLASS DOES NOT COMPILE YET
  static propTypes = {
   start: PropTypes.bool,
   reset: PropTypes.bool,
   options: PropTypes.object,
   handleFinish: PropTypes.func,
   totalDuration: PropTypes.number,
   getTime: PropTypes.func,
 }

constructor(props) {
super(props);
this.state = {
  active: false, //determines if timer is active and ready to start
  started: false,
  timeLeft: props.totalDuration,
};

this.createTimer = this.createTimer.bind(this);
this.startTimer = this.startTimer.bind(this);
this.stopTimer = this.stopTimer.bind(this);
//this.resetTimer = this.resetTimer.bind(this);


const width = 150;
this.defaultStyles = {
  container: {
    backgroundColor: '#000', // white - play with time later
    padding: 5, //
    borderRadius: 4,
    width: width, // see if 150 is good
  },
  text: {
    fontSize: 16,
    color: '#FFF',
    marginLeft: 7,
  }
}
}



componentDidMount() {
  if(this.props.start) {
    this.start();
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

  return forattedTime;

}

createTimer(...){
  //TODO: handle beginning behavior once timer is created

}

startTimer() {
  // TODO: Implement timer to start counting down
}

stopTimer() {
  // TODO:
  // Tell timer to stop
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


  }
}
