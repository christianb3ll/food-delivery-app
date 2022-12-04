import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { StackActions } from 'react-navigation';

// Image Credits
// Cookie - Photo by Jennifer Pallian | https://unsplash.com/photos/OfdDiqx8Cz8
// Burger - Photo by Mae Mu | https://unsplash.com/photos/I7A_pHLcQK8
// Japanese Food - Photo by Richard Iwaki | https://unsplash.com/photos/2cpx1N7Us5Q


function Homescreen(){
  return(
    <ScrollView>
      <TableView>
        {/* this might not work */}
        <Section header='' isHidden='true' separatorTintColor={'#ccc'}>
          <HomescreenCell
            title="Bigger Burgers"
            tagline="The BIGGEST burgers in town"
            eta="10-30"
            imgUri={require('./assets/bigger-burgers.jpg')}
          />
        </Section>
      </TableView>
    </ScrollView>
  )
}

const HomescreenCell = function (props){
  return(
    <Cell
      {...props}
      
    />
  )
};

function Restaurants(){
  return(
    <View>

    </View>
  )
}

function Menu(){
  return(
    <View>
      
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Homescreen}/>
        <Stack.Screen name='Restaurants' component={Restaurants}/>
        <Stack.Screen name='Menu' component={Menu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
