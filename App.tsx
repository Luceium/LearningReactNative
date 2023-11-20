import { StyleSheet, Text, SafeAreaView, Image, TouchableNativeFeedback, View, Alert, BackHandler, Platform, StatusBar } from 'react-native';
const classNames = require('classnames');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: "#fcc", flex:4}} />
      <View style={{backgroundColor: "#ffc", flex:3}} />
      <View style={{backgroundColor: "#cff", flex:2}} />
      <View style={{backgroundColor: "#ccf", flex:1}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    flexDirection: "row-reverse",
    flex: 1,
  },
});
