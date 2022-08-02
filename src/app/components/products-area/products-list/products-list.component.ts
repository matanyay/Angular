import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
    public products: ProductModel[];

    constructor(private productsService: ProductsService) { }

    async ngOnInit() {
        try {
            this.products = await this.productsService.getAllProducts();
            console.log(this.products)
        } catch (err: any) {
            console.log(err)
        }
    }

}
