import {Html, Head, Main, NextScript} from 'next/document'
import {ToggleDarkMode} from "~/components/toggleDarkMode";
import {GitHubLink} from "~/components/gitHubLink";

export default function Document()
{
	return (
		<Html lang="en-us" className="bg-light dark:bg-dark">
			<Head>
				<title>Tomer Aviv</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<body className="">
			<div className="absolute top-0 right-0 m-3 flex items-center gap-2">
				<ToggleDarkMode/>
				<GitHubLink repo_url="https://github.com/tomeraviv/tomeraviv"/>
			</div>

			<Main/>
			<NextScript/>
			</body>
		</Html>
	)
}