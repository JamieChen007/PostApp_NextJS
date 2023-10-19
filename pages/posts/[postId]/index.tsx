import NavButton from "@/components/NavButton";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Page(props: any) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      This is post detail page.
      <div>{props.date}</div>
      <NavButton />
      <div>Title:{props.postData?.title}</div>
      <div>Body:{props.postData?.body}</div>
      <div>Tags:{props.postData?.tags}</div>
      <div>
        <Link href={`/posts/${props.postData.id}/comments/`}>
          Comments List
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  // const data = await fetch(`https://dummyjson.com/posts/`);
  // const res = await data.json();

  return {
    paths: [{ params: { postId: "1" } }, { params: { postId: "2" } }],
    // paths: res.posts.map((post: any) => ({
    //   params: {
    //     postId: post.id.toString(),
    //   },
    // })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context: any) {
  const { postId } = context.params;
  const data = await fetch(`https://dummyjson.com/posts/${postId}`).then(
    (res) => res.json()
  );
  const date = String(new Date());

  return {
    props: {
      date,
      postData: data,
    },
  };
}
