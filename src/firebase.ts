import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyA6gOhscqZwID0GYbu9nGprPB6ujftvDvs',
	authDomain: 'portfolio-72e6f.firebaseapp.com',
	projectId: 'portfolio-72e6f',
	storageBucket: 'portfolio-72e6f.appspot.com',
	messagingSenderId: '447676316362',
	appId: '1:447676316362:web:74a69c22016f782db41233'
}

const firebaseApp = initializeApp(firebaseConfig)

export const firestore = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)
