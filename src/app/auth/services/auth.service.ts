import { first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user:firebase.User;

  constructor(public afAuth:AngularFireAuth) { }

  // Metodo de logeo de una cuenta previamente registrada
  async login(email:string, password:string){

    try {

      const result = await this.afAuth.signInWithEmailAndPassword(email, password);

      return result;
      
    } catch (error) {

      console.log(error);
    }
   
  }

  //Metodo para registrar un nuevo usuario
  async register(email:string, password:string){

    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);

      return result;

    } catch (error) {
      
      console.log(error);
    }
   

  }

  // Metodo para cerrar sesion, aqui se borraran todos los datos que se tengan guardados (En proceso)
  async logout(){

    try {
      await this.afAuth.signOut();

    } catch (error) {
      console.log(error);  
    }
    
  }

  getCurrentUser(){

    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
