import OrderForm from "../forms/order/OrderForm";

import OrderOverview from "../order/OrderOverview";
const CashRegisterPage = () => {
  return (
    <>
      <OrderForm />
      <OrderOverview />
    </>
  );
};

export default CashRegisterPage;
