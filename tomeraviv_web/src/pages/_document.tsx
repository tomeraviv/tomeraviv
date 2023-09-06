import {Html, Head, Main, NextScript} from 'next/document'

export default function Document()
{
	return (
		<Html lang="en-us" className="bg-light dark:bg-dark">
			<Head>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<body>
			<Main/>
			<NextScript/>
			</body>
		</Html>
	)
}