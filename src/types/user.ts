import { Users as UserDeclarationType } from '../prisma/declarations';
import { Users as UserInsertionType } from '../prisma/insertions';

type User = UserDeclarationType;

type UserRequest = UserInsertionType;

export type { User, UserRequest };
