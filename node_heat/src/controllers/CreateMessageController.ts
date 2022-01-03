import { Request, Response } from "express";
import { CreateMessageService } from "../services/createMessageService";

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { message } = request.body;
    const { user_id } = request;

    try {
      const service = new CreateMessageService();

      const result = await service.execute(message, user_id);

      return response.json(result);
    } catch (error) {
      console.error(error);
    }
  }
}

export { CreateMessageController };
