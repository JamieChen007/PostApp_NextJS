// import '@/styles/globals.css'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  console.log(
    "Component",
    (Component as any).getTitle && (Component as any).getTitle()
  );
  // console.log("pageProps", pageProps);

  if (!!(Component as any).renderHome) {
    return (Component as any).renderHome();
  } else
    return (
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    );
}
