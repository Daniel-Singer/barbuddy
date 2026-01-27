import { Group, Paper, Stack, Text } from "@mantine/core";
import type { TItem } from "../../../types/Item";
import { convertCentsToEuros } from "../../../utils/currency";
import { orderStore } from "../../../stores/orderStore";

type Props = {
  item: TItem;
};

const OrderItem = ({ item }: Props) => {
  const { addItemToOrder } = orderStore;
  return (
    <Paper withBorder p={"xs"} onClick={() => addItemToOrder(item)}>
      <Stack>
        <Group>
          <Text>{item.name}</Text>
          <Text>{convertCentsToEuros(item.price)}</Text>
        </Group>
      </Stack>
    </Paper>
  );
};

export default OrderItem;
