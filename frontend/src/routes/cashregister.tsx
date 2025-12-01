import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cashregister')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/cashregister"!</div>
}
