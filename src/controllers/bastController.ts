import { Request, Response } from "express";

class BaseController {
  protected success(res: Response, data: unknown, status: number = 200) {
    return res.status(status).json({
      success: true,
      data,
    });
  }

  protected error(res: Response, message: string, status: number = 500) {
    return res.status(status).json({
      success: false,
      message,
    });
  }
}

export default BaseController;