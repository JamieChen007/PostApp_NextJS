import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavButton from "@/components/NavButton";

export default function Page(props: any) {
  // interface CommentDataType {
  //   body: string;
  //   user?: {
  //     username: string;
  //   };
  // }
  // const [commentData, setCommentData] = useState<CommentDataType>({
  //   body: "",
  //   user: {
  //     username: "",
  //   },
  // });
  // const router = useRouter();
  // const pid = router.query.postId;
  // const cid = router.query.commentId;
  // useEffect(() => {
  //   fetch(`https://dummyjson.com/comments/${cid}`)
  //     .then((res) => res.json())
  //     .then((res) => setCommentData(res));
  // }, [cid]);

  return (
    <div>
      This is comment detail page.
      <h1>{props.date}</h1>
      <NavButton />
      <div>Body:{props.commentData?.body}</div>
      <div>User:{props.commentData?.user?.username}</div>
      pid:{props.postId}
    </div>
  );
}

export async function getStaticPaths() {
  // const data = await fetch(`https://dummyjson.com/posts/`);
  // const res = await data.json();

  return {
    paths: [
      { params: { postId: "1", commentId: "1" } },
      { params: { postId: "2", commentId: "2" } },
    ],
    // paths: res.posts.map((post: any) => ({
    //   params: {
    //     postId: post.id.toString(),
    //   },
    // })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context: any) {
  const { commentId } = context.params;
  const { postId } = context.params;

  console.log(commentId);

  const data = await fetch(`https://dummyjson.com/comments/${commentId}`).then(
    (res) => res.json()
  );
  const date = String(new Date());

  return {
    props: {
      date,
      commentData: data,
      postId,
    },
    revalidate: 30,
  };
}
