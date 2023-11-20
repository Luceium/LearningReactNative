import { StyleSheet, Text, SafeAreaView, Image, TouchableNativeFeedback, View, Alert, BackHandler, Platform, StatusBar } from 'react-native';
const classNames = require('classnames');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={() => console.log("text clicked")}>Hello World! Lorem Ipsum Doler Sit Ammet</Text>
      <TouchableNativeFeedback onPress={() => Alert.alert("Warning", "Please don't click on the image", [
        {text: "Ok", onPress: () => console.log("Thank you")},
        {text: "Too bad", onPress: () => BackHandler.exitApp()}
      ])}>
        <View style={{height: 300, width: 300, justifyContent: "center", alignItems: "center", display: "flex", borderRadius: 10}}>
          <Image source={{uri: "https://picsum.photos/200/200", width:200, height:200}} blurRadius={10} fadeDuration={300} />
        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
