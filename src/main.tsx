import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { routeTree } from "./routeTree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TelegramProvider } from "./features";
import { MainContextProvider } from "./providers/MainContext";
const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <TelegramProvider>
        <QueryClientProvider client={queryClient}>
          <MainContextProvider>
            <RouterProvider router={router} />
          </MainContextProvider>

          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </TelegramProvider>
    </StrictMode>
  );
}
