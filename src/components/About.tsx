import { MdSchool } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { MdOutlineRocket } from "react-icons/md";
import { MdComputer } from "react-icons/md";

function About() {
  return (
    <div className="text-center pt-9 relative w-full bg-gradient-to-b from-blue-200 via-pink-100 to-yellow-300">
      <h2 className="pt-[110px] text-5xl font-bold mb-12 text-[#01455E]">
        About <span className="text-[#E1aD01]">Me</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto p-8">
        {/* Education Card */}
        <div className="group transform hover:scale-105 transition-transform duration-300 flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl">
          <MdSchool size="50px" className="text-[#E1aD01] mb-4 group-hover:scale-110 transition-all" />
          <h3 className="text-2xl font-bold text-[#01455E] mb-3 group-hover:text-[#E1aD01] transition-colors duration-300">
            Education
          </h3>
          <p className="text-gray-600 leading-relaxed">
            I am currently pursuing my studies and focusing on building a strong foundation in web development and technology. With a keen interest in programming and a commitment to continuous learning, I strive to enhance my technical skills and apply them effectively in real-world scenarios.
          </p>
        </div>

        {/* Experience Card */}
        <div className="group transform hover:scale-105 transition-transform duration-300 flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl">
          <MdWork size="50px" className="text-[#E1aD01] mb-4 group-hover:scale-110 transition-all" />
          <h3 className="text-2xl font-bold text-[#01455E] mb-3 group-hover:text-[#E1aD01] transition-colors duration-300">
            Experience
          </h3>
          <p className="text-gray-600 leading-relaxed">
            I&apos;m diving into web development&quot; building foundational skills in frontend and backend technologies. Eager to learn and grow in the field as a fresher with a keen interest in coding and technology.
          </p>
        </div>

        {/* Technology Card */}
        <div className="group transform hover:scale-105 transition-transform duration-300 flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl">
          <MdComputer size="50px" className="text-[#E1aD01] mb-4 group-hover:scale-110 transition-all" />
          <h3 className="text-2xl font-bold text-[#01455E] mb-3 group-hover:text-[#E1aD01] transition-colors duration-300">
            Technology
          </h3>
          <p className="text-gray-600 leading-relaxed">
            I am passionate about exploring new technologies and tools in the web development space. I enjoy working with programming languages like JavaScript&quot; React&quot; and Node.js. Constantly learning and staying updated with the latest tech trends keeps me motivated.
          </p>
        </div>

        {/* Future Goals Card */}
        <div className="group transform hover:scale-105 transition-transform duration-300 flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl">
          <MdOutlineRocket size="50px" className="text-[#E1aD01] mb-4 group-hover:scale-110 transition-all" />
          <h3 className="text-2xl font-bold text-[#01455E] mb-3 group-hover:text-[#E1aD01] transition-colors duration-300">
            Future Goals
          </h3>
          <p className="text-gray-600 leading-relaxed">
            My goal is to continuously learn and improve my skills in web development. I aim to contribute to impactful projects that solve real-world problems. By staying curious and dedicated&quot; I hope to make a positive impact in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
