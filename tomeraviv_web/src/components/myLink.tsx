import Link from "next/link";
import {boolean} from "zod";
import {ArrowLongRightIcon, ArrowRightIcon, ArrowTopRightOnSquareIcon} from "@heroicons/react/20/solid";

export function MyLink({text, href, icon, is_external}: { text: string; href: string, icon?: React.ReactNode, is_external?: boolean })
{
	const target = is_external ? "_blank" : "_self";

	return (
		<Link className="flex max-w-xs flex-col rounded-xl
		bg-blue-900/10 dark:bg-blue-200/20 p-3 sm:p-4 text-black dark:text-white hover:bg-blue-400/30 hover:dark:bg-blue-400/50
		active:bg-blue-400/60 active:dark:bg-blue-500/80" href={href} target={target}>
			<h2 className="text-lg font-bold sm:text-xl">
				{icon && <span className="float-left">{icon}</span>}
				{text}
				<span className="float-right w-6">{is_external ? <ArrowTopRightOnSquareIcon/> : '→'}</span>
			</h2>
		</Link>
	);
}