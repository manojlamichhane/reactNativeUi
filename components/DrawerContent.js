import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import {
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

const DrawwerContent = (props) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          flex: 1,
        }}
      >
        <ImageBackground
          style={{ width: "100%", height: 180 }}
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCY0uBcXKZ6sSeksIw-rnJvLYMBjJEHb1pdQ&usqp=CAU",
          }}
        >
          <View style={{ marginTop: 20, padding: 20 }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 25 }}
              source={{
                uri:
                  "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 20,
              marginTop: 40,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              abc@gmail.com
            </Text>
            <AntDesign name="caretdown" size={14} color="white" />
          </View>
        </ImageBackground>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default DrawwerContent;
