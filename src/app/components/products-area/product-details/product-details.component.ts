import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public product: ProductModel={
         id: 0,
         name: "",
         price: 0,
         stock: 0,
         imageName: ""
    };
    public imageSource: string;


    constructor(private activatedRoute: ActivatedRoute,private productsService: ProductsService) { }

    async ngOnInit() {
        // snapshot = current url
        try {
            const id = +this.activatedRoute.snapshot.params["productId"];
            this.product = await this.productsService.getOneProduct(id);
            this.imageSource = environment.productsUrl + "/images/" + this.product.imageName;

        } catch (err: any) {

        }
    }

}
