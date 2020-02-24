import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const baseUrl = '/api/v2/entries/en-us/';
const appId = 'f572c547';
const appKey = '5fb84d1cd2befac313e2ee6f8e675bfb';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private http: HttpClient) {
  }

  searchWords(searchTerm: string): Observable<any> {
    return this.http.get(
      baseUrl.concat(searchTerm), {
        params: {strictMatch: 'false'},
        headers: {app_id: appId, app_key: appKey}
      });
  }
}
