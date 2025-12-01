import { createFileRoute } from "@tanstack/react-router";
import OrdersPage from "../components/pages/OrdersPage";

export const Route = createFileRoute("/orders")({
  component: RouteComponent,
});

function RouteComponent() {
  return <OrdersPage />;
}
