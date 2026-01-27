import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FileDownloadService {
  constructor(private http: HttpClient) { }

  downloadFromUrl(url: string, fallbackName?: string): void {
    this.http.get(url, { responseType: 'blob', observe: 'response' })
      .subscribe({
        next: (res: HttpResponse<Blob>) => {
          const blob = res.body;
          if (!blob) {
            console.error('Download failed: empty response body.');
            return;
          }

          const filename =
            this.getFilenameFromHeaders(res) ??
            this.fallbackNameFromUrl(url) ??
            fallbackName ??
            'download';

          this.saveBlob(blob, filename);
        },
        error: (err) => {
          console.error('Download failed', err)
        }
      });
  }


  private saveBlob(blob: Blob, filename: string) {
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(blobUrl);
  }

  private getFilenameFromHeaders(res: HttpResponse<Blob>): string | null {
    const cd = res.headers.get('content-disposition');
    if (!cd) return null;

    const star = cd.match(/filename\*\s*=\s*UTF-8''([^;]+)/i);
    if (star?.[1]) return decodeURIComponent(star[1]);

    const normal = cd.match(/filename\s*=\s*"?([^"]+)"?/i);
    return normal?.[1] ?? null;
  }

  private fallbackNameFromUrl(url: string): string | null {
    try {
      const u = new URL(url, window.location.origin);
      const last = u.pathname.split('/').pop();
      return last ? decodeURIComponent(last) : null;
    } catch {
      return null;
    }
  }
}

