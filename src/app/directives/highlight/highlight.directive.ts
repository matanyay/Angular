import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {


    @Input("highlight")// highlight="som=color"
    public defaultBackColor = "";

    @HostBinding("style.background-color")
    public backColor: string;

    @HostListener("mouseenter")
    public paint(): void {
        this.backColor = this.defaultBackColor;
    }

    @HostListener("mouseleave")
    public clear(): void {
        this.backColor = "";
    }

    ngOnInit(): void {
        if (!this.defaultBackColor) {
            this.defaultBackColor = "yellow"
        }
    }

}
