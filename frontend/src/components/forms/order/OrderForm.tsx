import { useQuery } from "@tanstack/react-query";
import { listAvailableItems } from "../../../queries/itemQueries";
import { Flex } from "@mantine/core";
import OrderSelectItem from "./OrderSelectItem";

const OrderForm = () => {
  const { data: items } = useQuery({
    queryKey: ["items"],
    queryFn: listAvailableItems,
  });

  return (
    <form>
      <Flex gap={"xs"} wrap={"wrap"}>
        {items?.map((item) => (
          <OrderSelectItem key={item.id} item={item} />
        ))}
      </Flex>
    </form>
  );
};

export default OrderForm;
