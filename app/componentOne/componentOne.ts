import { Component } from "@angular/core";

@Component({
    selector: 'component-one',
    template: `
        <h2>Component 1</h2>
        
        <p>{{interpolation}}</p>
        
        <p>{{1 + 1}}</p>

        <p>{{1 + 1 + getVal()}}</p>

        <div *ngIf="ifCondition">if conditional statement</div>

        <div>
            <button (click)="clickFun()">click me</button>
        </div>

        <br/>
        <input [(ngModel)]="inputVal" /> {{inputVal}}

    `
})
export class ComponentOne {
    private interpolation: string = "Hello World";

    private ifCondition: boolean = true;

    private inputVal: string = "Name";

    getVal(): number {
        return 10;
    }

    clickFun() {
        alert('button click');
    }
}