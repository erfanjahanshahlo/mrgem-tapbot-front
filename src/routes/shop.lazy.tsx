import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/shop")({
  component: () => <div>Hello /shop/lazt!</div>,
});
