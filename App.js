import {StyleSheet, Text,FlatList, View} from "react-native";
import { useState, useEffect } from "react";
  export default function App(){

    const [postList, setPostList] = useState([])

    const fetchData = async (limit = 10) =>{
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const data = await response.json()
      setPostList(data)
    };

    useEffect( () =>{
      fetchData();
    }, [])

  return(
<View style={styles.container}>
  <View style={styles.listContainer}>
    <FlatList data={postList} renderItem={({item}) =>{
      return(
        <View style={styles.card}>
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      )
    }}>

    </FlatList>
  </View>
</View>
);
  }
const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"plum",
  }, 
  listContainer:{
    flex:1,
    paddingHorizontal:16,
  },
  card:{
    backgroundColor:"white",
    padding:!6,
    borderRadius:8,
    borderWidth:1,
  },
  titleText:{
    fontSize:30,
  },
  bodyText:{
    fontSize:24,
    color:"#666666",
  },
});