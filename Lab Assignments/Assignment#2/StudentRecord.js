// Import necessary modules from React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

// Define the main App component
const StudentRecordsApp = () => {
  const [name, setName] = useState('');
  const [gpa, setGpa] = useState('');
  const [students, setStudents] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const addStudent = () => {
    if (name && gpa) {
      const newStudent = { name, gpa };
      setStudents([...students, newStudent]);
      setName('');
      setGpa('');
    }
  };

  const searchStudent = () => {
    const result = students.find(student => student.name === searchText);
    setSearchResult(result);
    setSearchText('');
  };

  const deleteStudent = (name) => {
    const updatedStudents = students.filter(student => student.name !== name);
    setStudents(updatedStudents);
  };

  const renderItem = ({ item }) => (
    <View style={styles.studentItem}>
      <Text>Name: {item.name}</Text>
      <Text>GPA: {item.gpa}</Text>
      <Button title="Delete" onPress={() => deleteStudent(item.name)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Records</Text>

      {/* Add Student */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Add Student</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="GPA"
          keyboardType="numeric"
          value={gpa}
          onChangeText={setGpa}
        />
        <Button title="Add Student" onPress={addStudent} />
      </View>

      {/* Search Student */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Search Student</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Button title="Search" onPress={searchStudent} />
        {searchResult && (
          <View style={styles.searchResult}>
            <Text>Name: {searchResult.name}</Text>
            <Text>GPA: {searchResult.gpa}</Text>
          </View>
        )}
      </View>

      {/* Student List */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Student List</Text>
        <FlatList
          data={students}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  studentItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 5,
  },
  searchResult: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

// Export the main App component
export default StudentRecordsApp;
