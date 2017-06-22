import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { LEFT, RIGHT } from '../consts/directions';
import { LoggerService } from '../services/logger/logger.service';


@Directive({
    selector: '[haotic-moving]',
    providers: [LoggerService]
})



export class HaoticMovindDirective {
    @Input() direction = RIGHT;
    private startPosition = this.getRandomPosition();
    private activeDirection;
    private speed = 100;
    constructor(private elementRef : ElementRef, private renderer : Renderer2, private logger : LoggerService) {
        if (this.activeDirection === undefined) {
            this.activeDirection = this.direction;
        }
        this.setTranslateX(this.setTranslateX(this.startPosition));
        this.logger.message('start' + this.startPosition);
       // const clientWidth = document.documentElement.clientWidth;
        setInterval(() => {
            this.moving();
        }, this.speed)
    }
    private moving() : void {
        let translateX = this.parseInteger(this.elementRef.nativeElement.style.transform);
        this.logger.message(translateX);
        let direction = this.activeDirection;
        if (translateX >= 105) {
                this.activeDirection = LEFT;
           } else if (translateX == 0) {
               this.activeDirection = RIGHT;
           } 
        switch (this.activeDirection) {
            case RIGHT:
                this.setTranslateX(translateX + 1);
                this.logger.message('index' + translateX + 0.2)
                break;
            case LEFT:
                this.setTranslateX(translateX - 1);
                break;
        }
        this.logger.message(this.activeDirection);
    }
    private parseInteger(str) : number {
       return +str.match(/[0-9]+/g)[0];
    }
    private setTranslateX(val) : void {
        this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translateX(${val}vw`);
    }
    private setStyleAttribute(prop, val) : void {
        this.renderer.setStyle(this.elementRef.nativeElement, prop, val);
    }
    private getRandomPosition() : number {
        return Math.floor(Math.random() * (105 - 0 + 1) + 0);
    }
}