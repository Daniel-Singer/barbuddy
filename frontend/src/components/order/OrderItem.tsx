import { Group, Stack, Text } from "@mantine/core";
import { orderStore, type TOrderedItem } from "../../stores/orderStore";
import { convertCentsToEuros } from "../../utils/currency";
import MinusButton from "../buttons/MinusButton";

type Props = {
  item: TOrderedItem;
};

const OrderItem = ({ item }: Props) => {
  const { name, count, total, deposit } = item;
  const { removeItemFromOrder } = orderStore;
  return (
    <Group p={"xs"} justify="space-between">
      <Group gap={"xs"}>
        <MinusButton onClick={() => removeItemFromOrder(item._id)} />
        <Text>{count}</Text>
        <Text>{name}</Text>
      </Group>
      <Stack align="flex-end" gap={0}>
        <Text>{`${convertCentsToEuros(total)} €`}</Text>
        {deposit && (
          <Group>
            <Text size="xs" c={"dimmed"}>
              {`Einsatz: ${convertCentsToEuros(deposit)} €`}
            </Text>
          </Group>
        )}
      </Stack>
    </Group>
  );
};

export default OrderItem;
