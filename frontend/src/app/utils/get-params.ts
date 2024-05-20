import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

export function getParams(param: string) {
  const activatedRoute = inject(ActivatedRoute);

  return activatedRoute.params.pipe(map((params) => params[param]));
}
