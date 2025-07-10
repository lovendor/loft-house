import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from '../../store/auth/auth.selectors';
import { AppState } from '../../store/app.state';

import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { logout } from '../../store/auth/auth.actions'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user$: Observable<string | null>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.user$ = this.store.select(selectUser).pipe(
      map(user => user?.username ?? null)
    );
  }

  logoutUser() {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }
}
