import { IoSchool } from "react-icons/io5";
import PropTypes from "prop-types";

const EducationItem = ({ icon, year, degree, schoolName, description }) => {
	return (
		<div className="resume-item">
			<div className="icon">{icon}</div>
			<div className="edu-content">
				<div className="year">{year}</div>
				<div className="degree">{degree}</div>
				<div className="school-name">{schoolName}</div>
				<p>{description}</p>
			</div>
		</div>
	);
};
EducationItem.propTypes = {
	icon: PropTypes.element.isRequired,
	year: PropTypes.string.isRequired,
	degree: PropTypes.string.isRequired,
	schoolName: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

const Education = () => {
	return (
		<>
			<EducationItem
				icon={<IoSchool size={30} color="white" />}
				year="2021 - till date"
				degree="Bachelor of Science in Computer Science"
				schoolName="Afe Babalola University"
				description="Studying Computer Science has provided me with a solid foundation in programming, algorithms, and software development, preparing me for a successful career in tech. I also served as the Hardware Director for NACOS (year set 23/24), enhancing my leadership and technical skills."
			/>
			<EducationItem
				icon={<IoSchool size={30} color="white" />}
				year="2015 - 2021"
				degree="Senior Secondary Certificate"
				schoolName="Moret Comprehensive College"
				description="During my secondary school years, I was deeply involved in various academic and extracurricular activities, including serving as the Sport Prefect Boy, which laid the foundation for my further studies."
			/>
		</>
	);
};

export default Education;
