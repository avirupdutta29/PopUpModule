import { GreetingsComponent } from './greetings/greetings.component';
import { GeneralService } from './shared/services/general.service';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'popupModule';
  matDialog: any;

  constructor(public generalService: GeneralService){


  }

  onOpenDialogClick(){

    this.matDialog.open(GreetingsComponent)

  }
}
