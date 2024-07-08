'use client'

import { evaluate } from "mathjs"
import { useState } from "react"

export default function useCalc() {
  const [results, setResult] = useState("")

  const handleClick = (value: string | number) => {
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-":
      case "/":
      case "*":
        setResult((prevResults) => prevResults + value)
        break
      case "=":
        try {
          setResult(evaluate(results).toString())
        } catch (e) {
          setResult("Error")
        }
        break
      case "C":
        setResult("")
        break
      default:
        break
    }
  }

  return { results, handleClick }
}
