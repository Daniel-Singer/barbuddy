import { useNavigate } from "@tanstack/react-router";
import AddButton from "../buttons/AddButton";

const ItemsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AddButton onClick={() => navigate({ to: "/items/new" })}>
        Neuer Artikel
      </AddButton>
    </div>
  );
};

export default ItemsPage;
