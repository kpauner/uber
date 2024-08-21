import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { icons, images } from "@/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "expo-router";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const onSignUpPress = async () => {
    console.log("Sign Up");
  };

  return (
    <ScrollView className="bg-white">
      <View className="relative w-full h-[250px]">
        <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
        <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
          Create Your Account
        </Text>
      </View>
      <View className="p-5">
        <Input
          icon={icons.person}
          label="Name"
          placeholder="Enter your name"
          value={form.name}
          onChangeText={(value) => handleChange("name", value)}
        />

        <Input
          icon={icons.email}
          label="Email"
          placeholder="Email"
          value={form.name}
          onChangeText={(value) => handleChange("email", value)}
        />

        <Input
          icon={icons.lock}
          label="Password"
          placeholder="Password"
          secureTextEntry={true}
          value={form.name}
          onChangeText={(value) => handleChange("password", value)}
        />
        <Button onPress={onSignUpPress} className="mt-6">
          <Text className="font-bold text-white text-lg">Sign Up</Text>
        </Button>
        <Link href="/sign-in" className="mt-5">
          <Text className="text-primary-500 text-center ">
            Already have an account?
          </Text>
        </Link>
      </View>
    </ScrollView>
  );
}
