import User from "../models/user";

class UserRepository {
  async create(name: string, email: string) {
    return await User.create({ name, email });
  }

  async findAll() {
    return await User.findAll();
  }

  async findById(id: number) {
    return await User.findByPk(id);
  }
}

export default new UserRepository();