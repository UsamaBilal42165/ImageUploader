import { UploadImageComponent } from './upload-image/upload-image.component';
import { ImagelistComponent } from './imagelist/imagelist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UploadImageComponent },
  { path: 'images', component: ImagelistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
