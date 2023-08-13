import Head from "next/head";
import {UserCircleIcon} from "@heroicons/react/24/solid";
import {MyLink} from "~/components/MyLink";

export default function Home()
{
	return (
		<>
			<Head>
				<title>Tomer Aviv - Résumé</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-950">
				<div className="container flex flex-col items-center justify-center gap-6 sm:gap-12 px-4 py-16 ">

					<h1 className="text-lg font-extrabold tracking-tight text-black dark:text-white sm:text-3xl">
						<UserCircleIcon className="block text-lg text-black dark:text-white"/>
						Tomer Aviv
					</h1>

					<div className="grid grid-cols-1 w-60 gap-2 sm:w-80 md:gap-2">
						<MyLink text="Back" href="/"/>
					</div>

					<div className="h-32 w-full" />
				</div>
			</main>
		</>
	);
}

