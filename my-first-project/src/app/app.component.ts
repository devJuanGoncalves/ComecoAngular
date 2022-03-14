import { TransferenciaService } from './service/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-first-project';

  constructor(private service: TransferenciaService) {}

  transferir($event) {
    console.log($event);
    this.service.adicionar($event);
  }
}
