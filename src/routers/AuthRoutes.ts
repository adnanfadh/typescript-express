import BaseRoutes from './BaseRoutes';
import validate from "../middlewares/AuthValidator"
import { auth } from "../middlewares/AuthMiddleware"

//Controllers
import AuthControllers from '../controllers/AuthControllers';

class AuthRoutes extends BaseRoutes {
    
    routes(): void {
        this.router.get("/register", validate, AuthControllers.register)
        this.router.post("/login", validate, AuthControllers.login)
        this.router.get("/profile", auth, AuthControllers.profile);
    }
} 

export default new AuthRoutes().router;

