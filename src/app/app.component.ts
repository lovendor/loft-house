import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  template: `
    <app-login-form (warning)="handleWarning($event)"></app-login-form>
    <div *ngIf="warningText" class="warning">{{ warningText }}</div>
  `,
})
export class AppComponent {
  warningText: string = '';

  handleWarning(msg: string) {
    if (msg) {
      alert(msg);
    }
  }
}

