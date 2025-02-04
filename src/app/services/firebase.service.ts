import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { DayData } from '../models/day-data.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private readonly collectionName = 'days';

  constructor(private firestore: Firestore) {}

  // Add a new day's data
  async addDay(day: DayData): Promise<void> {
    const daysCollection = collection(this.firestore, this.collectionName);
    await addDoc(daysCollection, day);
  }

  // Get all days' data
  getDays(): Observable<DayData[]> {
    const daysCollection = collection(this.firestore, this.collectionName);
    return collectionData(daysCollection, { idField: 'id' }) as Observable<DayData[]>;
  }

  // Update a day's data
  async updateDay(id: string, day: Partial<DayData>): Promise<void> {
    const dayDoc = doc(this.firestore, `${this.collectionName}/${id}`);
    await updateDoc(dayDoc, day);
  }

  // Delete a day's data
  async deleteDay(id: string): Promise<void> {
    const dayDoc = doc(this.firestore, `${this.collectionName}/${id}`);
    await deleteDoc(dayDoc);
  }
}