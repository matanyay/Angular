import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    public async getAllProducts(): Promise<ProductModel[]> {
        const products = await firstValueFrom(this.http.get<ProductModel[]>(environment.productsUrl));
        // Do something
        return products;
    }
    
    public async getOneProduct(id: number): Promise<ProductModel> {
        const products = await firstValueFrom(this.http.get<ProductModel>(environment.productsUrl + id));
        // Do something
        return products;
    }
}
