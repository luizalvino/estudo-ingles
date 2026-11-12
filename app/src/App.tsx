import { Catalog } from "@/components/Catalog"
import { Lesson } from "@/components/Lesson"
import { Shell } from "@/components/Shell"
import { useRoute } from "@/lib/router"

function App() {
  const [route] = useRoute()

  return (
    <Shell>
      {route.name === "lesson" ? (
        <Lesson id={route.id} />
      ) : (
        <Catalog />
      )}
    </Shell>
  )
}

export default App
