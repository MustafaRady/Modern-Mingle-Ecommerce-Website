import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { from, map, mergeMap, Observable } from 'rxjs';
import { Garment } from "../models/product";

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private angularFirestore: AngularFirestore) {}

    // Create
    add(product:Garment): Observable<void> {
        const id = this.angularFirestore.createId();
        return from(this.angularFirestore.collection('garments').doc(id).set(product));
    }

    addTopSellers(product:Garment): Observable<void> {
        const id = this.angularFirestore.createId();
        return from(this.angularFirestore.collection('topSellers').doc(id).set(product));
    }


    // Read
    getAll(): Observable<any[]> {
        return this.angularFirestore.collection('garments').valueChanges({ idField: 'id' });
    }

    getAllTopSellers(): Observable<any[]> {
        return this.angularFirestore.collection('topSellers').valueChanges({ idField: 'id' });
    }

    getById(id: string): Observable<any> {
        return this.angularFirestore.collection('garments').doc(id).valueChanges();
    }

    // Update
    update(id: string, updatedProduct: {name?: string, price?: number, size?: string, color?: string}): Observable<void> {
        return from(this.angularFirestore.collection('garments').doc(id).update(updatedProduct));
    }

    // Delete
    delete(id: string): Observable<void> {
        return from(this.angularFirestore.collection('garments').doc(id).delete());
    }

    deleteAll(): Observable<void> {
        return this.angularFirestore.collection('garments').get().pipe(
          map(snapshot => snapshot.docs.map(doc => doc.id)),
          mergeMap(ids => {
            const deletePromises = ids.map(id => this.angularFirestore.collection('garments').doc(id).delete());
            return from(Promise.all(deletePromises));
          }),
          map(() => undefined)
        );
    }
}
