import { createFileRoute } from "@tanstack/react-router";
import ItemsPageNew from "../../components/pages/ItemsPageNew";

export const Route = createFileRoute("/items/new")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ItemsPageNew />;
}
