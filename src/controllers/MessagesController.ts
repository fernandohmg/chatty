import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { admin_id, text, user_id } = request.body;

    const message = await new MessagesService().create({
      admin_id,
      text,
      user_id,
    });
    return response.json(message);
  }

  async showByUser(request: Request, response: Response) {
    const { id } = request.params;

    const list = await new MessagesService().listByUser(id);
    return response.json(list);
  }
}

export { MessagesController };
