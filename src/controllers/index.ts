import { Request, Response } from "express";
import welcome from "../../welcome.json";

const home = (req: Request, res: Response) => {
  res.status(200).json(welcome);
};

export default { home };
