import { Group, Paper, Stack, Text } from "@mantine/core";
import { orderStore } from "../../stores/orderStore";
import { convertCentsToEuros } from "../../utils/currency";

import { observer } from "mobx-react-lite";
import MakePaymentButton from "../buttons/MakePaymentButton";
import OpenCalculatorButton from "../buttons/OpenCalculatorButton";

const OrderOverview = observer(() => {
  const { orderTotal, orderedItems, resetOrder, totalDeposits } = orderStore;

  const handleMakePayment = () => {
    resetOrder();
  };
  return (
    <Paper shadow="sm" p={"md"}>
      <Stack>
        <Stack gap={0}>
          <Group justify="space-between">
            <Text size="xl" fw={600}>
              SUMME
            </Text>
            <Text size="xl" fw={600}>{`${orderTotal} €`}</Text>
          </Group>
          <Group justify="space-between">
            <Text size="sm" c={"dimmed"}>
              Davon Einsatz
            </Text>
            <Text size="sm" c={"dimmed"}>
              {`${totalDeposits} €`}
            </Text>
          </Group>
        </Stack>
        {orderedItems?.map(({ name, amount, total, deposit }) => (
          <Group>
            <Text>{amount}</Text>
            <Text>{name}</Text>
            <Text>{convertCentsToEuros(total)}</Text>
            {deposit && <Text>{convertCentsToEuros(deposit)}</Text>}
          </Group>
        ))}

        <MakePaymentButton onClick={handleMakePayment}>
          Abschliessen
        </MakePaymentButton>
        <OpenCalculatorButton>Rechner</OpenCalculatorButton>
      </Stack>
    </Paper>
  );
});

export default OrderOverview;
