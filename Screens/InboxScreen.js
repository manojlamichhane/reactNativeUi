import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const InboxScreen = (props) => {
  console.log(props);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ title: "Inbox" });
  }, []);
  return (
    <View style={styles.screen}>
      <Text>InboxScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default InboxScreen;
