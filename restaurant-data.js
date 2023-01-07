export const restaurantDatabase = [
    {
        "title": "Bigger Burgers",
        "tagline": "The BIGGEST burgers in town",
        "eta": "10-30",
        "rating": 5,
        "reviewCount": 227,
        "imgUri": require("./assets/bigger-burgers.jpg"),
        "items": [
            {
                "title":"Meals",
                "contents":[
                    {
                        "title":"Big Boppa Set",
                        "imgUri": require("./assets/food-images/burger.jpg"),
                        "inStock": true
                    },{
                        "title":"Big Boppa XL Set",
                        "imgUri": require("./assets/food-images/burger.jpg"),
                        "inStock": true
                    },{
                        "title":"Salad Crunch Set",
                        "imgUri": require("./assets/food-images/salad.jpg"),
                        "inStock": false
                    }
                ]
            },
            {
                "title":"Gelato",
                "contents":[
                    {
                        "title":"Vanilla",
                        "imgUri": require("./assets/food-images/vanilla-icecream.jpg"),
                        "inStock": true
                    },{
                        "title":"Chocolate",
                        "imgUri": require("./assets/food-images/chocolate-icecream.jpg"),
                        "inStock": true
                    }
                ]
            }
        ]
    },
    {
        "title": "Mogu Mogu Sushi",
        "tagline": "All the Sushi you can handle... Plus a little more!",
        "eta": "1h",
        "rating": 5,
        "reviewCount": 238,
        "imgUri": require("./assets/mogu-mogu.jpg"),
        "items": [
            {
                "title":"Sushi Set",
                "contents":[
                    {
                        "title":"Salmon Nigiri Set",
                        "imgUri": require("./assets/food-images/salmon.jpg"),
                        "inStock": true
                    },{
                        "title":"Tuna Set",
                        "imgUri": require("./assets/food-images/tuna.jpg"),
                        "inStock": false
                    },{
                        "title":"Vegetable Set",
                        "imgUri": require("./assets/food-images/vegetarian-sushi.jpg"),
                        "inStock": true
                    }
                ]
            },
            {
                "title":"Drinks",
                "contents":[
                    {
                        "title":"Green Tea",
                        "imgUri": require("./assets/food-images/green-tea.jpg"),
                        "inStock": true
                    },{
                        "title":"Tapioca",
                        "imgUri": require("./assets/food-images/tapioca.jpg"),
                        "inStock": false
                    }
                ]
            }
        ]
    },
    {
        "title": "Chunky Cookie",
        "tagline": "Chocolate to die for!",
        "eta": "50",
        "rating": 4,
        "reviewCount": 45,
        "imgUri": require("./assets/chunkie-cookie.jpg"),
        "items": [
            {
                "title":"Cookies",
                "contents":[
                    {
                        "title":"Chocolate Chip",
                        "imgUri": require("./assets/food-images/chocolate-cookie.jpg"),
                        "inStock": true
                    },{
                        "title":"Raisin",
                        "imgUri": require("./assets/food-images/raisin-cookie.jpg"),
                        "inStock": true
                    }
                ]
            },
            {
                "title":"Cakes",
                "contents":[
                    {
                        "title":"Luxurious Chocolate",
                        "imgUri": require("./assets/food-images/chocolate-cake.jpg"),
                        "inStock": false
                    },{
                        "title":"Devilish Cheesecake",
                        "imgUri": require("./assets/food-images/cheesecake.jpg"),
                        "inStock": true
                    }
                ]
            }
        ]
    }
]
