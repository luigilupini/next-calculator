"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import useCalc from "@/lib/hooks/use-calc"
import {
  Asterisk,
  Divide,
  Dot,
  Equal,
  Minus,
  Plus,
  RemoveFormatting,
} from "lucide-react"
import { PropsWithChildren } from "react"

const numberBtn = [
  { value: "9", label: "9" },
  { value: "8", label: "8" },
  { value: "7", label: "7" },
  { value: "6", label: "6" },
  { value: "5", label: "5" },
  { value: "4", label: "4" },
  { value: "3", label: "3" },
  { value: "2", label: "2" },
  { value: "1", label: "1" },
  { value: "0", label: "0" },
  { value: ".", label: <Dot size={20} /> },
  { value: "=", label: <Equal size={20} />, variant: "default" },
]

const operatorBtn = [
  { value: "+", label: <Plus size={20} /> },
  { value: "-", label: <Minus size={20} /> },
  { value: "/", label: <Divide size={20} /> },
  { value: "*", label: <Asterisk size={20} /> },
  { value: "C", label: <RemoveFormatting size={20} /> },
]

export default function HomePage() {
  const { results, handleClick } = useCalc()

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Card className="flex flex-col gap-2 p-2">
        <Header results={results} />
        <section className="grid grid-cols-5 gap-2">
          {operatorBtn.map(({ value, label }) => (
            <ButtonCustom
              key={value}
              value={value}
              variant="ghost"
              onClick={handleClick}
            >
              {label}
            </ButtonCustom>
          ))}
        </section>
        <section className="grid grid-cols-4 gap-2">
          {numberBtn.map(({ value, label, variant }) => (
            <ButtonCustom
              key={value}
              value={value}
              variant={variant as "outline" | "default" | "ghost"}
              onClick={handleClick}
            >
              {label}
            </ButtonCustom>
          ))}
        </section>
      </Card>
    </div>
  )
}

const Header = ({ results }: { results: string }) => (
  <div className="rounded-md border bg-muted/50 p-2 text-right text-3xl text-muted-foreground">
    {results === "" ? "0" : results}
  </div>
)

type ButtonProps = PropsWithChildren<{
  onClick: (e: string | number) => void
  variant?: "outline" | "default" | "ghost"
  value: string | number
}>

const ButtonCustom = ({
  children,
  value,
  variant = "outline",
  onClick,
}: ButtonProps) => {
  return (
    <Button onClick={() => onClick(value)} variant={variant}>
      {children}
    </Button>
  )
}
