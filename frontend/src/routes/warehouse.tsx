import { createFileRoute } from "@tanstack/react-router";
import WareHousePage from "../components/pages/WareHousePage";

export const Route = createFileRoute("/warehouse")({
  component: RouteComponent,
});

function RouteComponent() {
  return <WareHousePage />;
}
