import React, { useEffect } from "react";
import PropTypes from "prop-types";
// translator
import translatorShowcase from "../assets/translator/showcase.png";
import translatorWorking from "../assets/translator/working.png";
//theme
import theme from "../assets/multi/theme.png";
import theme1 from "../assets/multi/theme2.png";
import theme2 from "../assets/multi/theme3.png";
// space
import space from "../assets/space/Screenshot (431).png";
import space1 from "../assets/space/Screenshot (432).png";
import space2 from "../assets/space/Screenshot (433).png";
import space3 from "../assets/space/Screenshot (434).png";
import space0 from "../assets/space/Screenshot (436).png";
// weather
import weather from "../assets/weather/Screenshot (438).png";
import weather1 from "../assets/weather/Screenshot (439).png";
// hesapro
import hesapro from "../assets/hesapro/Screenshot (417).png";
import hesapro1 from "../assets/hesapro/Screenshot (421).png";
import hesapro2 from "../assets/hesapro/Screenshot (422).png";
import hesapro3 from "../assets/hesapro/Screenshot (423).png";
import hesapro4 from "../assets/hesapro/Screenshot (424).png";
//worldremit
import fintech from "../assets/worldremit/Screenshot (441).png";
import fintech1 from "../assets/worldremit/Screenshot (443).png";
import fintech2 from "../assets/worldremit/Screenshot (444).png";
import fintech3 from "../assets/worldremit/Screenshot (445).png";
import fintech4 from "../assets/worldremit/Screenshot (446).png";

// Modal Component
const Modal = ({ isOpen, onClose, project }) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const renderImages = () => {
		if (!project.images || project.images.length === 0) return null;
		if (project.images.length === 1) {
			return (
				<div className="flex items-center justify-center">
					<img src={project.images[0]} alt={project.name} className="w-1/2" />
				</div>
			);
		}
		if (project.images.length === 2) {
			return (
				<div className="grid grid-cols-2 gap-2.5">
					<img src={project.images[0]} alt={project.name} className="w-full rounded-lg" />
					<img src={project.images[1]} alt={project.name} className="w-full rounded-lg" />
				</div>
			);
		}
		// 3 and 4 images: 2-column grid
		return (
			<div className="grid grid-cols-2 gap-2.5 justify-center items-center max-sm:grid-cols-1">
				{project.images.map((img, i) => (
					<img key={i} src={img} alt={project.name} className="w-full rounded-lg" />
				))}
			</div>
		);
	};

	return (
		<div
			className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]"
			onClick={onClose}
		>
			<div
				className="bg-white p-0 px-5 pb-5 rounded-[5px] w-[70%] max-w-[700px] overflow-y-auto h-[80%] max-sm:w-[90%]"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Heading */}
				<div className="flex items-center justify-between sticky top-0 bg-white py-2.5 px-2.5">
					<h2 className="text-brand text-base font-semibold">{project.name}</h2>
					<button
						className="border-none bg-accent px-2 py-1 rounded-lg cursor-pointer transition-all duration-[400ms] hover:bg-brand-light hover:text-white"
						onClick={onClose}
					>
						Close
					</button>
				</div>

				{renderImages()}

				<p className="text-center text-sm my-4">{project.details}</p>
				<p>
					<strong>Languages Used:</strong> {project.language}
				</p>
				{project.github && (
					<p className="my-4">
						<strong>GitHub:</strong>{" "}
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-brand-light no-underline text-sm"
						>
							{project.github}
						</a>
					</p>
				)}
				{project.live && (
					<p className="my-4">
						<strong>Live Site:</strong>{" "}
						<a
							href={project.live}
							target="_blank"
							rel="noopener noreferrer"
							className="text-brand-light no-underline text-sm"
						>
							{project.live}
						</a>
					</p>
				)}
			</div>
		</div>
	);
};

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	project: PropTypes.shape({
		name: PropTypes.string.isRequired,
		details: PropTypes.string.isRequired,
		language: PropTypes.string.isRequired,
		github: PropTypes.string.isRequired,
		live: PropTypes.string,
		images: PropTypes.arrayOf(PropTypes.string),
	}).isRequired,
};

// ProjectCard Component
const ProjectCard = ({ project }) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	return (
		<>
			<div
				className="relative cursor-pointer overflow-hidden max-w-[350px] w-full rounded-lg h-[300px] shadow-md flex flex-col"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={() => setIsModalOpen(true)}
			>
				<img src={project.image} alt={project.name} className="w-full h-[80%] object-cover" />
				<h3 className="text-center my-4 flex-shrink-0 h-[20%] text-brand font-semibold">
					{project.name}
				</h3>
				{isHovered && (
					<div className="absolute bottom-0 bg-black/70 text-white w-full text-center p-2.5 h-full flex flex-col items-center justify-evenly">
						<p>{project.description}</p>
						<p>
							<strong>Languages Used:</strong> {project.language}
						</p>
					</div>
				)}
			</div>
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				project={project}
			/>
		</>
	);
};

