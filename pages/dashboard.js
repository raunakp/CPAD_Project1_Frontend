import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
          <View style={styles.header}>
             <TouchableOpacity>
                    <Text style={styles.logout_button}>logout</Text>
                  </TouchableOpacity>
           </View>
          <Image style={styles.logo} source={require("./assets/logo.png")}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Vaccination Dashboard</Text>

              <TouchableOpacity style={styles.buttonContainer}>
                <Text>MANAGE STUDENTS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>MANAGE VACCINATION DRIVE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>REPORTS</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#b0bbfa",
    height:200,
  },
  logo: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#e57723",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  body:{
    marginTop:50,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:40,
    backgroundColor: "#e57723",
 pages },
  logout_button: {
    fontSize:18,
    fontWeight:"200",
    textDecorationLine: 'underline',
    margin: 20,
    left: 270,
    top: 150,
    },
});
