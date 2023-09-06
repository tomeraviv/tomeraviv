import {type Session} from "next-auth";
import {SessionProvider} from "next-auth/react";
import {type AppType} from "next/app";
import {api} from "~/utils/api";

import {Raleway} from 'next/font/google';
import "~/styles/globals.css";

// If loading a variable font, you don't need to specify the font weight
const nextFont = Raleway({
	fallback: ['Raleway', 'system-ui', 'arial'],	// 'Raleway': This will show our inline base64 font quickly before the local Google font file loads.
	adjustFontFallback: false,						// allows custom 'fallback'.
	weight: ['400', "700"],
	display: 'swap',
	subsets: ['latin']
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
