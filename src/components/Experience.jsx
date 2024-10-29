import PropTypes from "prop-types";
import { FaBriefcase } from "react-icons/fa";

const ExperienceItem = ({ icon, year, position, companyName, description }) => {
	return (
		<div className="resume-item">
			<div className="icon">{icon}</div>
			<div className="edu-content">
				<div className="year">{year}</div>
				<div className="position">{position}</div>
				<div className="company-name">{companyName}</div>
				<p>{description}</p>
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
				year="July - September 2024"
				position="Software Developer Intern"
				companyName="GigsTech Solution and Consult"
				description="Developed web applications using React, focusing on building dynamic and responsive user interfaces. Integrated RESTful APIs to fetch and display data, ensuring seamless communication between the frontend and backend. Collaborated with the team to implement features, debug issues, and optimize performance in modern web projects."
			/>
			<ExperienceItem
				icon={<FaBriefcase size={30} color="white" />}
				year="August 2022 - July 2023"
				position="Frontend Developer"
				companyName="BRIDGE TECHNOLOGY DEVELOPMENT"
				description="Developed responsive web and mobile applications using React and React Native. Focused on creating user-friendly interfaces, optimizing performance, and ensuring cross-browser compatibility. Collaborated with backend teams to integrate APIs, implement new features, and streamline deployments."
			/>
			<ExperienceItem
				icon={<FaBriefcase size={30} color="white" />}
				year="July - September 2023"
				position="Frontend Development Intern"
				companyName="GigsTech Solution and Consult"
				description="Continued to develop frontend skills, working on real-world projects and enhancing knowledge in modern frameworks."
			/>
			<ExperienceItem
				icon={<FaBriefcase size={30} color="white" />}
				year="July - September 2022"
				position="Frontend Development Trainee"
				companyName="GigsTech Solution and Consult"
				description="Focused on learning frontend development, gaining practical experience with HTML, CSS, and JavaScript."
			/>
			<ExperienceItem
				icon={<FaBriefcase size={30} color="white" />}
				year="January - July 2021"
				position="IT Department Intern"
				companyName="Tobid Divine Success Micro-Invesment Limited"
				description="Worked in the IT department, gaining experience in technical support, system management, and IT operations."
			/>
		</>
	);
};

export default Experience;
