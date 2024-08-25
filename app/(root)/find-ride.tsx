import { View, Text } from "react-native";
import React from "react";
import { useLocationStore } from "@/store";
import { icons } from "@/constants";
import GoogleTextInput from "@/components/google-text-input";
import PageLayout from "@/components/ui/layout/page-layout";

export default function FindRide() {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();
  return (
    <PageLayout>
      <View className="my-3">
        <Text className="text-lg font-JakartaSemiBold mb-3">From</Text>

        <GoogleTextInput
          icon={icons.target}
          initialLocation={userAddress!}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#f5f5f5"
          handlePress={(location) => setUserLocation(location)}
        />
      </View>
    </PageLayout>
  );
}
