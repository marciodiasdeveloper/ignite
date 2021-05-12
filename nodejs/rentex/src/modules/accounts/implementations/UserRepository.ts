import { ICreateUserDTO } from "../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";

class UserRepository implements IUsersRepository {
    create(data: ICreateUserDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export { UserRepository };