import { AbstractControl, ValidatorFn } from '@angular/forms';

export class Utils {
  public static async dataUrlToFile(dataUrl: string, fileName: string): Promise<File> {
    const res: Response = await fetch(dataUrl);
    const blob: Blob = await res.blob();
    return new File([blob], fileName, { type: 'image/png' });
  }

  public static async converToBlob(base64: any): Promise<Blob> {
    const byteCharacters = atob(base64);
    const byteNumbers = await new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: 'audio/mp3' });
  }

  public static elapsedTimer(seconds: any) {
    seconds = Math.floor(seconds);
    let h: any = Math.floor(seconds / 3600);
    let m: any = Math.floor((seconds - h * 3600) / 60);
    let s: any = seconds - h * 3600 - m * 60;

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    if (h > 0) {
      return h + ':' + m + ':' + s;
    } else {
      return m + ':' + s;
    }
  }

  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }
      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
}
