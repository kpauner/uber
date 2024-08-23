import { Image, ImageSourcePropType, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants";
import { cn } from "@/lib/utils";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => {
  return (
    <View
      className={`flex flex-row items-center justify-center ${focused ? "bg-white" : ""}`}
    >
      <View
        className={cn(
          "rounded-full w-12 h-12 items-center justify-center",
          focused ? "bg-general-400" : "",
        )}
      >
        <Image
          source={source}
          tintColor="white"
          resizeMode="contain"
          className="h-7 w-7"
        />
      </View>
    </View>
  );
};

export default function layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "red",
        tabBarStyle: {
          backgroundColor: "red",
          borderRadius: 50,
          paddingBottom: 0,
          marginHorizontal: 10,
          marginBottom: 20,
          height: 78,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: "chats",
          headerShown: false,
          tabBarLabel: "Chats",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
