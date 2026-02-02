import {
  FocusTrap,
  MultiSelect,
  NumberInput,
  SimpleGrid,
  Stack,
  TextInput,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearch } from "@tanstack/react-router";
import { useEffect } from "react";
import { addItem, getItem, updateItem } from "../../../queries/itemQueries";
import type { ItemCreate } from "../../../schemas/zodItem";
import SaveButton from "../../buttons/SaveButton";
import UnitSelect from "../common/UnitSelect";
import { ItemFormProvider, useItemForm } from "./context";

const ItemFormDesktop = () => {
  const queryClient = useQueryClient();

  const search = useSearch({
    strict: false,
  });

  const { data: item } = useQuery({
    queryKey: ["item"],
    queryFn: () => getItem(search.itemToUpdate!),
    enabled: !!search.itemToUpdate,
  });

  useEffect(() => {
    if (item) {
      form.setValues(item);
    } else {
      form.reset();
    }
  }, [item]);

  const { mutate: createItem } = useMutation({
    mutationKey: ["add_item"],
    mutationFn: addItem,
    onSuccess: () => {
      modals.closeAll();
      queryClient.invalidateQueries({
        queryKey: ["items"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { mutate: updateExistingItem } = useMutation({
    mutationKey: ["update_item"],
    mutationFn: updateItem,
    onSuccess: () => {
      form.reset();
      modals.closeAll();
      queryClient.invalidateQueries({
        queryKey: ["items"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
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

  const handleSubmit = (values: ItemCreate, _id: string | undefined) => {
    if (!_id) {
      createItem(values);
    } else {
      updateExistingItem({ update: values, _id });
    }
  };
  return (
    <ItemFormProvider form={form}>
      <FocusTrap>
        <form
          onSubmit={form.onSubmit((values) => handleSubmit(values, item?._id))}
        >
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
                description="Wird nur zum Filtern benutzt"
                {...form.getInputProps("categories")}
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
                label="Einkaufspreis €"
              />
              <NumberInput
                {...form.getInputProps("purchase.taxRate")}
                label="Steuer %"
              />
            </SimpleGrid>
            <SimpleGrid cols={2}>
              <NumberInput
                {...form.getInputProps("sell.price")}
                label="Verkaufspreis €"
                withAsterisk
              />
              <NumberInput
                {...form.getInputProps("sell.taxRate")}
                label="Steuer %"
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
