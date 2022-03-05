import { Request, Response } from "express";
import Post from "../models/post";

const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({ success: true, posts });
  } catch (error: any) {
    const { message } = error;
    console.error(message, error);
    res.json({ success: false, message, error });
  }
};

const makePost = async (req: Request, res: Response) => {
  res.json(req.body);
  // try {
  //   const newPost = new Post(req.body);
  //   const posted = await newPost.save();
  //   return res.status(201).json({ success: true, posted });
  // } catch (error: any) {
  //   const { message } = error;
  //   console.error(message, error);
  //   res.json({ success: false, message, error });
  // }
};

const getPost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params);
    res.status(200).json({ success: true, post });
  } catch (error: any) {
    const { message } = error;
    console.error(message, error);
    res.json({ success: false, message, error });
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params, req.body, {
      new: true,
    }).exec();
    res.status(200).json({ success: true, updated });
  } catch (error: any) {
    const { message } = error;
    console.error(message, error);
    res.json({ success: false, message, error });
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params);
    res.json({ success: true, deleted });
  } catch (error: any) {
    const { message } = error;
    console.error(message, error);
    res.json({ success: false, message, error });
  }
};

export default { getPosts, makePost, getPost, updatePost, deletePost };
