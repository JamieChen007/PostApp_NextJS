import Link from "next/link";

export default function Home(props: any) {
  return (
    <main>
      This is home page.---{props.pageName}
      <ul>
        <li>
          <Link href="/posts">Posts List</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </main>
  );
}

Home.getTitle = () => {
  return { title: "home page" };
};

Home.renderHomeX = () => {
  return <div>This is a render home</div>;
};

export const getStaticProps = () => {
  return {
    props: { pageName: "home1" },
  };
};
