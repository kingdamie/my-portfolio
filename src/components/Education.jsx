import { IoSchool } from "react-icons/io5";
import PropTypes from "prop-types";

const EducationItem = ({ icon, year, degree, schoolName, description }) => {
	return (
		<div className="flex items-start gap-6 mb-8 border-b border-gray-200 pb-8 mt-4">
			<div className="bg-brand p-3 rounded-full flex-shrink-0">{icon}</div>
			<div className="flex flex-col gap-3">
				<div className="text-brand font-bold">{year}</div>
				<div className="font-bold text-2xl max-sm:text-sm">{degree}</div>
				<div className="font-bold max-sm:text-base">{schoolName}</div>
				<p className="text-[#333] max-sm:text-xs">{description}</p>
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
				year="2021 - 2025"
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
