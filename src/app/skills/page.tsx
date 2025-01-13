import React from 'react';

export default function Skill() {
    const skills = [
        { name: "HTML", percentage: 90 },
        { name: "CSS", percentage: 85 },
        { name: "TypeScript", percentage: 70 },
        { name: "NextJs", percentage: 75 },
        { name: "Node.js", percentage: 70 },
        { name: "Tailwind", percentage: 75 },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen justify-center bg-gradient-to-r from-teal-300 via-indigo-300 to-lime-300 py-36">
            <h2 className="text-5xl font-extrabold text-[#01455E] mb-12 text-center tracking-wide">
                My <span className="text-[#E1aD01]">Skills</span>
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="relative group flex flex-col items-center transform transition-transform hover:scale-110"
                    >
                        <div className="w-32 h-32 bg-gradient-to-b from-[#E1aD01] to-[#FDE68A] border-8 rounded-full border-[#01455E] flex items-center justify-center shadow-lg hover:shadow-xl relative">
                            <div className="w-24 h-24 bg-white border-8 rounded-full border-[#01455E] flex items-center justify-center group-hover:scale-110 transform transition-all duration-300">
                                <div className="text-[#01455E] text-xl font-bold">{skill.percentage}%</div>
                            </div>
                        </div>
                        <p className="mt-4 text-center text-lg text-[#01455E] font-medium group-hover:text-[#E1aD01] transition-colors duration-300">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
