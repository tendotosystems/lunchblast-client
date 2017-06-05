import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Logo from './Logo';
import ContentContainer from './ContentContainer';
import Footer from './Footer';

const AppContent = ({onButtonPress}) => (
  <View>
    <Logo source={require('../assets/icons/lunch-blast-logo.png')}/>
    <ContentContainer onButtonPress={onButtonPress}/>
    <Footer />
  </View>
)



export default AppContent
