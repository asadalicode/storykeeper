export class Utils {
  public static async dataUrlToFile(dataUrl: string, fileName: string): Promise<File> {
    const res: Response = await fetch(dataUrl);
    const blob: Blob = await res.blob();
    return new File([blob], fileName, { type: 'image/png' });
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
}
