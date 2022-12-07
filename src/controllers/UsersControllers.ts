import { Request, Response } from "express";
import IControllers from "./ControllerInterface"

let data: any[] = [
    {id: 1, name: "Adnan"},
    {id: 2, name: "Nur"},
    {id: 3, name: "Lucy"},
    {id: 4, name: "Tirami"}
]

class UsersControllers implements IControllers {
    index(req: Request, res: Response): Response {
        console.log("users index")
        return res.send(data);
    }
    create(req: Request, res: Response): Response  {

        const { id, name} = req.body;

        data.push({ id, name });

        return res.send("create success");
    }
    show(req: Request, res: Response): Response  {
        const { id } = req.params;

        let detail = data.find(item => item.id == id);

        return res.send(detail);
    }
    update(req: Request, res: Response): Response  {
        const { id } = req.params;
        const { name } = req.body;

        let detail = data.find(item => item.id == id);
        detail.name = name

        return res.send("update success");
    }
    delete(req: Request, res: Response): Response  {
        const { id } = req.params;

        let detail = data.filter(item => item.id != id);

        return res.send(detail);
    }   
}

export default new UsersControllers();
