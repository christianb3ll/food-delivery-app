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
// Cookie 2 - Photo by Lisa Fotios | https://www.pexels.com/photo/macro-photography-of-pile-of-3-cookie-230325/
// Burger - Photo by Mae Mu | https://unsplash.com/photos/I7A_pHLcQK8
// Burger2 - Photo by Ruslan Khmelevsky | https://www.pexels.com/photo/burger-on-wooden-chopping-board-13743449/
// Salad - Photo by Dana Tentis | https://www.pexels.com/photo/vegetable-salad-with-wheat-bread-on-the-side-1213710/
// Ice Cream - Photo by min che | https://www.pexels.com/photo/close-up-of-scoops-of-ice-cream-in-bowls-7491892/
// Japanese Food - Photo by Richard Iwaki | https://unsplash.com/photos/2cpx1N7Us5Q
// Salmon - Photo by Cup of Couple |  https://www.pexels.com/photo/overhead-shot-of-a-plate-of-nigiri-8472620/
// Tuna - Photo by Mak_ jp | https://www.pexels.com/photo/a-close-up-shot-of-delicious-nigiri-on-a-plate-10138043/
// Vegetarian - Photo by Shameel mukkath | https://www.pexels.com/photo/sushi-rolls-10296389/
// Green tea - Photo by NipananLifestyle.com | https://www.pexels.com/photo/photo-of-matcha-drink-on-a-wooden-tray-1581484/
// Tapioca - Photo by Telly Mina | https://www.pexels.com/photo/milk-teas-with-tapioca-pearls-12666754/
// Raisin Cookie - Photo by Terrance Barksdale | https://www.pexels.com/photo/close-up-photo-of-an-oatmeal-cookie-with-raisins-8837035/
// Chocolate cake - Photo by Abhinav Goswami | https://www.pexels.com/photo/sliced-cake-on-plate-291528/
// Cheesecake - Photo by Suzy Hazelwood | https://www.pexels.com/photo/cheesecake-1126359/

// Icons from FontAwesome | https://fontawesome.com/icons

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
          <Section headerTextStyle={styles.menuSectionHeader} header={item.title} key={item.title}>
            
            {item.contents.map((dish, j)=>(
              <Cell
                cellStyle="Basic"
                title={dish.title}
                key={dish.title}
                contentContainerStyle={styles.menuSection}
                cellContentView={
                  <View style={styles.menuCell}>
                    <Image style={styles.itemThumb} source={dish.imgUri} />
                    <Text style={styles.itemText}>{dish.title}</Text>
                    
                  </View>
                  
              }/>
                
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
    alignItems: 'flex-end',
    padding: 5,
    width: 70,
    right: 20,
    bottom: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  clockIcon: {
    flex: 1
  },
  etaText: {
    flex: 2,
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
    right: 10,
    top: 10,
    flex: 1,
    flexDirection: 'row',
    width: '40%'
  },
  starRating: {
    flex: 4,
    color: '#FF5F5F'
  },
  reviewCount: {
    flex: 1,
  },
  menuSectionHeader: {
    fontFamily: 'Arial',
    fontSize:  16,
    fontWeight: 'bold',
    color: 'black'
  },
  menuSection: {
    flex: 1,
  },
  menuCell: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  itemText: {
    flex: 1,
    fontFamily: 'Arial',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 14
  },
  itemThumb: {
    flex:1,
    width: '100%',
  }
});
