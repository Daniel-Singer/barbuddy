import { Paper, Stack, Text } from "@mantine/core";
import type { TItem } from "../../../types/Item";
import { convertCentsToEuros } from "../../../utils/currency";
import { orderStore } from "../../../stores/orderStore";

import styles from "./OrderSelectItem.module.css";

type Props = {
  item: TItem;
};

const OrderSelectItem = ({ item }: Props) => {
  const { addItemToOrder } = orderStore;
  return (
    <Paper
      withBorder
      p={"xs"}
      onClick={() => addItemToOrder(item)}
      className={styles.item}
    >
      <Stack align="center" gap={0}>
        <Text size="xl">{item.name}</Text>
        <Text c={"dimmed"}>{`${convertCentsToEuros(item.sell.price)} €`}</Text>
      </Stack>
    </Paper>
  );
};

export default OrderSelectItem;
