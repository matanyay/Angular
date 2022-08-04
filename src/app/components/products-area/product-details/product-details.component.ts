import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { authStore } from 'src/app/redux/auth-state';
import { ProductsService } from 'src/app/services/products/products.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {



    public product: ProductModel = new ProductModel();
    public imageSource: string;
    public isLoggedIn: boolean;

    constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private router: Router) { }

    async ngOnInit() {
        try {
            const id = +this.activatedRoute.snapshot.params["productId"];
            this.product = await this.productsService.getOneProduct(id);
            this.imageSource = environment.productsUrl + "/images/" + this.product.imageName;
            this.isLoggedIn = authStore.getState().token != null

        } catch (err: any) {

        }
    }

    async deleteProduct() {
        try {
            await this.productsService.deleteProduct(this.product.id);
            alert("Product has been delete")
            this.router.navigate(["/products"])
        } catch (error) {
            
        }
    }

}
