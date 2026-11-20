
import type { TechnologyProps } from './technologyProps'
import { useState } from 'react'
import { toast } from 'react-toastify';

interface TechnologyCardProps {
    technology: TechnologyProps
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <li className="group flex flex-col justify-between rounded-2xl
                   border border-gray-200 bg-white p-5
                   shadow-sm transition-all duration-300
                   hover:-translate-y-2 hover:border-pink-300
                   hover:shadow-xl">

    
      <div>
        <div className="mb-5 flex items-center gap-3">

        
          <div className="flex h-14 w-14 shrink-0 items-center
                          justify-center rounded-xl bg-gray-50
                          transition-colors duration-300
                          group-hover:bg-pink-50">

            <img
              src={technology.icon}
              alt={technology.name}
              className="h-9 w-9 object-contain transition-transform
                         duration-300 group-hover:scale-110"
            />
          </div>

         
          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold text-gray-800
                           group-hover:text-pink-600 transition-colors">
              {technology.name}
            </h3>

            <span className="text-sm text-gray-500">
              {technology.category}
            </span>
          </div>

        </div>

       
        <p className="mb-5 text-sm leading-6 text-gray-600">
          {technology.description}
        </p>

       
        <div className="mb-5 flex flex-wrap items-center gap-2">

          <span className="rounded-full bg-blue-50 px-3 py-1
                           text-xs font-medium text-blue-700">
            {technology.difficulty}
          </span>

          <span
            aria-label={`${technology.rating} out of 5 stars`}
            className="rounded-full bg-yellow-50 px-3 py-1
                       text-xs font-semibold text-yellow-700"
          >
            ★ {technology.rating}
          </span>

          <span className="rounded-full bg-pink-50 px-3 py-1
                           text-xs font-semibold text-pink-700">
            {technology.badge}
          </span>

        </div>
      </div>

      
      <button
        type="button"
        onClick={() => {
          setIsAdded((added) => {
            if (!added) {
              toast.success("Added Successfully");
            }
            return !added;
          });
        }}
        aria-pressed={isAdded}
        className={`w-full rounded-xl px-4 py-3 text-sm font-semibold
                    transition-all duration-300 cursor-pointer
                    focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-pink-500
                    ${
                      isAdded
                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                        : "bg-gray-900 text-white hover:bg-pink-600 hover:shadow-lg"
                    }`
            }
      >
        {isAdded ? "✓ Added to Stack" : "+ Add to Stack"}
      </button>

    </li>
  );
}

export default TechnologyCard;

    
