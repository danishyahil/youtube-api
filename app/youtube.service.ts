import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  //this method will make HTTP request
  getChannels(channelName: string): Observable<any> {

    //API_KEY = "AIzaSyA0qCzR2qx2ORVHFZ8nOSSWfhfOz_pJUdI"

    //this will return channel only
    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + channelName + "&type=channel&key=AIzaSyA0qCzR2qx2ORVHFZ8nOSSWfhfOz_pJUdI" + "&maxResults=20"

    return this.http.get<any>(url)
  }
}
