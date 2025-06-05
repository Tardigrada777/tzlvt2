import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

export type StorageValue =
  | string
  | number
  | Record<string, unknown>
  | Record<string, unknown>[];

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  upsert(key: string, value: StorageValue): void {
    try {
      Preferences.set({
        key,
        value: JSON.stringify(value),
      });
    } catch (error) {
      console.error('Error serializing value for key:', key, error);
      return;
    }
  }

  async read<T>(key: string): Promise<T | null> {
    const { value } = await Preferences.get({ key });
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
