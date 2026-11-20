import { use, useState } from 'react'
import type { TechnologyProps } from './technologyProps'
import TechnologyCard from './technologyCard'
import { MdDelete } from "react-icons/md";

interface TechnologyComponentProps {
    technology: Promise<TechnologyProps[]>
}

const Technology = ({ technology }: TechnologyComponentProps) => {
    const technologies = use(technology)
    const [selectedTechnologies, setSelectedTechnologies] = useState<TechnologyProps[]>([])

    const toggleTechnology = (selected: TechnologyProps) => {
        setSelectedTechnologies((current) => {
            const isSelected = current.some((item) => item.id === selected.id)

            if (isSelected) {
                return current.filter((item) => item.id !== selected.id)
            }

            return [...current, selected]
        })
    }

    const handleRemoveTechnology = (item: TechnologyProps) => {
        setSelectedTechnologies((current) =>
            current.filter((selected) => selected.id !== item.id)
        )
    }

    return (
       

<section
  id="technology"
  className="container mx-auto px-4 py-10"
>
  
  <header className="mb-8 text-center">
    <h2 className="text-3xl font-bold text-gray-800">
      Explore the <span className="text-pink-500">Technologies</span>
    </h2>

    <p className="mt-4 text-gray-600">
      Pick one technology per category to build your ideal stack.
    </p>
  </header>

 
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

   
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">

      {technologies.map((item) => (
        <TechnologyCard
          key={item.id}
          technology={item}
          isSelected={selectedTechnologies.some((selected) => selected.id === item.id)}
          onToggle={toggleTechnology}
        />
      ))}

    </ul>

   
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

      <h2 className="text-xl font-bold text-gray-800">
        Your Stack
      </h2>

      {selectedTechnologies.length === 0 ? (
        <p className="mt-2 text-sm text-gray-500">
          Your selected technologies will appear here.
        </p>
      ) : (
        <ul className="mt-4 space-y-2">
          {selectedTechnologies.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between rounded-lg bg-pink-50 px-3 py-2 text-sm"
            >
              <span className='flex items-center gap-4'>
                <strong className="text-gray-800">{item.category}:</strong>{' '}
                <span className="text-gray-600">{item.name}</span>
              </span>
              <button
                type="button"
                onClick={() => handleRemoveTechnology(item)}
                aria-label={`Remove ${item.name} from stack`}
                className="ml-2 cursor-pointer text-lg text-gray-500 hover:text-pink-600"
              >
                <MdDelete />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700">
        Stack Count: {selectedTechnologies.length} 
      </div>

    </aside>

  </div>
</section>

    )
}

export default Technology;
