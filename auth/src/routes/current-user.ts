import express from "express";
import { requireAuth } from "@demotungnui/common";
import { currentUser } from "@demotungnui/common";

const router = express.Router();

router.get("/api/users/currentuser", currentUser, requireAuth, (req, res) => {
  res.json({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
