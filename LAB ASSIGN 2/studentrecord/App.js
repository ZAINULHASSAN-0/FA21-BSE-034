import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const StudentRecordApp = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [students, setStudents] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const addStudent = () => {
    if (name && age) {
      setStudents([...students, { name, age }]);
      setName('');
      setAge('');
    }
  };

  const searchStudent = () => {
    const student = students.find((student) => student.name === searchName);
    if (student) {
      setSearchResult(`Name: ${student.name}, Age: ${student.age}`);
    } else {
      setSearchResult('Student not found');
    }
  };

  const deleteStudent = (name) => {
    const updatedStudents = students.filter((student) => student.name !== name);
    setStudents(updatedStudents);
  };

  const renderItem = ({ item }) => (
    <View style={styles.studentItem}>
      <Text>{`Name: ${item.name}, Age: ${item.age}`}</Text>
      <Button title="Delete" onPress={() => deleteStudent(item.name)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Record Management</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <Button title="Add Student" onPress={addStudent} />
      <Text style={styles.searchLabel}>Search Student by Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={searchName}
        onChangeText={(text) => setSearchName(text)}
      />
      <Button title="Search" onPress={searchStudent} />
      <Text style={styles.searchResult}>{searchResult}</Text>
      <Text style={styles.studentListHeader}>Student List:</Text>
      <FlatList
        data={students}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  searchLabel: {
    marginTop: 20,
    marginBottom: 10,
  },
  searchResult: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  studentListHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  studentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default StudentRecordApp;
