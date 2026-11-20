
import banner from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className="bg-white grid  grid-cols-1 lg:grid-cols-2 items-center gap-4 container mx-auto">
            <section className="flex flex-col gap-4">
                <h1 className="text-6xl font-bold text-gray-800">Build Your Ideal
                               <span className=" bg-clip-text text-transparent bg-linear-to-r from-orange-600 to-purple-600 "> Development Stack</span></h1>
                <p className="text-gray-600 text-lg">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>


                 <div className="flex gap-4">
                <button type="button" className="bg-linear-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-purple-600 transition-shadow cursor-pointer text-white font-bold py-2 px-4 rounded-2xl w-40">Technologies</button>
                <button type="button" className="bg-gray-200 border border-gray-400 hover:bg-pink-600 transition-shadow cursor-pointer text-black font-bold py-2 px-4 rounded-2xl w-40">Learn More</button>
                    </div>
            </section>

            <section className="flex justify-end items-center">
                <img src={banner} className="w-full h-auto" alt="Banner Image" />
            </section>
        </div>
    );
};

export default Banner;