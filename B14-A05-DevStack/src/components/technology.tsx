import { use } from 'react'
import type { TechnologyProps } from './technologyProps'
import TechnologyCard from './technologyCard'

interface TechnologyComponentProps {
    technology: Promise<TechnologyProps[]>
}

const Technology = ({ technology }: TechnologyComponentProps) => {
    const technologies = use(technology)
    return (
        <section id="technology" className="container mx-auto px-4 py-10">
            <header className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Explore the <span className="text-pink-500">Technologies</span></h2>
                <p className="mt-4 text-gray-600">Pick one technology per category to build your ideal stack.</p>
            </header>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {technologies.map((item) => (
                    <TechnologyCard key={item.id} technology={item} />
                ))}
            </ul>
        </section>
    );
};

export default Technology;
