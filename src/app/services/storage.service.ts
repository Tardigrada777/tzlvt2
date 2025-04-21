import { Injectable } from '@angular/core';

export type StorageValue = string | number | Record<string, unknown>;

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  upsert(key: string, value: StorageValue): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error parsing value for key:', key, error);
      return;
    }
  }

  read(key: string): StorageValue | null {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (error) {
        console.error('Error parsing value for key:', key, error);
        return null;
      }
    }
    return null;
  }
}
