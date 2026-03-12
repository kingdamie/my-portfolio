import { useState, useRef, useEffect } from "react";

export const Header = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeLink, setActiveLink] = useState(null);
	const navRef = useRef(null);
	const menuIconRef = useRef(null);

	const toggleMobileMenu = () => {
		setMobileMenuOpen((prev) => !prev);
	};

	const handleClickOutside = (event) => {
		if (
			navRef.current &&
			!navRef.current.contains(event.target) &&
			!menuIconRef.current.contains(event.target)
		) {
			setMobileMenuOpen(false);
		}
	};

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMobileMenuOpen]);

	useEffect(() => {
		if (navRef.current) {
			navRef.current.classList.toggle("open", isMobileMenuOpen);
		}
	}, [isMobileMenuOpen]);

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			let current = "";
			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				if (pageYOffset >= sectionTop - 60) {
					current = section.getAttribute("id");
				}
			});
			setActiveLink(current);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setMobileMenuOpen(false);
		}
	};

	return (
		<header className="sticky top-0 z-[1000] bg-white shadow-md w-full">
			<div className="max-w-7xl mx-auto flex justify-between px-8 md:px-12 h-auto md:h-[10vh] flex-col md:flex-row py-3 md:py-0 items-start md:items-center w-full">
				{/* Logo */}
				<div className="font-bold text-[22px] relative flex-[4] flex items-center justify-between w-full md:w-auto mb-0">
					<div className="relative">
						<span className="text-white ml-[5px]">D</span>amilare
						<div className="absolute h-[30px] w-[30px] bg-brand rounded-full p-3 top-[5%] left-0 z-[-1]"></div>
					</div>
					{/* Hamburger */}
					<div
						className="flex md:hidden cursor-pointer flex-col gap-[5px]"
						onClick={toggleMobileMenu}
						ref={menuIconRef}
					>
						<span className="block w-[25px] h-[3px] bg-brand"></span>
						<span className="block w-[25px] h-[3px] bg-brand"></span>
						<span className="block w-[25px] h-[3px] bg-brand"></span>
					</div>
				</div>

				{/* Nav */}
				<nav
					ref={navRef}
					className={`${isMobileMenuOpen ? "flex" : "hidden"
						} md:flex flex-col md:flex-row items-start md:items-center justify-between w-full md:w-auto gap-3 md:gap-0 md:flex-[8] md:mr-8 pt-3 md:pt-0 pb-2 md:pb-0`}
				>
					{["home", "about", "resume", "services", "projects", "contact"].map(
						(link) => (
							<a
								key={link}
								href={`#${link}`}
								className={`relative capitalize no-underline transition-colors duration-300 hover:text-brand
								after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:bg-brand after:w-0 after:transition-all after:duration-400 hover:after:w-full hover:after:left-0
								${activeLink === link ? "font-bold text-brand" : "text-black"}`}
								onClick={() => scrollToSection(link)}
							>
								{link.charAt(0).toUpperCase() + link.slice(1)}
							</a>
						)
					)}
				</nav>

			</div>
		</header>

	);
};
