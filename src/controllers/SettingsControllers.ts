import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { chat, username } = request.body;

    try {
      const setting = await new SettingsService().create({ chat, username });
      return response.json(setting);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }

  async findByUsername(request: Request, response: Response) {
    const { username } = request.params;
    const setting = await new SettingsService().findByUsername(username);
    return response.json(setting);
  }

  async update(request: Request, response: Response) {
    const { username } = request.params;
    const { chat } = request.body;

    const setting = await new SettingsService().update(username, chat);
    return response.json(setting);
  }
}

export { SettingsController };
