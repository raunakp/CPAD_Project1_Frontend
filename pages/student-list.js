import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";
import { getStudents } from './../app-constants-apis';

export default function StudentList(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch(getStudents);
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    const dataInterval = setInterval(() => fetchData(), 5 * 1000);
    return () => clearInterval(dataInterval);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
        <View>
          <Text>{item.StudentID}</Text>
          <Text>{item.Name}</Text>
        </View>
      </Box>
    );
  };

  return (
    <NativeBaseProvider mt={50}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login', { name: 'Login' })}>
          <Text style={styles.logout_button}>logout</Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.logo} source={require("./../assets/logo.png")} />
      <View style={styles.appContainer}>
        <View style={styles.bodyContent}>
        </View>
        {loading && <Box>Loading..</Box>}
        {data && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.StudentID.toString()}
          />
        )}
      </View>

    </NativeBaseProvider>
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
    marginTop: 130
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
    fontSize: 10,
    color: "#696969",
    fontWeight: "600",
    height: 100
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
});