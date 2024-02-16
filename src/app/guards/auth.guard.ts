import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let isAuth = true;

  if (isAuth) {
    return true;
  } else {
    //go to login 
  }

  return false;
};
