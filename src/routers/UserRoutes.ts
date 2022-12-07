import BaseRoutes from './BaseRoutes';
import { auth } from '../middlewares/AuthMiddleware';

//Controllers
import UsersControllers from '../controllers/UsersControllers';

class UserRoutes extends BaseRoutes {
    
    routes(): void {
        this.router.get("/", auth, UsersControllers.index)
        this.router.post("/", auth, UsersControllers.create)
        this.router.get("/:id", auth, UsersControllers.show)
        this.router.put("/:id", auth, UsersControllers.update)
        this.router.delete("/:id", auth, UsersControllers.delete)
    }
} 

export default new UserRoutes().router;

