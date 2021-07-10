import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey            : process.env.REACT_APP__API_KEY,
  authDomain        : process.env.REACT_APP__AUTH_DOMAIN,
  projectId         : process.env.REACT_APP__PROJECT_ID,
  storageBucket     : process.env.REACT_APP__STORAGE_BUCKET,
  messagingSenderId : process.env.REACT_APP__MESSAGING_SENDER_ID,
  appId             : process.env.REACT_APP__APP_ID,
  measurementId     : process.env.REACT_APP__MEASUREMENT_ID,
})

const PREFIX         = 'instagram-clone-v1__'
const cloudFirestore = firebaseApp.firestore()
const auth           = firebase.auth()
const storage        = firebase.storage()

export { PREFIX, cloudFirestore, auth, storage }
