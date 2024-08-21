import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { icons, images } from "@/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "expo-router";
import OAuth from "@/components/o-auth";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const onSignInPress = async () => {
    console.log("Sign Up");
  };

  return (
    <ScrollView className="bg-white">
      <View className="relative w-full h-[250px]">
        <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
        <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
          Sign in to your account
        </Text>
      </View>
      <View className="p-5">
        <Input
          icon={icons.email}
          label="Email"
          placeholder="Email"
          value={form.email}
          onChangeText={(value) => handleChange("email", value)}
        />

        <Input
          icon={icons.lock}
          label="Password"
          placeholder="Password"
          secureTextEntry={true}
          value={form.password}
          onChangeText={(value) => handleChange("password", value)}
        />
        <Button
          onPress={onSignInPress}
          className="mt-6"
          title="Sign in"
          titleStyle="text-white"
        />
        <OAuth />
        <Link href="/sign-up" className="mt-5">
          <Text className="text-primary-500 text-center ">
            Don't have an account?
          </Text>
        </Link>
      </View>
    </ScrollView>
  );
}
