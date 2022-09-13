import {PropsWithChildren} from "react";
import {NhostReactProvider} from "@nhost/react";
import {nhost} from "app/src/lib/nhostClient";
import {QueryClientProvider} from '@tanstack/react-query'
import {queryClient} from "app/src/lib/queryClient";

export function LmNhostProvider({children}: PropsWithChildren) {
    return (
        <NhostReactProvider nhost={nhost}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </NhostReactProvider>
    )
}