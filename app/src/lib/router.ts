import { useCallback, useEffect, useState } from "react"

export type Route = { name: "catalog" } | { name: "lesson"; id: string }

export function parseHash(hash: string): Route {
  const match = /^#\/aula\/([\w-]+)\/?$/.exec(hash)
  if (match) return { name: "lesson", id: match[1] }
  return { name: "catalog" }
}

export function routeHref(route: Route): string {
  if (route.name === "lesson") return `#/aula/${route.id}`
  return "#/"
}

export function useRoute(): readonly [Route, (route: Route) => void] {
  const [route, setRoute] = useState<Route>(() =>
    parseHash(window.location.hash)
  )

  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash))
    window.addEventListener("hashchange", onChange)
    return () => window.removeEventListener("hashchange", onChange)
  }, [])

  const navigate = useCallback((next: Route) => {
    window.location.hash = routeHref(next)
  }, [])

  return [route, navigate] as const
}
