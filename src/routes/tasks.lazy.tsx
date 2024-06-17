import { TaskPage } from "@/views";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/tasks")({
  component: Tasks,
});

function Tasks() {
  return <TaskPage />;
}
