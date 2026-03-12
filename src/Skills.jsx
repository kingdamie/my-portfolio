import PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillCard = ({ skill, percentage, lastWeek, lastMonth }) => {
	return (
		<div className="bg-white rounded-lg p-5 w-full text-center shadow-md m-[10px]">
			<h3 className="my-2.5 text-lg font-bold">{skill}</h3>
			<CircularProgressbar
				value={percentage}
				text={`${percentage}%`}
				strokeWidth={3}
				styles={buildStyles({
					pathColor: `#e55039`,
					textColor: "black",
					trailColor: "#d6d6d6",
				})}
			/>
			<div className="mt-2.5 flex justify-between">
				<div>
					<p className="font-bold">{lastWeek}%</p>
					<p className="text-[#777] text-xs">Last week</p>
				</div>
				<div>
					<p className="font-bold">{lastMonth}%</p>
					<p className="text-[#777] text-xs">Last month</p>
				</div>
			</div>
		</div>
	);
};

SkillCard.propTypes = {
	skill: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
	lastWeek: PropTypes.number.isRequired,
	lastMonth: PropTypes.number.isRequired,
};

const Skills = () => {
	const skillscard = [
		{ skill: "HTML", percentage: 90, lastWeek: 28, lastMonth: 60 },
		{ skill: "CSS", percentage: 80, lastWeek: 25, lastMonth: 55 },
		{ skill: "JavaScript", percentage: 75, lastWeek: 30, lastMonth: 50 },
	];
	const skills = [
		{ name: "HTML", level: 90 },
		{ name: "CSS/SCSS", level: 80 },
		{ name: "JavaScript", level: 75 },
		{ name: "Bootstrap", level: 50 },
		{ name: "PHP", level: 50 },
		{ name: "React Framework", level: 75 },
		{ name: "API Integration", level: 70 },
		{ name: "MySQL Database", level: 75 },
	];

	return (
		<>
			{/* Circular progress dashboard */}
			<div className="flex items-center p-5 flex-wrap">
				{skillscard.map((skillObj, index) => (
					<SkillCard
						key={index}
						skill={skillObj.skill}
						percentage={skillObj.percentage}
						lastWeek={skillObj.lastWeek}
						lastMonth={skillObj.lastMonth}
					/>
				))}
			</div>

			{/* Bar skills */}
			<div className="flex flex-wrap justify-between w-full my-4">
				{skills.map((skill, index) => (
					<div key={index} className="w-[48%] mb-5 max-sm:w-full">
						<div className="flex justify-between mb-[5px] font-bold">
							<span>{skill.name}</span>
							<span>{skill.level}%</span>
						</div>
						<div className="w-full bg-[#f3f3f3] rounded-[5px] h-[10px]">
							<div
								className="bg-brand-light h-full rounded-[5px]"
								style={{ width: `${skill.level}%` }}
							></div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Skills;
