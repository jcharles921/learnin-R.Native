import React,{useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button ,TextInput,FlatList,ScrollView} from 'react-native';


export default function App() {
  const [isOpen, setIsOpen]= useState(false)
  const [text, setText]= useState("Live text")
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);
  const enventHandler =()=>{
    if (!isOpen){
      setIsOpen(true)
    }
    else{
      setIsOpen(false)
      setText("Live text")
    }
  }
  return (
    <View style={styles.container}>
      
<View style={styles.header}>
  <Text style={styles.button}> Hello</Text>
  
</View>
<View style={styles.header}>
  <Text style={styles.button}> Hello 2</Text>
  
   <Button title='This is a button' onPress={enventHandler}/>
  {isOpen && 
       <View style={styles.button}>
       <Text style={styles.button} > Hello 3</Text>
       <TextInput 
       multiline
       inlineImageLeft='search_icon'
       style={styles.input}
       placeholder='Input holder'
       onChangeText={(value)=>{
        setText(value)

       }} />
          </View>
  }
</View>
<Text>{text}</Text>
<ScrollView>
<View style={styles.list1} >
  {people.map((user)=>{
    return(
    
        <>
        <Text style={styles.list} key={user.key}> {user.name}</Text>
        </>
        
    )

  })}
</View>
</ScrollView>
{/* <View style={styles.list2}>
<FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id} 
        data={people} 
        renderItem={({ item }) => ( 
          <Text style={styles.list}>{item.name}</Text>
        )}
      />
</View> */}
    </View>
  );
}
// const styles2 = StyleSheet.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color:"#fff"
  },
  header:{
    width: "80%",
    backgroundColor:"blue",
    color:"#fff"
  },
  button:{
    display:"flex",
    backgroundColor:"pink",
    color:"#fff",
    borderColor:"red",
    width:"77%"
  },
  input:{
    borderWidth:1,
    borderColor:"black",
    width:"80%",
    backgroundColor:"white"
  },
  list1:{
    borderWidth:2,
    borderColor:'green'
  },
  list2:{
    borderWidth:3,
    borderColor:'pink'
  }
  ,
  list:{
    paddingTop:5,
    backgroundColor:"yellow",
    padding:10,
    fontSize:17
  }
  
});
