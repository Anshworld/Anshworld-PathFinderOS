import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

async function fetchTracks() {
  const res = await fetch(`${API_URL}/tracks`)
  return res.json()
}

export default function App() {
  const { data: tracks } = useQuery({ queryKey: ['tracks'], queryFn: fetchTracks })
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <h1 className="text-lg md:text-xl font-semibold">PathFinderOS</h1>
            <button onClick={() => setDark((d) => !d)} className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700 text-sm">{dark ? 'Light' : 'Dark'}</button>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(tracks || []).map((t: any) => (
              <article key={t.id} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                <h2 className="text-xl font-bold mb-2">{t.title}</h2>
                <p className="text-sm opacity-80 mb-3">{t.description}</p>
                <div className="text-xs uppercase opacity-70">Sprints: {t.sprints?.length || 0}</div>
              </article>
            ))}
          </section>
        </main>
        <footer className="max-w-6xl mx-auto px-4 py-6 text-sm opacity-70">© {new Date().getFullYear()} PathFinderOS</footer>
      </div>
    </div>
  )
}