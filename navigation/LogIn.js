import React, {useState} from 'react';
import { Text, TextInput , View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import firebaseSvc from '../FirebaseSvc';

export default function LogIn({ navigation }) {
    const [email, setEmail] = useState('gs150168@gmail.com');
    const [password, setPassword] = useState('chatRN');
    const [name, setName] = useState('GS');

    const onPressLogin = async () => {
        const user = {
            email: email,
            password: password,
            name: name,
        };
        firebaseSvc.login(user, loginSuccess, loginFailed);
    };     

    const loginSuccess = () => {
        console.log('login successful, navigate to chat.');
        navigation.navigate('Home', {
            name: name,
            email: email,
        });
    };
    
    const loginFailed = () => {
        alert('Login failure. Please tried again.');
    };

    const onChangeTextEmail = email => {
           setEmail(email)
    };
    
    const onChangeTextPassword = password => {
            setPassword(password)
    };

    const onChangeTextName = name => {
           setName(name)
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter your nickname:</Text>
        <TextInput style={styles.input}
            onChangeText={onChangeTextName}
        />
        <Text style={styles.title}>Enter your email:</Text>
        <TextInput style={styles.input}
            onChangeText={onChangeTextEmail}
        />
        <Text style={styles.title}>Enter your password:</Text>
        <TextInput style={styles.input}
            onChangeText={onChangeTextPassword}
        />
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress = {onPressLogin}
        >
          <Text style={styles.buttonText}>Go to Chat Room</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress = {() => navigation.navigate('СreateAccount')}
        >
          <Text style={styles.buttonText}>Create a new account</Text>
        </TouchableOpacity>
      </View>
    );
}

const offset = 16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
    justifyContent: "flex-start",
    },
  title: {
    color: "grey",
    alignSelf: "flex-start",
    marginLeft: offset,
    fontSize: offset,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
    borderColor: 'blue',
    borderRadius: 15,
    borderWidth: 1,
  },
  input: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: 'grey',
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: "#fff",
    fontSize: offset,
  },
  buttonContainer: {
    backgroundColor: 'rgb(33, 150, 243)',
    height: 40,
    margin: offset,
    marginTop: offset * 2,
    borderRadius: 20,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: offset,
    fontWeight: 'bold',
    color: "#fff",
    alignSelf: "center",
  },
});

