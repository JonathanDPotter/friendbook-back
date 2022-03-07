import { Request, Response } from "express";
import cloudinary from "cloudinary";

const upload = async (req: Request, res: Response) => {
  const { image } = req.body;
  try {
    const result = await cloudinary.v2.uploader.upload(image);
    res.status(201).json(result.url);
  } catch (error: any) {
    const { message } = error;
    console.error(message, error);
    res.status(400).json({ success: false, message, error });
  }
};

export default { upload };
