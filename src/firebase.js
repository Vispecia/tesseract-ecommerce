import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyC3wgeIGgK7so6GiYJk4mNCLjJnoHtOprM",
    authDomain: "tesseract-ecommerce.firebaseapp.com",
    projectId: "tesseract-ecommerce",
    storageBucket: "tesseract-ecommerce.appspot.com",
    messagingSenderId: "176857910524",
    appId: "1:176857910524:web:c75b2991fe987880999b79"
})

export const auth = app.auth()
export default app