import * as React from "react";
import { cn } from "@/lib/utils";
import { View } from "react-native";

const Card = React.forwardRef<
  View,
  React.ComponentPropsWithoutRef<typeof View>
>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn(
      "rounded-lg border border-border bg-card shadow-sm",
      className,
    )}
    {...props}
  />
));

Card.displayName = "Card";

export { Card };
