import { Request, Response } from 'express';
import { authService } from '../service/authService';

export const register = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const result = await authService.register(firstName, lastName, email, password);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error"})
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const result = await authService.getUsers();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error"})
    }
}