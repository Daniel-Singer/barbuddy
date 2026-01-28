import { Box } from "@mantine/core";
import OrderForm from "../forms/order/OrderForm";

import OrderOverview from "../order/OrderOverview";

const CashRegisterPage = () => {
  return (
    <>
      <Box flex={1} mr={"xs"}>
        <OrderForm />
      </Box>
      <OrderOverview />
    </>
  );
};

export default CashRegisterPage;
