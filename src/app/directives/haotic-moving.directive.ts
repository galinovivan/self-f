import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
import { LEFT, RIGHT } from '../consts/directions';


@Directive({
    selector: '[haotic-moving]'
})



export class HaoticMovindDirective {
    @Input() direction = RIGHT;
    private startPosition = this.getRandomPosition();
    private activeDirection;
    private speed = 100;
    constructor(private elementRef : ElementRef, private renderer : Renderer2) {
        if (this.activeDirection === undefined) {
            this.activeDirection = this.direction;
        }
        this.setTranslateX(this.startPosition);
        setInterval(() => {
            this.moving();
        }, this.speed)
    };
    @HostListener('mouseenter') onMouseEnter() {
        this.changeDirection();
    }
    private moving() : void {
        let translateX : number = this.parseInteger(this.elementRef.nativeElement.style.transform);
        let direction = this.activeDirection;
        if (translateX >= 105) {
               this.changeDirection();
           } else if (translateX == 0) {
              this.changeDirection();
           } 
        switch (this.activeDirection) {
            case RIGHT:
                this.setTranslateX(translateX + 1);
                break;
            case LEFT:
                this.setTranslateX(translateX - 1);
                break;
        }
    }
    private changeDirection() : void {
        if (this.activeDirection === RIGHT) {
            this.activeDirection = LEFT;
            this.rotateBackground();
        } else {
            this.activeDirection = RIGHT;
            this.rotateBackground();
        }
    }
    private parseInteger(str) : number {
       return +str.match(/[0-9]+/g)[0];
    }
    private setTranslateX(val) : void {
        this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translateX(${val}vw`);
    }
    private rotateBackground() : void {
        
    };
    private setStyleAttribute(prop, val) : void {
        this.renderer.setStyle(this.elementRef.nativeElement, prop, val);
    }
    private getRandomPosition() : number {
        return Math.floor(Math.random() * (105 - 0 + 1) + 0);
    }
}