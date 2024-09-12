'use client'

import { Button } from "@/shared/ui";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme()

  return (
    <div className="p-20">
      <Button onClick={() => setTheme('light')}>Light</Button>
      <Button onClick={() => setTheme('dark')}>Dark</Button>
      <h2>Home</h2>
      <Button>Default</Button>
      <Button variant='accent'>Accent</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='lighting'>Lighting</Button>
    </div>
  );
}
