import { View, Text } from "react-native";
import React, { useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 bg-teal-500">
        {children}
        <Text>PageLa</Text>
        <BottomSheet ref={bottomSheetRef} snapPoints={["40%", "85%"]}>
          <BottomSheetScrollView
            style={{ flex: 1, padding: 20, backgroundColor: "red" }}
          >
            <View>
              <Text>Hello</Text>
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}
