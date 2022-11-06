import React, { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";
import { getStudents } from './../app-constants-apis';

export default function StudentList() {
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
        {item.Name}
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        {loading && <Box>Loading..</Box>}
        {data && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.StudentID.toString()}
          />
        )}
      </Center>
    </NativeBaseProvider>
  );
}
