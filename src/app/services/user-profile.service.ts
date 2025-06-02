import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  constructor(private firestore: Firestore) {}

  async getUserProfileData(uid: string): Promise<any> {
    const docRef = doc(this.firestore, 'users', uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  }

  async createUserProfileData(uid: string, data: any): Promise<void> {
    const docRef = doc(this.firestore, 'users', uid);
    await setDoc(docRef, data, { merge: true });
  }
}
