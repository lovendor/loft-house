// import { NgIf } from '@angular/common';
// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-user-info',
//   standalone: true,
//   imports: [],
//   template: `
//     <div *NgIf='username'>
//       <div>{{ username }} </div>
//     </div>
//     `
// })

// export class UserInfoComponent {
//   @Input() username: string = '';
// }
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="username">
      <div>{{ username }}</div>
    </div>
  `
})
export class UserInfoComponent {
  @Input() username: string = '';

  
  ngOnChanges() {
    console.log('username:', this.username);
}}
