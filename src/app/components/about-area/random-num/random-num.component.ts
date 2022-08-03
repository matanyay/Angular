import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { GeneratorService } from 'src/app/services/generator/generator.service';

@Component({
    selector: 'app-random-num',
    templateUrl: './random-num.component.html',
    styleUrls: ['./random-num.component.css']
})
export class RandomNumComponent implements OnInit, OnDestroy {

    public numbers: number[] = [];
    public subscription: Subscription;

    constructor(private generatorService: GeneratorService) { }

    ngOnInit(): void {
    }
    
    ngOnDestroy(): void {
        this?.subscription.unsubscribe();
    }

    // public start(): void {
    //     this.generatorService.generate(20).subscribe(
    //         number => this.numbers.push(number),
    //         err => alert(err.message),
    //         () => { this.numbers = [] })

    // }

    // public start(): void {
    //     this.generatorService.generate(20).pipe(filter(n => n % 2 == 0)).subscribe(
    //         number => this.numbers.push(number),
    //         err => alert(err.message),
    //         () => { this.numbers = [] })

    // }

    public start(): void {
        this.subscription = this.generatorService.generate(20).pipe(map((n)=> n * 2)).subscribe(
            number => this.numbers.push(number),
            err => alert(err.message),
            () => { this.numbers = [] })

    }

    public stop(): void{
        try {
            this?.subscription.unsubscribe();
            this.numbers = [];
        } catch (error) {
            
        }
    }

}
