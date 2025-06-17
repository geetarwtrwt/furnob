import { connectDb } from "../../../../../lib/config/db";
import { productModel } from "../../../../../lib/model/ProductModel";
let { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";

let loadDb = async () => {
  await connectDb();
};
loadDb();

export async function POST(request) {
  try {
    await loadDb();
    let formData = await request.formData();
    let timeStamp = Date.now();

    let image = formData.getAll("productImage");
    let imageArray = [];

    for (let e of image) {
      let buffer = Buffer.from(await e.arrayBuffer());
      let fileName = `${timeStamp}_${e.name}`;
      let path = `./public/${fileName}`;
      await writeFile(path, buffer);

      imageArray.push(fileName);
    }

    if (imageArray.length === 0) {
      return NextResponse.json({
        success: false,
        error: "At least one product image is required",
      });
    }

    let blogData = {
      productImage: imageArray,
      productName: `${formData.get("productName")}`,
      productDescription: `${formData.get("productDescription")}`,
      category: `${formData.get("category")}`,
      productPrice: `${formData.get("productPrice")}`,
      offerPrice: `${formData.get("offerPrice")}`,
    };

    await productModel.create(blogData);
    return NextResponse.json({ success: true, msg: "Product Added" });
  } catch (err) {
    console.error("💥 Error while saving:", err);
    return NextResponse.json({
      success: false,
      msg: "Failed",
      error: err.message,
    });
  }
}
