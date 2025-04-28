import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('access_token');

  if (authToken && authToken.trim() !== '') {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${authToken}` }
    });
  }
  return next(req);
};