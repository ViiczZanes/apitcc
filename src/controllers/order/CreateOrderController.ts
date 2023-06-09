import { Request, Response } from 'express';
import { CreateOrderService } from '../../services/order/CreateOrderService';


const CreateOrderController = {
  async handle(req: Request, res: Response) {

    const { table_id } = req.body;
    const user_id = req.user_id as string

    const response = await CreateOrderService.execute({ table_id, user_id })
    return res.json(response)
  }
}

export { CreateOrderController }