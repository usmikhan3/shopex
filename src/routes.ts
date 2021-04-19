import Router from "express"
import { AuthController } from "./auth/auth_controller";

const router = Router();

router.get("/",(req,res)=>{
    res.send("API is Working");
})
router.post("/add",AuthController.createUser);

export {router};