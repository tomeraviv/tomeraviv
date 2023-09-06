import {type Session} from "next-auth";
import {SessionProvider} from "next-auth/react";
import {type AppType} from "next/app";
import {api} from "~/utils/api";

import {Raleway} from 'next/font/google';
import "~/styles/globals.css";

// If loading a variable font, you don't need to specify the font weight
const nextFont = Raleway({
	weight: ['400', "700"],
	subsets: ['latin'],
	display: 'fallback',
	variable: '--font-raleway',
	fallback: ['Raleway', 'system-ui', 'arial'],	// 'Raleway': This will show our inline base64 font quickly before the google font loads.
	adjustFontFallback: true
});

const MyApp: AppType<{ session: Session | null }> = ({
														 Component,
														 pageProps: {session, ...pageProps},
													 }) =>
{
	return (
			<main className={nextFont.className}>
				<Component {...pageProps} />
			</main>
	);
};

export default MyApp;
// export default api.withTRPC(MyApp);
