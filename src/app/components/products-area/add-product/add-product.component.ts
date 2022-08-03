import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    @ViewChild("imageControl")
    public imageWrapper: ElementRef<HTMLInputElement>;

    public product = new ProductModel();

    constructor(private productsService: ProductsService, private router: Router) { }

    public async send(): Promise<void> {
        try {
            this.product.image = this.imageWrapper.nativeElement.files[0];
            await this.productsService.addProduct(this.product)
            alert("Product has been added 👌")
            this.router.navigate(["/products"])

        } catch (error: any) {
            console.log(error)

        }
    }


    ngOnInit(): void {
    }

}
