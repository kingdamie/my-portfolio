import TypingEffect from "react-typing-effect";

export const Home = () => {
	return (
		<>
			<h4 className="uppercase tracking-[5px] leading-4 text-brand text-sm">
				hey! i am
			</h4>
			<h1 className="text-5xl font-bold text-center md:text-left">
				Olaniyan Damilare
			</h1>
			<h2 className="text-xl md:text-2xl">
				I&rsquo;m a{" "}
				<span className="text-brand font-semibold">
					<TypingEffect
						text={["Software Developer"]}
						speed={100}
						eraseDelay={1000}
						typingDelay={500}
						eraseSpeed={50}
					/>
				</span>
			</h2>
		</>
	);
};
