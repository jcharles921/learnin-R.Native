import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color:"white"
  },
  list2: {
    borderWidth: 3,
    width:"auto",
    borderColor: "pink",
    backgroundColor:"#153243",
    fontSize: 17,
    color:"white",
   
 padding:30
  },

});

export default function App() {
  const [text, setText] = useState("Live text");
  const [people,setPeople]= useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" },
    { name: "wario", id: "8" },
    { name: "bowser", id: "9" },
    { name: "bowser", id: "10" },
    { name: "bowser", id: "11" },
    { name: "Gumpa", id: "12" },
  ]);
  const pressHander =(id)=>{
    console.log(id)
    setPeople((prevPeople)=>{
      return prevPeople.filter(person => person.id != id)

    })

  }
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
          <FlatList
          numColumns={3}
          data={people}
          keyExtractor={(item) => item.id}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=> pressHander(item.id)}>
            <Text style={styles.list2}>{item.name}</Text>
            </TouchableOpacity>
          )}
          />
        {/* <ScrollView>
          {people.map(user =>(
            <View key={user.key}>
              <Text style={styles.list2}>{user.name}</Text>
            </View>
          ))}
          </ScrollView> */}
    </View>
  );
}

