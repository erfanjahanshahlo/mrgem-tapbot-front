import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/tasks")({
  component: () => <div>Hello /about!</div>,
});
