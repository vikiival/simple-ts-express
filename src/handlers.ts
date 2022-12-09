import { Request, Response } from 'express';


export const dummyHandler = (req: Request, response: Response) => {
  response.status(200).json({ message: 'Hello world' });
}

export const handlerWithBody = (req: Request, response: Response) => {
  const { body } = req;
  response.status(200).json(body);
}

export const handlerWithParams = (req: Request, response: Response) => {
  const { params } = req;
  response.status(200).json(params);
}
