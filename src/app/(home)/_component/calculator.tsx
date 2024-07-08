"use client"

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
import CalcButton from "./calc-button"
import MorphText from "./morph-text"

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
  { value: ".", label: <Dot size={16} /> },
  { value: "=", label: <Equal size={16} />, variant: "default" },
]

const operatorBtn = [
  { value: "+", label: <Plus size={16} /> },
  { value: "-", label: <Minus size={16} /> },
  { value: "/", label: <Divide size={16} /> },
  { value: "*", label: <Asterisk size={16} /> },
  { value: "C", label: <RemoveFormatting size={16} /> },
]

export default function Calculator() {
  const { results, handleClick } = useCalc()

  return (
    <>
      <Header results={results} />
      <section className="grid grid-cols-5 gap-2">
        {operatorBtn.map(({ value, label }) => (
          <CalcButton
            key={value}
            value={value}
            variant="outline"
            onClick={handleClick}
          >
            {label}
          </CalcButton>
        ))}
      </section>
      <section className="grid grid-cols-5 gap-2">
        {numberBtn.map(({ value, label, variant }) => (
          <CalcButton
            key={value}
            value={value}
            variant={variant as "outline" | "default" | "ghost"}
            onClick={handleClick}
          >
            {label}
          </CalcButton>
        ))}
      </section>
    </>
  )
}

const Header = ({ results }: { results: string }) => (
  <div className="rounded-md border bg-muted/50 p-2 text-right text-3xl text-muted-foreground">
    <MorphText text={results === "" ? "0" : results} />
  </div>
)
