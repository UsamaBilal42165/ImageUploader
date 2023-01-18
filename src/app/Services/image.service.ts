import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'https://localhost:7221/api/Image';

  constructor(private http: HttpClient) { }

  uploadImage(image: File, name: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('Image', image, image.name);
    formData.append('ImageCaption', name);

    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // }

    return this.http.post<any>(this.apiUrl, formData);
  }
  getAllImages(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
