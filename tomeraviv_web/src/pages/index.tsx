import {MyLink} from "~/components/myLink";
import RiveCatAnimated from "~/components/riveCatAnimated";
import * as process from "process";
import {Layout} from "~/components/page";
import Head from "next/head";


export default function Home({renderProps, env}: { renderProps: { renderDate: string, renderTime: string, renderInstance: string }, env: string })
{
	return (
		<Layout renderProps={renderProps}>
			<Head>
				<title>Tomer Aviv - Link Tree</title>
			</Head>

			<nav className="grid mt-8 w-60 grid-cols-1 gap-2 sm:w-80 md:gap-2">
				<div className="absolute pointer-events-none -mt-[72px] ml-[160px] sm:-mt-24 sm:ml-52 sm:h-32 sm:w-32">
					<RiveCatAnimated/>
				</div>
				<MyLink text="LinkedIn" href="https://www.linkedin.com/in/tomer-aviv-link/" is_external={true}/>
				<MyLink text="Oniverkita" href="https://www.oniverkita.co.il/" is_external={true}/>
				{ env !== "production" && <MyLink text="Send Me A Message" href="/contact"/>}
			</nav>
		</Layout>
	);
}

export function getStaticProps()
{
	return {
		props: {
			renderProps: {
				renderDate: new Date().toDateString(),
				renderTime: new Date().toTimeString(),
				renderInstance: process.env.VERCEL_REGION ?? "AWS @ VERCEL",
			},
			env: process.env.VERCE_ENV
		}
	};
}