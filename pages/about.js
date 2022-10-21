import styles from "../styles/About.module.css";
import Image from "next/image";

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            <p className={styles.extraGreen}>I Jason. This description.</p>
            {/* load image locally */}
            <Image 
                src="/vercel.svg"
                alt="vercel logo"
                width={300}
                height={300}
            />
            {/* load image hosted on another domain */}
            <Image 
                src="https://placekitten.com/400/500"
                alt="portfolio cat"
                width={400}
                height={500}
            />
        </div>
    );
}