import React, {useState} from 'react';
import {
  StyleSheet, Text,
  TextInput, View,
  Button, TouchableOpacity
} from 'react-native';
import firebaseSvc from '../FirebaseSvc';

function CreateAccount() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const onPressCreate = async () => {
        try {
          const user = {
            name: name,
            email: email,
            password: password,
          };
        await firebaseSvc.createAccount(user);
        }
        catch ({ message }) {
          console.log(`create account failed. catch error: ${message}`);
        }
  };

    const onChangeTextEmail = email => setEmail(email);
    const onChangeTextPassword = password => setPassword(password);
    const onChangeTextName = name => setName(name);


    return (
      <View style={styles.container}>
        <Text style={styles.title}>Email:</Text>
        <TextInput
          style={styles.input}
          placeHolder="test3@gmail.com"
          onChangeText={onChangeTextEmail}
          value={email}
        />
        <Text style={styles.title}>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextPassword}
          value={password}
        />
        <Text style={styles.title}>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextName}
          value={name}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onPressCreate}
          >
          <Text style={styles.buttonText}>Create Account</Text>
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
    marginLeft: offset,
    fontSize: offset,
    color: 'grey'
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

export default CreateAccount;