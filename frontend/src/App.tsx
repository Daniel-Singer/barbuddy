import "@mantine/core/styles.css";
import { Flex, MantineProvider, Stack } from "@mantine/core";
import "./App.css";
import { Outlet } from "@tanstack/react-router";
import { ModalsProvider } from "@mantine/modals";
import MainNav from "./components/navigation/MainNav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "./theme";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} forceColorScheme="light">
        <ModalsProvider>
          <Stack h={"100%"} gap={0} w={"100%"}>
            <MainNav />
            <Flex flex={1} w={"100%"}>
              <Outlet />
            </Flex>
          </Stack>
        </ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
