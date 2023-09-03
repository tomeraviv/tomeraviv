import Head from "next/head";
import {UserCircleIcon} from "@heroicons/react/24/solid";
import {MyLink} from "~/components/myLink";
import RiveCatAnimated from "~/components/riveCatAnimated";
import {GitHubLink} from "~/components/gitHubLink";
import {ToggleDarkMode} from "~/components/toggleDarkMode";
import * as process from "process";

export function getStaticProps()
{
	return {
		props: {
			renderDate: new Date().toString(),
			renderInstance: process.env.VERCEL_REGION ?? "VERCEL"
		}
	};
}

export default function Home({renderDate, renderInstance}: { renderDate: string, renderInstance: string })
{
	return (
		<>
			<Head>
				<title>Tomer Aviv</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<div className="absolute top-0 right-0 m-3 flex items-center gap-2">
				<ToggleDarkMode/>
				<GitHubLink repo_url="https://github.com/tomeraviv/tomeraviv"/>
			</div>


			<div className="flex min-h-screen flex-col items-center justify-center dark:bg-gray-950">
				<div className="container flex flex-grow flex-col items-center justify-center gap-6 px-4 sm:gap-16">
					<h1 className="text-2xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl">
						<UserCircleIcon className="block text-lg text-black dark:text-white"/>
						Tomer Aviv
					</h1>

					<nav className="grid w-60 grid-cols-1 gap-2 sm:w-80 md:gap-2">
						<RiveCatAnimated/>
						<MyLink text="LinkedIn" href="https://www.linkedin.com/in/tomer-aviv-link/" is_external={true}/>
						<MyLink text="Oniverkita" href="https://www.oniverkita.co.il/" is_external={true}/>
						<MyLink text="Send Me A Message" href="/contact"/>
					</nav>

					<footer className="gap-1 flex text-sm text-gray-500 dark:text-gray-500">
						<span>© Tomer Aviv</span>
						- Rendered at
						<span className="text-orange-800 dark:text-orange-300/70">{renderDate}</span> by
						<a className="text-orange-800 dark:text-orange-300/70" href="https://vercel.com" target="_blank">{renderInstance}</a>
						using
						<a className="text-orange-800 dark:text-orange-300/70" href="https://nextjs.org" target="_blank">Next.js</a>
					</footer>

				</div>
				<div className="h-full w-full flex-grow"/>
			</div>
		</>
	);
}
