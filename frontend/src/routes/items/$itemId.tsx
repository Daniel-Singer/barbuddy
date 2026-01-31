import { createFileRoute } from "@tanstack/react-router";
import ItemsPageDetail from "../../components/pages/ItemsPageDetail";

export const Route = createFileRoute("/items/$itemId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ItemsPageDetail />;
}
