import { Request, Response } from "express";
import userService from "../service/service";

class UserController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    const user = await userService.createUser(name, email);

    res.status(201).json(user);
  }

  async getAll(req: Request, res: Response) {
    const users = await userService.getUsers();

    res.json(users);
  }

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);

    const user = await userService.getUser(id);

    res.json(user);
  }
}

export default new UserController();