import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, firstValueFrom } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { ProductActionType, productStore } from 'src/app/redux/products-state';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    public async getAllProducts(): Promise<ProductModel[]> {
        let products = productStore.getState().products;
        if (products.length === 0) {
            products = await firstValueFrom(this.http.get<ProductModel[]>(environment.productsUrl));

            productStore.dispatch({ type: ProductActionType.FetchProducts, payload: products })
        }
        // Do something
        return products;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        let products = productStore.getState().products;

        let product = products.find(p => p.id === id)
        if (!product) {
            product = await firstValueFrom(this.http.get<ProductModel>(environment.productsUrl + id));
        }
        // Do something
        return product;
    }

    public async addProduct(product: ProductModel): Promise<void> {
        const formData = new FormData();
        formData.append("name", product.name)
        formData.append("price", product.price.toString())
        formData.append("stock", product.stock.toString())
        formData.append("image", product.image)
        const addedProduct = await firstValueFrom(this.http.post<ProductModel>(environment.productsUrl, formData))
        productStore.dispatch({type: ProductActionType.AddProduct, payload: addedProduct})
    }

    public async updateProduct(product: ProductModel): Promise<boolean> {
        const formData = new FormData();
        formData.append("name", product.name)
        formData.append("price", product.price.toString())
        formData.append("stock", product.stock.toString())
        formData.append("image", product.image)
        const updateProduct = await firstValueFrom(this.http.put<ProductModel>(environment.productsUrl + product.id, formData))
        productStore.dispatch({type: ProductActionType.UpdateProduct, payload: updateProduct})

        return updateProduct != null
    }

    public async deleteProduct(id: number): Promise<void> {
        await firstValueFrom(this.http.delete<ProductModel>(environment.productsUrl + id));
        productStore.dispatch({type: ProductActionType.DeleteProduct, payload: id})

    }

}
