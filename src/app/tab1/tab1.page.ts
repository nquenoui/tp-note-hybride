import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public storageService: StorageService) {}

  async ngOnInit() {
    

    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.watchPosition({timeout: 5000}, async (position, err) => {
          await this.storageService.saveNewPosition(position.coords.longitude, position.coords.latitude);
      });
    
      console.log('Current position:', coordinates);
      
    };

    printCurrentPosition();
  }
  
}
