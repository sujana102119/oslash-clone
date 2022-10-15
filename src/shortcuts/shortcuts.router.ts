/**
 * Required External Modules and Interfaces
 */

 import express, { Request, Response } from "express";
 import * as ShortcutService from "./shortcuts.service";
 import { BaseShortcut, Shortcut } from "./shortcut.interface";

/**
 * Router Definition
 */
 export const shortcutsRouter = express.Router();

/**
 * Controller Definitions
 */

shortcutsRouter.get("/:userId", async (req: Request, res: Response) => {
    try {
      const userId: string = req.params.id;
      const shortcuts: Shortcuts = await ShortcutService.getShortcutsByUserId(userId);
      console.log(shortcuts);
      res.status(200).send(shortcuts);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });