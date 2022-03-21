import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

export interface Position {
    long: Number;
    lat: Number;
    date: Date;
}

@Injectable({
  providedIn: 'root',
})

export class StorageService {
    public listPosition:Array<Position> = [];

    constructor(){
        //Récupération de la liste dans le stockage
        Storage.get({ key: 'list' }).then(val => {
            if (val.value != null) {
                console.log(val);
                this.listPosition = JSON.parse(val.value);
            }
         });
    }

    //Ajout d'un élément dans la liste
    async saveNewPosition(long: Number, lat: Number){
        //Si la liste est déjà pleine
        if(this.listPosition.length >= 5){
            this.listPosition.shift();
        }
        let date: Date = new Date();  
        this.listPosition.push({long: long, lat: lat, date: date});

        //Sauvegarde du tableau
        await Storage.set({
            key: 'list',
            value: JSON.stringify(this.listPosition)
        });
    }

}
