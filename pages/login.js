import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export default function App() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source = {require("./assets/logo.png")}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
     <TouchableOpacity style={styles.loginBtn}>
       <Text style={styles.loginText}>LOGIN</Text>
     </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0bbfa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: "25%",
    height: "25%",
    marginBottom : 10,
    resizeMode: 'contain',
  },
  logo: {
      width: 120,
      height: 120,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "#e57723",
      marginBottom:10,
      alignSelf:'center',
      marginTop:30
    },
  inputView: {
     backgroundColor: "#fff",
     borderRadius: 30,
     width: "70%",
     height: 45,
     marginBottom: 20,
     alignItems: "center",
   },

   TextInput: {
     height: 50,
     flex: 1,
     padding: 10,
     marginLeft: 20,
   },
   forgot_button: {
     height: 30,
     marginBottom: 30,
   },
   loginBtn:    {
      width:"80%",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      backgroundColor:"#e57723",
    }
});
