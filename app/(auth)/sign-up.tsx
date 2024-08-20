import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function SignUp() {
  return (
    <SafeAreaView>
      <Link href={"/welcome"}>Back</Link>
      <Text>SignUp</Text>
    </SafeAreaView>
  );
}
