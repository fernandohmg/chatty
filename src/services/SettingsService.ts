import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private repository: Repository<Setting>;

  constructor() {
    this.repository = getCustomRepository(SettingsRepository);
  }

  async create({ chat, username }: ISettingsCreate) {
    const userAlreadyExists = await this.repository.findOne({
      username,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    const setting = this.repository.create({
      chat,
      username,
    });

    await this.repository.save(setting);

    return setting;
  }

  async findByUsername(username: string) {
    return await this.repository.findOne({ username });
  }

  async update(username: string, chat: boolean) {
    await this.repository
      .createQueryBuilder()
      .update(Setting)
      .set({ chat })
      .where("username = :username", { username })
      .execute();
  }
}
export { SettingsService };
