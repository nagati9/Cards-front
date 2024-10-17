import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Monstre } from './Models/Monstre';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class MonstresService {
    readonly API_URL = "http://localhost:8080/chercher/";
    readonly ENDPOINT = "/monstres";
    element: String = "";


    constructor(private httpClient: HttpClient) {

    }
    getMonstres(): Observable<Monstre[]> {
        return this.httpClient.get<Monstre[]>(this.API_URL);
    }

    chercherMonstres(): Observable<Monstre[]> {
        return this.httpClient.get<Monstre[]>(this.API_URL + this.element);
    }

}
