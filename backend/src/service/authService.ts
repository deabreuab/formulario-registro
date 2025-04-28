import bcrypt from 'bcrypt';

interface User {
    name: string;
    lastname: string;
    email: string;
    password: string;
  }

const users: User[] = []

export const authService = {
    register: async (name: string, lastname: string, email: string, password: string): Promise<User> => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser: User = { name, lastname, email, password: hashedPassword }
        users.push(newUser);
        return newUser;
    },

    getUsers: async (): Promise<User[]> => {
        return users;
    }
}