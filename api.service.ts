import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://api.edamam.com/api/nutrition-details';
const API = 'https://api.edamam.com/api/nutrition-data';
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    public list(app_id: string, app_key: string,): Observable<any> {
        return this.http.post(`${API_URL}`,
            { app_id, app_key, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
    }
    getData(): Observable<any> {
        return this.http.get(`${"https://api.themoviedb.org/3/movie/550?api_key=47297d5270e2a98eb339447b66fbf31c"}`);
    }
}
