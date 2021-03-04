import React from "react";
import { StyleSheet, Text, View } from "react-native";

const OutboxScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>OutboxScreen</Text>
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
export default OutboxScreen;
