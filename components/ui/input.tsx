import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  Image,
  ImageSourcePropType,
  Platform,
  Keyboard,
  TextInputProps,
} from "react-native";
import React from "react";
import { cn } from "@/lib/utils";
import { FormLabel } from "./form";

type InputProps = {
  label?: string;
  icon?: ImageSourcePropType;
  className?: string;
  secureTextEntry?: boolean;
} & TextInputProps;

const Input = ({
  label,
  icon,
  secureTextEntry = false,
  className,
  ...props
}: InputProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          {label && <FormLabel label={label} className="" />}
          <View className="flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500">
            {icon && <Image source={icon} className="h-6 w-6 ml-4" />}
            <TextInput
              className={cn(
                "rounded-full py-4 px-2 font-JakartaSemiBold text-[15px] flex-1 text-left",
                className,
              )}
              placeholderTextColor="black"
              {...props}
              secureTextEntry={secureTextEntry}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

Input.displayName = "Input";

export { Input };
