import { Select } from "@mantine/core";
import type { UseFormReturnType } from "@mantine/form";

interface Props<T> {
  form: UseFormReturnType<T>;
  field: string;
}
const UnitSelect = <T,>({ form, field }: Props<T>) => {
  const options = [
    {
      label: "Liter",
      value: "ltr",
    },
  ];
  return (
    <Select
      label="Einheit"
      data={options}
      {...form.getInputProps(field)}
      withAsterisk
    />
  );
};

export default UnitSelect;
