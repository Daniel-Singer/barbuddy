import { createFileRoute } from "@tanstack/react-router";
import ItemsPage from "../../components/pages/ItemsPage";

export const Route = createFileRoute("/items/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ItemsPage />;
}
