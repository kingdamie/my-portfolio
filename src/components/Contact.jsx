import { FaPhoneAlt, FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
	return (
		<>
			<h2>Contact Me</h2>
			<p>Feel free to reach out to me through any of the following channels:</p>

			<div className="contact-info">
				{/* Phone Number */}
				<div className="contact-item">
					<div className="contact-icon">
						<FaPhoneAlt />
					</div>
					<h3>Contanct Number</h3>
					<a href="tel:+2347033149596">+234703 314 9596</a>
				</div>

				{/* Email Address */}
				<div className="contact-item">
					<div className="contact-icon">
						<FaEnvelope />
					</div>
					<h3>Email Address</h3>

					<a href="mailto:damyridwan@gmail.com">damyridwan@gmail.com</a>
				</div>

				{/* GitHub Profile */}
				<div className="contact-item">
					<div className="contact-icon">
						<FaGithub />
					</div>
					<h3>GitHub Account</h3>

					<a
						href="https://github.com/kingdamie"
						target="_blank"
						rel="noopener noreferrer"
					>
						kingdamie
					</a>
				</div>
			</div>
		</>
	);
};

export default Contact;
