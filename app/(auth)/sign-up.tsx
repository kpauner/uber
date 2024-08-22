import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { icons, images } from "@/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, router } from "expo-router";
import OAuth from "@/components/o-auth";
import { useSignUp } from "@clerk/clerk-expo";
import ReactNativeModal from "react-native-modal";

export default function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setVerification({
        ...verification,
        state: "pending",
      });
    } catch (err: any) {
      Alert.alert("Error", err.errors[0].longMessage);
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      if (completeSignUp.status === "complete") {
        // TODO CREATE DATABASE USER
        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({
          ...verification,
          state: "success",
        });
      } else {
        setVerification({
          ...verification,
          state: "error",
          error: "Invalid verification code",
        });
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err: any) {
      setVerification({
        ...verification,
        state: "error",
        error: err.errors[0].longMessage,
      });
    }
  };

  return (
    <ScrollView className="bg-white">
      <View className="flex-1">
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
          <Button onPress={onSignUpPress} className="mt-6" title="Sign Up" />
          <OAuth />
          <Link href="/sign-in" className="mt-5">
            <Text className="text-primary-500 text-center ">
              Already have an account?
            </Text>
          </Link>
        </View>

        <ReactNativeModal
          isVisible={verification.state === "pending"}
          // onBackdropPress={() =>
          //   setVerification({ ...verification, state: "default" })
          // }
          onModalHide={() => {
            if (verification.state === "success") {
              setVerification({ ...verification, state: "default" });
              setShowSuccess(true);
            }
          }}
        >
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Text className="font-JakartaExtraBold text-2xl mb-2">
              Verification
            </Text>
            <Text className="font-Jakarta mb-5">
              We've sent a verification code to {form.email}.
            </Text>
            <Input
              label={"Code"}
              icon={icons.lock}
              placeholder={"12345"}
              value={verification.code}
              keyboardType="numeric"
              onChangeText={(code) =>
                setVerification({ ...verification, code })
              }
            />
            {verification.error && (
              <Text className="text-red-500 text-sm mt-1">
                {verification.error}
              </Text>
            )}
            <Button
              onPress={onPressVerify}
              className="mt-6 bg-success-400"
              title="Verify"
            />
          </View>
        </ReactNativeModal>

        <ReactNativeModal isVisible={showSuccess}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Image
              source={images.check}
              className="w-[110px] h-[110px] mx-auto my-5"
            />
            <Text className="text-3xl font-JakartaBold text-center">
              Verified
            </Text>
            <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
              You have successfully verified your account.
            </Text>

            <Button
              title="Browse Home"
              onPress={() => {
                router.push(`/(root)/(tabs)/home`);
                setShowSuccess(false);
              }}
              className="mt-5 text-white"
              titleStyle="text-white"
            />
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
  );
}
