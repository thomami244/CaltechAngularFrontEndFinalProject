import { IUser } from './user';
import { IProduct } from './product';

export interface ICart {


  productquantity: number,
        producttotal: 300,
        product: IProduct,

        cartSession: {
            user: IUser,
            cartSessionId: number
        },
}
