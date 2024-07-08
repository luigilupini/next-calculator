import { Card } from "@/components/ui/card"
import Calculator from "./_component/calculator"

export default function HomePage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Card className="flex flex-col gap-2 p-2">
        <Calculator />
      </Card>
    </div>
  )
}
