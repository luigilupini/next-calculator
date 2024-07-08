"use client"

import ThemeProvider from "@/state/context/leaf/theme"
import { PropsWithChildren } from "react"

const ProviderTree = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export default ProviderTree
