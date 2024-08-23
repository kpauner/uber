import { cn } from "@/lib/utils";
import { Text } from "react-native";

type FormLabelProps = {
  label: string;
  className?: string;
};

const FormLabel = ({ label, className, ...props }: FormLabelProps) => {
  return (
    <Text className={cn("mb-2 font-bold text-lg", className)} {...props}>
      {label}
    </Text>
  );
};

FormLabel.displayName = "FormLabel";

export { FormLabel };
