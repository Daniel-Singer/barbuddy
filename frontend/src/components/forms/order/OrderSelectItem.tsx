import { Group, Paper, Stack, Text, ThemeIcon } from "@mantine/core";
import { orderStore } from "../../../stores/orderStore";
import { convertCentsToEuros } from "../../../utils/currency";

import { IconGlass } from "@tabler/icons-react";
import type { ItemReceive } from "../../../schemas/zodItem";
import styles from "./OrderSelectItem.module.css";

type Props = {
  item: ItemReceive;
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
      <Stack gap={0}>
        <Group justify="space-between" p={0}>
          <ThemeIcon variant="white">
            <IconGlass size={20} stroke={1.5} />
          </ThemeIcon>
          <Text>{`${convertCentsToEuros(item.sell.price)} €`}</Text>
        </Group>
        <Text size="xl">{item.name}</Text>
        <Text
          c={"dimmed"}
          size="xs"
        >{`Einsatz ${convertCentsToEuros(item.deposit)} €`}</Text>
      </Stack>
    </Paper>
  );
};

export default OrderSelectItem;
