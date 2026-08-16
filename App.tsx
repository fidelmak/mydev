import { StatusBar } from 'expo-status-bar';
import {  Alert, StyleSheet, Text, View , Image, Pressable, ScrollView} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
import New from './new';

export default function App() {
  const onButtonPress = () => Alert.alert("Button Pressed");

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        < New  />
      <Text style={styles.text}>Latest</Text>
      <View style={{ padding: 10 }} >
          <Image source={require("./assets/ars.jpg")} style={styles.image} />
      </View>
       <View style={{ padding: 10 }} >
          <Image source={require("./assets/desbg.png")} style={styles.image} />
      </View>
       <View style={{ padding: 10 }} >
          <Image source={require("./assets/elephant.jpg")} style={styles.image} />
      </View>
     
      <Text style={styles.subText}>
        Lorem ipsum dolor sit amet consectetur,  
        
        <Text style={styles.textPress}
        onPress={() => Alert.alert("Text Pressed")}
        >
           Press here 
        </Text>
        
        adipisicing elit. Dicta voluptatem in excepturi voluptas praesentium magni sint saepe quas maxime assumenda quis quibusdam,
         vero hic odit aperiam accusamus libero inventore odio.
      </Text>

      <Pressable style={styles.btn} onPress={onButtonPress}>
        <Text style={{color:'white', textAlign:'center', paddingTop:8}}>
          Continue
        </Text>
      </Pressable>
     
      <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
   


    
  },
  text: {
    color: 'black',
    fontSize: 56,
    fontWeight: 'bold',
    textAlign:'center'
  },
  subText:{
    color: 'black',
    fontSize: 16,
    textAlign:'justify',
    marginHorizontal: 20,
    marginTop: 20
  },
  textPress:{color:'blue', fontWeight:'bold',paddingLeft:2},
  image:{ 
    paddingTop: 20,
    height: 200,
    width:330,
    alignSelf:'center',
    borderRadius:'cover'
   
  },
  btn:{
    marginTop: 10,
    backgroundColor:'black',
    width:100,
    height:40,
    borderRadius:16,
    alignSelf:'center'

  }
});
