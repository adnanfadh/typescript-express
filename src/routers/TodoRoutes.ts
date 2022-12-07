import BaseRoutes from './BaseRoutes';
import validate from "../middlewares/TodoValidator"
import { auth } from '../middlewares/AuthMiddleware';

//Controllers
import TodoControllers from '../controllers/TodoControllers';

class TodoRoutes extends BaseRoutes {
    
    routes(): void {
        this.router.get("/", auth, TodoControllers.index)
        this.router.post("/", auth,  validate, TodoControllers.create)
        this.router.get("/:id", auth, TodoControllers.show)
        this.router.put("/:id", auth,  validate, TodoControllers.update)
        this.router.delete("/:id", auth, TodoControllers.delete)
    }
} 

export default new TodoRoutes().router;

