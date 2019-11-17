import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, BottomNavigationTab, TopNavigation } from 'react-native-ui-kitten';
import { Layout } from 'react-native-ui-kitten';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from "react-navigation"

import Styles from '../styles/styles';
import { HomeScreen } from '../screens/home'
import { ManageScreen } from '../screens/manage'

// Creating app header
export const Header = () => (
  <Layout style={Styles.headerContainer}>
    <TopNavigation
      title='Handsfree Fitness'
      alignment='center'
    />
  </Layout>
);

const BottomNavigationOverride = (props) => {

 const onTabSelect = (selectedIndex) => {
   const { [selectedIndex]: selectedRoute } = props.navigation.state.routes;
   props.navigation.navigate(selectedRoute.routeName);
 };

 return (
   <BottomNavigation
     selectedIndex={props.navigation.state.index}
     onSelect={onTabSelect}>
     <BottomNavigationTab title='Home' />
     <BottomNavigationTab title='Manage' />
   </BottomNavigation>
  );
}

// Rendering the nav options
const BottomTabNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Manage: {screen: ManageScreen},
}, {
    initialRouteName: 'Home',
    tabBarComponent: BottomNavigationOverride,
  });

export const BottomNav = createAppContainer(BottomTabNavigator)
