import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors/colors.service';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css'],
    // providers:[ColorsService]
})
export class AddressComponent implements OnInit {

    public styles = {
        backgroundColor: ""
    };

    constructor(private colorsService: ColorsService) {
    }

    ngOnInit(): void {
        
        this.styles.backgroundColor = this.colorsService.getRandomColor();
    }

}
