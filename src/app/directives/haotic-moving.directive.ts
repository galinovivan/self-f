import { Directive, ElementRef, Renderer2, Input, HostListener, AfterViewChecked } from '@angular/core';
import { LEFT, RIGHT } from '../consts/directions';


@Directive({
    selector: '[haotic-moving]'
})



export class HaoticMovindDirective implements AfterViewChecked {
    @Input() direction = RIGHT;
    private startPosition = this.getRandomPosition();
    private activeDirection;
    private speed = 150;
    constructor(private elementRef : ElementRef, private renderer : Renderer2) {
        this.setStyleAttribute('transform-origin', 'center');
        if (this.activeDirection === undefined) {
            this.activeDirection = this.direction;
        }
        this.setMarginLeft(this.startPosition);
        setInterval(() => {
            this.moving();
        }, this.speed)
    };
    ngAfterViewChecked() {
        this.rotate();
    };
    @HostListener('mouseenter') onMouseEnter() {
        this.changeDirection();
    }
    private moving() : void {
        let marginLeft : number = this.parseInteger(this.elementRef.nativeElement.style.marginLeft);
        let direction = this.activeDirection;
        if (marginLeft >= 105) {
               this.changeDirection();
           } else if (marginLeft == 0) {
              this.changeDirection();
           } 
        switch (this.activeDirection) {
            case RIGHT:
                this.setMarginLeft(marginLeft + 1);
                break;
            case LEFT:
                this.setMarginLeft(marginLeft - 1);
                break;
        }
    }
    private changeDirection() : void {
        if (this.activeDirection === RIGHT) {
            this.rotate();
            this.activeDirection = LEFT;   
        } else {
            this.rotate();
            this.activeDirection = RIGHT;
           }
    }
    private parseInteger(str) : number {
       return +str.match(/[0-9]+/g)[0];
    }
    private setMarginLeft(val : number) : void {
        this.setStyleAttribute('margin-left', `${val}vw`);
    }
    private rotate() : void {
        let direction = this.activeDirection;
        if (direction === LEFT) {
            this.setRotate(0);
        } else {
            this.setRotate(180);
        }
    }
    private setRotate(val : number) : void {
        this.setStyleAttribute('transform', `rotateY(${val}deg)`);
    }
    private getRotate() : number {
        return this.parseInteger(this.elementRef.nativeElement.style.transform);
    }
    private setStyleAttribute(prop : string, val : string) : void {
        this.renderer.setStyle(this.elementRef.nativeElement, prop, val);
    }
    private getRandomPosition() : number {
        return Math.floor(Math.random() * (105 - 0 + 1) + 0);
    }
}