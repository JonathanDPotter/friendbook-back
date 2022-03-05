import { Request, Response } from "express";
import cloudinary from "cloudinary";

const upload = async (req: Request, res: Response) => {
  res.json(req.body)
  // const { image } = req.body;
  // console.log(req.body);
  // console.log(`image: ${image}`);
  // try {
  //   const result = await cloudinary.v2.uploader.upload(image);
  //   res.status(201).json(result.url);
  // } catch (error: any) {
  //   const { message } = error;
  //   console.error(message, error);
  //   res.status(400).json({ success: false, message, error });
  // }
};

export default { upload };
