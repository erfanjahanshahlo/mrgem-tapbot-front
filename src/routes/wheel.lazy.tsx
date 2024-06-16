import { WheelPage } from "@/views";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/wheel")({
  component: Wheel,
});

function Wheel() {
  return <WheelPage />;
}
