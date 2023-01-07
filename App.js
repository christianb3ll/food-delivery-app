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

// Setup the restaurant data
const restaurantData = restaurantDatabase;

// import image icons
const clockIcon = require('./assets/Clock.png');

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
              rating={restaurant.rating}
              reviewCount={restaurant.reviewCount}
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
          <View style={styles.restaurantImageContainer}>
            <Image source={props.imgUri} style={styles.restaurantThumb} />
            <View style={styles.etaContainer}>
              <Image source={clockIcon}/>
              <Text style={styles.etaText}>{props.eta}</Text>
            </View>
          </View>
          <View style={styles.restaurantDetails} >
            <View style={styles.ratingContainer}>
              <Text style={styles.starRating}>★★★★★</Text>
              <Text style={styles.reviewCount}>({props.reviewCount})</Text>
            </View>
            
            <Text style={styles.restaurantTitle}>{props.title}</Text>
            <Text style={styles.restaurantTagline}>{props.tagline}</Text>
          </View>
        </View>
        
      }
    />
  )
};

function Menu({route, navigation}){
  return(
    <ScrollView>
      <TableView>
        {route.params.items.map((item, i)=>
          <Section style={styles.menuSection} header={item.title} key={item.title}>
            {item.contents.map((dish, j)=>(
              <Cell key={dish.title} style={styles.menuCell}>
                <Text>{dish.title}</Text>
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
        {/* <Stack.Screen name='Restaurants' component={Restaurants}/> */}
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
    flexDirection: 'column',
    height: 290,
    borderRadius: 5,
    padding: 10,
    marginBottom: 30,
  },
  restaurantImageContainer: {
    flex: 2,
    padding: 10
  },
  restaurantThumb: {
    width: '100%',
    height: '100%'
  },
  etaContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width: 100,
    height: 30,
    right: 20,
    bottom: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  clockIcon: {
    flex: 1
  },
  etaText: {
    flex: 1,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'right'
  },
  restaurantDetails: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  restaurantTitle: {
    fontFamily: 'Avenir Next',
    fontSize: 24,
    fontWeight: "700",
  },
  restaurantTagline: {
    fontFamily: 'Arial',
    fontSize: 12,
  },
  ratingContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'green'
  },
  starRating: {
    flex: 1,
    color: '#FF5F5F'
  },
  reviewCount: {
    flex: 1
  },
  menuSection: {
    flex: 1,
    flexDirection: 'row',
    flexBasis: '50%'
  },
  menuCell: {
    flex: 1,
    backgroundColor: 'red'
  }
});
