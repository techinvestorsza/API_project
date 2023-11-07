import express from "express";

import {
    createUSer,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
} from "../controllers/users.js";

const router = express.Router();

// all routes in here are stating with /users
router.get("/", getUsers);

router.post("/", createUSer);

// /users/2 => req.params {id: 2}

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
