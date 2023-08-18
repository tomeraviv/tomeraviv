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
				<title>Tomer Aviv</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<GitHubLink repo_url="https://github.com/tomeraviv/test"/>

			<main className="flex min-h-screen flex-col items-center justify-center dark:bg-gray-950">
				<div className="container flex flex-grow flex-col items-center justify-center gap-6 px-4 sm:gap-12">
					<h1 className="text-lg font-extrabold tracking-tight text-black dark:text-white sm:text-3xl">
						<UserCircleIcon className="block text-lg text-black dark:text-white"/>
						Tomer Aviv
					</h1>

					<div className="grid w-60 grid-cols-1 gap-2 sm:w-80 md:gap-2">
						<RiveCatAnimated/>
						<MyLink text="Résumé" href="/cv"/>
						<MyLink text="LinkedIn" href="https://www.linkedin.com/in/tomer-aviv-link/" is_external={true}/>
						<MyLink text="Oniverkita.co.il" href="https://www.oniverkita.co.il/" is_external={true}/>
						<MyLink text="Send Me A Message" href="/contact"/>
					</div>
				</div>
				<div className="flex-grow w-full h-full"/>
			</main>
		</>
	);
}


function AuthShowcase()
{
	const {data: sessionData} = useSession();

	const {data: secretMessage} = api.example.getSecretMessage.useQuery(
		undefined, // no input
		{enabled: sessionData?.user !== undefined}
	);

	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<p className="text-center text-2xl text-black">
				{sessionData && <span>Logged in as {sessionData.user?.name}</span>}
				{secretMessage && <span> - {secretMessage}</span>}
			</p>
			<button
				className="rounded-full bg-black/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-white/20"
				onClick={sessionData ? () => void signOut() : () => void signIn()}
			>
				{sessionData ? "Sign out" : "Sign in"}
			</button>
		</div>
	);
}
