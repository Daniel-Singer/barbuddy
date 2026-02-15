import { createFileRoute, redirect } from "@tanstack/react-router";
import CashRegisterPage from "../components/pages/CashRegisterPage";

export const Route = createFileRoute("/cashregister")({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({ to: "/login" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <CashRegisterPage />;
}
