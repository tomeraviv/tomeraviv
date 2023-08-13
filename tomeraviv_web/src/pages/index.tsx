import {signIn, signOut, useSession} from "next-auth/react";
import Head from "next/head";
import {api} from "~/utils/api";
import {UserCircleIcon} from "@heroicons/react/24/solid";
import {MyLink} from "~/components/MyLink";

export default function Home()
{
	const hello = api.example.hello.useQuery({text: "from tRPC"});

	return (
		<>
			<Head>
				<title>Tomer Aviv</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-950">
				<div className="container flex flex-col items-center justify-center gap-6 sm:gap-12 px-4 py-16 ">

					<h1 className="text-lg font-extrabold tracking-tight text-black dark:text-white sm:text-3xl">
						<UserCircleIcon className="block text-lg text-black dark:text-white"/>
						Tomer Aviv
					</h1>

					<div className="grid grid-cols-1 w-60 gap-2 sm:w-80 md:gap-2">
						<MyLink text="Résumé" href="/cv"/>
						<MyLink text="LinkedIn" href="https://www.linkedin.com/in/tomer-aviv-link/" />
						<MyLink text="Send Me A Message" href="/contact"/>
					</div>

					<div className="flex flex-col items-center gap-2">
						<p className="text-2xl text-black dark:text-white">
							{hello.data ? hello.data.greeting : "Loading tRPC query..."}
						</p>
						<AuthShowcase/>
					</div>
					<div className="h-32 w-full" />
				</div>
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
			<p className="text-center text-2xl text-white">
				{sessionData && <span>Logged in as {sessionData.user?.name}</span>}
				{secretMessage && <span> - {secretMessage}</span>}
			</p>
			<button
				className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
				onClick={sessionData ? () => void signOut() : () => void signIn()}
			>
				{sessionData ? "Sign out" : "Sign in"}
			</button>
		</div>
	);
}
