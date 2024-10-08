import {
	FaTwitter,
	FaInstagram,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaHome,
	FaUser,
	FaPhone,
} from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMdCodeWorking } from "react-icons/io";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				{/* About Section */}
				<div className="footer-section about">
					<h3>About</h3>
					<p>
						I’m Olaniyan Damilare Ridwan, a dedicated software developer with a
						solid foundation in web development and growing expertise in machine
						learning. My passion for technology stems from a deep curiosity
						about the digital world, driving me to create seamless user
						experiences and continuously improve my skills.
					</p>
					<div className="footer-social">
						<a href="#" target="_blank" rel="noopener noreferrer">
							<FaTwitter />
						</a>
						<a
							href="https://www.instagram.com/king_damie/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram />
						</a>
					</div>
				</div>

				{/* Links Section */}
				<div className="footer-section links">
					<h3>Links</h3>
					<ul>
						<li>
							<a href="#home"><FaHome/> Home</a>
						</li>
						<li>
							<a href="#about"><FaUser /> About</a>
						</li>
						<li>
							<a href="#services"><MdMiscellaneousServices/> Services</a>
						</li>
						<li>
							<a href="#projects"><IoMdCodeWorking/> Projects</a>
						</li>
						<li>
							<a href="#contact"><FaPhone /> Contact</a>
						</li>
					</ul>
				</div>

				{/* Contact Section */}
				<div className="footer-section contact">
					<h3>Have a Question?</h3>
					<p>
						<FaMapMarkerAlt /> Oyo state, Nigeria
					</p>
					<p>
						<a href="tel:+2347033149596">
							<FaPhoneAlt />
							+234703 314 9596
						</a>
					</p>
					<p>
						<a href="mailto:damyridwan@gmail.com">
							<FaEnvelope />
							damyridwan@gmail.com
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
