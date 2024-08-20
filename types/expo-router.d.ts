import "expo-router";

declare module "expo-router" {
  interface Router {
    push(href: string | Href<string>): void;
  }
}
