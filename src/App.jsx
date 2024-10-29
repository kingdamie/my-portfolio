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

		 AOS.init({duration: 2000});

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
			<section id="home" className="home " data-aos="fade-up">
				<Home />
			</section>
			<section id="about" className="about" data-aos="zoom-in">
				<About />
			</section>
			<section id="resume">
				<Resume />
			</section>
			<section id="services" className="services">
				<Services />
			</section>
			<section id="projects" className="project" data-aos="zoom-in-up">
				<Project />
			</section>
			<section
				id="contact"
				className="contact-section"
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
