import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);

  const clonedRequest = req.clone();
  return next(clonedRequest).pipe(
    catchError((error) => {
      let errorMessage = '';

      if (error.error || error.error?.message) {
        errorMessage = `${error.error?.message || error.message}`;
      } else {
        errorMessage = getErrorMessage(error.status);
      }

      snackBar.open(errorMessage, 'Fechar', {
        duration: 5000,
      });
      return throwError(() => error);
    })
  );
};

function getErrorMessage(status: number) {
  let errorMessage = '';
  switch (status) {
    case 401:
      errorMessage = 'Você não está mais logado no sistema';
      break;
    case 403:
      errorMessage = 'Você não possui permissão para fazer essa ação';
      break;
    case 404:
      errorMessage = 'Informação solicitada não pode ser encontrada';
      break;
    default:
      errorMessage = 'Aconteceu algum erro desconhecido.';
  }
  return errorMessage;
}
