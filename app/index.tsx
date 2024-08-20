import React from "react";
import { Href, Redirect } from "expo-router";
import "react-native-reanimated";

export default function Home() {
  return <Redirect href={"/(auth)/welcome" as Href} />;
}
