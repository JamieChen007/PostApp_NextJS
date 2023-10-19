import NavButton from "@/components/NavButton";
import Link from "next/link";

export default function Page(props: any) {
  return (
    <div>
      <h1>Post List</h1>
      <h4>{props.date}</h4>
      <NavButton />
      <ul>
        {props.posts.map((post: any) => (
          <li key={post?.id}>
            <Link href={`/posts/${post.id}`}>{post?.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Page.getTitle = () => {
  return { title: "post list" };
};

export async function getStaticProps() {
  const date = String(new Date());

  const res = await fetch("https://dummyjson.com/posts");
  const postData = await res.json();

  return { props: { date, posts: postData.posts } };
}
