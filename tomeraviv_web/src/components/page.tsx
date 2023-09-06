import {Avatar} from "~/components/avatar";
import {ToggleDarkMode} from "~/components/toggleDarkMode";
import {GitHubLink} from "~/components/gitHubLink";

export function Footer({renderProps}: { renderProps: { renderDate: string, renderTime: string, renderInstance: string } })
{
	return <footer className="flex flex-wrap justify-center gap-1 text-sm text-gray-500 dark:text-gray-500">
		© Tomer Aviv - Rendered at
		<span title={renderProps.renderTime} className="text-orange-800 dark:text-orange-300/70">{renderProps.renderDate}</span> by
		<a className="text-orange-800 dark:text-orange-300/70" href="https://vercel.com" target="_blank">{renderProps.renderInstance}</a> using
		<a className="text-orange-800 dark:text-orange-300/70" href="https://nextjs.org" target="_blank">Next.js</a>
	</footer>;
}

export function Layout({children, renderProps}: {
	children: React.ReactNode,
	renderProps: { renderDate: string, renderTime: string, renderInstance: string }
})
{
	return (
		<>
			<div className="absolute top-0 right-0 m-3 flex items-center gap-2">
				<ToggleDarkMode/>
				<GitHubLink repo_url="https://github.com/tomeraviv/tomeraviv"/>
			</div>
			<div className="flex min-h-screen flex-col items-center justify-center dark:bg-gray-950">
				<div className="container flex flex-grow flex-col items-center justify-center gap-6 px-4 sm:gap-8">
					<Avatar name="Tomer Aviv"/>
					{children}
					<Footer renderProps={renderProps}/>
				</div>
				<div className="h-full w-full flex-grow"/>
			</div>
		</>
	);
}