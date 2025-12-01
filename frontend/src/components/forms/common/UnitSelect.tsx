import { Select } from "@mantine/core";
import type { UseFormReturnType } from "@mantine/form";

interface Props<T> {
  form: UseFormReturnType<T>;
  field: string;
}
const UnitSelect = <T,>({ form, field }: Props<T>) => {
  return <Select label="Einheit" data={[]} {...form.getInputProps(field)} />;
};

export default UnitSelect;
