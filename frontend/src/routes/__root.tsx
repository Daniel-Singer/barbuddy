import { createRootRouteWithContext } from "@tanstack/react-router";
import App from "../App";
import { authStore } from "../stores/authStore";

interface UserContext {
  auth: typeof authStore;
}

export const Route = createRootRouteWithContext<UserContext>()({
  component: RootComponent,
});

function RootComponent() {
  return <App />;
}
