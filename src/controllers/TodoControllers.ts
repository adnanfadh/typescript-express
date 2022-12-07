import { Request, Response } from "express";
import IControllers from "./ControllerInterface"
import TodoService from "../services/TodoService"
// const db = require("../db/models")


class TodoControllers implements IControllers {
    index = async (req: Request, res: Response): Promise<Response> => {
        // const { id } = req.app.locals.credentials;
        const service: TodoService = new TodoService(req)
        const todos = await service.getAll();

        // const todos = await db.todo.findAll({
        //     where: { user_id: id },
        //     attributes: ['id', 'description']
        // })

        return res.send({
            data: todos,
            message: ''
        })
        // return res.send("Index Todo");
    }
    create = async (req: Request, res: Response): Promise<Response> => {
        // const { id } = req.app.locals.credentials;
        // const { description } = req.body;
        const service: TodoService = new TodoService(req)
        const todo = await service.store();

        // const todo = await db.todo.create({
        //     user_id: id,
        //     description
        // })
        return res.send({
            data: todo,
            message: "Todo Created"
        })
        // return res.send("create");
    }
    show = async (req: Request, res: Response): Promise<Response> => {
        // const { id: user_id } = req.app.locals.credentials;
        // const { id } = req.params
        const service: TodoService = new TodoService(req)
        const todo = await service.getOne();

        // const todo = await db.todo.findOne({
        //     where: { id, user_id}
        // })

        return res.send({
            data: todo,
            message: ''
        })

        // return res.send("show");
    }
    update = async (req: Request, res: Response): Promise<Response> => {
        // const { id: user_id } = req.app.locals.credentials;
        // const { id } = req.params;
        // const { description } = req.body;

        const service: TodoService = new TodoService(req)
        const todo = await service.update();

        // await db.todo.update({
        //     description
        // }, {
        //     where: { id, user_id}
        // })

        return res.send({
            data: todo,
            message: 'Todo Update'
        })
    }
    delete = async (req: Request, res: Response): Promise<Response> => {
        // const { id: user_id } = req.app.locals.credentials;
        // const { id } = req.params;
        const service: TodoService = new TodoService(req)
        const todo = await service.delete();

        // await db.todo.destroy({
        //     where: { id, user_id}
        // })

        return res.send({
            data: todo,
            message: 'Todo Delete'
        })
    }   
}

export default new TodoControllers();
