import React, { useLayoutEffect } from "react";
import { Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import InboxScreen from "../Screens/InboxScreen";
import OutboxScreen from "../Screens/OutboxScreen";
import DrawwerContent from "../components/DrawerContent";
import SpamScreen from "../Screens/SpamScreen";
import TrashScreen from "../Screens/TrashScreen";

const InboxStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawwerContent {...props} />}
      >
        <Drawer.Screen
          name="Inbox"
          component={InboxStackNavigator}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="inbox" size={30} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Outbox"
          component={InboxStackNavigator}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="sign-out" size={30} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Spam"
          component={InboxStackNavigator}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="signal" size={30} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Trash"
          component={InboxStackNavigator}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome name="trash" size={30} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const InboxStackNavigator = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <InboxStack.Navigator>
      <InboxStack.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          headerLeft: () => (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons
                onPress={() => navigation.openDrawer()}
                name="menu"
                size={24}
                color="black"
              />
            </View>
          ),
        }}
      />
    </InboxStack.Navigator>
  );
};
export default RootNavigator;
