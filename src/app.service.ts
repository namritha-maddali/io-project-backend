import { Injectable } from '@nestjs/common';
import { ReminderInterface } from './app.controller';
// import data from './data.json';
import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import serviceAccount from '../service.json';

@Injectable()
export class AppService {
  firebase;
  db;

  constructor() {
    this.firebase = initializeApp({
      credential: cert(serviceAccount as any),
    });
    this.db = getFirestore();
  }

  async getAllReminders() {
    const snapshot = await this.db.collection('reminders').get();
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  }
}
