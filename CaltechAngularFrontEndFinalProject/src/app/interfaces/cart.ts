import { IUser } from './user';
import { IProduct } from './product';
import { ICartSession } from './cart-session';

export interface ICart {


    productorderquantity: number,
    productordertotalamount: number,
    product: IProduct,
    cartSession: ICartSession
}
