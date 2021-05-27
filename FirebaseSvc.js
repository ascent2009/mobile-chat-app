import firebase from 'firebase';

class FirebaseSvc {
  
  constructor() {
    if (!firebase.apps.length) { //avoid re-initializing
      firebase.initializeApp({
        apiKey: "AIzaSyBYe5HDfY6FyfkK7WD6lPThNmtOYMv0NaI",
        authDomain: "rn-chat-4eb0b.firebaseapp.com",
        projectId: "rn-chat-4eb0b",
        storageBucket: "rn-chat-4eb0b.appspot.com",
        messagingSenderId: "444048981203",
        appId: "1:444048981203:web:68d5060cbf7460dbf3e826",
        measurementId: "G-M2QBC3KVEP"
        });
     }
  }

    login = async(user, success_callback, failed_callback) => {
        await firebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(success_callback, failed_callback);
    }

    createAccount = async (user) => {
        firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(function() {
                const userf = firebase.auth().currentUser;
                userf.updateProfile({ displayName: user.name})
            .then(function() {
                alert(`User ${user.name} was created successfully.`);
            }, function(error) {
                console.warn("Error update displayName.");
            });
        }, function(error) {
            console.error(`got error: ${error.message}`);
            alert("Create account failed.");
        });
    }

    get ref() {
        return firebase.database().ref('Messages');
    }

    refOn = callback => {
         this.ref
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot)));
    }

    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }

    parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        const timestamp = new Date(numberStamp);
        const message = {_id, timestamp, text, user};
        return message;
    };

    send = messages => {
      for (let i = 0; i < messages.length; i++) {
        const { text, user } = messages[i];
        const message = {text, user,
                        createdAt: this.timestamp,
                         };
        this.ref.push(message);
    }
};

}

const firebaseSvc = new FirebaseSvc();

export default firebaseSvc;