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
}

export { SettingsController };
