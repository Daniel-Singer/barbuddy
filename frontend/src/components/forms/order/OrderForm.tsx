import { useQuery } from "@tanstack/react-query";
import { listAvailableItems } from "../../../queries/itemQueries";
import OrderItem from "../../order/OrderItem";

const OrderForm = () => {
  const { data: items } = useQuery({
    queryKey: ["items"],
    queryFn: listAvailableItems,
  });

  return (
    <form>
      {items?.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
    </form>
  );
};

export default OrderForm;
