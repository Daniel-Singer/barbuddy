import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { AuthWrapper } from "../auth/AuthWrapper";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <AuthWrapper>
        <Outlet />
      </AuthWrapper>
    </React.Fragment>
  );
}
