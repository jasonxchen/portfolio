import styles from "../styles/Home.module.css";
import Head from "next/head";
import Landing from "../components/landing";
import About from "../components/about";
import ProjectList from "../components/projectList";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>{`Jason Chen`}</title>
				<meta name="Portfolio website for Jason Chen" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico?" />
			</Head>

			<Landing />
			
			<About />

			<ProjectList />

			<h2 className="text-center">Footer with contact info</h2>
		</div>
	);
}
