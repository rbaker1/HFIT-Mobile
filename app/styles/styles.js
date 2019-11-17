import { StyleSheet } from 'react-native';

export default Styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  mainContainer: {
    flex: 1,
  },

  topContainer: {
    flex: 1,
    alignItems: 'center',
  },

  bottomContainer: {
    flex: 1,
    alignItems: 'center',
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

  manageTimer: {
    fontSize: 45,
  },

  timerWrapper: {
    justifyContent: 'center',
    flex: 100,
  },

  timerWrapperInner: {
    alignSelf: 'center',
    flexDirection: 'row',

  },

  manageInterval: {
    fontSize: 18,
    alignSelf: 'flex-end',
    color: 'white',
  },
});

export const KeyboardStyle = StyleSheet.create({
	container: {
		marginTop: 20,
		marginLeft: 30,
		marginRight: 30,
		alignItems: 'flex-start',
	},
	row: {
		flexDirection: 'row',
		marginTop: 20,
	},
	number: {
		textAlign: 'center',
	},
	backspace: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
  backspaceColor: {
    tintColor: 'gray',
  },
	cell: {
		flex: 1,
		justifyContent: 'center',
	},
  cellColor: {
    color: 'gray',
  },
});
