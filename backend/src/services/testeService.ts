import {NextFunction, Request, Response} from "express";

export async function teste(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const teste: Array<Number> = teste2();

    res.status(200).json({teste});
  } catch (error) {
    next(error);
  }
}

export const teste2 = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
};
