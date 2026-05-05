import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import React, { useEffect } from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import * as Icon from "react-native-feather";
import {themeColors} from "../theme";
import DishRow from "../components/dishRow";
import CartIcon from "../components/cartIcon";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/RestaurantSlice";

export default function RestaurantScreen() {
  const {params} = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if(params && params.id) {
      dispatch(setRestaurant(params))
    }
  },[]) 

  return (
    <View>
      <CartIcon />
      <StatusBar style="light" />

      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={params.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View
          style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
          className="bg-white -mt-10 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{params.name}</Text>

            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../assets/images/star.avif")}
                  className="h-4 w-4"
                />
                <Text className="text-xs mt-2">
                  <Text className="text-green-700">{params.stars}</Text>
                  <Text className="text-gray-700">
                    ({params.reviews} reviews) •{" "}
                    <Text className="font-semibold">{params.category}</Text>
                  </Text>
                </Text>
              </View>

              <View className="flex-row items-center space-x-1 mt-2 mx-4">
                <Icon.MapPin width="15" height="15" stroke="gray" />
                <Text className="text-gray-700 text-xs">
                  {" "}
                  Nearby • {params.address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2">{params.description}</Text>
          </View>
        </View>

        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>

          {/* dishes */}
          {params.dishes.map((dish, index) => (
            <DishRow key={index} item={{...dish}} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
