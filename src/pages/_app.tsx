import type { AppProps } from "next/app";
import { PlayerProvider } from "../providers/player.provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlayerProvider>
      <Component {...pageProps} />
    </PlayerProvider>
  );
}

export default MyApp;
