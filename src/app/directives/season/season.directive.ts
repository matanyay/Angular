import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[season]'
})
export class SeasonDirective implements OnInit {

    @Input()
    public season: string;

    constructor(private templateRed: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

    ngOnInit(): void { 
        if(this.season === this.getCurrentSeason()){
            this.viewContainerRef.createEmbeddedView(this.templateRed)
        }
    }

    private getCurrentSeason(): string {
        const now = new Date();
        let month = now.getMonth() + 1;
        // if(month >=4 );
        return "summer";

    }

}
