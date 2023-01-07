import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator, Header } from '@react-navigation/stack';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { StackActions } from 'react-navigation';
// restaurant data imported
import {restaurantDatabase} from './restaurant-data';

// Image Credits
// Cookie - Photo by Jennifer Pallian | https://unsplash.com/photos/OfdDiqx8Cz8
// Burger - Photo by Mae Mu | https://unsplash.com/photos/I7A_pHLcQK8
// Japanese Food - Photo by Richard Iwaki | https://unsplash.com/photos/2cpx1N7Us5Q

const Stack = createStackNavigator();

const restaurantData = restaurantDatabase;

// Homescreen that lists all restaurants
function Homescreen({navigation}){
  return(
    <ScrollView>
      <TableView>
        <Section header='' isHidden='true' separatorTintColor={'#ccc'}>
          {restaurantData.map((restaurant, i)=> 
            <HomescreenCell
              key={restaurant.title}
              title={restaurant.title}
              tagline={restaurant.tagline}
              eta={restaurant.eta}
              imgUri={restaurant.imgUri}
              // Pass the  restaurant items with restaurant name and tagline
              action={()=> navigation.navigate('Menu', {items: restaurant.items })}
          />
          )}
        </Section>
      </TableView>
    </ScrollView>
  )
}

const HomescreenCell = function (props){
  return(
    <Cell
      {...props}
      // contentContainerStyle={styles.restaurantCell}
      highlightUnderlayColor='#ccc'
      highlightActiveOpacity={0.5}
      onPress={props.action}
      cellContentView={
        <View style={styles.restaurantCell}>
          <Image source={props.imgUri} style={styles.restaurantThumb} />
          <View style={styles.etaContainer}>
            <Text style={styles.etaText}>{props.eta}</Text>
          </View>
          <Text style={styles.restaurantTitle}>{props.title}</Text>
          <Text style={styles.restaurantTagline}>{props.tagline}</Text>

        </View>
        
      }
    />
  )
};

function Restaurants(){
  return(
    <View>

    </View>
  )
}

function Menu({route, navigation}){
  return(
    <ScrollView>
      <TableView>
        {route.params.items.map((item, i)=>
          <Section key={item.title}>
            {item.contents.map((dish, j)=>(
              <Cell>
                <Text key={dish.title}>{dish.title}</Text>
              </Cell>
            ))}
          </Section>
        )}
      </TableView>
    </ScrollView>
  )
}

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
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantCell: {
    backgroundColor: '#FF5F5F',
    flex: 1,
    height: 290,
    borderRadius: 5,
    padding: 10,
    marginBottom: 30,
  },
  restaurantThumb: {
    height: 100,
  },
  etaContainer: {
    position: 'absolute',
    width: 50,
    height: 20,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 5,

  },
  etaText: {
    fontSize: 24
  },
  restaurantTitle: {
    fontFamily: 'Avenir Next',
    fontSize: 24,
    fontWeight: "700",
  },
  restaurantTagline: {
    fontFamily: 'Arial',
    fontSize: 12,
  }
});
