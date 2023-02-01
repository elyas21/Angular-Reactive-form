import { Injectable } from "@angular/core";
import { AsyncValidator, AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, map, catchError, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class IsUserNameTaken implements AsyncValidator {
    //   constructor(private heroesService: HeroesService) {}

    validate(
        control: AbstractControl
    ): Observable<ValidationErrors | null> {
        // return this.heroesService.isAlterEgoTaken(control.value)
        return of(true).pipe(
            map(isTaken => (isTaken ? { uniqueAlterEgo: true } : null)),
            catchError(() => of(null))
        );
    }
}