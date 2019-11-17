import React, { Component } from 'react';
import { TouchableOpacity, View, Image, ViewPropTypes } from 'react-native';
import { Layout, Text } from 'react-native-ui-kitten';

import Styles, { KeyboardStyle } from '../styles/styles';

export class NumericKeyboard extends Component {
  static defaultProps = {
    backspaceImg: require('../styles/images/backspace.png'),
    color: 'gray',
    rowStyle: ViewPropTypes.style,
		cellStyle: ViewPropTypes.style,
  };

  render() {
    return (
    	<Layout style={[KeyboardStyle.container, this.props.style]}>
    		{this.Row([1, 2, 3])}
    		{this.Row([4, 5, 6])}
    		{this.Row([7, 8, 9])}
    		<Layout style={[KeyboardStyle.row, this.props.rowStyle]}>
    			<Layout style={{ flex: 1 }} />
    			{this.Cell(0)}
    			{this.Backspace()}
    		</Layout>
    	</Layout>
    );
  }

  Backspace() {
		return (
			<TouchableOpacity accessibilityLabel='backspace' style={KeyboardStyle.backspace} onPress={() => { this.onPress('back') }}>
				<Image source={this.props.backspaceImg} resizeMode='contain' style={KeyboardStyle.backspaceColor} />
			</TouchableOpacity>
		);
	}

  Row(numbersArray) {
		let cells = numbersArray.map((val) => this.Cell(val));
		return (
			<Layout style={[KeyboardStyle.row, this.props.rowStyle]}>
				{cells}
			</Layout>
		);
	}

  Cell(symbol) {
		return (
			<TouchableOpacity style={[KeyboardStyle.cell, this.props.cellStyle]} key={symbol} accessibilityLabel={symbol.toString()} onPress={() => { this.onPress(symbol.toString()) }}>
				<Text category='h6' style={[KeyboardStyle.number, KeyboardStyle.cellColor ]}>{symbol}</Text>
			</TouchableOpacity>
		);
	}

  onPress(val) {
    this.props.onPress(val)
  }
}
