import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router/Route.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/apis/queryClient.ts";

import "./index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
