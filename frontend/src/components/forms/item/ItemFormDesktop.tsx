import {
  FocusTrap,
  MultiSelect,
  NumberInput,
  SimpleGrid,
  Stack,
  TextInput,
} from "@mantine/core";
import SaveButton from "../../buttons/SaveButton";
import UnitSelect from "../common/UnitSelect";
import { ItemFormProvider, useItemForm } from "./context";
import { useMutation } from "@tanstack/react-query";
import { addItem } from "../../../queries/itemQueries";

const ItemFormDesktop = () => {
  const { mutate } = useMutation({
    mutationFn: addItem,
    onSuccess: () => alert("asölkdjf"),
    onError: () => alert("error"),
  });
  const form = useItemForm({
    initialValues: {
      name: "",
      categories: [],
      unit: "",
      currency: "EUR",
      servingSize: null,
      purchase: {
        price: null,
        taxRate: null,
      },
      sell: {
        price: null,
        taxRate: null,
      },
      deposit: null,
    },
    validate: {
      name: (value) => (value !== "" && value ? null : "Pflichtfeld"),
      servingSize: (value) => (value && value >= 0 ? null : "Pflichtfeld"),
      unit: (value) => (value && value !== "" ? null : "Pflichtfeld"),
      sell: {
        price: (value) => (value && value > 0 ? null : "Pflichtfeld"),
      },
    },
  });

  return (
    <ItemFormProvider form={form}>
      <FocusTrap>
        <form onSubmit={form.onSubmit((values) => mutate(values))}>
          <Stack>
            <TextInput
              label={"Bezeichnung"}
              {...form.getInputProps("name")}
              withAsterisk
              data-autofocus
            />
            <SimpleGrid cols={2}>
              <MultiSelect
                label="Kategorie"
                {...form.getInputProps("categories")}
                withAsterisk
              />
            </SimpleGrid>
            <SimpleGrid cols={2}>
              <NumberInput
                {...form.getInputProps("servingSize")}
                label="Menge"
                withAsterisk
                decimalScale={2}
              />
              <UnitSelect form={form} field="unit" />
            </SimpleGrid>
            <SimpleGrid cols={2}>
              <NumberInput
                {...form.getInputProps("purchase.price")}
                label="Einkaufspreis"
                withAsterisk
              />
              <NumberInput
                {...form.getInputProps("purchase.taxRate")}
                label="Steuer %"
                withAsterisk
              />
            </SimpleGrid>
            <SimpleGrid cols={2}>
              <NumberInput
                {...form.getInputProps("sell.price")}
                label="Verkaufspreis"
                withAsterisk
              />
              <NumberInput
                {...form.getInputProps("sell.taxRate")}
                label="Steuer %"
                withAsterisk
              />
            </SimpleGrid>
            <SimpleGrid cols={2}>
              <NumberInput
                {...form.getInputProps("deposit")}
                label="Bechereinsatz"
                description="Wird beim Verkauf automatisch hinzugefügt"
              />
            </SimpleGrid>
            <SaveButton>Speichern</SaveButton>
          </Stack>
        </form>
      </FocusTrap>
    </ItemFormProvider>
  );
};

export default ItemFormDesktop;
