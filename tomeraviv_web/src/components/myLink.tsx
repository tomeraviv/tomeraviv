import Link from "next/link";
import {ArrowRightCircleIcon, ArrowTopRightOnSquareIcon} from "@heroicons/react/20/solid";

export function MyLink({text, href, icon, is_external}: { text: string; href: string, icon?: React.ReactNode, is_external?: boolean })
{
	const target = is_external ? "_blank" : "_self";

	return (
		<Link className="flex max-w-xs flex-col btn sm:p-4" href={href} target={target}>
			<h2 className="text-lg font-bold sm:text-xl">
				{icon && <span className="float-left mr-2 w-6 mt-0.5">{icon}</span>}
				{text}
				<span className="float-right w-6 mt-0.5">{!icon && (is_external ? <ArrowTopRightOnSquareIcon/> : <ArrowRightCircleIcon/>)}</span>
			</h2>
		</Link>
	);
}