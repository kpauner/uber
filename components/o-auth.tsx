import { View, Text, Image } from "react-native";
import React from "react";
import { Button } from "./ui/button";
import { icons } from "@/constants";

export default function OAuth() {
  const handleSignInWithGoogle = async () => {
    console.log("Sign in with Google");
  };
  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>
      <Button
        className="mt-4"
        variant="outline"
        onPress={() => {
          handleSignInWithGoogle();
        }}
        title="Sign in with Google"
        titleStyle="text-neutral-800"
      >
        <Image
          source={icons.google}
          className="w-5 h-5 ml-2"
          resizeMode="contain"
        />
      </Button>
    </View>
  );
}
