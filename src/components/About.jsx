import { useState, useEffect } from "react";
import king from "../assets/king.jpg";
import damie from '../assets/kingdamie.jpeg';
import DownloadButton from "./ui/DownloadButton";

const About = () => {
	const images = [king, damie]; // Add more images here if needed
	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length);
		}, 60000); // Change image every 60 seconds

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);

	return (
		<div className="flex items-start justify-center flex-col-reverse md:flex-row mt-8 md:mt-0">
			{/* Profile image */}
			<div className="w-full md:w-1/2 flex justify-end">
				<img
					src={images[currentImage]}
					alt="king"
					className="w-full md:w-[70%] h-full object-cover transition-all duration-700"
				/>
			</div>

			{/* About text */}
			<div className="w-full md:w-1/2 px-4 md:px-4">
				<h1 className="text-[26px] my-4 text-brand font-bold">About me</h1>
				<p className="text-gray-500 text-base w-full md:w-[90%]">
					A passionate software developer with a knack for creating intuitive
					and dynamic user interfaces. From a young age, I&rsquo;ve been
					fascinated by the intersection of technology and creativity, leading
					me to pursue a career in web development. I thrive on solving complex
					problems and continuously learning new technologies to enhance my
					skillset.
				</p>

				<div className="grid mt-4 mb-4 gap-y-4" style={{ gridTemplateColumns: "auto 1fr" }}>
					<label className="font-bold text-brand">Name:</label>
					<span className="ml-4 w-[90%]">Olaniyan Damilare Ridwan</span>
					<label className="font-bold text-brand">Email:</label>
					<span className="ml-4 w-[90%]">damyridwan@gmail.com</span>
					<label className="font-bold text-brand">Phone:</label>
					<span className="ml-4 w-[90%]">07033149596</span>
					<label className="font-bold text-brand">Location:</label>
					<span className="ml-4 w-[90%]">Nigeria</span>
					<label className="font-bold text-brand">Interests:</label>
					<span className="ml-4 w-[90%]">Coding, Problem-Solving, AI and Machine Learning.</span>
					<label className="font-bold text-brand">Hobbies:</label>
					<span className="ml-4 w-[90%]">Exploring new programming languages, playing chess.</span>
				</div>


				<DownloadButton />
			</div>
		</div>
	);
};

export default About;