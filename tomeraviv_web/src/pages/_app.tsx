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
	fallback: ['system-ui', 'arial'],
	adjustFontFallback: true
});

const MyApp: AppType<{ session: Session | null }> = ({
														 Component,
														 pageProps: {session, ...pageProps},
													 }) =>
{
	return (
		<SessionProvider session={session}>
			<main className={nextFont.className}>
				<Component {...pageProps} />
			</main>
		</SessionProvider>
	);
};

export default api.withTRPC(MyApp);
