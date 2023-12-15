'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState, ReactNode } from "react";

function TanStackProvider({children}: {children: ReactNode}) {
    const [queryClient] = useState(() => new QueryClient());

    return(
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            {children}
        </QueryClientProvider>
    );
}

export default TanStackProvider;