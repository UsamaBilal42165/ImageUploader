# ImageUploader

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Setup
  
   Angular CLI: 13.1.4
   Node: 16.13.1
   Package Manager: npm 8.1.2
   OS: win32 x64
   Angular: 13.1.3
   
## Development server

Run `ng serve` for a dev server

## Details

1)  The Code consists two components namely - 
  a)  imagelist     -component represents image gallery.
  b)  upload-image  -component contains upload image form.

2)  A service file (Services/image.service.ts) is being used to via http protocol to communicate with Backend APIs to store & fetch data. Data is being sent as a File       (Image) and text (Image Caption).

3)  upload-image component is a simple form with basic metrics to recieve user data.

4)  imagelist component fetches list of images as byte array along side their Image Captions as text/string...the byte array is converted to image for display prupose.

## End User change case;

1)  initialize angular project to fetch all package.
2)  API Endpoint is available as in Service file...this may change is current EndPoint is in use by localhost or Endpoint Port is being consumed by local IIS Manager         etc. 
