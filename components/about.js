import Image from "next/image";

export default function About() {
    return (
        <div id="about" className="pt-20 flex flex-col items-center gap-8">
            <div className="mx-auto flex justify-center gap-8 flex-wrap w-11/12 md:w-8/12">
                <Image 
                    src="/img/jason_chen.png"
                    alt="Jason Chen"
                    width={300}
                    height={300}
                    className="rounded-full"
                />
                <div className="flex flex-col gap-4 w-full lg:w-9/12 xl:w-7/12">
                    <h2 className="text-4xl">About</h2>
                    <p>
                        {`Hi there! I love solving problems and strive to make an impact wherever I go. I'm very meticulous in my work and I always try to serve the best products possible as I've always been my biggest critic. For this reason, I value security and being able to identify and fix possible vulnerabilities. I would describe myself as a fast learner and curious tinkerer. I also have a keen eye for debugging so allow me to take on your challenges.`}
                    </p>
                    <div className="self-center flex gap-4">
                        <a href="https://github.com/jasonxchen" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/jasonxchen" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://docs.google.com/document/d/e/2PACX-1vQx5oaUfUXGcJdrfBNIqwW63VDBrBYY6m-be57P4Vj1VA2uTxWrwJQdvUf9SU7j1Q/pub" target="_blank" rel="noreferrer">Resume</a>
                    </div>
                </div>
            </div>
            <div className="w-11/12 md:w-8/12">
                <h3 className="text-3xl text-center">Skills</h3>
                <p className="mt-2">
                    Python, C++, Java, React, Node, JavaScript, HTML, CSS, Tailwind CSS, Express, MongoDB, SQL, Postgres, Sequelize, Git, Github
                </p>
            </div>
        </div>
    );
}
