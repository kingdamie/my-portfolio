import { useState, useEffect } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "../Skills";

export const Resume = () => {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll(".resume-content section");
			let currentSection = "";
			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;
				if (
					window.scrollY >= sectionTop - 60 &&
					window.scrollY < sectionTop + sectionHeight - 60
				) {
					currentSection = section.getAttribute("id");
				}
			});
			setActiveSection(currentSection);
		};
		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (id) => {
		document.getElementById(id).scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="flex flex-col md:flex-row">
			{/* Side Nav */}
			<div className="md:sticky md:top-[10vh] bg-white p-2.5 border-b md:border-b-0 md:border-r border-gray-200 w-full md:w-[250px] md:h-[calc(100vh-10vh)] overflow-x-auto md:overflow-y-auto flex md:flex-col flex-row items-center justify-center shadow-md">
				{["education", "experience", "skill"].map((sec) => (
					<a
						key={sec}
						href={`#${sec}`}
						className={`block px-2.5 py-2.5 no-underline font-bold capitalize transition-colors duration-200 ${
							activeSection === sec ? "text-brand-light" : "text-[#333]"
						}`}
						onClick={() => scrollToSection(sec)}
					>
						{sec.charAt(0).toUpperCase() + sec.slice(1)}
					</a>
				))}
			</div>

			{/* Resume content */}
			<div className="flex-1 p-5 overflow-y-auto resume-content">
				<section id="education" className="py-16 px-5 border-b border-gray-200">
					<h2 className="text-brand mb-6 font-bold text-xl">Education</h2>
					<Education />
				</section>
				<section id="experience" className="py-16 px-5 border-b border-gray-200">
					<h2 className="text-brand mb-6 font-bold text-xl">Experience</h2>
					<Experience />
				</section>
				<section id="skill" className="py-16 px-5">
					<h2 className="text-brand mb-6 font-bold text-xl">Skill</h2>
					<Skills />
				</section>
			</div>
		</div>
	);
};
