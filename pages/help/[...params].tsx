import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const params = router.query.params as string[];
  console.log(params); //http://localhost:3000/help/a/b/c ['a', 'b', 'c']

  return <div>This is help page. {params?.join?.(" ")}</div>;
}
