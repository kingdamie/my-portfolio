import { FaPhoneAlt, FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
	return (
		<>
			<h2 className="text-[38px] mb-4 text-brand font-bold">Contact Me</h2>
			<p className="text-lg mb-8">
				Feel free to reach out to me through any of the following channels:
			</p>

			<div className="flex justify-center flex-wrap gap-8">
				{/* Phone Number */}
				<div className="flex items-center gap-3 flex-col shadow-md p-6 rounded-[10px] w-[300px]">
					<div className="text-white bg-brand-light text-2xl rounded-full w-[70px] h-[70px] flex items-center justify-center">
						<FaPhoneAlt />
					</div>
					<h3 className="font-semibold">Contact Number</h3>
					<a
						href="tel:+2347033149596"
						className="text-lg text-brand-light no-underline transition-colors duration-300 hover:text-black"
					>
						+234703 314 9596
					</a>
				</div>

				{/* Email Address */}
				<div className="flex items-center gap-3 flex-col shadow-md p-6 rounded-[10px] w-[300px]">
					<div className="text-white bg-brand-light text-2xl rounded-full w-[70px] h-[70px] flex items-center justify-center">
						<FaEnvelope />
					</div>
					<h3 className="font-semibold">Email Address</h3>
					<a
						href="mailto:damyridwan@gmail.com"
						className="text-lg text-brand-light no-underline transition-colors duration-300 hover:text-black"
					>
						damyridwan@gmail.com
					</a>
				</div>

				{/* GitHub Profile */}
				<div className="flex items-center gap-3 flex-col shadow-md p-6 rounded-[10px] w-[300px]">
					<div className="text-white bg-brand-light text-2xl rounded-full w-[70px] h-[70px] flex items-center justify-center">
						<FaGithub />
					</div>
					<h3 className="font-semibold">GitHub Account</h3>
					<a
						href="https://github.com/kingdamie"
						target="_blank"
						rel="noopener noreferrer"
						className="text-lg text-brand-light no-underline transition-colors duration-300 hover:text-black"
					>
						kingdamie
					</a>
				</div>
			</div>
		</>
	);
};

export default Contact;
