import { RouterProvider } from "react-router";
import { QueryProvider } from "@shared/query/query-provider";
import { router } from "@shared/router/router";
import ThemeProvider from "@shared/styles/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;
