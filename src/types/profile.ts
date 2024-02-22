import { Profiles as ProfileDeclarationType } from '../prisma/declarations';
import { Profiles as ProfileInsertionType } from '../prisma/insertions';

type Profile = ProfileDeclarationType;

type ProfileRequest = ProfileInsertionType;

export type { Profile, ProfileRequest };
