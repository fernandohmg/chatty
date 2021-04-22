import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    try {
      const user = await new UsersService().create(email);
      return response.json(user);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export { UsersController };
