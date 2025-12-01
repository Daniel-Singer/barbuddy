import {
  Button,
  createTheme,
  MultiSelect,
  NumberInput,
  Select,
  TextInput,
} from "@mantine/core";

export const theme = createTheme({
  components: {
    Button: Button.extend({
      defaultProps: {
        size: "md",
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        size: "md",
      },
    }),
    NumberInput: NumberInput.extend({
      defaultProps: {
        size: "md",
      },
    }),
    Select: Select.extend({
      defaultProps: {
        size: "md",
      },
    }),
    MultiSelect: MultiSelect.extend({
      defaultProps: {
        size: "md",
      },
    }),
  },
});
