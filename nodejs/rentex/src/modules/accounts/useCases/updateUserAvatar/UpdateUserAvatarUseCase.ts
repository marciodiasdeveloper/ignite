interface IRequest {
    user_id: string;
    avatar_file: string;
}

class UpdateUserAvatarUseCase {

    async execute({ user_id, avatar_file }: IRequest) {

    }
}

export { UpdateUserAvatarUseCase };