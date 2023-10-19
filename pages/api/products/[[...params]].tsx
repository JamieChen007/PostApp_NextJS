import type { NextApiRequest, NextApiResponse } from "next";
import mock from "./mock.json";
type Data = {
  succeed: boolean;
  dt?: string;
  products: any[] | object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const dt = String(new Date());

  const { method, query, body } = req;

  //CRUD
  switch (method) {
    case "GET":
      //getProductById
      if (query.params) {
        const foundId = Number(query.params![0]);
        const foundProduct = mock.products.filter(
          (data) => data.id === foundId
        );
        res.status(200).json({
          succeed: true,
          dt,
          products: foundProduct,
        });
      }
      //getProducts
      res.status(200).json({
        succeed: true,
        dt,
        products: mock.products,
      });
      break;
    case "POST":
      //addProduct
      mock.products.push(body);
      res.json({
        succeed: true,
        products: body,
      });
      break;
    case "PUT":
      //updateProductById
      const updatedId = Number(query.params![0]);
      const updatedIndex = mock.products.findIndex(
        (data) => data.id === updatedId
      );

      const newData = { id: updatedId, ...body };
      const updatedProduct = mock.products.splice(updatedIndex, 1, newData);
      res.json({
        succeed: true,
        products: updatedProduct,
      });
      break;
    case "DELETE":
      //deleteProductById
      const deletedId = Number(query.params![0]);
      const deletedIndex = mock.products.findIndex(
        (data) => data.id === deletedId
      );
      const deletedProduct = mock.products.splice(deletedIndex, 1);
      res.json({
        succeed: true,
        products: deletedProduct,
      });
      break;
  }
}
