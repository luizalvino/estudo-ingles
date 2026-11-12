import type { ReactNode } from "react"

import { ThemeToggle } from "@/components/ThemeToggle"
import { routeHref } from "@/lib/router"

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex max-w-3xl items-center justify-between p-4">
          <a href={routeHref({ name: "catalog" })} className="font-semibold">
            Estudo de Inglês
          </a>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Gramática</span>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-3xl p-4 pb-16">{children}</main>
    </div>
  )
}
