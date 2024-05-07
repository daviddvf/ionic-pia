import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { browserLocalPersistence} from 'firebase/auth';
import { Usuario } from '../interfaces/usuario';
import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';



const firebaseApp = initializeApp(environment.firebaseConfig);
const dbCloudFirestore = getFirestore(firebaseApp);


@Injectable({
  providedIn: 'root'
})
export class AutenticacionFirebaseService {

  private usuarioSubject: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
  usuario$ = this.usuarioSubject.asObservable();

  public isLoged : any = false;
  user: any;
  auth: Auth;

  private docsArray: Array<any> = new Array();
  
  db = dbCloudFirestore;

  constructor() { 

    this.auth = getAuth(firebaseApp);
    
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        
        this.usuarioSubject.next(user);
        this.isLoged = true;
        this.user = user;
        
      } else {
        
      }
    });

    

  }

  getStateAuth(){
    return this.auth;
   }
     
  onLogin(user: Usuario): Promise<any>{
      return setPersistence(this.auth, browserLocalPersistence).then(() => 
        signInWithEmailAndPassword(this.auth, user.email, user.password)).catch(err => console.log(err))
      
  }
   
   onRegister(user: Usuario): Promise<any>{
      return  createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }
  
  onlogout(){
    signOut(this.auth).then(() => {
      console.log('se ha cerrado la sesion correctamente');
    }).catch((error) => {
      console.log('error al cerrar la sesion');
    });
  }

  async altaPuntuacion(pts: number){
    
    
      const docRef = await addDoc(collection(this.db, this.user.email + "-Data"), {
        date: this.getDate(),
        puntuacion: pts

      });
      console.log();
  
  }
  getDate(){
    const currentDate: Date = new Date();

    const year: number = currentDate.getFullYear();
    const month: number = currentDate.getMonth() + 1; 
    const day: number = currentDate.getDate();

    return `${day}-${month}-${year}`;

  }

  async bajaPuntuacion(){
    const query = await getDocs(collection(this.db, this.user.email + "-Data"));
    query.forEach((doc) => {
      this.docsArray.push(doc.data());
      console.log(doc.data());
    })
  }

  getDocs()
  {
    return this.docsArray;
  }
 
}


