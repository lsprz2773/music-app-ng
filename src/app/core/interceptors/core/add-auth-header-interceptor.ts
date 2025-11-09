import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from '@angular/core';
import {environment} from '../../../../environments/environment.development';
import {CookiesStorageService} from '../../services/core/cookies-storage-service';

export const addAuthHeaderInterceptor: HttpInterceptorFn = (req, next) => {
  const _cookieStorage: CookiesStorageService = inject(CookiesStorageService);

  if (!req.url.includes(environment.API_URL))
    return next(req);

  const newReq = req.clone({
    headers: req.headers.append('Authorization', `Bearer ${_cookieStorage.getKeyValue('access_token')}`),
  })
  return next(newReq);
};
