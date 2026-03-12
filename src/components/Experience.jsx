import PropTypes from "prop-types";
import { FaBriefcase } from "react-icons/fa";

const ExperienceItem = ({ icon, year, position, companyName, description }) => {
	return (
		<div className="flex items-start gap-6 mb-8 border-b border-gray-200 pb-8 mt-4">
			<div className="bg-brand p-3 rounded-full flex-shrink-0">{icon}</div>
			<div className="flex flex-col gap-3">
				<div className="text-brand font-bold">{year}</div>
				<div className="font-bold text-2xl max-sm:text-sm">{position}</div>
				<div className="font-bold max-sm:text-base">{companyName}</div>
				<p className="text-[#333] max-sm:text-xs">{description}</p>
			</div>
		</div>
	);
};

ExperienceItem.propTypes = {
	icon: PropTypes.element.isRequired,
	year: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	companyName: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

const Experience = () => {
	return (
		<>
			<ExperienceItem
				icon={<FaBriefcase size={30} color="white" />}
				year="June - August 2025"
				position="Frontend Developer"
				companyName="Southern Atlantic Hotel"
				description="Developed web applications using React, focusing on building dynamic and responsive user interfaces. Integrated RESTful APIs to fetch and display data, ensuring seamless communication between the frontend and backend. Collaborated with the team to implement features, debug issues, and optimize performance in modern web projects."
			/>
			<ExperienceItem
				icon={<FaBriefcase size={30} color="white" />}
				year="November 2024 - August 2025"
				position="Mobile App & Web Developer Intern"
				companyName="Sendrail"
				description="Developed web applications using React, focusing on building dynamic and responsive user interfaces. Integrated RESTful APIs to fetch and display data, ensuring seamless communication between the frontend and backend. Collaborated with the team to implement features, debug issues, and optimize performance in modern web projects."
			/>
			<ExperienceItem
				icon={<FaBriefcase size={30} color="white" />}
				year="December 2024 - February 2025"
				position="Software Developer"
				companyName="IntelliSense Vivid Technologies"
				description="Developed web applications using React, focusing on building dynamic and responsive user interfaces. Integrated RESTful APIs to fetch and display data, ensuring seamless communication between the frontend and backend. Collaborated with the team to implement features, debug issues, and optimize performance in modern web projects."
			/>
			<ExperienceItem
				icon={<FaBriefcase size={30} color="white" />}
				year="July - September 2024"
				position="Software Developer Intern"
				companyName="GigsTech Solution and Consult"
				description="Developed web applications using React, focusing on building dynamic and responsive user interfaces. Integrated RESTful APIs to fetch and display data, ensuring seamless communication between the frontend and backend. Collaborated with the team to implement features, debug issues, and optimize performance in modern web projects."
			/>
			<ExperienceItem
				icon={<FaBriefcase size={30} color="white" />}
				year="July 2024 - September 2024"
				position="Frontend Developer"
				companyName="BRIDGE TECHNOLOGY DEVELOPMENT"
				description="Developed responsive web and mobile applications using React and React Native. Focused on creating user-friendly interfaces, optimizing performance, and ensuring cross-browser compatibility. Collaborated with backend teams to integrate APIs, implement new features, and streamline deployments."
			/>
			<ExperienceItem
				icon={<FaBriefcase size={30} color="white" />}
				year="July 2023 - September 2024"
				position="Frontend Development Intern"
				companyName="GigsTech Solution and Consult"
				description="Continued to develop frontend skills, working on real-world projects and enhancing knowledge in modern frameworks."
			/>
			<ExperienceItem
				icon={<FaBriefcase size={30} color="white" />}
				year="August - December 2022"
				position="Frontend Development Trainee"
				companyName="GigsTech Solution and Consult"
				description="Focused on learning frontend development, gaining practical experience with HTML, CSS, and JavaScript."
			/>
			<ExperienceItem
				icon={<FaBriefcase size={30} color="white" />}
				year="January - July 2021"
				position="IT Department Intern"
				companyName="Tobid Divine Success Micro-Investment Limited"
				description="Worked in the IT department, gaining experience in technical support, system management, and IT operations."
			/>
		</>
	);
};

export default Experience;
