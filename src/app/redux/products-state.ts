import { createStore } from "redux";
import { ProductModel } from "../models/product.model";

export class ProductState {
    public products: ProductModel[] = [];
}

// 2. Products Action Type
export enum ProductActionType {
    FetchProducts,
    AddProduct,
    UpdateProduct,
    DeleteProduct,
}

// 3. 
export interface ProductAction {
    type: ProductActionType;
    payload: any;

}

// 4.
export function productReducer(currentState = new ProductState(), action: ProductAction): ProductState {
    const newState = { ...currentState };

    switch (action.type) {
        case ProductActionType.AddProduct:
            newState.products.push(action.payload);
            break;
        case ProductActionType.DeleteProduct:
            const indexToDelete = newState.products.findIndex(p => p.id == action.payload.id)
            if (indexToDelete >= 0) {
                newState.products.splice(indexToDelete, 1)
            }
            newState.products.pop()
            break;
        case ProductActionType.FetchProducts:
            newState.products = action.payload;
            break;
        case ProductActionType.UpdateProduct:
            const indexToUpdate = newState.products.findIndex(p => p.id == action.payload.id)
            if (indexToUpdate >= 0) {
                newState.products[indexToUpdate] = action.payload
            }
            break;

        default:
            break;
    }

    return newState;
}

// 5. Products store
export const productStore = createStore(productReducer)