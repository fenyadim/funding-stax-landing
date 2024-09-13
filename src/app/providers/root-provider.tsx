import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

export function RootProvider({ children }: { children: ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}