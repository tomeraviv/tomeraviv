import Head from "next/head";
import {UserCircleIcon} from "@heroicons/react/24/solid";
import {MyLink} from "~/components/myLink";
import RiveCatAnimated from "~/components/riveCatAnimated";
import {GitHubLink} from "~/components/gitHubLink";
import {ToggleDarkMode} from "~/components/toggleDarkMode";

export default function Home()
{
	return (
		<>
			<Head>
				<title>Tomer Aviv</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<div className="absolute top-0 m-3 gap-2 right-0 flex items-center">
				<ToggleDarkMode/>
				<GitHubLink repo_url="https://github.com/tomeraviv/tomeraviv"/>
			</div>


			<main className="flex min-h-screen flex-col items-center justify-center dark:bg-gray-950">
				<div className="container flex flex-grow flex-col items-center justify-center gap-6 px-4 sm:gap-12">
					<h1 className="text-lg font-extrabold tracking-tight text-black dark:text-white sm:text-3xl">
						<UserCircleIcon className="block text-lg text-black dark:text-white"/>
						Tomer Aviv
					</h1>

					<div className="grid w-60 grid-cols-1 gap-2 sm:w-80 md:gap-2">
						<RiveCatAnimated/>
						<MyLink text="LinkedIn" href="https://www.linkedin.com/in/tomer-aviv-link/" is_external={true}/>
						<MyLink text="Oniverkita" href="https://www.oniverkita.co.il/" is_external={true}/>
						<MyLink text="Send Me A Message" href="/contact"/>
					</div>
				</div>
				<div className="h-full w-full flex-grow"/>
			</main>
		</>
	);
}