ProjectCard.propTypes = {
	project: PropTypes.shape({
		name: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		details: PropTypes.string.isRequired,
		language: PropTypes.string.isRequired,
		github: PropTypes.string.isRequired,
		live: PropTypes.string,
	}).isRequired,
};

// Project Component
const Project = () => {
	const projects = [
		{
			name: "Hesapro",
			image: hesapro4,
			description:
				"Hesapro is a platform where users can purchase gaming accounts for Fortnite, Stream, Valorant, and League of Legends. It features filters to help users specify the type of account they are looking for, with available accounts listed for sale.",
			details:
				"Hesapro is an online marketplace dedicated to providing gamers with access to accounts for popular games like Fortnite, Stream, Valorant, and League of Legends. The platform features a variety of filters that allow users to refine their search based on specific criteria such as account rank, achievements, or items included. Users can browse through detailed listings to find accounts that match their needs and make purchases directly on the platform. The application is powered by a backend API developed using Laravel, which ensures robust and secure handling of data and transactions. This integration allows for real-time updates and smooth interactions between users and the platform, enhancing the overall user experience.",
			language: "React Js (API integration)",
			github: "",
			live: "https://hesapro-project.vercel.app/",
			images: [hesapro, hesapro1, hesapro2, hesapro3],
		},
		{
			name: "MultiCurrency Hub",
			image: fintech,
			description:
				"MultiCurrency Hub is a fintech demo that displays account balances in Naira, Dollar, and Euro. It uses APIs to identify network providers based on phone numbers, offers live Dollar-to-Naira currency conversion, and features a Nigeria-only money transfer service.",
			details:
				"MultiCurrency Hub is a fintech demo platform featuring multi-currency account balances in Naira, Dollar, and Euro. The platform integrates APIs to identify network providers globally based on phone number inputs and allows real-time currency conversion from Dollar to Naira. Additionally, it provides a money transfer service exclusive to Nigeria, where users input their account number, select a bank from a fetched list of Nigerian banks, and have the account holder's name automatically retrieved.",
			language: "React Js (API integration)",
			github: "",
			live: "https://multi-currency-hub.vercel.app/",
			images: [fintech1, fintech2, fintech3, fintech4],
		},
		{
			name: "Weather App",
			image: weather,
			description:
				"The Weather App is a user-friendly application that provides real-time weather updates using data from a weather API. Users can quickly check current conditions, including temperature, humidity, wind speed, and general weather conditions for any location.",
			details:
				"The Weather App delivers current weather information, including temperature, humidity, and wind speed. It also displays general weather conditions such as clear skies, clouds, or rain. Users can search for weather updates for any location. The app integrates with a weather API to ensure the data is accurate and up-to-date.",
			language: "React Js (API integration)",
			github: "https://github.com/kingdamie/Weather_App",
			live: "https://weather-app-tawny-rho.vercel.app/",
			images: [weather, weather1],
		},
		{
			name: "Language Translator",
			image: translatorShowcase,
			description:
				"A web application that enables users to translate text between different languages. It features text-to-speech and copy-to-clipboard features.",
			details:
				"This dynamic web application facilitates language translation by providing two text areas: one for editable input and one for displaying translations. Users can select source and target languages from dropdown menus, with defaults set to English and Hindi. A Translate text button sends a request to the MyMemory API to handle translations.",
			language: "HTML, CSS, JavaScript (API integration)",
			github: "https://github.com/kingdamie/Language-Translator",
			live: "https://king-lang-translator.onrender.com",
			images: [translatorWorking],
		},
		{
			name: "Themed Calculator",
			image: theme,
			description:
				"A themed calculator that allows users to perform basic arithmetic operations with the ability to switch between multiple themes for a personalized user experience.",
			details:
				"This themed calculator is a web-based application built with React and Node.js. It provides a user-friendly interface for basic arithmetic operations. The calculator features three different themes that users can switch between, with each theme changing the calculator's background color, button styles, and overall visual appearance.",
			language: "HTML, CSS, JavaScript",
			github: "https://github.com/kingdamie/themed-calculator",
			live: "",
			images: [theme, theme1, theme2],
		},
		{
			name: "Space Tourism Website",
			image: space0,
			description:
				"'Space Tourism Website' is a comprehensive web application that offers users an immersive experience exploring various destinations in our solar system.",
			details:
				"Destination: Explore the Moon, Mars, Europa, and Titan with detailed descriptions, travel distances, and estimated times. Meet Your Crew: Meet the team who will accompany you on your journey. Technology: Learn about the space capsule's design for safe Earth reentry.",
			language: "HTML, CSS, JavaScript",
			github: "https://github.com/kingdamie/space-tourism-website",
			live: "https://kingdamie21space.onrender.com/",
			images: [space, space1, space2, space3],
		},
	];

	return (
		<>
			<h2 className="text-center my-4 text-[26px] text-brand font-bold">
				My Projects
			</h2>
			<div className="flex items-center justify-center gap-4 flex-wrap">
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</>
	);
};

export default Project;
