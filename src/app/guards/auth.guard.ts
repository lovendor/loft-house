import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { isLoggedIn } from '../store/auth/auth.selectors';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(isLoggedIn).pipe(
    take(1),
    map(loggedIn => {
      if (!loggedIn) {
        router.navigate(['/login']);
        return false;
      }
      return true;
    })
  );
};