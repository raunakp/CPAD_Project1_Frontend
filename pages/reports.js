import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { getReports } from './../app-constants-apis';

export default function Reports(props) {

  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    console.log("fetchData")
    const resp = await fetch(getReports);
    const data = await resp.json();
    console.log(data)
    setData(data);
    setLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      {loaded &&
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.header_name}>REPORTS</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login', { name: 'Login' })}>
              <Text style={styles.logout_button}>logout</Text>
              <Text style={styles.back_button}>back</Text>
            </TouchableOpacity>
          </View>
          <Image style={styles.logo} source={require("./../assets/logo.png")} />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Upcoming Vaccination Drives: {data.upcomingDrives}</Text>
              <Text style={styles.name}>Past Vaccination Drive:  {data.pastDrives}</Text>
              <Text style={styles.name}>Students Vaccinated:  {data.vaccinated}</Text>
              <Text style={styles.name}>Students not Vaccinated: {data.unvaccinated}</Text>
            </View>
          </View>
        </View>
      }

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
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 20,
    color: "#696969",
    fontWeight: "600",
    padding: 27,
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
    fontSize: 18,
    fontWeight: "200",
    textDecorationLine: 'underline',
    margin: 20,
    left: 20,
    top: 90,
  },
  header_name: {
    fontSize: 28,
    color: "#4C4E52",
    fontWeight: "800",
    alignSelf: 'center',
    position: 'absolute',
    top: 70,
  },
  header_name: {
    fontSize: 28,
    color: "#4C4E52",
    fontWeight: "800",
    alignSelf: 'center',
    position: 'absolute',
    top: 70,
  },
});
