import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "./App.css";
import { Outlet } from "@tanstack/react-router";

const App = () => {
  return (
    <MantineProvider>
      <Outlet />
    </MantineProvider>
  );
};

export default App;
