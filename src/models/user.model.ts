import { PrismaClient } from '@prisma/client';
import { User } from '../interfaces/user.interface';
import BaseModel from './base.model';

export default class UserModel extends BaseModel<User> {
    
    constructor() {
        let prisma: PrismaClient = new PrismaClient();

        let relationships = {
            'posts': true
        }

        super(prisma.user, relationships);
    }

}