import {UserCircleIcon} from "@heroicons/react/24/solid";

export function Avatar({name}: { name: string })
{
	return <h1 className="text-2xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl">
		<UserCircleIcon className="block text-lg max-h-52 text-black dark:text-white"/>
		{name}
	</h1>;
}