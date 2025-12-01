import "@mantine/core/styles.css";
import { Flex, MantineProvider, Stack } from "@mantine/core";
import "./App.css";
import { Outlet } from "@tanstack/react-router";
import { ModalsProvider } from "@mantine/modals";
import MainNav from "./components/navigation/MainNav";
import { theme } from "./theme";

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <Stack h={"100%"} gap={0} w={"100%"}>
          <MainNav />
          <Flex flex={1} w={"100%"}>
            <Outlet />
          </Flex>
        </Stack>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default App;
