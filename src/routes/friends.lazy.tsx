import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/friends')({
  component: () => <div>Hello /friends!</div>
})