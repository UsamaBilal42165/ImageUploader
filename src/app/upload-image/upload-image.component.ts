import { Component, OnInit } from '@angular/core';
import { ImageService } from '../Services/image.service';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  selectedImage: File | null = null;
  framesrc = "../assets/Images/btn_upload.png";
  alertInfo: number = 0;

  constructor(private imageService: ImageService) { }
  ngOnInit(): void {

  }
  onImageChange(event: any) {
    this.selectedImage = event.target.files[0] as File;
    const uploadedImg = document.getElementById("frame") as HTMLImageElement | null;
    if (uploadedImg != null) {
      uploadedImg.src = URL.createObjectURL(this.selectedImage).toString();
    }
  }
  uploadImage(model: any) {
    // code to handle uploading the image and name to a server
    if (this.selectedImage != null) {
      this.imageService.uploadImage(this.selectedImage, model.name).subscribe(response => {
        console.log(response); this.alertInfo = 1;
      },
        error => {
          console.log(error); this.alertInfo = 2;
        });
    }
  }
  selectUploader(event: any) {
    var a = document.getElementById("image")?.click();
  }
  resetForm() {
    this.alertInfo = 0;
    const uploadedImg = document.getElementById("frame") as HTMLImageElement | null;
    if (uploadedImg != null) { uploadedImg.src = "../assets/Images/btn_upload.png"; }
    const captionText = document.getElementById("name") as HTMLInputElement | null;
    if (captionText != null) { captionText.value = ''; }
  }
}
