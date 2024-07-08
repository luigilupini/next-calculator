'use client'

import { PropsWithChildren } from "react"
import { Button } from "@/components/ui/button"

type ButtonProps = PropsWithChildren<{
  onClick: (e: string | number) => void
  variant?: "outline" | "default" | "ghost"
  value: string | number
}>

export default function CalcButton ({
  children,
  value,
  variant = "outline",
  onClick,
}: ButtonProps) {
  return (
    <Button onClick={() => onClick(value)} variant={variant}>
      {children}
    </Button>
  )
}
