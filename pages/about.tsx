import NavButton from "@/components/NavButton";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="head description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Jamie Chen" />
        <meta name="keywords" content="head keywords" />
        <title>Head Title--About</title>
      </Head>
      <div>
        This is About page.
        <NavButton />
      </div>
    </>
  );
}
