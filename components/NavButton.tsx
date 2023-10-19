import { useRouter } from "next/router";

const NavButton = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.back();
        }}
        style={{ margin: "3px" }}
      >
        back
      </button>
      <button
        onClick={() => {
          router.push("/");
        }}
        style={{ margin: "3px" }}
      >
        home
      </button>
    </div>
  );
};

export default NavButton;
