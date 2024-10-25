import { Router } from "express";
import {
  createInfluencerController,
  getInfluencerByIdController,
  chatWithInfluencer,
} from "../controller/influencer";

const router = Router();

router.get("/get/:id", getInfluencerByIdController);
router.post("/create", createInfluencerController);
router.post("/chat/:id", chatWithInfluencer);
export default router;
