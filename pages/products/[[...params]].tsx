import NavButton from "@/components/NavButton";

export default function Page(props: any) {
  return (
    <div>
      This is products page.
      <div>{props.date}</div>
      <NavButton />
      <hr />
      {props.products.map((product: any) => {
        return (
          <>
            <div key={product.id}>
              <div>Title:{product.title}</div>
              <div>Description:{product.description}</div>
              <div>Price:{product.price}</div>
              <div>DiscountPercentage:{product.discountPercentage}</div>
              <div>Rating:{product.rating}</div>
              <div>
                {product.images.map((imgUrl: string) => {
                  return (
                    <img
                      src={imgUrl}
                      alt="picture"
                      style={{ height: "100px", padding: "3px" }}
                    />
                  );
                })}
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const date = String(new Date());

  console.log("params", context.params);
  console.log("query", context.query);

  // const res = await fetch("https://dummyjson.com/products");
  const res = await fetch("http://localhost:3000/api/products/");
  const productsData = await res.json();

  console.log("cookie", context.req.headers.cookie);
  //set cookie by context.res
  context.res.setHeader("Set-Cookie", "token=xxxxx");

  return { props: { date, products: productsData.products } };
}
