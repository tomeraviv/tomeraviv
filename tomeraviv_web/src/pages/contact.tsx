import {signIn, signOut, useSession} from "next-auth/react";
import Head from "next/head";
import {api} from "~/utils/api";
import {UserCircleIcon} from "@heroicons/react/24/solid";
import {MyLink} from "~/components/myLink";
import RiveCatAnimated from "~/components/riveCatAnimated";
import {GitHubLink} from "~/components/gitHubLink";

export default function Home()
{
	return (
		<>
			<Head>
				<title>Tomer Aviv - Contact</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<GitHubLink repo_url="https://github.com/tomeraviv/tomeraviv"/>

			<main className="flex min-h-screen flex-col items-center justify-center dark:bg-gray-950">
				<div className="container flex flex-grow flex-col items-center justify-center gap-6 px-4 sm:gap-12">
					<h1 className="text-lg font-extrabold tracking-tight text-black dark:text-white sm:text-3xl">
						<UserCircleIcon className="block text-lg text-black dark:text-white"/>
						Tomer Aviv
					</h1>

					<div className="grid w-60 grid-cols-1 gap-2 sm:w-80 md:gap-2">
						<RiveCatAnimated/>
						<MyLink text="Back" href="/"/>
					</div>
				</div>
				<div className="flex-grow w-full h-full"/>
			</main>
		</>
	);
}
