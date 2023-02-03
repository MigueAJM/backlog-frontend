import { Component, OnInit } from "@angular/core"; // decorador component

@Component({
    selector: 'app-count', // nombre de etiqueta
    templateUrl: './count.component.html',
    styleUrls: ['./count.component.sass']
})

export class CountComponent implements OnInit {
    constructor(){}

    ngOnInit(): void {
        
    }

    name: string = 'Miguel Angel'
    age: number = 25
    active: boolean = true

    person: any = {
        name: 'Miguel Angel',
        age: 23,
        active: true
    }
}