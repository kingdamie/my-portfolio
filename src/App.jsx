import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import About from "./components/About";
import { Resume } from "./components/Resume";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Loader from "./components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		AOS.init({ duration: 2000 });
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<>
			<Header />

			{/* Home */}
			<section
				id="home"
				className="h-[90vh] w-full flex items-center justify-center flex-col gap-4"
				style={{ background: "linear-gradient(to right, #fad390 50%, whitesmoke  50%)" }}
				data-aos="fade-up"
			>
				<Home />
			</section>

			{/* About */}
			<section
				id="about"
				className="flex items-start gap-4"
				data-aos="zoom-in"
			>
				<About />
			</section>

			{/* Resume */}
			<section id="resume">
				<Resume />
			</section>

			{/* Services */}
			<section
				id="services"
				className="text-center py-32 md:py-64 px-8"
			>
				<Services />
			</section>

			{/* Projects */}
			<section
				id="projects"
				className="pt-16 pb-8"
				data-aos="zoom-in-up"
			>
				<Project />
			</section>

			{/* Contact */}
			<section
				id="contact"
				className="py-20 px-8 text-center"
				data-aos="zoom-in-up"
				data-aos-duration="1000"
			>
				<Contact />
			</section>

			<Footer />
		</>
	);
}

export default App;
