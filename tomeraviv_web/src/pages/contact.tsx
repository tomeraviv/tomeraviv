import {MyLink} from "~/components/myLink";
import RiveCatAnimated from "~/components/riveCatAnimated";
import {ArrowLeftCircleIcon, EnvelopeIcon} from "@heroicons/react/20/solid";
import {Layout} from "~/components/page";
import {getStaticProps} from "./index";
import Head from "next/head";

export default function Contact({renderProps}: { renderProps: { renderDate: string, renderTime: string, renderInstance: string } })
{
	return (
		<Layout renderProps={renderProps}>
			<Head>
				<title>Tomer Aviv - Contact</title>
			</Head>
			<div className="absolute pointer-events-none -mt-[242px] ml-[192px] sm:-mt-[152px] sm:ml-60">
				<RiveCatAnimated/>
			</div>
			<div className="grid w-60 grid-cols-1 gap-2 sm:w-80 md:gap-2">
				<ContactForm/>
				<MyLink text="Back" href="/" icon={<ArrowLeftCircleIcon/>}/>
			</div>
		</Layout>
	);
}

function ContactForm()
{
	// Render a contact form.
	return (
		<form className="flex flex-col gap-2" method="POST">
			<span className="p-2 text-lg font-bold">Send me a message</span>
			<input type="text" name="name" placeholder="Name*" required={true}
				   className="w-full rounded border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"/>

			<input type="email" name="email" placeholder="Email*" required={true}
				   className="w-full rounded border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"/>

			<textarea name="message" placeholder="Message*" required={true}
					  className="w-full rounded border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"/>
			<span className="p-1 text-sm text-stone-600/50 dark:text-stone-200/50">* Required</span>
			<button type="submit" className="text-lg btn"><EnvelopeIcon className="mr-2 inline h-5 w-5 -mt-0.5"/>Send</button>
		</form>
	);
}

export {getStaticProps};