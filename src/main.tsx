import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { routeTree } from "./routeTree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TelegramProvider } from "./features";
// import store from "./redux/store";

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
      <QueryClientProvider client={queryClient}>
        <TelegramProvider>
          {/* <Provider store={store}> */}
          <RouterProvider router={router} />
          {/* </Provider> */}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </TelegramProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}
