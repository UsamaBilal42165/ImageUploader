import { Component, OnInit } from '@angular/core';
import { ImageService } from '../Services/image.service';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-imagelist',
  templateUrl: './imagelist.component.html',
  styleUrls: ['./imagelist.component.css']
})
export class ImagelistComponent implements OnInit {
  images: any[] | undefined;

  constructor(private imageService: ImageService, private sanitizer: DomSanitizer) {
    this.imageService.getAllImages().subscribe(
      (data) => {
        this.images = data;
        console.log(this.images);
      }

    );
  }

  transform() {
    this.images?.forEach(element => {
      element.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl(element.imagePath);
      console.log(element.imagePath);
    });

  }

  ngOnInit(): void {
  }

}
