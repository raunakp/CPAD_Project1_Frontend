import { StatusBar } from 'expo-status-bar';
import {   ScrollView,
           StyleSheet,
           Text,
           View,
           Image,
           TouchableOpacity } from 'react-native';

export default function StudentDetails() {
  return (
    <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.header_name}>STUDENT DETAILS</Text>
              <TouchableOpacity onPress={() => props.navigation.navigate('Login', { name: 'Login'})}>
                <Text style={styles.logout_button}>logout</Text>
                <Text style={styles.back_button}>back</Text>
              </TouchableOpacity>
            </View>
            <Image style={styles.logo} source={require("./../assets/logo.png")} />
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                    <Text style={styles.name}>Student Id: </Text>
                    <Text style={styles.name}>Student Name: </Text>
                    <Text style={styles.name}>Vaccination Status</Text>
                    <TouchableOpacity style={styles.buttonContainer} >
                      <Text>MARK VACCINATED</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}  disabled= {true}>
                      <Text>REGISTER FOR VACCINATION DRIVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}  disabled= {true}>
                      <Text>UN-REGISTER FROM VACCINATION DRIVE</Text>
                    </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#b0bbfa",
    height: 200,
  },
  logo: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#e57723",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 100
  },
  body: {
    marginTop: 50,
  },
  bodyContent: {
    flex: 1,
    padding: 30,
  },
  name: {
    fontSize: 20,
    color: "#696969",
    fontWeight: "600",
    padding: 27,
    textAlign: 'left',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 40,
    backgroundColor: "#e57723",
  },
  logout_button: {
    fontSize: 18,
    fontWeight: "200",
    textDecorationLine: 'underline',
    margin: 20,
    left: 270,
    top: 150,
  },
  back_button: {
     fontSize:18,
     fontWeight:"200",
     textDecorationLine: 'underline',
     margin: 20,
     left: 20,
     top: 90,
  },
  header_name: {
      fontSize:28,
      color: "#4C4E52",
      fontWeight: "800",
      alignSelf:'center',
      position: 'absolute',
      top : 70,
   },
 header_name: {
      fontSize:28,
      color: "#4C4E52",
      fontWeight: "800",
      alignSelf:'center',
      position: 'absolute',
      top : 70,
      },
});
