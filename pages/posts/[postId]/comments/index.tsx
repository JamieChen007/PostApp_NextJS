import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavButton from "@/components/NavButton";
import Link from "next/link";

export default function Page(props: any) {
  interface Comment {
    id: number;
    body: string;
    postId: number;
    user?: {
      id: number;
      username: string;
    };
  }

  // const [commentList, setCommentList] = useState<Comment[]>([]);
  // const router = useRouter();

  // const id = router.query.postId;
  // console.log(id);

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/comments/post/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setCommentList(res.comments));
  // }, [id]);

  return (
    <div>
      Comments List.
      <h4>{props.date}</h4>
      <NavButton />
      <ul>
        {props.commentsData?.map((comment: Comment) => (
          <li key={comment?.id}>
            {comment?.body}---{comment?.user?.username}
            <Link href={`/posts/${props.postId}/comments/${comment.id}`}>
              <div>Details</div>
            </Link>
          </li>
        ))}
      </ul>
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

  console.log(postId);

  const data = await fetch(
    `https://dummyjson.com/comments/post/${postId}`
  ).then((res) => res.json());
  const date = String(new Date());

  return {
    props: {
      date,
      postId,
      commentsData: data.comments,
    },
    revalidate: 30,
  };
}
