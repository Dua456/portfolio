
import Image from 'next/image'
import P1 from "../../../public/images/static-resume.webp"
import P2 from "../../../public/images/dynamic resume2.webp"
import P3 from "../../../public/images/countdown.jpeg"
import P4 from "../../../public/images/weather.jpg"
import P5 from "../../../public/images/treval.jpg"
import P6 from '../../../public/images/figma.jpeg'

import Link from 'next/link'

export default function Projects() {
    return (
        <>
            <div className="flex justify-center items-center ">
                <h2 className="pt-[110px] text-5xl font-bold mb-9 text-[#01455E]  ">My<span className='text-[#E1aD01]'> Projects</span> </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:ml-[200px] lg:mr-[250px] gap-10 py-6 mx-auto">
                <div className="border border-gray-300 shadow-2xl rounded-lg p-2 w-[290px] h-[385px] ml-9 transition-all duration-300 ease-in-out hover:scale-105">
                    <Image src={P1} alt="1" width={280} height={230} className="bg-slate-600" />
                    <h4 className="text-base font-bold text-gray-500 p-2 tracking-wide">Static Resume</h4>
                    <h4 className="text-sm font- text-black ml-2">A concise resume showcasing skills&quot; experience&quot; achievements for career advancement.</h4>
                    <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">Rates ⭐⭐⭐⭐
                        <button className='mr-5 underline'><Link href="https://hackathon-project-l78senlhc-dua-shakirs-projects-28eb8e4c.vercel.app">View</Link></button>
                    </h3>
                    <button className=" h-[35px] w-[120px] bg-[#e34c26] shadow-lg shadow-[rgba(0,0,0,0.4)] text-white font-bold p-1 rounded-lg mt-3 ml-2 hover:bg-[#f06529] hover:border-none hover:text-white transition-all duration-300">HTML</button>
                    <button className=" h-[35px] w-[120px] bg-[#004b64] text-white p-1 shadow-lg shadow-[rgba(0,0,0,0.4)] rounded-lg font-bold mt-3 ml-2 hover:bg-[#489cd7] hover:border-none hover:text-white transition-all duration-300">CSS</button>
                </div>

                <div className="border border-gray-300 shadow-2xl rounded-lg p-2 w-[290px] h-[385px] ml-9 transition-all duration-300 ease-in-out hover:scale-105">
                    <Image src={P2} alt="1" width={280} height={230} className="bg-slate-600" />
                    <h4 className="text-base font-bold text-gray-500 p-2 tracking-wide">Dynamic Resume</h4>
                    <h4 className="text-sm font- text-black ml-2">A dynamic resume highlights key skills&quot; experiences&quot; achievements tailored to each job opportunity.</h4>
                    <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">Rates ⭐⭐⭐⭐
                        <button className='mr-5 underline'><Link href="https://hackathon-project-ec7k-q1yvvo9o8-dua-shakirs-projects-28eb8e4c.vercel.app">View</Link></button>
                    </h3>
                    <button className=" h-[35px] w-[120px] bg-[#e34c26] shadow-lg shadow-[rgba(0,0,0,0.4)] text-white font-bold p-1 rounded-lg mt-3 ml-2 hover:bg-[#f06529] hover:border-none hover:text-white transition-all duration-300">HTML</button>
                    <button className=" h-[35px] w-[120px] bg-[#004b64] text-white p-1 shadow-lg shadow-[rgba(0,0,0,0.4)] rounded-lg font-bold mt-3 ml-2 hover:bg-[#489cd7] hover:border-none hover:text-white transition-all duration-300">CSS</button>
                </div>
                
                <div className="border border-gray-300 shadow-2xl rounded-lg p-2 w-[290px] h-[400px] ml-9 transition-all duration-300 ease-in-out hover:scale-105">
                    <Image src={P3} alt="Countdown Timer Project" width={280} height={220} className="bg-slate-600" />
                    <h4 className="text-base font-bold text-gray-500 p-2 tracking-wide">Countdown Timer</h4>
                    <h4 className="text-sm text-black ml-2">A dynamic and interactive countdown timer built with Next.js, showcasing precise time calculations and responsive UI design.</h4>
                    <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">Rates ⭐⭐⭐⭐⭐
                        <button className="mr-5 underline">
                            <Link href="https://countdown-timer-66zwecvwh-dua-shakirs-projects-28eb8e4c.vercel.app">
                                View Project
                            </Link>
                        </button>
                    </h3>
                    <button className="h-[35px] w-[120px] bg-[#e34c26] shadow-lg shadow-[rgba(0,0,0,0.4)] text-white font-bold p-1 rounded-lg mt-3 ml-2 hover:bg-[#f06529] hover:border-none hover:text-white transition-all duration-300">NextJS</button>
                    <button className="h-[35px] w-[120px] bg-[#004b64] text-white p-1 shadow-lg shadow-[rgba(0,0,0,0.4)] rounded-lg font-bold mt-3 ml-2 hover:bg-[#489cd7] hover:border-none hover:text-white transition-all duration-300">Tailwind CSS</button>
                </div>


                <div className="border border-gray-300 shadow-2xl rounded-lg p-2 w-[290px] h-[385px] ml-9 transition-all duration-300 ease-in-out hover:scale-105">
                    <Image src={P4} alt="Weather Widget Project" width={280} height={230} className="bg-slate-600" />
                    <h4 className="text-base font-bold text-gray-500 p-2 tracking-wide">Weather Widget</h4>
                    <h4 className="text-sm text-black ml-2">An interactive weather widget app showcasing real-time weather updates, forecasts, and responsive design for a seamless user experience.</h4>
                    <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">Rates ⭐⭐⭐⭐⭐
                        <button className="mr-5 underline">
                            <Link href="https://weather-widget-5uozmxuck-dua-shakirs-projects-28eb8e4c.vercel.app">
                                View Project
                            </Link>
                        </button>
                    </h3>
                    <button className="h-[35px] w-[120px] bg-[#e34c26] shadow-lg shadow-[rgba(0,0,0,0.4)] text-white font-bold p-1 rounded-lg mt-3 ml-2 hover:bg-[#f06529] hover:border-none hover:text-white transition-all duration-300">NextJS</button>
                    <button className="h-[35px] w-[120px] bg-[#004b64] text-white p-1 shadow-lg shadow-[rgba(0,0,0,0.4)] rounded-lg font-bold mt-3 ml-2 hover:bg-[#489cd7] hover:border-none hover:text-white transition-all duration-300">Tailwind CSS</button>
                </div>

                <div className="border border-gray-300 shadow-2xl rounded-lg p-2 w-[290px] h-[385px] ml-9 transition-all duration-300 ease-in-out hover:scale-105">
                    <Image src={P5} alt="1" width={280} height={230} className="bg-slate-600" />
                    <h4 className="text-base font-bold text-gray-500 p-2 tracking-wide">Travel Website</h4>
                    <h4 className="text-sm font- text-black ml-2">Travel website featuring top destinations&quot; experiences&quot; tips tailored to every adventure </h4>
                    <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">Rates ⭐⭐⭐⭐
                        <button className='mr-5 underline'><Link href="/">View</Link></button>
                    </h3>
                    <button className=" h-[35px] w-[120px] bg-[#e34c26] shadow-lg shadow-[rgba(0,0,0,0.4)] text-white font-bold p-1 rounded-lg mt-3 ml-2 hover:bg-[#f06529] hover:border-none hover:text-white transition-all duration-300">NextJS</button>
                    <button className=" h-[35px] w-[120px] bg-[#004b64] text-white p-1 shadow-lg shadow-[rgba(0,0,0,0.4)] rounded-lg font-bold mt-3 ml-2 hover:bg-[#489cd7] hover:border-none hover:text-white transition-all duration-300">Tailwind CSS</button>
                </div>

                <div className="border border-gray-300 shadow-2xl rounded-lg p-2 w-[290px] h-[375px] ml-9 transition-all duration-300 ease-in-out hover:scale-105">
                    <Image src={P6} alt="1" width={280} height={230} className="bg-slate-600" />
                    <h4 className="text-base font-bold text-gray-500 p-2">Hackathon project</h4>
                    <h4 className="text-sm text-black ml-2">Creative developer focused on building intuitive and engaging web experiences</h4>
                    <h3 className="flex justify-between p-2 text-sm text-gray-500 font-semibold">Rates ⭐⭐⭐⭐
                        <button className="mr-5 underline">
                            <Link href="https://ux-ui-hackathon-7bd1q9jdr-dua-shakirs-projects-28eb8e4c.vercel.app">View</Link>
                        </button>
                    </h3>
                    <div className="flex space-x-2">
                        <button className="h-[35px] w-[120px] bg-[#e34c26] shadow-lg shadow-[rgba(0,0,0,0.4)] text-white font-bold p-1 rounded-lg mt-3 hover:bg-[#f06529] hover:border-none transition-all duration-300">HTML</button>
                        <button className="h-[35px] w-[120px] bg-[#004b64] shadow-lg shadow-[rgba(0,0,0,0.4)] text-white font-bold p-1 rounded-lg mt-3 hover:bg-[#489cd7] hover:border-none transition-all duration-300">CSS</button>
                        <button className="h-[35px] w-[120px] bg-[#0d6efd] shadow-lg shadow-[rgba(0,0,0,0.4)] text-white font-bold p-1 rounded-lg mt-3 hover:bg-[#408af1] hover:border-none transition-all duration-300">Figma</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
