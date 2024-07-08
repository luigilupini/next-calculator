"use client"

import { Button } from "@/components/ui/button"
import { useMounted } from "@/lib/hooks/use-mounted"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"

export function ThemeToggle() {
  const mounted = useMounted()
  const { theme, setTheme } = useTheme()
  const [audioIndex, setAudioIndex] = useState(0)
  const audioFiles = ["/sounds/switch-on.mp3", "/sounds/switch-off.mp3"]

  const handleClick = (theme: string) => {
    setTheme(theme)
    const audio = new Audio(audioFiles[audioIndex])
    audio.play()
    setAudioIndex((prevIndex) => (prevIndex + 1) % audioFiles.length)
  }

  if (!mounted) return null

  return (
    <div className="group absolute -right-14 -top-14 animate-fade-left p-8 animate-normal animate-once animate-ease-out">
      <Button
        onClick={() => handleClick(theme === "light" ? "dark" : "light")}
        variant="default"
        size="icon"
        className="z-50 cursor-pointer rounded-full transition-all delay-75 duration-150 ease-in-out hover:bg-primary hover:text-primary-foreground hover:shadow-[-10px_-10px_30px_4px_hsl(var(--primary)/0.2),_5px_5px_15px_4px_hsl(var(--primary)/0.35)] group-hover:-translate-x-7 group-hover:translate-y-7"
      >
        {theme === "light" && (
          <Sun className="size-[1.2rem] animate-spin rounded-full animate-normal animate-fill-both animate-once animate-ease-out " />
        )}
        {theme === "dark" && (
          <Moon className="size-[1.2rem] animate-spin animate-normal animate-fill-both animate-once animate-ease-out" />
        )}
      </Button>
    </div>
  )
}
