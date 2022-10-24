import Image from "next/image";

export default function About() {
    return (
        <div id="about" className="flex flex-col items-center gap-8">
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
                        Information about me will go here in this section. These extra words put here to remind myself of the width.
                    </p>
                    <p className="self-center">{`[Contact information here]`}</p>
                </div>
            </div>
            <div>
                <h3 className="text-3xl text-center">Skills</h3>
                <p className="mt-2">
                    Python | C++ | Java | React | Node | JavaScript | HTML | CSS | Tailwind CSS | Express | MongoDB | SQL | Postgres | Sequelize | Git | Github
                </p>
            </div>
        </div>
    );
}
