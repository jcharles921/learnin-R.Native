import React, { useState } from "react";
// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Live text");
  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" },
    { name: "bowser", id: "8" },
    { name: "bowser", id: "9" },
    { name: "bowser", id: "10" },
    { name: "bowser", id: "11" },
    { name: "Gumpa", id: "12" },
  ]);
  const enventHandler = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
      setText("Live text");
    }
  }
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
        <View style={styles.list1}>
        <ScrollView>
          {people.map(user =>(
            <View key={user.key}>
              <Text style={styles.list2}>{user.name}</Text>
            </View>
          ))}
          </ScrollView>

        </View>

    </View>
  );
}
// const styles2 = StyleSheet.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  header: {
    width: "80%",
    backgroundColor: "blue",
    color: "#fff",
  },
  button: {
    display: "flex",
    backgroundColor: "pink",
    color: "#fff",
    borderColor: "red",
    width: "77%",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    backgroundColor: "white",
  },
  list1: {
    borderWidth: 2,
    borderColor: "green",
  },
  list2: {
    borderWidth: 3,
    borderColor: "pink",
    fontSize: 25,
 padding:30
  },
  list: {
  
    backgroundColor: "yellow",
    padding: 10,
    
  },
});
