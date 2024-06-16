import { FriendsPage } from "@/views";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/friends")({
  component: FriendsRoute,
});
function FriendsRoute() {
  return <FriendsPage />;
}
