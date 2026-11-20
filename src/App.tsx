import { Suspense } from 'react'
import { useState } from 'react'
import './App.css'
import Banner from './components/banner'
import Nav from './components/nav'
import Technology from './components/technology'
import type { TechnologyProps } from './components/technologyProps'

const fetchTechnologies = async (): Promise<TechnologyProps[]> => {
  const response = await fetch('/data.json')
  if (!response.ok) {
    throw new Error(`Failed to fetch technologies (${response.status})`)
  }
  return response.json()
}

function App() {
  const [technologyPromise] = useState(() => fetchTechnologies())
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <Technology technology={technologyPromise} />
      </Suspense>
    </>
  )
}

export default App