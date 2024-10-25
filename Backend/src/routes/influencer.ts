import { Router } from "express";
import {
  createInfluencerController,
  getInfluencerByIdController,
} from "../controller/influencer";

const router = Router();

router.get("/get/:id", getInfluencerByIdController);
router.post("/create", createInfluencerController);

export default router;
