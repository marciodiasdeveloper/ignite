import { User } from '../../entities/User';
import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ name, username, email, driver_license, password}: ICreateUserDTO): Promise<void> {
        // throw new Error("Method not implemented.");
        const user = this.repository.create({
            name,
            username,
            email,
            driver_license,
            password,
        });

        await this.repository.save(user);
    }
}

export { UsersRepository };