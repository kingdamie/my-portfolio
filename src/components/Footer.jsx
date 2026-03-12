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
		<footer className="bg-black text-brand-light py-8">
			<div className="flex justify-between max-w-[1200px] mx-auto flex-wrap">
				{/* About Section */}
				<div className="flex-1 p-4 flex flex-col items-start min-w-full md:min-w-0">
					<h3 className="mb-4 text-2xl font-bold">About</h3>
					<p className="text-[#aaa] my-2">
						I&apos;m Olaniyan Damilare Ridwan, a dedicated software developer with a
						solid foundation in web development and growing expertise in machine
						learning. My passion for technology stems from a deep curiosity
						about the digital world, driving me to create seamless user
						experiences and continuously improve my skills.
					</p>
					<div className="mt-2">
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#aaa] mr-4 text-2xl hover:text-accent transition-colors duration-300"
						>
							<FaTwitter />
						</a>
						<a
							href="https://www.instagram.com/king_damie/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#aaa] mr-4 text-2xl hover:text-accent transition-colors duration-300"
						>
							<FaInstagram />
						</a>
					</div>
				</div>

				{/* Links Section */}
				<div className="flex-1 p-4 text-left md:text-center min-w-full md:min-w-0">
					<h3 className="mb-4 text-2xl font-bold">Links</h3>
					<ul className="list-none p-0">
						{[
							{ href: "#home", icon: <FaHome />, label: "Home" },
							{ href: "#about", icon: <FaUser />, label: "About" },
							{ href: "#services", icon: <MdMiscellaneousServices />, label: "Services" },
							{ href: "#projects", icon: <IoMdCodeWorking />, label: "Projects" },
							{ href: "#contact", icon: <FaPhone />, label: "Contact" },
						].map(({ href, icon, label }) => (
							<li key={label} className="my-2">
								<a
									href={href}
									className="text-[#aaa] no-underline flex items-center gap-4 justify-start md:justify-center hover:text-accent transition-colors duration-300"
								>
									{icon} {label}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Contact Section */}
				<div className="flex-1 p-4 min-w-full md:min-w-0">
					<h3 className="mb-4 text-2xl font-bold">Have a Question?</h3>
					<p className="flex items-center gap-4 text-[#aaa] my-2">
						<FaMapMarkerAlt /> Oyo state, Nigeria
					</p>
					<p className="flex items-center gap-4 my-2">
						<a
							href="tel:+2347033149596"
							className="text-[#aaa] no-underline flex items-center gap-4 hover:text-accent transition-colors duration-300"
						>
							<FaPhoneAlt /> +234703 314 9596
						</a>
					</p>
					<p className="flex items-center gap-4 my-2">
						<a
							href="mailto:damyridwan@gmail.com"
							className="text-[#aaa] no-underline flex items-center gap-4 hover:text-accent transition-colors duration-300"
						>
							<FaEnvelope /> damyridwan@gmail.com
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
