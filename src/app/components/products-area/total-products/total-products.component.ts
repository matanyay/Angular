import { Component, OnDestroy, OnInit } from '@angular/core';
import { productStore } from 'src/app/redux/products-state';
import { Unsubscribe } from "redux";

@Component({
    selector: 'app-total-products',
    templateUrl: './total-products.component.html',
    styleUrls: ['./total-products.component.css']
})
export class TotalProductsComponent implements OnInit, OnDestroy {
    public count: number;

    private unsubscribe: Unsubscribe;

    constructor() { }


    ngOnInit(): void {
        this.unsubscribe = productStore.subscribe(() => {
            this.count = productStore.getState().products.length;
        });
    }

    ngOnDestroy(): void {
     this.unsubscribe();
    }

    

}
