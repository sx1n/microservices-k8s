import express, { Router } from "express";

const router = Router();

router.post("/api/users/signout", (req, res) => {
  res.send("Hi there!");
});

export { router as signoutRouter };
