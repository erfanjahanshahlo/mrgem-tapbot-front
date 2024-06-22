import { ShopView } from "@/views/ShopView";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/shop")({
  component: Shop,
});

function Shop() {
  return <ShopView />;
}
