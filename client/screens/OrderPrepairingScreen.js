import {View, Text, Image} from "react-native";
import React, { useEffect } from "react";
import {useNavigation} from "@react-navigation/native";

export default function OrderPrepairingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      // move to delivery screen
      navigation.navigate("Delivery");
    }, 1500);
  }, []);

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require("../assets/images/delivery.gif")}
        className="w-80 h-80"
      />
    </View>
  );
}
