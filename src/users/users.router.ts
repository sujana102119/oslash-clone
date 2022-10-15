/**
 * Required External Modules and Interfaces
 */

 import express, { Request, Response } from "express";
 import * as UserService from "./users.service";
 import { BaseUser, User } from "./user.interface";

/**
 * Router Definition
 */
 export const usersRouter = express.Router();

/**
 * Controller Definitions
 */

usersRouter.get("/:id", async (req: Request, res: Response) => {
    try {
      const userId: string = req.params.id;
      const user: User = await UserService.getUserById(userId);
      console.log(user);
      res.status(200).send(user);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });