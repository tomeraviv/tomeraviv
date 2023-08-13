import Link from "next/link";

export function MyLink({text, href}: { text: string; href: string })
{
	const target = href.startsWith("http") ? "_blank" : "_self";

	return (
		<Link className="flex max-w-xs flex-col rounded-xl
		bg-blue-800/10 dark:bg-blue-200/20 p-3 sm:p-4 text-black dark:text-white hover:bg-blue-400/30 hover:dark:bg-blue-400/50
		active:bg-blue-400/60 active:dark:bg-blue-500/80" href={href} target={target}>
			<h3 className="text-lg sm:text-xl font-bold">
				{text}
				<span className="float-right">→</span>
			</h3>
		</Link>
	);
}