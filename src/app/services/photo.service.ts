import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public photos: UserPhoto[] = [];

  public async addNewToGallery() {
    // Take a photo
    const capturePhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filePath: "soon...",
      webviewPath: capturePhoto.webPath!
    });
  }

}

export interface UserPhoto {
  filePath: string;
  webviewPath?: string;
}