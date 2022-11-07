import Image from "next/image";

export default function ProjectList() {
    return (
        <div id="projects" className="pt-20 mt-28 mx-auto w-9/12">
            <h2 className="text-4xl mx-auto w-11/12 md:w-10/12">Projects</h2>

			<div className="mt-8 flex flex-wrap justify-center">
				<a href="https://github.com/jasonxchen/tensorflow-recycling" target="_blank">
					<Image 
						src="/img/prediction-example.png"
						alt="TensorFlow Recycling Example"
						width={345.5}
						height={293}
					/>
				</a>
				<div className="mt-2 w-11/12 md:w-6/12 ml-8">
					<h3 className="text-3xl w-fit">TensorFlow Recycling</h3>
					<p>
						Trained a neural network machine learning model that classifies images of plastic resin recycling codes using TensorFlow, and implemented model utilization on a local web server.
						Gathered data, built neural networks, trained several models, and made inferences on new data.
					</p>
				</div>
			</div>

			<div className="mt-8 flex flex-wrap justify-center">
				<a href="https://bloom-jc.netlify.app" target="_blank">
					<Image 
						src="/img/bloom-home-page.png"
						alt="Bloom Home Page"
						width={332.6}
						height={175.6}
					/>
				</a>
				<div className="mt-2 w-11/12 md:w-6/12 ml-8">
					<h3 className="text-3xl w-fit">Bloom</h3>
					<p>
						Built with MERN stack and styled with Tailwind CSS.
						Full-stack C2C e-commerce web application for buying, selling, updating, and deleting courses/workshops.
						Frequent Git usage in a team setting with communication and product planning with teammates.
					</p>
				</div>
			</div>

			<div className="mt-8 flex flex-wrap justify-center">
				<a href="https://spotifly.fly.dev" target="_blank">
					<Image 
						src="/img/spotifly-home-page.png"
						alt="Spotifly Home Page"
						width={359.75}
						height={178.5}
					/>
				</a>
				<div className="mt-2 w-11/12 md:w-6/12 ml-8">
				<h3 className="text-3xl w-fit">Spotifly</h3>
					<p>
						Full-stack web application that allows creation of exercise routines using data fetched from an API. 
						Wrote extensive user authentication and authorization from scratch for requests to the database. 
						Increased knowledge of styling using Tailwind CSS and database deployment/management.
					</p>
				</div>
			</div>

			<div className="mt-8 flex flex-wrap justify-center">
				<a href="https://jasonxchen.github.io/why-so-sus" target="_blank">
					<Image 
						src="/img/why-so-sus-demo.png"
						alt="Why So Sus Demo"
						width={355.75}
						height={173.5}
					/>
				</a>
				<div className="mt-2 w-11/12 md:w-6/12 ml-8">
				<h3 className="text-3xl w-fit">Why So Sus?</h3>
					<p>
						Object-oriented single-player desktop browser game with a frame-based rendering method. 
						Deployed playable product after a week of development using the HTML canvas element for graphics and JavaScript for all game logic.
					</p>
				</div>
			</div>
        </div>
    );
}
