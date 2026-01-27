import { Group, Stack, Text } from "@mantine/core";
import { orderStore } from "../../stores/orderStore";
import { convertCentsToEuros } from "../../utils/currency";

import { observer } from "mobx-react-lite";
import MakePaymentButton from "../buttons/MakePaymentButton";
import OpenCalculatorButton from "../buttons/OpenCalculatorButton";

const OrderOverview = observer(() => {
  const { orderTotal, orderedItems, resetOrder } = orderStore;

  const handleMakePayment = () => {
    resetOrder();
  };
  return (
    <Stack>
      {orderedItems?.map(({ name, amount, total }) => (
        <Group>
          <Text>{amount}</Text>
          <Text>{name}</Text>
          <Text>{convertCentsToEuros(total)}</Text>
        </Group>
      ))}
      <Text>{`SUMME: ${orderTotal} €`}</Text>
      <MakePaymentButton onClick={handleMakePayment}>
        Abschliessen
      </MakePaymentButton>
      <OpenCalculatorButton>Rechner</OpenCalculatorButton>
    </Stack>
  );
});

export default OrderOverview;
