import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
import ItemsPage from "../../components/pages/ItemsPage";

const itemSearchParams = z.object({
  itemToUpdate: z.string().optional(),
});

export const Route = createFileRoute("/items/")({
  component: RouteComponent,
  validateSearch: itemSearchParams,
});

function RouteComponent() {
  return <ItemsPage />;
}
