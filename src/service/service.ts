import userRepository from "../repositories/UserRepository";

class UserService {
  async createUser(name: string, email: string) {
    return await userRepository.create(name, email);
  }

  async getUsers() {
    return await userRepository.findAll();
  }

  async getUser(id: number) {
    return await userRepository.findById(id);
  }
}

export default new UserService();