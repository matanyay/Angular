import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ColorsService } from 'src/app/services/colors/colors.service';

@Component({
    selector: 'app-random-sale',
    templateUrl: './random-sale.component.html',
    styleUrls: ['./random-sale.component.css']
})
export class RandomSaleComponent implements OnInit, OnDestroy {
    public arrayOfProducts = ["ice", "tea", "asdf", "fds", "erer", "asdaf", "asdf3er"]

    public selectedProduct: string;

    @ViewChild("color")
    public selectWrapper: ElementRef<HTMLSelectElement>

    public intervalId: number;

    constructor(private colorService: ColorsService) { }


    public getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }


    ngOnInit(): void {
        this.selectedProduct = this.arrayOfProducts[0];

        this.intervalId = window.setInterval(() => { 
            this.selectedProduct = this.arrayOfProducts[this.getRandomInt(7)] 
            this.selectWrapper.nativeElement.style.background = this.colorService.getRandomColor();
        }, 5000)
    }

    ngOnDestroy(): void {
        window.clearInterval(this.intervalId);
    }

}
