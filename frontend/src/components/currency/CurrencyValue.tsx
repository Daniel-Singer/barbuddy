import { Text, type TextProps } from "@mantine/core";

interface Props extends TextProps {
  children: string | number;
  useColoring?: boolean;
}

const CurrencyValue = ({
  children,
  useColoring = false,
  ...textProps
}: Props) => {
  return (
    <Text
      c={useColoring ? (Number(children) < 0 ? "red" : undefined) : undefined}
      {...textProps}
    >{`${children} €`}</Text>
  );
};

export default CurrencyValue;
