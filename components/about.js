import Image from "next/image";

export default function About() {
    return (
        <div className="mx-auto flex w-8/12">
            <Image 
                src=""
                alt="Jason Chen"
                width={300}
                height={300}
            />
            <div className="flex flex-col w-full">
                <h2 className="text-4xl">About</h2>
                <p>Information about me</p>
                <p className="self-end">Tech Stack | Contact</p>
            </div>
        </div>
    );
}
