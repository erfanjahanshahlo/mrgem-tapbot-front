import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/wheel')({
  component: () => <div>Hello /wheel!</div>
})