import { IUser } from './user';
import { IProduct } from './product';
import { ICartSession } from './cart-session';

export interface ICart {


  productquantity: number,
        producttotal: 300,
        product: IProduct,
        cartSession: ICartSession
}
