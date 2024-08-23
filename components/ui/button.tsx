import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Pressable, PressableProps, Text } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "w-full rounded-full flex flex-row justify-center items-center border-none",
  {
    variants: {
      variant: {
        default: "bg-primary-500 web:hover:opacity-90 active:opacity-90",
        destructive: "bg-danger-500 web:hover:opacity-90 active:opacity-90",
        outline:
          "border border-neutral-200 bg-background web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
        secondary: "bg-secondary web:hover:opacity-80 active:opacity-80",
        ghost:
          "web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
        link: "web:underline-offset-4 web:hover:underline web:focus:underline ",
      },
      size: {
        default: "h-12 px-4 py-2 native:h-12 native:px-5 native:py-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 native:h-14",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = {
  className?: string;
  title?: string;
  titleStyle?: string;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
  onPress: () => void;
  children?: React.ReactNode;
};

const Button = forwardRef<PressableProps, ButtonProps>(
  (
    { className, variant, size, title, titleStyle, children, ...props },
    ref,
  ) => {
    return (
      <Pressable
        className={cn(buttonVariants({ variant, size, className }))}
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
        {...props}
      >
        {title && (
          <Text className={cn("font-bold  text-lg", titleStyle)}>{title}</Text>
        )}
        {children}
      </Pressable>
    );
  },
);

Button.displayName = "Button";

export { Button };
