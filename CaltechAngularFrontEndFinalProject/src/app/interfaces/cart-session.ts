import { IUser } from './user';
import { IProduct } from './product';

export interface ICartSession {
            user: IUser,
            cartSessionId: number
}
