import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private http: HttpClient) {}

  getData(videoId: string): Observable<any> {
    // Unique api key
    const API_KEY = 'AIzaSyAri3J8eL4nsIFRI4njl5t6lpTA_XNJ1ko';

    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

    return this.http.get<any>(url);
  }
}
