import { createFileRoute, redirect } from "@tanstack/react-router";
import z from "zod";
import ItemsPage from "../../components/pages/ItemsPage";

const itemSearchParams = z.object({
  itemToUpdate: z.string().optional(),
});

export const Route = createFileRoute("/items/")({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({ to: "/login", search: location.href });
    }
  },
  component: RouteComponent,
  validateSearch: itemSearchParams,
});

function RouteComponent() {
  return <ItemsPage />;
}
