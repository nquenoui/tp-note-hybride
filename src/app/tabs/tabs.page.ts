import { Component } from '@angular/core';
import { Toast } from '@capacitor/toast';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

  async ngOnInit(){

    //Retourne le type de connexion actuelle
    const logCurrentNetworkStatus = async () => {
      const status = await Network.getStatus();
      return status;
    };

    //Function pour le toast
    const showHelloToast = async () => {
      const statusJSON = await logCurrentNetworkStatus();
      await Toast.show({
        text: 'Connecté sur le réseau : '+statusJSON.connectionType,
      });
    };

    //Affichage du toast
    showHelloToast();
    
  }
}
