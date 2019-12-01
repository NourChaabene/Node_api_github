import { Request, Response } from "express";
import { getRepositories } from "../services/Repository";
import { Repository } from "../models/Repository";

export async function getRepositoriesByUser(req: Request, res: Response) {
    const username: string = req.params.username;
    try {
        const list: Repository[] = JSON.parse(await getRepositories(username));
        const names: string[] = [];
        list.forEach((el: Repository) => {
            names.push(el.name);
        });
        res.status(200).json(names);
    } catch (error) {
        console.log(error.message);
        res.status(400).send("There seems to be an error");
    }

    // res.status(200).send("N7ebbek");
}
