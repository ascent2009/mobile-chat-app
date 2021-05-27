import React, {useState} from 'react';
// import { Constants, ImagePicker, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput, View,
  Button, ImageEditor, TouchableOpacity
} from 'react-native';
import firebaseSvc from '../FirebaseSvc';

function CreateAccount() {
//   const navigationOptions = {
//     title: 'Scv Chatter',
//   };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
//   state = {
//     name: '',
//     email: '',
//     password: '',
//     avatar: '',
//   };

const onPressCreate = async () => {
    try {
      const user = {
        name: name,
        email: email,
        password: password,
      };
      await firebaseSvc.createAccount(user);
    } catch ({ message }) {
      console.log(`create account failed. catch error: ${message}`);
    }
  };

    const onChangeTextEmail = email => setEmail(email);
    const onChangeTextPassword = password => setPassword(password);
    const onChangeTextName = name => setName(name);

//   onImageUpload = async () => {
//     const { status: cameraRollPerm } = await Permissions.askAsync(
//       Permissions.CAMERA_ROLL
//     );
//     try {
//       // only if user allows permission to camera roll
//       if (cameraRollPerm === 'granted') {
//         let pickerResult = await ImagePicker.launchImageLibraryAsync({
//           allowsEditing: true,
//           aspect: [4, 3],
//         });
//         console.log(
//           'ready to upload... pickerResult json:' + JSON.stringify(pickerResult)
//         );

//         var wantedMaxSize = 150;
//         var rawheight = pickerResult.height;
//         var rawwidth = pickerResult.width;
//         var ratio = rawwidth / rawheight;
//         var wantedwidth = wantedMaxSize;
//         var wantedheight = wantedMaxSize/ratio;
//         // check vertical or horizontal
//         if(rawheight > rawwidth){
//             wantedwidth = wantedMaxSize*ratio;
//             wantedheight = wantedMaxSize;
//         }
//         let resizedUri = await new Promise((resolve, reject) => {
//           ImageEditor.cropImage(pickerResult.uri,
//           {
//               offset: { x: 0, y: 0 },
//               size: { width: pickerResult.width, height: pickerResult.height },
//               displaySize: { width: wantedwidth, height: wantedheight },
//               resizeMode: 'contain',
//           },
//           (uri) => resolve(uri),
//           () => reject(),
//           );
//         });
//         let uploadUrl = await firebaseSvc.uploadImage(resizedUri);
//         this.setState({avatar: uploadUrl});
//         await firebaseSvc.updateAvatar(uploadUrl);
//       }
//     } catch (err) {
//       console.log('onImageUpload error:' + err.message);
//       alert('Upload image error:' + err.message);
//     }
//   };

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
        //   title="Create Account"
          style={styles.buttonContainer}
          onPress={onPressCreate}
          >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        {/* <Button
          title="Upload Avatar Image 2"
          style={styles.buttonText}
          onPress={this.onImageUpload}
        /> */}
      </View>
    );
  
}

const offset = 16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
    // alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    // marginTop: offset,
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
    // paddingHorizontal: 12
  },
  buttonText: {
    // marginLeft: offset,
    fontSize: offset,
    fontWeight: 'bold',
    color: "#fff",
    alignSelf: "center",
    // verticalAlign: "middle"
  },
});

export default CreateAccount;