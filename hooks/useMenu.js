import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const useMenu = () => {
  const maxItems = 5
  const [query, setQuery] = useState('')
  const [food, setFood] = useState(null)
  const [randomFood, setRandomFood] = useState(null)
  const [selectedFood, setSelectedFood] = useState([])
  const [veganQ, setVeganQ] = useState(2)
  const [normalQ, setNormalQ] = useState(2)
  const toast = useToast()

  // useEffect(() => {
  //   try {
  //     axios.get(`https://api.spoonacular.com/recipes/random?apiKey=f465f1ea39f943b7b3782e0abac6b6aa&number=${maxItems}&tags=vegan`)
  //       .then(res => setRandomFood(res.data.recipes))
  //   } catch (error) { console.log(error) }
  // }, [])

  useEffect(() => {
    setRandomFood([
      {
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 23,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 7,
        spoonacularScore: 24.0,
        healthScore: 2.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 111.42,
        extendedIngredients: [
          {
            id: 12061,
            aisle: 'Nuts',
            image: 'almonds.jpg',
            consistency: 'solid',
            name: 'almonds',
            nameClean: 'almonds',
            original: '1/4 cup almonds, ground',
            originalName: 'almonds, ground',
            amount: 0.25,
            unit: 'cup',
            meta: [],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 59.147,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 1001,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'butter-sliced.jpg',
            consistency: 'solid',
            name: 'butter',
            nameClean: 'butter',
            original: '1 tablespoon butter, melted',
            originalName: 'butter, melted',
            amount: 1.0,
            unit: 'tablespoon',
            meta: [
              'melted'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              },
              metric: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              }
            }
          },
          {
            id: 1017,
            aisle: 'Cheese',
            image: 'cream-cheese.jpg',
            consistency: 'solid',
            name: 'cream cheese',
            nameClean: 'cream cheese',
            original: '16oz whipped cream cheese, room temperature',
            originalName: 'whipped cream cheese, room temperature',
            amount: 16.0,
            unit: 'oz',
            meta: [
              'room temperature'
            ],
            measures: {
              us: {
                amount: 16.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 453.592,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 1123,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'egg.png',
            consistency: 'solid',
            name: 'eggs',
            nameClean: 'egg',
            original: '• 4 large eggs, room temperature',
            originalName: 'eggs, room temperature',
            amount: 4.0,
            unit: 'large',
            meta: [
              'room temperature'
            ],
            measures: {
              us: {
                amount: 4.0,
                unitShort: 'large',
                unitLong: 'larges'
              },
              metric: {
                amount: 4.0,
                unitShort: 'large',
                unitLong: 'larges'
              }
            }
          },
          {
            id: 20081,
            aisle: 'Baking',
            image: 'flour.png',
            consistency: 'solid',
            name: 'flour',
            nameClean: 'wheat flour',
            original: '2 tbsp flour',
            originalName: 'flour',
            amount: 2.0,
            unit: 'tbsp',
            meta: [],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              },
              metric: {
                amount: 2.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              }
            }
          },
          {
            id: 18617,
            aisle: 'Sweet Snacks',
            image: 'graham-crackers.jpg',
            consistency: 'solid',
            name: 'graham crackers',
            nameClean: 'graham crackers',
            original: '1 1/2 cups graham crackers',
            originalName: 'graham crackers',
            amount: 1.5,
            unit: 'cups',
            meta: [],
            measures: {
              us: {
                amount: 1.5,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 354.882,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 9152,
            aisle: 'Produce',
            image: 'lemon-juice.jpg',
            consistency: 'liquid',
            name: 'lemon juice',
            nameClean: 'lemon juice',
            original: '• 1 tbsp lemon juice',
            originalName: 'lemon juice',
            amount: 1.0,
            unit: 'tbsp',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              },
              metric: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              }
            }
          },
          {
            id: 93820,
            aisle: 'Cheese',
            image: 'white-cream-fluffy.jpg',
            consistency: 'solid',
            name: 'mascarpone cheese',
            nameClean: 'mascarpone',
            original: '• 8oz mascarpone cheese, room temperature',
            originalName: 'mascarpone cheese, room temperature',
            amount: 8.0,
            unit: 'oz',
            meta: [
              'room temperature'
            ],
            measures: {
              us: {
                amount: 8.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 226.796,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 1036,
            aisle: 'Cheese',
            image: 'ricotta.png',
            consistency: 'solid',
            name: 'ricotta cheese',
            nameClean: 'ricotta cheese',
            original: '• 8oz ricotta cheese',
            originalName: 'ricotta cheese',
            amount: 8.0,
            unit: 'oz',
            meta: [],
            measures: {
              us: {
                amount: 8.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 226.796,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 2047,
            aisle: 'Spices and Seasonings',
            image: 'salt.jpg',
            consistency: 'solid',
            name: 'salt',
            nameClean: 'salt',
            original: '1/2 tsp salt',
            originalName: 'salt',
            amount: 0.5,
            unit: 'tsp',
            meta: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 19335,
            aisle: 'Baking',
            image: 'sugar-in-bowl.png',
            consistency: 'solid',
            name: 'sugar',
            nameClean: 'sugar',
            original: '• 1 1/4 cups sugar',
            originalName: 'sugar',
            amount: 1.25,
            unit: 'cups',
            meta: [],
            measures: {
              us: {
                amount: 1.25,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 295.735,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 19335,
            aisle: 'Baking',
            image: 'sugar-in-bowl.png',
            consistency: 'solid',
            name: 'sugar',
            nameClean: 'sugar',
            original: '2 tbsp sugar',
            originalName: 'sugar',
            amount: 2.0,
            unit: 'tbsp',
            meta: [],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              },
              metric: {
                amount: 2.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              }
            }
          },
          {
            id: 2050,
            aisle: 'Baking',
            image: 'vanilla-extract.jpg',
            consistency: 'liquid',
            name: 'vanilla extract',
            nameClean: 'vanilla extract',
            original: '• 1 tsp vanilla extract',
            originalName: 'vanilla extract',
            amount: 1.0,
            unit: 'tsp',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'tsp',
                unitLong: 'teaspoon'
              },
              metric: {
                amount: 1.0,
                unitShort: 'tsp',
                unitLong: 'teaspoon'
              }
            }
          }
        ],
        id: 651189,
        title: 'Mascarpone & Ricotta Cheese Cake',
        readyInMinutes: 45,
        servings: 10,
        sourceUrl: 'http://www.foodista.com/recipe/F4L8XS82/mascarpone-ricotta-cheese-cake',
        image: 'https://spoonacular.com/recipeImages/651189-556x370.jpg',
        imageType: 'jpg',
        summary: "For <b>$1.09 per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. This recipe makes 10 servings with <b>523 calories</b>, <b>11g of protein</b>, and <b>35g of fat</b> each. This recipe from Foodista has 7 fans. It is a good option if you're following a <b>vegetarian</b> diet. If you have salt, ricotta cheese, whipped cream cheese, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 24%</b>. This score is rather bad. Similar recipes include <a href=\"https://spoonacular.com/recipes/ricotta-and-mascarpone-cheese-tart-658318\">Ricottan and Mascarpone Cheese Tart</a>, <a href=\"https://spoonacular.com/recipes/ricotta-pound-cake-with-blood-orange-filling-whipped-cream-mascarpone-topping-and-candied-blood-orange-slices-522664\">Ricotta Pound Cake with Blood Orange Filling, Whipped Cream Mascarpone Topping and Candied Blood Orange Slices</a>, and <a href=\"https://spoonacular.com/recipes/carrot-cake-cupcakes-with-mascarpone-cream-cheese-frosting-488831\">Carrot Cake Cupcakes with Mascarpone Cream Cheese Frosting</a>.",
        cuisines: [],
        dishTypes: [
          'side dish'
        ],
        diets: [
          'lacto ovo vegetarian'
        ],
        occasions: [],
        instructions: '<ol><li>Directions</li><li>Preheat oven to 325.</li><li>Crust:</li><li>Grind graham crackers and almonds using food processor or a mortar and pestle. Add melted butter and salt and press into bottom of greased springform pan or deep dish pie pan. Bake for 10 minutes. Let cool. Mix sugar and flour together and sprinkle over top of crust. (This prevents crust from getting soggy)</li><li>Filling:</li><li>Beat cream cheese, mascarpone cheese, ricotta cheese and sugar in a large bowl until smooth. Beat in lemon juice and vanilla. Add in eggs one at a time. Pour cheese mixture over crust in pan. Bake until the center of the cheesecake is wobbly when shaken, about 1hr and 5 mins. Let cool then refrigerate, preferably overnight.</li></ol>',
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: 'Preheat oven to 325.Crust:Grind graham crackers and almonds using food processor or a mortar and pestle.',
                ingredients: [
                  {
                    id: 18617,
                    name: 'graham crackers',
                    localizedName: 'graham crackers',
                    image: 'graham-crackers.jpg'
                  },
                  {
                    id: 12061,
                    name: 'almonds',
                    localizedName: 'almonds',
                    image: 'almonds.jpg'
                  },
                  {
                    id: 0,
                    name: 'crust',
                    localizedName: 'crust',
                    image: ''
                  }
                ],
                equipment: [
                  {
                    id: 404751,
                    name: 'mortar and pestle',
                    localizedName: 'mortar and pestle',
                    image: 'mortar-and-pestle.jpg'
                  },
                  {
                    id: 404771,
                    name: 'food processor',
                    localizedName: 'food processor',
                    image: 'food-processor.png'
                  },
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  }
                ]
              },
              {
                number: 2,
                step: 'Add melted butter and salt and press into bottom of greased springform pan or deep dish pie pan.',
                ingredients: [
                  {
                    id: 1001,
                    name: 'butter',
                    localizedName: 'butter',
                    image: 'butter-sliced.jpg'
                  },
                  {
                    id: 2047,
                    name: 'salt',
                    localizedName: 'salt',
                    image: 'salt.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404650,
                    name: 'springform pan',
                    localizedName: 'springform pan',
                    image: 'cake-pan.png'
                  },
                  {
                    id: 405915,
                    name: 'pie form',
                    localizedName: 'pie form',
                    image: 'pie-pan.png'
                  }
                ]
              },
              {
                number: 3,
                step: 'Bake for 10 minutes.',
                ingredients: [],
                equipment: [
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  }
                ],
                length: {
                  number: 10,
                  unit: 'minutes'
                }
              },
              {
                number: 4,
                step: 'Let cool.',
                ingredients: [],
                equipment: []
              },
              {
                number: 5,
                step: 'Mix sugar and flour together and sprinkle over top of crust. (This prevents crust from getting soggy)Filling:Beat cream cheese, mascarpone cheese, ricotta cheese and sugar in a large bowl until smooth. Beat in lemon juice and vanilla.',
                ingredients: [
                  {
                    id: 93820,
                    name: 'mascarpone',
                    localizedName: 'mascarpone',
                    image: 'white-cream-fluffy.jpg'
                  },
                  {
                    id: 1036,
                    name: 'ricotta cheese',
                    localizedName: 'ricotta cheese',
                    image: 'ricotta.png'
                  },
                  {
                    id: 1017,
                    name: 'cream cheese',
                    localizedName: 'cream cheese',
                    image: 'cream-cheese.jpg'
                  },
                  {
                    id: 9152,
                    name: 'lemon juice',
                    localizedName: 'lemon juice',
                    image: 'lemon-juice.jpg'
                  },
                  {
                    id: 1052050,
                    name: 'vanilla',
                    localizedName: 'vanilla',
                    image: 'vanilla.jpg'
                  },
                  {
                    id: 0,
                    name: 'crust',
                    localizedName: 'crust',
                    image: ''
                  },
                  {
                    id: 20081,
                    name: 'all purpose flour',
                    localizedName: 'all purpose flour',
                    image: 'flour.png'
                  },
                  {
                    id: 19335,
                    name: 'sugar',
                    localizedName: 'sugar',
                    image: 'sugar-in-bowl.png'
                  }
                ],
                equipment: [
                  {
                    id: 404783,
                    name: 'bowl',
                    localizedName: 'bowl',
                    image: 'bowl.jpg'
                  }
                ]
              },
              {
                number: 6,
                step: 'Add in eggs one at a time.',
                ingredients: [
                  {
                    id: 1123,
                    name: 'egg',
                    localizedName: 'egg',
                    image: 'egg.png'
                  }
                ],
                equipment: []
              },
              {
                number: 7,
                step: 'Pour cheese mixture over crust in pan.',
                ingredients: [
                  {
                    id: 1041009,
                    name: 'cheese',
                    localizedName: 'cheese',
                    image: 'cheddar-cheese.png'
                  },
                  {
                    id: 0,
                    name: 'crust',
                    localizedName: 'crust',
                    image: ''
                  }
                ],
                equipment: [
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png'
                  }
                ]
              },
              {
                number: 8,
                step: 'Bake until the center of the cheesecake is wobbly when shaken, about 1hr and 5 mins.',
                ingredients: [],
                equipment: [
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  }
                ],
                length: {
                  number: 5,
                  unit: 'minutes'
                }
              },
              {
                number: 9,
                step: 'Let cool then refrigerate, preferably overnight.',
                ingredients: [],
                equipment: []
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/mascarpone-ricotta-cheese-cake-651189'
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: true,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 2,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 8,
        spoonacularScore: 51.0,
        healthScore: 9.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 23.49,
        extendedIngredients: [
          {
            id: 11165,
            aisle: 'Produce',
            image: 'cilantro.png',
            consistency: 'solid',
            name: 'cilantro',
            nameClean: 'cilantro',
            original: '1 bunch cilantro, stems discarded',
            originalName: 'cilantro, stems discarded',
            amount: 1.0,
            unit: 'bunch',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'bunch',
                unitLong: 'bunch'
              },
              metric: {
                amount: 1.0,
                unitShort: 'bunch',
                unitLong: 'bunch'
              }
            }
          },
          {
            id: 11215,
            aisle: 'Produce',
            image: 'garlic.png',
            consistency: 'solid',
            name: 'garlic',
            nameClean: 'garlic',
            original: '3 cloves garlic',
            originalName: 'garlic',
            amount: 3.0,
            unit: 'cloves',
            meta: [],
            measures: {
              us: {
                amount: 3.0,
                unitShort: 'cloves',
                unitLong: 'cloves'
              },
              metric: {
                amount: 3.0,
                unitShort: 'cloves',
                unitLong: 'cloves'
              }
            }
          },
          {
            id: 12061,
            aisle: 'Nuts',
            image: 'almonds.jpg',
            consistency: 'solid',
            name: 'almonds',
            nameClean: 'almonds',
            original: '1 heaping Tbsp sliced almonds',
            originalName: 'heaping Tbsp sliced almonds',
            amount: 1.0,
            unit: 'Tbsp',
            meta: [
              'sliced'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              },
              metric: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              }
            }
          },
          {
            id: 9160,
            aisle: 'Produce',
            image: 'lime-juice.png',
            consistency: 'liquid',
            name: 'juice of lime',
            nameClean: 'lime juice',
            original: 'juice of lime, divided',
            originalName: 'juice of lime, divided',
            amount: 1.0,
            unit: '',
            meta: [
              'divided'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 1.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 4053,
            aisle: 'Oil, Vinegar, Salad Dressing',
            image: 'olive-oil.jpg',
            consistency: 'liquid',
            name: 'olive oil',
            nameClean: 'olive oil',
            original: 'olive oil',
            originalName: 'olive oil',
            amount: 1.0,
            unit: 'serving',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              },
              metric: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              }
            }
          },
          {
            id: 1102047,
            aisle: 'Spices and Seasonings',
            image: 'salt-and-pepper.jpg',
            consistency: 'solid',
            name: 'Salt & Pepper',
            nameClean: 'salt and pepper',
            original: 'salt & pepper',
            originalName: 'salt & pepper',
            amount: 1.0,
            unit: 'serving',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              },
              metric: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              }
            }
          },
          {
            id: 18368,
            aisle: 'Ethnic Foods',
            image: 'puff-pastry-squares.jpg',
            consistency: 'solid',
            name: 'egg roll wrappers',
            nameClean: 'egg roll wrappers',
            original: '12 egg roll wrappers',
            originalName: 'egg roll wrappers',
            amount: 12.0,
            unit: '',
            meta: [],
            measures: {
              us: {
                amount: 12.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 12.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 11821,
            aisle: 'Produce',
            image: 'red-pepper.jpg',
            consistency: 'solid',
            name: 'red bell pepper',
            nameClean: 'red pepper',
            original: '1 red bell pepper, small dice',
            originalName: 'red bell pepper, small dice',
            amount: 1.0,
            unit: 'small',
            meta: [
              'red'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'small',
                unitLong: 'small'
              },
              metric: {
                amount: 1.0,
                unitShort: 'small',
                unitLong: 'small'
              }
            }
          },
          {
            id: 11168,
            aisle: 'Produce',
            image: 'corn.png',
            consistency: 'solid',
            name: 'corn',
            nameClean: 'corn',
            original: '1/2 cup corn',
            originalName: 'corn',
            amount: 0.5,
            unit: 'cup',
            meta: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 118.294,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 16015,
            aisle: 'Pasta and Rice;Canned and Jarred',
            image: 'black-beans.jpg',
            consistency: 'solid',
            name: 'black beans',
            nameClean: 'black beans',
            original: '1/2 cup black beans, rinsed and drained',
            originalName: 'black beans, rinsed and drained',
            amount: 0.5,
            unit: 'cup',
            meta: [
              'rinsed',
              'drained'
            ],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 118.294,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          }
        ],
        id: 660707,
        title: 'Southwest Egg Rolls with Cilantro Lime Pesto',
        readyInMinutes: 45,
        servings: 12,
        sourceUrl: 'https://www.foodista.com/recipe/CM34KFZM/southwest-egg-rolls',
        image: 'https://spoonacular.com/recipeImages/660707-556x370.jpg',
        imageType: 'jpg',
        summary: "Southwest Egg Rolls with Cilantro Lime Pesto is a hor d'oeuvre that serves 12. One serving contains <b>72 calories</b>, <b>2g of protein</b>, and <b>2g of fat</b>. For <b>23 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. 8 people found this recipe to be scrumptious and satisfying. It is brought to you by Foodista. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>about 45 minutes</b>. A mixture of bell pepper, juice of lime, corn, and a handful of other ingredients are all it takes to make this recipe so delicious. It is a good option if you're following a <b>dairy free</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 50%</b>, which is solid. Try <a href=\"https://spoonacular.com/recipes/southwest-egg-rolls-with-avocado-lime-ranch-592841\">Southwest Egg Rolls with Avocado-Lime Ranch</a>, <a href=\"https://spoonacular.com/recipes/chilis-southwest-eggrolls-enjoy-this-restaurant-favorite-anywhere-these-southwest-style-egg-rolls-are-delicious-600295\">Chili’s Southwest Eggrolls – enjoy this restaurant favorite anywhere. These Southwest style egg rolls are delicious</a>, and <a href=\"https://spoonacular.com/recipes/southwest-quesadilla-with-cilantro-lime-sour-cream-295853\">Southwest Quesadilla with Cilantro-Lime Sour Cream</a> for similar recipes.",
        cuisines: [
          'Chinese',
          'Asian'
        ],
        dishTypes: [
          'antipasti',
          'starter',
          'snack',
          'appetizer',
          'antipasto',
          "hor d'oeuvre"
        ],
        diets: [
          'dairy free'
        ],
        occasions: [],
        instructions: 'Oven at 385 degrees.\nMake the pesto: In a small food processor add the garlic and almonds. Pulse until finely chopped. Add the cilantro leaves and about 3-4 Tbsp olive oil, the amount is really a preference of how loose or thick you like the pesto. Start with a little and add a little at a time until you reach the consistency of your preference. Stir in the juice of 1/2 a lime. If you are making this ahead of time...place in a bowl and drizzle just enough olive oil on top to coat, this keeps the air from getting to the cilantro. Cover with plastic wrap and refrigerate.\nSaut the peppers with a drizzle of olive oil in a pan over medium high heat for just a couple minutes. Mix the peppers, corn and black beans in a bowl.\nLay out the egg roll wrappers. Smear some of the cilantro lime pesto on the end closest to you, leaving about an inch of the wrapper on the very end.\nAdd a spoon full of the veggies along the line of pesto. Brush the ends of the wrapper with water, this will help seal the egg roll. Fold the end nearest you over the veggies and the two\nsides fold in as well.\nRoll up the wrapper to the end. Place seam side down on a lined baking sheet that his been brushed with a bit of olive oil to prevent sticking.\nBrush the egg rolls lightly with olive oil as well, this will help get that golden color. Bake for approx 18 minutes, or until golden and crispy.',
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: 'Oven at 385 degrees.',
                ingredients: [],
                equipment: [
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  }
                ]
              },
              {
                number: 2,
                step: 'Make the pesto: In a small food processor add the garlic and almonds. Pulse until finely chopped.',
                ingredients: [
                  {
                    id: 12061,
                    name: 'almonds',
                    localizedName: 'almonds',
                    image: 'almonds.jpg'
                  },
                  {
                    id: 11215,
                    name: 'garlic',
                    localizedName: 'garlic',
                    image: 'garlic.png'
                  },
                  {
                    id: 93698,
                    name: 'pesto',
                    localizedName: 'pesto',
                    image: 'basil-pesto.png'
                  }
                ],
                equipment: [
                  {
                    id: 404771,
                    name: 'food processor',
                    localizedName: 'food processor',
                    image: 'food-processor.png'
                  }
                ]
              },
              {
                number: 3,
                step: 'Add the cilantro leaves and about 3-4 Tbsp olive oil, the amount is really a preference of how loose or thick you like the pesto. Start with a little and add a little at a time until you reach the consistency of your preference. Stir in the juice of 1/2 a lime. If you are making this ahead of time...place in a bowl and drizzle just enough olive oil on top to coat, this keeps the air from getting to the cilantro. Cover with plastic wrap and refrigerate.',
                ingredients: [
                  {
                    id: 11165,
                    name: 'fresh cilantro',
                    localizedName: 'fresh cilantro',
                    image: 'cilantro.png'
                  },
                  {
                    id: 4053,
                    name: 'olive oil',
                    localizedName: 'olive oil',
                    image: 'olive-oil.jpg'
                  },
                  {
                    id: 11165,
                    name: 'cilantro',
                    localizedName: 'cilantro',
                    image: 'cilantro.png'
                  },
                  {
                    id: 1019016,
                    name: 'juice',
                    localizedName: 'juice',
                    image: 'apple-juice.jpg'
                  },
                  {
                    id: 93698,
                    name: 'pesto',
                    localizedName: 'pesto',
                    image: 'basil-pesto.png'
                  },
                  {
                    id: 9159,
                    name: 'lime',
                    localizedName: 'lime',
                    image: 'lime.jpg'
                  },
                  {
                    id: 10018364,
                    name: 'wrap',
                    localizedName: 'wrap',
                    image: 'flour-tortilla.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404730,
                    name: 'plastic wrap',
                    localizedName: 'plastic wrap',
                    image: 'plastic-wrap.jpg'
                  },
                  {
                    id: 404783,
                    name: 'bowl',
                    localizedName: 'bowl',
                    image: 'bowl.jpg'
                  }
                ]
              },
              {
                number: 4,
                step: 'Saut the peppers with a drizzle of olive oil in a pan over medium high heat for just a couple minutes.',
                ingredients: [
                  {
                    id: 4053,
                    name: 'olive oil',
                    localizedName: 'olive oil',
                    image: 'olive-oil.jpg'
                  },
                  {
                    id: 10111333,
                    name: 'peppers',
                    localizedName: 'peppers',
                    image: 'green-pepper.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png'
                  }
                ]
              },
              {
                number: 5,
                step: 'Mix the peppers, corn and black beans in a bowl.',
                ingredients: [
                  {
                    id: 16015,
                    name: 'black beans',
                    localizedName: 'black beans',
                    image: 'black-beans.jpg'
                  },
                  {
                    id: 10111333,
                    name: 'peppers',
                    localizedName: 'peppers',
                    image: 'green-pepper.jpg'
                  },
                  {
                    id: 11168,
                    name: 'corn',
                    localizedName: 'corn',
                    image: 'corn.png'
                  }
                ],
                equipment: [
                  {
                    id: 404783,
                    name: 'bowl',
                    localizedName: 'bowl',
                    image: 'bowl.jpg'
                  }
                ]
              },
              {
                number: 6,
                step: 'Lay out the egg roll wrappers. Smear some of the cilantro lime pesto on the end closest to you, leaving about an inch of the wrapper on the very end.',
                ingredients: [
                  {
                    id: 18368,
                    name: 'egg roll wrappers',
                    localizedName: 'egg roll wrappers',
                    image: 'puff-pastry-squares.jpg'
                  },
                  {
                    id: 11165,
                    name: 'cilantro',
                    localizedName: 'cilantro',
                    image: 'cilantro.png'
                  },
                  {
                    id: 93698,
                    name: 'pesto',
                    localizedName: 'pesto',
                    image: 'basil-pesto.png'
                  },
                  {
                    id: 9159,
                    name: 'lime',
                    localizedName: 'lime',
                    image: 'lime.jpg'
                  }
                ],
                equipment: []
              },
              {
                number: 7,
                step: 'Add a spoon full of the veggies along the line of pesto.',
                ingredients: [
                  {
                    id: 93698,
                    name: 'pesto',
                    localizedName: 'pesto',
                    image: 'basil-pesto.png'
                  }
                ],
                equipment: []
              },
              {
                number: 8,
                step: 'Brush the ends of the wrapper with water, this will help seal the egg roll. Fold the end nearest you over the veggies and the two',
                ingredients: [
                  {
                    id: 14412,
                    name: 'water',
                    localizedName: 'water',
                    image: 'water.png'
                  },
                  {
                    id: 0,
                    name: 'roll',
                    localizedName: 'roll',
                    image: 'dinner-yeast-rolls.jpg'
                  },
                  {
                    id: 1123,
                    name: 'egg',
                    localizedName: 'egg',
                    image: 'egg.png'
                  }
                ],
                equipment: []
              },
              {
                number: 9,
                step: 'sides fold in as well.',
                ingredients: [],
                equipment: []
              },
              {
                number: 10,
                step: 'Roll up the wrapper to the end.',
                ingredients: [
                  {
                    id: 0,
                    name: 'roll',
                    localizedName: 'roll',
                    image: 'dinner-yeast-rolls.jpg'
                  }
                ],
                equipment: []
              },
              {
                number: 11,
                step: 'Place seam side down on a lined baking sheet that his been brushed with a bit of olive oil to prevent sticking.',
                ingredients: [
                  {
                    id: 4053,
                    name: 'olive oil',
                    localizedName: 'olive oil',
                    image: 'olive-oil.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404727,
                    name: 'baking sheet',
                    localizedName: 'baking sheet',
                    image: 'baking-sheet.jpg'
                  }
                ]
              },
              {
                number: 12,
                step: 'Brush the egg rolls lightly with olive oil as well, this will help get that golden color.',
                ingredients: [
                  {
                    id: 4053,
                    name: 'olive oil',
                    localizedName: 'olive oil',
                    image: 'olive-oil.jpg'
                  },
                  {
                    id: 0,
                    name: 'roll',
                    localizedName: 'roll',
                    image: 'dinner-yeast-rolls.jpg'
                  },
                  {
                    id: 1123,
                    name: 'egg',
                    localizedName: 'egg',
                    image: 'egg.png'
                  }
                ],
                equipment: []
              },
              {
                number: 13,
                step: 'Bake for approx 18 minutes, or until golden and crispy.',
                ingredients: [],
                equipment: [
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  }
                ],
                length: {
                  number: 18,
                  unit: 'minutes'
                }
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/southwest-egg-rolls-with-cilantro-lime-pesto-660707'
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 16,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 7,
        spoonacularScore: 57.0,
        healthScore: 14.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 169.53,
        extendedIngredients: [
          {
            id: 43274,
            aisle: 'Cheese',
            image: 'cream-cheese.jpg',
            consistency: 'solid',
            name: 'light cream cheese',
            nameClean: 'reduced fat cream cheese',
            original: '3 oz. light cream cheese softened',
            originalName: 'light cream cheese softened',
            amount: 3.0,
            unit: 'oz',
            meta: [
              'light',
              'softened'
            ],
            measures: {
              us: {
                amount: 3.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 85.049,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 1056,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'sour-cream.jpg',
            consistency: 'solid',
            name: 'sour cream',
            nameClean: 'sour cream',
            original: '1/4 cup light sour cream',
            originalName: 'light sour cream',
            amount: 0.25,
            unit: 'cup',
            meta: [
              'light',
              'sour'
            ],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 59.147,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 2009,
            aisle: 'Spices and Seasonings',
            image: 'chili-powder.jpg',
            consistency: 'solid',
            name: 'chili powder',
            nameClean: 'chili powder',
            original: '1/2 tsp chili powder',
            originalName: 'chili powder',
            amount: 0.5,
            unit: 'tsp',
            meta: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 1002014,
            aisle: 'Spices and Seasonings',
            image: 'ground-cumin.jpg',
            consistency: 'solid',
            name: 'cumin',
            nameClean: 'cumin',
            original: '1/2 tsp cumin',
            originalName: 'cumin',
            amount: 0.5,
            unit: 'tsp',
            meta: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 11215,
            aisle: 'Produce',
            image: 'garlic.png',
            consistency: 'solid',
            name: 'garlic',
            nameClean: 'garlic',
            original: '1 clove garlic, minced',
            originalName: 'garlic, minced',
            amount: 1.0,
            unit: 'clove',
            meta: [
              'minced'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'clove',
                unitLong: 'clove'
              },
              metric: {
                amount: 1.0,
                unitShort: 'clove',
                unitLong: 'clove'
              }
            }
          },
          {
            id: 5006,
            aisle: 'Meat',
            image: 'whole-chicken.jpg',
            consistency: 'solid',
            name: 'chicken',
            nameClean: 'whole chicken',
            original: '1 (12.5 oz) can Swanson Premium Chunk Chicken, drained and broken up',
            originalName: 'Swanson Premium Chunk Chicken, drained and broken up',
            amount: 12.5,
            unit: 'oz',
            meta: [
              'chunk',
              'drained',
              'canned'
            ],
            measures: {
              us: {
                amount: 12.5,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 354.369,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 1001009,
            aisle: 'Cheese',
            image: 'shredded-cheddar.jpg',
            consistency: 'solid',
            name: 'shredded cheddar cheese',
            nameClean: 'shredded cheddar cheese',
            original: '1/2 cup shredded cheddar cheese',
            originalName: 'shredded cheddar cheese',
            amount: 0.5,
            unit: 'cup',
            meta: [
              'shredded'
            ],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 118.294,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 10011693,
            aisle: 'Canned and Jarred',
            image: 'tomatoes-canned.png',
            consistency: 'solid',
            name: 'canned tomatoes',
            nameClean: 'canned tomatoes',
            original: '1 (10 oz) can diced tomatoes with green chilies, drained (like Ro*Tel)',
            originalName: 'diced tomatoes with green chilies, drained (like Ro*Tel)',
            amount: 10.0,
            unit: 'oz',
            meta: [
              'diced',
              'with green chilies, drained (like ro*tel)',
              'canned'
            ],
            measures: {
              us: {
                amount: 10.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 283.495,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 11291,
            aisle: 'Produce',
            image: 'spring-onions.jpg',
            consistency: 'solid',
            name: 'green onions',
            nameClean: 'spring onions',
            original: '2 green onions, diced',
            originalName: 'green onions, diced',
            amount: 2.0,
            unit: '',
            meta: [
              'diced'
            ],
            measures: {
              us: {
                amount: 2.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 2.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 11165,
            aisle: 'Produce',
            image: 'cilantro.png',
            consistency: 'solid',
            name: 'fresh cilantro',
            nameClean: 'cilantro',
            original: '2 Tbsp chopped fresh cilantro',
            originalName: 'chopped fresh cilantro',
            amount: 2.0,
            unit: 'Tbsp',
            meta: [
              'fresh',
              'chopped'
            ],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              },
              metric: {
                amount: 2.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              }
            }
          },
          {
            id: 11252,
            aisle: 'Produce',
            image: 'iceberg-lettuce.jpg',
            consistency: 'solid',
            name: 'lettuce',
            nameClean: 'lettuce',
            original: 'lettuce',
            originalName: 'lettuce',
            amount: 1.0,
            unit: 'serving',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              },
              metric: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              }
            }
          },
          {
            id: 10118364,
            aisle: 'Ethnic Foods',
            image: 'flour-tortilla.jpg',
            consistency: 'solid',
            name: 'burrito size tortillas',
            nameClean: 'burrito size tortilla',
            original: '6 burrito sized tortillas, warm just enough to soften them',
            originalName: 'burrito sized tortillas, warm just enough to soften them',
            amount: 6.0,
            unit: '',
            meta: [],
            measures: {
              us: {
                amount: 6.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 6.0,
                unitShort: '',
                unitLong: ''
              }
            }
          }
        ],
        id: 638074,
        title: 'Chicken Enchilada Salad Wraps',
        readyInMinutes: 45,
        servings: 4,
        sourceUrl: 'https://www.foodista.com/recipe/TCLJZTZF/chicken-enchilada-salad-wraps',
        image: 'https://spoonacular.com/recipeImages/638074-556x370.jpg',
        imageType: 'jpg',
        summary: 'The recipe Chicken Enchilada Salad Wraps could satisfy your Mexican craving in about <b>around 45 minutes</b>. One serving contains <b>520 calories</b>, <b>22g of protein</b>, and <b>24g of fat</b>. This recipe serves 4 and costs $1.7 per serving. It works well as a rather inexpensive main course. 7 people were glad they tried this recipe. It is brought to you by Foodista. A mixture of lettuce, cream, cumin, and a handful of other ingredients are all it takes to make this recipe so scrumptious. With a spoonacular <b>score of 56%</b>, this dish is solid. <a href="https://spoonacular.com/recipes/chicken-enchilada-wraps-596097">Chicken Enchilada Wraps</a>, <a href="https://spoonacular.com/recipes/enchilada-chicken-mango-salad-509531">Enchilada Chicken Mango Salad</a>, and <a href="https://spoonacular.com/recipes/chicken-salad-wraps-410898">Chicken Salad Wraps</a> are very similar to this recipe.',
        cuisines: [
          'Mexican'
        ],
        dishTypes: [
          'side dish',
          'lunch',
          'main course',
          'salad',
          'main dish',
          'dinner'
        ],
        diets: [],
        occasions: [],
        instructions: 'In a bowl, blend together the cream cheese, sour cream, chili powder, cumin, and garlic.\nFold in the cheese, chicken, tomatoes with green chilies, green onion and cilantro into the cream cheese mixture.\nDivide mixture between the tortillas and top with lettuce. Roll up burrito style and serve.',
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: 'In a bowl, blend together the cream cheese, sour cream, chili powder, cumin, and garlic.',
                ingredients: [
                  {
                    id: 2009,
                    name: 'chili powder',
                    localizedName: 'chili powder',
                    image: 'chili-powder.jpg'
                  },
                  {
                    id: 1017,
                    name: 'cream cheese',
                    localizedName: 'cream cheese',
                    image: 'cream-cheese.jpg'
                  },
                  {
                    id: 1056,
                    name: 'sour cream',
                    localizedName: 'sour cream',
                    image: 'sour-cream.jpg'
                  },
                  {
                    id: 11215,
                    name: 'garlic',
                    localizedName: 'garlic',
                    image: 'garlic.png'
                  },
                  {
                    id: 1002014,
                    name: 'cumin',
                    localizedName: 'cumin',
                    image: 'ground-cumin.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404783,
                    name: 'bowl',
                    localizedName: 'bowl',
                    image: 'bowl.jpg'
                  }
                ]
              },
              {
                number: 2,
                step: 'Fold in the cheese, chicken, tomatoes with green chilies, green onion and cilantro into the cream cheese mixture.',
                ingredients: [
                  {
                    id: 31015,
                    name: 'green chili pepper',
                    localizedName: 'green chili pepper',
                    image: 'chili-peppers-green.jpg'
                  },
                  {
                    id: 1017,
                    name: 'cream cheese',
                    localizedName: 'cream cheese',
                    image: 'cream-cheese.jpg'
                  },
                  {
                    id: 11291,
                    name: 'green onions',
                    localizedName: 'green onions',
                    image: 'spring-onions.jpg'
                  },
                  {
                    id: 11165,
                    name: 'cilantro',
                    localizedName: 'cilantro',
                    image: 'cilantro.png'
                  },
                  {
                    id: 11529,
                    name: 'tomato',
                    localizedName: 'tomato',
                    image: 'tomato.png'
                  },
                  {
                    id: 5006,
                    name: 'whole chicken',
                    localizedName: 'whole chicken',
                    image: 'whole-chicken.jpg'
                  },
                  {
                    id: 1041009,
                    name: 'cheese',
                    localizedName: 'cheese',
                    image: 'cheddar-cheese.png'
                  }
                ],
                equipment: []
              },
              {
                number: 3,
                step: 'Divide mixture between the tortillas and top with lettuce.',
                ingredients: [
                  {
                    id: 18364,
                    name: 'tortilla',
                    localizedName: 'tortilla',
                    image: 'flour-tortilla.jpg'
                  },
                  {
                    id: 11252,
                    name: 'lettuce',
                    localizedName: 'lettuce',
                    image: 'iceberg-lettuce.jpg'
                  }
                ],
                equipment: []
              },
              {
                number: 4,
                step: 'Roll up burrito style and serve.',
                ingredients: [
                  {
                    id: 0,
                    name: 'roll',
                    localizedName: 'roll',
                    image: 'dinner-yeast-rolls.jpg'
                  }
                ],
                equipment: []
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/chicken-enchilada-salad-wraps-638074'
      },
      {
        vegetarian: true,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 2,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 36,
        spoonacularScore: 74.0,
        healthScore: 18.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 251.9,
        extendedIngredients: [
          {
            id: 10311529,
            aisle: 'Produce',
            image: 'cherry-tomatoes.png',
            consistency: 'solid',
            name: 'cherry tomatoes',
            nameClean: 'cherry tomato',
            original: 'couple of cherry tomatoes, halved',
            originalName: 'couple of cherry tomatoes, halved',
            amount: 4.0,
            unit: 'servings',
            meta: [
              'halved'
            ],
            measures: {
              us: {
                amount: 4.0,
                unitShort: 'servings',
                unitLong: 'servings'
              },
              metric: {
                amount: 4.0,
                unitShort: 'servings',
                unitLong: 'servings'
              }
            }
          },
          {
            id: 1032009,
            aisle: 'Spices and Seasonings',
            image: 'red-pepper-flakes.jpg',
            consistency: 'solid',
            name: 'chili flakes',
            nameClean: 'red pepper flakes',
            original: 'pepper or chili flakes',
            originalName: 'pepper or chili flakes',
            amount: 4.0,
            unit: 'servings',
            meta: [],
            measures: {
              us: {
                amount: 4.0,
                unitShort: 'servings',
                unitLong: 'servings'
              },
              metric: {
                amount: 4.0,
                unitShort: 'servings',
                unitLong: 'servings'
              }
            }
          },
          {
            id: 11297,
            aisle: 'Produce;Spices and Seasonings',
            image: 'parsley.jpg',
            consistency: 'solid',
            name: 'fresh parsley',
            nameClean: 'parsley',
            original: '4 tablespoons chopped fresh parsley',
            originalName: 'chopped fresh parsley',
            amount: 4.0,
            unit: 'tablespoons',
            meta: [
              'fresh',
              'chopped'
            ],
            measures: {
              us: {
                amount: 4.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              },
              metric: {
                amount: 4.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              }
            }
          },
          {
            id: 11215,
            aisle: 'Produce',
            image: 'garlic.png',
            consistency: 'solid',
            name: 'garlic',
            nameClean: 'garlic',
            original: '2 teaspoons minced garlic',
            originalName: 'minced garlic',
            amount: 2.0,
            unit: 'teaspoons',
            meta: [
              'minced'
            ],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 2.0,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 4053,
            aisle: 'Oil, Vinegar, Salad Dressing',
            image: 'olive-oil.jpg',
            consistency: 'liquid',
            name: 'olive oil',
            nameClean: 'olive oil',
            original: '1 tablespoon olive oil',
            originalName: 'olive oil',
            amount: 1.0,
            unit: 'tablespoon',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              },
              metric: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp'
              }
            }
          },
          {
            id: 2047,
            aisle: 'Spices and Seasonings',
            image: 'salt.jpg',
            consistency: 'solid',
            name: 'salt',
            nameClean: 'salt',
            original: 'Salt to taste',
            originalName: 'Salt to taste',
            amount: 4.0,
            unit: 'servings',
            meta: [
              'to taste'
            ],
            measures: {
              us: {
                amount: 4.0,
                unitShort: 'servings',
                unitLong: 'servings'
              },
              metric: {
                amount: 4.0,
                unitShort: 'servings',
                unitLong: 'servings'
              }
            }
          },
          {
            id: 14084,
            aisle: 'Alcoholic Beverages',
            image: 'red-wine.jpg',
            consistency: 'liquid',
            name: 'wine',
            nameClean: 'wine',
            original: 'glass of white wine',
            originalName: 'white wine',
            amount: 1.0,
            unit: 'glass',
            meta: [
              'white'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'glass',
                unitLong: 'glass'
              },
              metric: {
                amount: 1.0,
                unitShort: 'glass',
                unitLong: 'glass'
              }
            }
          }
        ],
        id: 652750,
        title: 'Mussels & Clams in White Wine {Cozze e Vongole}',
        readyInMinutes: 45,
        servings: 4,
        sourceUrl: 'http://www.foodista.com/recipe/TXM3X2KZ/mussels-clams-in-white-wine-cozze-e-vongole',
        image: 'https://spoonacular.com/recipeImages/652750-556x370.jpg',
        imageType: 'jpg',
        summary: "This recipe makes 4 servings with <b>116 calories</b>, <b>2g of protein</b>, and <b>4g of fat</b> each. For <b>$2.52 per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. A mixture of glass of wine, olive oil, salt, and a handful of other ingredients are all it takes to make this recipe so scrumptious. A couple people made this recipe, and 36 would say it hit the spot. It is a good option if you're following a <b>caveman, gluten free, primal, and vegan</b> diet. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 76%</b>. This score is pretty good. Try <a href=\"https://spoonacular.com/recipes/mussels-and-clams-in-white-wine-8865\">Mussels And Clams In White Wine</a>, <a href=\"https://spoonacular.com/recipes/smoky-mussels-and-clams-with-white-wine-broth-76689\">Smoky Mussels and Clams with White Wine Broth</a>, and <a href=\"https://spoonacular.com/recipes/fish-clams-and-mussels-with-white-wine-and-garlic-84923\">Fish, Clams, and Mussels with White Wine and Garlic</a> for similar recipes.",
        cuisines: [],
        dishTypes: [],
        diets: [
          'gluten free',
          'dairy free',
          'lacto ovo vegetarian',
          'vegan'
        ],
        occasions: [],
        instructions: '<ol><li>In a large frying pan on low heat add 3-4 glugs of olive oil and slowly cook the garlic until brown all over. Remove & discard the garlic (if you like it, leave it in.)</li><li>Turn the heat up, add in chili flakes & clams - cook about 30 seconds to 1 minute. Then add in the mussels. Turn up the heat and toss in the cherry tomatoes, sauteing for a moment or two.</li><li>Next add a half glass of white wine and cover. Allow to sit covered 1-2 minutes at most until the shells open.  Then shut off the heat, add in your parsley. Finish with a bit of butter or good glug of olive oil.  Top with arugula if you like.</li><li>Serve immediately with plenty of good crunchy bread to dip & white wine wine.</li></ol>',
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: 'In a large frying pan on low heat add 3-4 glugs of olive oil and slowly cook the garlic until brown all over.',
                ingredients: [
                  {
                    id: 4053,
                    name: 'olive oil',
                    localizedName: 'olive oil',
                    image: 'olive-oil.jpg'
                  },
                  {
                    id: 11215,
                    name: 'garlic',
                    localizedName: 'garlic',
                    image: 'garlic.png'
                  }
                ],
                equipment: [
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png'
                  }
                ]
              },
              {
                number: 2,
                step: 'Remove & discard the garlic (if you like it, leave it in.)Turn the heat up, add in chili flakes & clams - cook about 30 seconds to 1 minute. Then add in the mussels. Turn up the heat and toss in the cherry tomatoes, sauteing for a moment or two.Next add a half glass of white wine and cover. Allow to sit covered 1-2 minutes at most until the shells open.  Then shut off the heat, add in your parsley. Finish with a bit of butter or good glug of olive oil.  Top with arugula if you like.',
                ingredients: [
                  {
                    id: 10311529,
                    name: 'cherry tomato',
                    localizedName: 'cherry tomato',
                    image: 'cherry-tomatoes.png'
                  },
                  {
                    id: 1032009,
                    name: 'red pepper flakes',
                    localizedName: 'red pepper flakes',
                    image: 'red-pepper-flakes.jpg'
                  },
                  {
                    id: 14106,
                    name: 'white wine',
                    localizedName: 'white wine',
                    image: 'white-wine.jpg'
                  },
                  {
                    id: 4053,
                    name: 'olive oil',
                    localizedName: 'olive oil',
                    image: 'olive-oil.jpg'
                  },
                  {
                    id: 11959,
                    name: 'arugula',
                    localizedName: 'arugula',
                    image: 'arugula-or-rocket-salad.jpg'
                  },
                  {
                    id: 15164,
                    name: 'mussels',
                    localizedName: 'mussels',
                    image: 'mussels.jpg'
                  },
                  {
                    id: 11297,
                    name: 'parsley',
                    localizedName: 'parsley',
                    image: 'parsley.jpg'
                  },
                  {
                    id: 1001,
                    name: 'butter',
                    localizedName: 'butter',
                    image: 'butter-sliced.jpg'
                  },
                  {
                    id: 11215,
                    name: 'garlic',
                    localizedName: 'garlic',
                    image: 'garlic.png'
                  },
                  {
                    id: 11020420,
                    name: 'pasta shells',
                    localizedName: 'pasta shells',
                    image: 'shell-pasta.jpg'
                  },
                  {
                    id: 15157,
                    name: 'clams',
                    localizedName: 'clams',
                    image: 'clams.jpg'
                  }
                ],
                equipment: [],
                length: {
                  number: 3,
                  unit: 'minutes'
                }
              },
              {
                number: 3,
                step: 'Serve immediately with plenty of good crunchy bread to dip & white wine wine.',
                ingredients: [
                  {
                    id: 14106,
                    name: 'white wine',
                    localizedName: 'white wine',
                    image: 'white-wine.jpg'
                  },
                  {
                    id: 18064,
                    name: 'bread',
                    localizedName: 'bread',
                    image: 'white-bread.jpg'
                  },
                  {
                    id: 14084,
                    name: 'wine',
                    localizedName: 'wine',
                    image: 'red-wine.jpg'
                  },
                  {
                    id: 0,
                    name: 'dip',
                    localizedName: 'dip',
                    image: ''
                  }
                ],
                equipment: []
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/mussels-clams-in-white-wine-cozze-e-vongole-652750'
      },
      {
        vegetarian: true,
        vegan: false,
        glutenFree: true,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 0,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 93,
        spoonacularScore: 52.0,
        healthScore: 4.0,
        creditsText: 'Full Belly Sisters',
        license: 'CC BY-SA 3.0',
        sourceName: 'Full Belly Sisters',
        pricePerServing: 42.47,
        extendedIngredients: [
          {
            id: 9003,
            aisle: 'Produce',
            image: 'apple.jpg',
            consistency: 'solid',
            name: 'apple',
            nameClean: 'apple',
            original: 'chopped organic apple, unpeeled (grated instead of chopped for very small children)',
            originalName: 'chopped organic apple, unpeeled (grated instead of chopped for very small children)',
            amount: 1.0,
            unit: 'serving',
            meta: [
              'organic',
              'grated',
              'unpeeled',
              'chopped',
              'for very small children)'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              },
              metric: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              }
            }
          },
          {
            id: 9299,
            aisle: 'Dried Fruits;Produce;Baking',
            image: 'raisins.jpg',
            consistency: 'solid',
            name: 'raisins',
            nameClean: 'raisins',
            original: 'organic raisins',
            originalName: 'organic raisins',
            amount: 1.0,
            unit: 'serving',
            meta: [
              'organic'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              },
              metric: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              }
            }
          },
          {
            id: 12036,
            aisle: 'Savory Snacks',
            image: 'sunflower-seeds.jpg',
            consistency: 'solid',
            name: 'sunflower seeds',
            nameClean: 'sunflower kernels',
            original: 'sunflower seeds',
            originalName: 'sunflower seeds',
            amount: 1.0,
            unit: 'serving',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              },
              metric: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              }
            }
          },
          {
            id: 1116,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'plain-yogurt.jpg',
            consistency: 'solid',
            name: 'yogurt',
            nameClean: 'yogurt',
            original: 'plain yogurt, unsweetened (regular or greek)',
            originalName: 'plain yogurt, unsweetened (regular or greek)',
            amount: 1.0,
            unit: 'serving',
            meta: [
              'plain',
              'unsweetened',
              '(regular or greek)'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              },
              metric: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              }
            }
          }
        ],
        id: 716433,
        title: 'Easiest Breakfast Ever: Sunny Fruit Parfait',
        readyInMinutes: 45,
        servings: 1,
        sourceUrl: 'http://fullbellysisters.blogspot.com/2011/04/easiest-breakfast-ever-sunny-fruit.html',
        image: 'https://spoonacular.com/recipeImages/716433-556x370.jpg',
        imageType: 'jpg',
        summary: "This recipe makes 1 servings with <b>128 calories</b>, <b>1g of protein</b>, and <b>1g of fat</b> each. For <b>42 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. A few people made this recipe, and 93 would say it hit the spot. A mixture of yogurt, raisins, sunflower seeds, and a handful of other ingredients are all it takes to make this recipe so tasty. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, primal, and vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 55%</b>. This score is solid. Try <a href=\"https://spoonacular.com/recipes/fruit-and-yogurt-breakfast-parfait-586146\">Fruit and Yogurt Breakfast Parfait</a>, <a href=\"https://spoonacular.com/recipes/breakfast-yogurt-parfait-with-fresh-fruit-and-granola-128826\">Breakfast Yogurt Parfait With Fresh Fruit and Granola</a>, and <a href=\"https://spoonacular.com/recipes/sunny-summer-fruit-salad-with-sunny-citrus-dressing-18959\">Sunny Summer \"fruit\" Salad With Sunny Citrus Dressing</a> for similar recipes.",
        cuisines: [],
        dishTypes: [
          'morning meal',
          'brunch',
          'breakfast'
        ],
        diets: [
          'gluten free',
          'lacto ovo vegetarian',
          'primal'
        ],
        occasions: [],
        instructions: '',
        analyzedInstructions: [],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/easiest-breakfast-ever-sunny-fruit-parfait-716433'
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 11,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 16,
        spoonacularScore: 59.0,
        healthScore: 13.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 173.29,
        extendedIngredients: [
          {
            id: 4025,
            aisle: 'Condiments',
            image: 'mayonnaise.png',
            consistency: 'liquid',
            name: 'mayonnaise',
            nameClean: 'mayonnaise',
            original: '125 ml mayonnaise',
            originalName: 'mayonnaise',
            amount: 125.0,
            unit: 'ml',
            meta: [],
            measures: {
              us: {
                amount: 4.227,
                unitShort: 'fl. oz',
                unitLong: 'fl. ozs'
              },
              metric: {
                amount: 125.0,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 2054,
            aisle: 'Canned and Jarred',
            image: 'capers.jpg',
            consistency: 'solid',
            name: 'capers',
            nameClean: 'capers',
            original: '1 Tbs capers, roughly chopped (rinsed and drained if salted)',
            originalName: 'capers, roughly chopped (rinsed and drained if salted)',
            amount: 1.0,
            unit: 'Tbs',
            meta: [
              'salted',
              'rinsed',
              'drained',
              'roughly chopped',
              '( and if )'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'Tbs',
                unitLong: 'Tb'
              },
              metric: {
                amount: 1.0,
                unitShort: 'Tbs',
                unitLong: 'Tb'
              }
            }
          },
          {
            id: 1002055,
            aisle: 'Produce',
            image: 'horseradish.jpg',
            consistency: 'liquid',
            name: 'horseradish',
            nameClean: 'horseradish',
            original: '1 tsp creamed horseradish',
            originalName: 'creamed horseradish',
            amount: 1.0,
            unit: 'tsp',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'tsp',
                unitLong: 'teaspoon'
              },
              metric: {
                amount: 1.0,
                unitShort: 'tsp',
                unitLong: 'teaspoon'
              }
            }
          },
          {
            id: 1002046,
            aisle: 'Condiments',
            image: 'dijon-mustard.jpg',
            consistency: 'liquid',
            name: 'dijon mustard',
            nameClean: 'creole mustard',
            original: '1 tsp Dijon mustard',
            originalName: 'Dijon mustard',
            amount: 1.0,
            unit: 'tsp',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'tsp',
                unitLong: 'teaspoon'
              },
              metric: {
                amount: 1.0,
                unitShort: 'tsp',
                unitLong: 'teaspoon'
              }
            }
          },
          {
            id: 11677,
            aisle: 'Produce',
            image: 'shallots.jpg',
            consistency: 'solid',
            name: 'shallot',
            nameClean: 'shallot',
            original: '1 small shallot, finely chopped',
            originalName: 'shallot, finely chopped',
            amount: 1.0,
            unit: 'small',
            meta: [
              'finely chopped'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'small',
                unitLong: 'small'
              },
              metric: {
                amount: 1.0,
                unitShort: 'small',
                unitLong: 'small'
              }
            }
          },
          {
            id: 11297,
            aisle: 'Produce;Spices and Seasonings',
            image: 'parsley.jpg',
            consistency: 'solid',
            name: 'parsley',
            nameClean: 'parsley',
            original: '1 tsp parsley, finely chopped',
            originalName: 'parsley, finely chopped',
            amount: 1.0,
            unit: 'tsp',
            meta: [
              'finely chopped'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'tsp',
                unitLong: 'teaspoon'
              },
              metric: {
                amount: 1.0,
                unitShort: 'tsp',
                unitLong: 'teaspoon'
              }
            }
          },
          {
            id: 15015,
            aisle: 'Seafood',
            image: 'cod-fillet.jpg',
            consistency: 'solid',
            name: 'cod fillets',
            nameClean: 'cod fillets',
            original: '450 g cod fillets',
            originalName: 'cod fillets',
            amount: 450.0,
            unit: 'g',
            meta: [],
            measures: {
              us: {
                amount: 15.873,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 450.0,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 2004,
            aisle: 'Produce;Spices and Seasonings',
            image: 'bay-leaves.jpg',
            consistency: 'solid',
            name: 'bay leaves',
            nameClean: 'bay leaves',
            original: '2 bay leaves',
            originalName: 'bay leaves',
            amount: 2.0,
            unit: '',
            meta: [],
            measures: {
              us: {
                amount: 2.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 2.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 1077,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'milk.png',
            consistency: 'liquid',
            name: 'milk',
            nameClean: 'milk',
            original: '150 ml milk',
            originalName: 'milk',
            amount: 150.0,
            unit: 'ml',
            meta: [],
            measures: {
              us: {
                amount: 5.073,
                unitShort: 'fl. oz',
                unitLong: 'fl. ozs'
              },
              metric: {
                amount: 150.0,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 14412,
            aisle: 'Beverages',
            image: 'water.png',
            consistency: 'liquid',
            name: 'water',
            nameClean: 'water',
            original: '150 ml water',
            originalName: 'water',
            amount: 150.0,
            unit: 'ml',
            meta: [],
            measures: {
              us: {
                amount: 5.073,
                unitShort: 'fl. oz',
                unitLong: 'fl. ozs'
              },
              metric: {
                amount: 150.0,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 11352,
            aisle: 'Produce',
            image: 'potatoes-yukon-gold.png',
            consistency: 'solid',
            name: 'potatoes',
            nameClean: 'potato',
            original: '350 g potatoes, peeled and cut into even chunks',
            originalName: 'potatoes, peeled and cut into even chunks',
            amount: 350.0,
            unit: 'g',
            meta: [
              'peeled',
              'cut into even chunks'
            ],
            measures: {
              us: {
                amount: 12.346,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 350.0,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 2047,
            aisle: 'Spices and Seasonings',
            image: 'salt.jpg',
            consistency: 'solid',
            name: 'salt',
            nameClean: 'salt',
            original: 'A pinch of salt',
            originalName: 'A of salt',
            amount: 1.0,
            unit: 'pinch',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'pinch',
                unitLong: 'pinch'
              },
              metric: {
                amount: 1.0,
                unitShort: 'pinch',
                unitLong: 'pinch'
              }
            }
          },
          {
            id: 9156,
            aisle: 'Produce',
            image: 'zest-lemon.jpg',
            consistency: 'solid',
            name: 'lemon zest',
            nameClean: 'lemon peel',
            original: '½ tsp lemon zest, grated',
            originalName: 'lemon zest, grated',
            amount: 0.5,
            unit: 'tsp',
            meta: [
              'grated'
            ],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 11297,
            aisle: 'Produce;Spices and Seasonings',
            image: 'parsley.jpg',
            consistency: 'solid',
            name: 'fresh parsley',
            nameClean: 'parsley',
            original: '1 Tbs fresh parsley, chopped',
            originalName: 'fresh parsley, chopped',
            amount: 1.0,
            unit: 'Tbs',
            meta: [
              'fresh',
              'chopped'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'Tbs',
                unitLong: 'Tb'
              },
              metric: {
                amount: 1.0,
                unitShort: 'Tbs',
                unitLong: 'Tb'
              }
            }
          },
          {
            id: 11156,
            aisle: 'Produce',
            image: 'fresh-chives.jpg',
            consistency: 'solid',
            name: 'chives',
            nameClean: 'chives',
            original: '1 Tbs chives, snipped',
            originalName: 'chives, snipped',
            amount: 1.0,
            unit: 'Tbs',
            meta: [
              'snipped'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'Tbs',
                unitLong: 'Tb'
              },
              metric: {
                amount: 1.0,
                unitShort: 'Tbs',
                unitLong: 'Tb'
              }
            }
          },
          {
            id: 1002030,
            aisle: 'Spices and Seasonings',
            image: 'pepper.jpg',
            consistency: 'solid',
            name: 'pepper',
            nameClean: 'black pepper',
            original: '¼ tsp pepper',
            originalName: 'pepper',
            amount: 0.25,
            unit: 'tsp',
            meta: [],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 20081,
            aisle: 'Baking',
            image: 'flour.png',
            consistency: 'solid',
            name: 'flour',
            nameClean: 'wheat flour',
            original: 'Flour, for shaping',
            originalName: 'Flour, for shaping',
            amount: 1.0,
            unit: 'serving',
            meta: [
              'for shaping'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              },
              metric: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              }
            }
          },
          {
            id: 1123,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'egg.png',
            consistency: 'solid',
            name: 'egg',
            nameClean: 'egg',
            original: '1 egg',
            originalName: 'egg',
            amount: 1.0,
            unit: '',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 1.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 18079,
            aisle: 'Pasta and Rice',
            image: 'breadcrumbs.jpg',
            consistency: 'solid',
            name: 'breadcrumbs',
            nameClean: 'breadcrumbs',
            original: '85 g breadcrumbs, homemade',
            originalName: 'breadcrumbs, homemade',
            amount: 85.0,
            unit: 'g',
            meta: [
              'homemade'
            ],
            measures: {
              us: {
                amount: 2.998,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 85.0,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 4584,
            aisle: 'Oil, Vinegar, Salad Dressing',
            image: 'vegetable-oil.jpg',
            consistency: 'liquid',
            name: 'sunflower oil',
            nameClean: 'sunflower oil',
            original: '3-4 Tbs sunflower oil, for shallow frying',
            originalName: 'sunflower oil, for shallow frying',
            amount: 3.0,
            unit: 'Tbs',
            meta: [
              'for shallow frying'
            ],
            measures: {
              us: {
                amount: 3.0,
                unitShort: 'Tbs',
                unitLong: 'Tbs'
              },
              metric: {
                amount: 3.0,
                unitShort: 'Tbs',
                unitLong: 'Tbs'
              }
            }
          },
          {
            id: 1029150,
            aisle: 'Produce',
            image: 'lemon-wedge.png',
            consistency: 'solid',
            name: 'lemon wedges',
            nameClean: 'lemon wedge',
            original: 'Lemon wedges, to serve',
            originalName: 'Lemon wedges, to serve',
            amount: 1.0,
            unit: 'serving',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              },
              metric: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              }
            }
          }
        ],
        id: 655733,
        title: 'Perfect fish cakes',
        readyInMinutes: 45,
        servings: 6,
        sourceUrl: 'https://www.foodista.com/recipe/PHXS52JS/perfect-fish-cakes',
        summary: "Perfect fish cakes might be just the main course you are searching for. This recipe serves 6. For <b>$1.73 per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>19g of protein</b>, <b>25g of fat</b>, and a total of <b>390 calories</b>. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>roughly 45 minutes</b>. If you have chives, lemon zest, flour, and a few other ingredients on hand, you can make it. This recipe is liked by 16 foodies and cooks. It is a good option if you're following a <b>pescatarian</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 58%</b>, which is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/naomi-duguids-fish-cakes-and-fish-balls-203215\">Naomi Duguid's Fish Cakes and Fish Balls</a>, <a href=\"https://spoonacular.com/recipes/perfect-fish-tacos-862329\">Perfect Fish Tacos</a>, and <a href=\"https://spoonacular.com/recipes/perfect-fish-tacos-612275\">Perfect Fish Tacos</a>.",
        cuisines: [],
        dishTypes: [
          'lunch',
          'main course',
          'main dish',
          'dinner'
        ],
        diets: [
          'pescatarian'
        ],
        occasions: [],
        instructions: "Mix all the sauce ingredients together. Set aside.\nLay the fish and bay leaves in a frying pan. Pour over the milk and water. Cover, bring to a boil, then lower the heat and simmer for 4 minutes. Take off the heat and let stand, covered, for 10 minutes to gently finish cooking the fish. Lift the fish out of the milk with a slotted spoon and put on a plate to cool.\nMeanwhile, cook the potatoes in the salted water for 10 minutes or until tender, but not broken up. Drain the potatoes and leave them for a minute or two.\nTip them back into the hot pan on the lowest heat and let them dry out for 1 minute, mashing them with a fork and stirring so they don't stick. You should have a light, dry fluffy mash. Take off the heat and beat in 1 tablespoon of the sauce, then the lemon zest, parsley, pepper and chives. Set aside.\nDrain off liquid from the fish, then flake it into big chunks into the pan of potatoes. Using your hands, gently lift the fish and potatoes together so they just mix. Do it with only a couple of turns, or the fish will break up too much. Put to aside and cool.\nBeat the egg on a large plate and lightly flour a board. Spread the breadcrumbs on another plate. On the floured board, and with floured hands, carefully shape into 4-6 cakes, about 2.5 cm thick. One by one, put each cake in the egg, and brush over the top and sides so it is completely coated. Transfer each cake to the plate with bread crumbs, pat the crumbs on the sides and tops so they are lightly covered. Transfer to a plate, cover and chill for 30 minutes (or up to a day ahead).\nFry the fish cakes in hot oil over a medium heat for about 5 minutes on each side or until crisp and golden. Serve with the rest of the sauce (squeeze in a little lemon zest to taste) and lemon wedges for squeezing over.",
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: 'Mix all the sauce ingredients together. Set aside.',
                ingredients: [
                  {
                    id: 0,
                    name: 'sauce',
                    localizedName: 'sauce',
                    image: ''
                  }
                ],
                equipment: []
              },
              {
                number: 2,
                step: 'Lay the fish and bay leaves in a frying pan.',
                ingredients: [
                  {
                    id: 2004,
                    name: 'bay leaves',
                    localizedName: 'bay leaves',
                    image: 'bay-leaves.jpg'
                  },
                  {
                    id: 10115261,
                    name: 'fish',
                    localizedName: 'fish',
                    image: 'fish-fillet.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png'
                  }
                ]
              },
              {
                number: 3,
                step: 'Pour over the milk and water. Cover, bring to a boil, then lower the heat and simmer for 4 minutes. Take off the heat and let stand, covered, for 10 minutes to gently finish cooking the fish. Lift the fish out of the milk with a slotted spoon and put on a plate to cool.',
                ingredients: [
                  {
                    id: 14412,
                    name: 'water',
                    localizedName: 'water',
                    image: 'water.png'
                  },
                  {
                    id: 10115261,
                    name: 'fish',
                    localizedName: 'fish',
                    image: 'fish-fillet.jpg'
                  },
                  {
                    id: 1077,
                    name: 'milk',
                    localizedName: 'milk',
                    image: 'milk.png'
                  }
                ],
                equipment: [
                  {
                    id: 404636,
                    name: 'slotted spoon',
                    localizedName: 'slotted spoon',
                    image: 'slotted-spoon.jpg'
                  }
                ],
                length: {
                  number: 14,
                  unit: 'minutes'
                }
              },
              {
                number: 4,
                step: 'Meanwhile, cook the potatoes in the salted water for 10 minutes or until tender, but not broken up.',
                ingredients: [
                  {
                    id: 11352,
                    name: 'potato',
                    localizedName: 'potato',
                    image: 'potatoes-yukon-gold.png'
                  },
                  {
                    id: 14412,
                    name: 'water',
                    localizedName: 'water',
                    image: 'water.png'
                  }
                ],
                equipment: [],
                length: {
                  number: 10,
                  unit: 'minutes'
                }
              },
              {
                number: 5,
                step: 'Drain the potatoes and leave them for a minute or two.',
                ingredients: [
                  {
                    id: 11352,
                    name: 'potato',
                    localizedName: 'potato',
                    image: 'potatoes-yukon-gold.png'
                  }
                ],
                equipment: []
              },
              {
                number: 6,
                step: "Tip them back into the hot pan on the lowest heat and let them dry out for 1 minute, mashing them with a fork and stirring so they don't stick. You should have a light, dry fluffy mash. Take off the heat and beat in 1 tablespoon of the sauce, then the lemon zest, parsley, pepper and chives. Set aside.",
                ingredients: [
                  {
                    id: 9156,
                    name: 'lemon zest',
                    localizedName: 'lemon zest',
                    image: 'zest-lemon.jpg'
                  },
                  {
                    id: 11297,
                    name: 'parsley',
                    localizedName: 'parsley',
                    image: 'parsley.jpg'
                  },
                  {
                    id: 11156,
                    name: 'chives',
                    localizedName: 'chives',
                    image: 'fresh-chives.jpg'
                  },
                  {
                    id: 1002030,
                    name: 'pepper',
                    localizedName: 'pepper',
                    image: 'pepper.jpg'
                  },
                  {
                    id: 0,
                    name: 'sauce',
                    localizedName: 'sauce',
                    image: ''
                  }
                ],
                equipment: [
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png'
                  }
                ],
                length: {
                  number: 1,
                  unit: 'minutes'
                }
              },
              {
                number: 7,
                step: 'Drain off liquid from the fish, then flake it into big chunks into the pan of potatoes. Using your hands, gently lift the fish and potatoes together so they just mix. Do it with only a couple of turns, or the fish will break up too much. Put to aside and cool.',
                ingredients: [
                  {
                    id: 11352,
                    name: 'potato',
                    localizedName: 'potato',
                    image: 'potatoes-yukon-gold.png'
                  },
                  {
                    id: 10115261,
                    name: 'fish',
                    localizedName: 'fish',
                    image: 'fish-fillet.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png'
                  }
                ]
              },
              {
                number: 8,
                step: 'Beat the egg on a large plate and lightly flour a board.',
                ingredients: [
                  {
                    id: 20081,
                    name: 'all purpose flour',
                    localizedName: 'all purpose flour',
                    image: 'flour.png'
                  },
                  {
                    id: 1123,
                    name: 'egg',
                    localizedName: 'egg',
                    image: 'egg.png'
                  }
                ],
                equipment: []
              },
              {
                number: 9,
                step: 'Spread the breadcrumbs on another plate. On the floured board, and with floured hands, carefully shape into 4-6 cakes, about 2.5 cm thick. One by one, put each cake in the egg, and brush over the top and sides so it is completely coated.',
                ingredients: [
                  {
                    id: 18079,
                    name: 'breadcrumbs',
                    localizedName: 'breadcrumbs',
                    image: 'breadcrumbs.jpg'
                  },
                  {
                    id: 0,
                    name: 'spread',
                    localizedName: 'spread',
                    image: ''
                  },
                  {
                    id: 1123,
                    name: 'egg',
                    localizedName: 'egg',
                    image: 'egg.png'
                  }
                ],
                equipment: []
              },
              {
                number: 10,
                step: 'Transfer each cake to the plate with bread crumbs, pat the crumbs on the sides and tops so they are lightly covered.',
                ingredients: [
                  {
                    id: 18079,
                    name: 'breadcrumbs',
                    localizedName: 'breadcrumbs',
                    image: 'breadcrumbs.jpg'
                  }
                ],
                equipment: []
              },
              {
                number: 11,
                step: 'Transfer to a plate, cover and chill for 30 minutes (or up to a day ahead).',
                ingredients: [],
                equipment: [],
                length: {
                  number: 30,
                  unit: 'minutes'
                }
              },
              {
                number: 12,
                step: 'Fry the fish cakes in hot oil over a medium heat for about 5 minutes on each side or until crisp and golden.',
                ingredients: [
                  {
                    id: 10115261,
                    name: 'fish',
                    localizedName: 'fish',
                    image: 'fish-fillet.jpg'
                  },
                  {
                    id: 4582,
                    name: 'cooking oil',
                    localizedName: 'cooking oil',
                    image: 'vegetable-oil.jpg'
                  }
                ],
                equipment: [],
                length: {
                  number: 5,
                  unit: 'minutes'
                }
              },
              {
                number: 13,
                step: 'Serve with the rest of the sauce (squeeze in a little lemon zest to taste) and lemon wedges for squeezing over.',
                ingredients: [
                  {
                    id: 1029150,
                    name: 'lemon wedge',
                    localizedName: 'lemon wedge',
                    image: 'lemon-wedge.png'
                  },
                  {
                    id: 9156,
                    name: 'lemon zest',
                    localizedName: 'lemon zest',
                    image: 'zest-lemon.jpg'
                  },
                  {
                    id: 0,
                    name: 'sauce',
                    localizedName: 'sauce',
                    image: ''
                  }
                ],
                equipment: []
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/perfect-fish-cakes-655733'
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 8,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 49,
        spoonacularScore: 66.0,
        healthScore: 12.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 84.62,
        extendedIngredients: [
          {
            id: 11209,
            aisle: 'Produce',
            image: 'eggplant.png',
            consistency: 'solid',
            name: 'eggplants',
            nameClean: 'eggplant',
            original: '1/2 eggplants, cut into strips',
            originalName: 'eggplants, cut into strips',
            amount: 0.5,
            unit: '',
            meta: [
              'cut into strips'
            ],
            measures: {
              us: {
                amount: 0.5,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 0.5,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 18079,
            aisle: 'Pasta and Rice',
            image: 'breadcrumbs.jpg',
            consistency: 'solid',
            name: 'bread crumbs',
            nameClean: 'breadcrumbs',
            original: '- 1 cup bread crumbs',
            originalName: 'bread crumbs',
            amount: 1.0,
            unit: 'cup',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'cup',
                unitLong: 'cup'
              },
              metric: {
                amount: 236.588,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 1032027,
            aisle: 'Spices and Seasonings',
            image: 'seasoning.png',
            consistency: 'solid',
            name: 'seasoning mix',
            nameClean: 'seasoning mix',
            original: 'Italian seasoning mix, salt, paprika, garlic powder (to taste)',
            originalName: 'Italian seasoning mix, salt, paprika, garlic powder (to taste)',
            amount: 1.0,
            unit: 'serving',
            meta: [
              'italian',
              'to taste',
              '()'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              },
              metric: {
                amount: 1.0,
                unitShort: 'serving',
                unitLong: 'serving'
              }
            }
          },
          {
            id: 1117,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'plain-yogurt.jpg',
            consistency: 'liquid',
            name: 'low fat plain yogurt',
            nameClean: 'low fat yogurt',
            original: '1/4 cup plain, low-fat yogurt',
            originalName: 'plain, low-fat yogurt',
            amount: 0.25,
            unit: 'cup',
            meta: [
              'plain',
              'low-fat'
            ],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 59.147,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 1123,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'egg.png',
            consistency: 'solid',
            name: 'egg',
            nameClean: 'egg',
            original: '1 egg, lightly beaten',
            originalName: 'egg, lightly beaten',
            amount: 1.0,
            unit: '',
            meta: [
              'lightly beaten'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 1.0,
                unitShort: '',
                unitLong: ''
              }
            }
          }
        ],
        id: 642287,
        title: 'Eggplant Fries with Tzatziki Sauce',
        readyInMinutes: 45,
        servings: 2,
        sourceUrl: 'https://www.foodista.com/recipe/5SLKJT3S/eggplant-fries-with-tzatziki-sauce',
        image: 'https://spoonacular.com/recipeImages/642287-556x370.jpg',
        imageType: 'jpg',
        summary: "Eggplant Fries with Tzatziki Sauce might be just the <b>Mediterranean</b> recipe you are searching for. For <b>85 cents per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. This recipe makes 2 servings with <b>294 calories</b>, <b>13g of protein</b>, and <b>6g of fat</b> each. This recipe from Foodista has 49 fans. It works well as a side dish. Head to the store and pick up eggplants, egg, yogurt, and a few other things to make it today. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. Overall, this recipe earns a <b>solid spoonacular score of 66%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/crispy-baked-eggplant-fries-with-marinara-dipping-sauce-aka-eggplant-parmesan-fries-249194\">Crispy Baked Eggplant Fries with Marinara Dipping Sauce (akan Eggplant Parmesan Fries!)</a>, <a href=\"https://spoonacular.com/recipes/sunnys-beer-battered-eggplant-fries-with-nunya-business-tzatziki-dip-772904\">Sunny's Beer-Battered Eggplant Fries with Nunya Business Tzatziki Dip</a>, and <a href=\"https://spoonacular.com/recipes/eggplant-fries-with-marinara-sauce-677261\">Eggplant Fries with Marinara Sauce</a>.",
        cuisines: [
          'Mediterranean',
          'European',
          'Greek'
        ],
        dishTypes: [
          'side dish'
        ],
        diets: [],
        occasions: [],
        instructions: '-Preheat oven to 450F\n-Mix salt, garlic powder, italian seasonings, and paprika in a bowl.\n- In another bowl, mix yogurt & egg together.\n-First place the eggplant strips into egg/yogurt mixture then coat them in flour mixture evenly.\n-Place them in a parchment paper or greased baking pan and bake for 10-15 minutes rotating once and until slightly brown.\nFor the tzatziki sauce:\n- In a food processor, put cucumber (seeded, peeled), yogurt, dill, lemon juice, garlic cloves, salt together until smooth.',
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: '-Preheat oven to 450F',
                ingredients: [],
                equipment: [
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg',
                    temperature: {
                      number: 450.0,
                      unit: 'Fahrenheit'
                    }
                  }
                ]
              },
              {
                number: 2,
                step: 'Mix salt, garlic powder, italian seasonings, and paprika in a bowl.',
                ingredients: [
                  {
                    id: 1022027,
                    name: 'italian seasoning',
                    localizedName: 'italian seasoning',
                    image: 'dried-herbs.png'
                  },
                  {
                    id: 1022020,
                    name: 'garlic powder',
                    localizedName: 'garlic powder',
                    image: 'garlic-powder.png'
                  },
                  {
                    id: 2028,
                    name: 'paprika',
                    localizedName: 'paprika',
                    image: 'paprika.jpg'
                  },
                  {
                    id: 2047,
                    name: 'salt',
                    localizedName: 'salt',
                    image: 'salt.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404783,
                    name: 'bowl',
                    localizedName: 'bowl',
                    image: 'bowl.jpg'
                  }
                ]
              },
              {
                number: 3,
                step: '- In another bowl, mix yogurt & egg together.',
                ingredients: [
                  {
                    id: 1116,
                    name: 'yogurt',
                    localizedName: 'yogurt',
                    image: 'plain-yogurt.jpg'
                  },
                  {
                    id: 1123,
                    name: 'egg',
                    localizedName: 'egg',
                    image: 'egg.png'
                  }
                ],
                equipment: [
                  {
                    id: 404783,
                    name: 'bowl',
                    localizedName: 'bowl',
                    image: 'bowl.jpg'
                  }
                ]
              },
              {
                number: 4,
                step: '-First place the eggplant strips into egg/yogurt mixture then coat them in flour mixture evenly.',
                ingredients: [
                  {
                    id: 11209,
                    name: 'eggplant',
                    localizedName: 'eggplant',
                    image: 'eggplant.png'
                  },
                  {
                    id: 1116,
                    name: 'yogurt',
                    localizedName: 'yogurt',
                    image: 'plain-yogurt.jpg'
                  },
                  {
                    id: 20081,
                    name: 'all purpose flour',
                    localizedName: 'all purpose flour',
                    image: 'flour.png'
                  },
                  {
                    id: 1123,
                    name: 'egg',
                    localizedName: 'egg',
                    image: 'egg.png'
                  }
                ],
                equipment: []
              },
              {
                number: 5,
                step: 'Place them in a parchment paper or greased baking pan and bake for 10-15 minutes rotating once and until slightly brown.',
                ingredients: [],
                equipment: [
                  {
                    id: 404770,
                    name: 'baking paper',
                    localizedName: 'baking paper',
                    image: 'baking-paper.jpg'
                  },
                  {
                    id: 404646,
                    name: 'baking pan',
                    localizedName: 'baking pan',
                    image: 'roasting-pan.jpg'
                  },
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  }
                ],
                length: {
                  number: 15,
                  unit: 'minutes'
                }
              }
            ]
          },
          {
            name: 'For the tzatziki sauce',
            steps: [
              {
                number: 1,
                step: '- In a food processor, put cucumber (seeded, peeled), yogurt, dill, lemon juice, garlic cloves, salt together until smooth.',
                ingredients: [
                  {
                    id: 10211215,
                    name: 'whole garlic cloves',
                    localizedName: 'whole garlic cloves',
                    image: 'garlic.jpg'
                  },
                  {
                    id: 9152,
                    name: 'lemon juice',
                    localizedName: 'lemon juice',
                    image: 'lemon-juice.jpg'
                  },
                  {
                    id: 11206,
                    name: 'cucumber',
                    localizedName: 'cucumber',
                    image: 'cucumber.jpg'
                  },
                  {
                    id: 1116,
                    name: 'yogurt',
                    localizedName: 'yogurt',
                    image: 'plain-yogurt.jpg'
                  },
                  {
                    id: 2045,
                    name: 'dill',
                    localizedName: 'dill',
                    image: 'dill.jpg'
                  },
                  {
                    id: 2047,
                    name: 'salt',
                    localizedName: 'salt',
                    image: 'salt.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404771,
                    name: 'food processor',
                    localizedName: 'food processor',
                    image: 'food-processor.png'
                  }
                ]
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/eggplant-fries-with-tzatziki-sauce-642287'
      },
      {
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 14,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 7,
        spoonacularScore: 22.0,
        healthScore: 2.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 120.16,
        extendedIngredients: [
          {
            id: 19912,
            aisle: 'Ethnic Foods;Health Foods',
            image: 'agave.png',
            consistency: 'liquid',
            name: 'agave',
            nameClean: 'agave',
            original: '3 1/2 tablespoons of agave',
            originalName: 'agave',
            amount: 3.5,
            unit: 'tablespoons',
            meta: [],
            measures: {
              us: {
                amount: 3.5,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              },
              metric: {
                amount: 3.5,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              }
            }
          },
          {
            id: 19912,
            aisle: 'Ethnic Foods;Health Foods',
            image: 'agave.png',
            consistency: 'liquid',
            name: 'agave nectar',
            nameClean: 'agave',
            original: '1/4 cup agave nectar (again, not needed if your fruit is sweet)',
            originalName: 'agave nectar (again, not needed if your fruit is sweet)',
            amount: 0.25,
            unit: 'cup',
            meta: [
              'sweet',
              '(again, not needed if your fruit is )'
            ],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 59.147,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 93740,
            aisle: 'Gluten Free;Health Foods',
            image: 'almond-meal-or-almond-flour.jpg',
            consistency: 'solid',
            name: 'almond flour',
            nameClean: 'almond meal',
            original: '1/2 cup almond flour',
            originalName: 'almond flour',
            amount: 0.5,
            unit: 'cup',
            meta: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 118.294,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 1009054,
            aisle: 'Produce',
            image: 'berries-mixed.jpg',
            consistency: 'solid',
            name: 'berries',
            nameClean: 'berries',
            original: '8 ounces frozen package of mixed berries, thawed',
            originalName: 'frozen package of mixed berries, thawed',
            amount: 8.0,
            unit: 'ounces',
            meta: [
              'mixed',
              'frozen',
              'thawed'
            ],
            measures: {
              us: {
                amount: 8.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 226.796,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 1001,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'butter-sliced.jpg',
            consistency: 'solid',
            name: 'butter',
            nameClean: 'butter',
            original: '2 sticks of very cold butter (I freeze mine), cut into cubes',
            originalName: 'very cold butter (I freeze mine), cut into cubes',
            amount: 2.0,
            unit: 'sticks',
            meta: [
              'very cold',
              'cut into cubes',
              '(I freeze mine)'
            ],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'sticks',
                unitLong: 'sticks'
              },
              metric: {
                amount: 2.0,
                unitShort: 'sticks',
                unitLong: 'sticks'
              }
            }
          },
          {
            id: 9070,
            aisle: 'Produce',
            image: 'cherries.jpg',
            consistency: 'solid',
            name: 'cherries',
            nameClean: 'cherries',
            original: '16 ounces frozen packages of cherries, thawed',
            originalName: 'frozen packages of cherries, thawed',
            amount: 16.0,
            unit: 'ounces',
            meta: [
              'frozen',
              'thawed'
            ],
            measures: {
              us: {
                amount: 16.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 453.592,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 93747,
            aisle: 'Gluten Free;Health Foods;Baking',
            image: 'coconut-flour-or-other-gluten-free-flour.jpg',
            consistency: 'solid',
            name: 'coconut flour',
            nameClean: 'coconut flour',
            original: '1/4 cup coconut flour, sifted',
            originalName: 'coconut flour, sifted',
            amount: 0.25,
            unit: 'cup',
            meta: [
              'sifted'
            ],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 59.147,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 20081,
            aisle: 'Baking',
            image: 'flour.png',
            consistency: 'solid',
            name: 'flour',
            nameClean: 'wheat flour',
            original: '1 cup all-purpose flour',
            originalName: 'all-purpose flour',
            amount: 1.0,
            unit: 'cup',
            meta: [
              'all-purpose'
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'cup',
                unitLong: 'cup'
              },
              metric: {
                amount: 236.588,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 9152,
            aisle: 'Produce',
            image: 'lemon-juice.jpg',
            consistency: 'liquid',
            name: 'lemon juice',
            nameClean: 'lemon juice',
            original: '3 tablespoons freshly squeezed lemon juice',
            originalName: 'freshly squeezed lemon juice',
            amount: 3.0,
            unit: 'tablespoons',
            meta: [
              'freshly squeezed'
            ],
            measures: {
              us: {
                amount: 3.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              },
              metric: {
                amount: 3.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              }
            }
          },
          {
            id: 12511111,
            aisle: 'Baking',
            image: 'extract.png',
            consistency: 'liquid',
            name: 'orange extract',
            nameClean: 'orange extract',
            original: '1/2 teaspoon fiore di Sicilia or orange extract',
            originalName: 'fiore di Sicilia or orange extract',
            amount: 0.5,
            unit: 'teaspoon',
            meta: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 93696,
            aisle: 'Ethnic Foods;Health Foods;Baking',
            image: 'white-powder.jpg',
            consistency: 'solid',
            name: 'tapioca flour',
            nameClean: 'tapioca starch',
            original: '3 tablespoons tapioca flour (or corn starch or arrowroot)',
            originalName: 'tapioca flour (or corn starch or arrowroot)',
            amount: 3.0,
            unit: 'tablespoons',
            meta: [
              '(or corn starch or arrowroot)'
            ],
            measures: {
              us: {
                amount: 3.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              },
              metric: {
                amount: 3.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              }
            }
          },
          {
            id: 10020080,
            aisle: 'Baking',
            image: 'flour.png',
            consistency: 'solid',
            name: 'whole wheat pastry flour',
            nameClean: 'pastry flour',
            original: '3/4 cup whole wheat pastry flour',
            originalName: 'whole wheat pastry flour',
            amount: 0.75,
            unit: 'cup',
            meta: [
              'whole wheat'
            ],
            measures: {
              us: {
                amount: 0.75,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 177.441,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          }
        ],
        id: 637794,
        title: 'Cherry-Berry Pie With Agave Nectar All-Butter Crust',
        readyInMinutes: 180,
        servings: 10,
        sourceUrl: 'http://www.foodista.com/recipe/KPLBL8TL/cherry-berry-pie-with-agave-nectar-all-butter-crust',
        image: 'https://spoonacular.com/recipeImages/637794-556x370.jpg',
        imageType: 'jpg',
        summary: 'Need a <b>vegetarian dessert</b>? Cherry-Berry Pie With Agave Nectar All-Butter Crust could be an excellent recipe to try. One serving contains <b>371 calories</b>, <b>5g of protein</b>, and <b>22g of fat</b>. This recipe serves 10 and costs $1.2 per serving. 7 people have made this recipe and would make it again. A mixture of pastry flour, lemon juice, flour, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes approximately <b>3 hours</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 23%</b>. This score is not so awesome. Try <a href="https://spoonacular.com/recipes/homemade-agave-nectar-ketchup-82572">Homemade Agave Nectar Ketchup</a>, <a href="https://spoonacular.com/recipes/seeded-agave-nectar-mustard-16866">Seeded Agave Nectar Mustard</a>, and <a href="https://spoonacular.com/recipes/blended-agave-nectar-margarita-145746">Blended Agave Nectar Margarita</a> for similar recipes.',
        cuisines: [],
        dishTypes: [
          'side dish'
        ],
        diets: [
          'lacto ovo vegetarian'
        ],
        occasions: [],
        instructions: '<ol><li>Make the crust:</li><li>Pulse the dry ingredients 5-6 times.</li><li>Add 2 sticks of very cold butter (I freeze mine), cut into cubes. Pulse until the ingredients resemble very coarse meal.</li><li>Adding the agave nectar and fiore di Sicilia flavoring (can substitute orange extract) one tablespoon at a time.</li><li>Watch to see the dough just comes together.</li><li>Divide the dough into two parts, one larger than the other.</li><li>Form each into a flat, round shape.</li><li>Wrap each disk in plastic and refrigerate for at least 2 hours.</li><li>While the dough is chilling, make the filling.</li><li>In a large bowl, combine all the filling ingredients.</li><li>Mix until well incorporated (it will be very soupy).</li><li>Take the dough out of the fridge.</li><li>Let it warm enough to be able to roll it out.</li><li>Roll out the crust to fit it to your pie dish.</li><li>You may need to patch some, but none will show to your eaters.</li><li>Wrap the pie dish in plastic and chill for 30 minutes.</li><li>Pour the filling into the crust.</li><li>Again, wrap the pie in plastic and chill.</li><li>Roll out the other dough disk.</li><li>Use your favorite cookie cutters to cut pieces for the top crust.</li><li>Take the pie out of the fridge and decorate the top.</li><li>Just remember to leave spots for steam to escape.</li><li>Cover the edges with foil and bake at 325 degrees F for 40 minutes.</li><li>Remove foil and bake until golden brown top and the filling is bubbling.</li><li>Let cool and enjoy!</li></ol>',
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: 'Make the crust:Pulse the dry ingredients 5-6 times.',
                ingredients: [
                  {
                    id: 0,
                    name: 'crust',
                    localizedName: 'crust',
                    image: ''
                  }
                ],
                equipment: []
              },
              {
                number: 2,
                step: 'Add 2 sticks of very cold butter (I freeze mine), cut into cubes. Pulse until the ingredients resemble very coarse meal.',
                ingredients: [
                  {
                    id: 1001,
                    name: 'butter',
                    localizedName: 'butter',
                    image: 'butter-sliced.jpg'
                  }
                ],
                equipment: []
              },
              {
                number: 3,
                step: 'Adding the agave nectar and fiore di Sicilia flavoring (can substitute orange extract) one tablespoon at a time.Watch to see the dough just comes together.Divide the dough into two parts, one larger than the other.Form each into a flat, round shape.Wrap each disk in plastic and refrigerate for at least 2 hours.While the dough is chilling, make the filling.In a large bowl, combine all the filling ingredients.',
                ingredients: [
                  {
                    id: 12511111,
                    name: 'orange extract',
                    localizedName: 'orange extract',
                    image: 'extract.png'
                  },
                  {
                    id: 19912,
                    name: 'agave',
                    localizedName: 'agave',
                    image: 'agave.png'
                  },
                  {
                    id: 0,
                    name: 'dough',
                    localizedName: 'dough',
                    image: 'pizza-dough'
                  },
                  {
                    id: 10018364,
                    name: 'wrap',
                    localizedName: 'wrap',
                    image: 'flour-tortilla.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404783,
                    name: 'bowl',
                    localizedName: 'bowl',
                    image: 'bowl.jpg'
                  }
                ],
                length: {
                  number: 120,
                  unit: 'minutes'
                }
              },
              {
                number: 4,
                step: 'Mix until well incorporated (it will be very soupy).Take the dough out of the fridge.',
                ingredients: [
                  {
                    id: 0,
                    name: 'dough',
                    localizedName: 'dough',
                    image: 'pizza-dough'
                  }
                ],
                equipment: []
              },
              {
                number: 5,
                step: 'Let it warm enough to be able to roll it out.',
                ingredients: [
                  {
                    id: 0,
                    name: 'roll',
                    localizedName: 'roll',
                    image: 'dinner-yeast-rolls.jpg'
                  }
                ],
                equipment: []
              },
              {
                number: 6,
                step: 'Roll out the crust to fit it to your pie dish.You may need to patch some, but none will show to your eaters.Wrap the pie dish in plastic and chill for 30 minutes.',
                ingredients: [
                  {
                    id: 0,
                    name: 'crust',
                    localizedName: 'crust',
                    image: ''
                  },
                  {
                    id: 0,
                    name: 'roll',
                    localizedName: 'roll',
                    image: 'dinner-yeast-rolls.jpg'
                  },
                  {
                    id: 10018364,
                    name: 'wrap',
                    localizedName: 'wrap',
                    image: 'flour-tortilla.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 405915,
                    name: 'pie form',
                    localizedName: 'pie form',
                    image: 'pie-pan.png'
                  }
                ],
                length: {
                  number: 30,
                  unit: 'minutes'
                }
              },
              {
                number: 7,
                step: 'Pour the filling into the crust.Again, wrap the pie in plastic and chill.',
                ingredients: [
                  {
                    id: 0,
                    name: 'crust',
                    localizedName: 'crust',
                    image: ''
                  },
                  {
                    id: 10018364,
                    name: 'wrap',
                    localizedName: 'wrap',
                    image: 'flour-tortilla.jpg'
                  }
                ],
                equipment: []
              },
              {
                number: 8,
                step: 'Roll out the other dough disk.Use your favorite cookie cutters to cut pieces for the top crust.Take the pie out of the fridge and decorate the top.Just remember to leave spots for steam to escape.Cover the edges with foil and bake at 325 degrees F for 40 minutes.',
                ingredients: [
                  {
                    id: 10118192,
                    name: 'cookies',
                    localizedName: 'cookies',
                    image: 'shortbread-cookies.jpg'
                  },
                  {
                    id: 0,
                    name: 'crust',
                    localizedName: 'crust',
                    image: ''
                  },
                  {
                    id: 0,
                    name: 'dough',
                    localizedName: 'dough',
                    image: 'pizza-dough'
                  },
                  {
                    id: 0,
                    name: 'roll',
                    localizedName: 'roll',
                    image: 'dinner-yeast-rolls.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 221429,
                    name: 'cookie cutter',
                    localizedName: 'cookie cutter',
                    image: 'cookie-cutters.jpg'
                  },
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg',
                    temperature: {
                      number: 325.0,
                      unit: 'Fahrenheit'
                    }
                  },
                  {
                    id: 404765,
                    name: 'aluminum foil',
                    localizedName: 'aluminum foil',
                    image: 'aluminum-foil.png'
                  }
                ],
                length: {
                  number: 40,
                  unit: 'minutes'
                }
              },
              {
                number: 9,
                step: 'Remove foil and bake until golden brown top and the filling is bubbling.',
                ingredients: [],
                equipment: [
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  },
                  {
                    id: 404765,
                    name: 'aluminum foil',
                    localizedName: 'aluminum foil',
                    image: 'aluminum-foil.png'
                  }
                ]
              },
              {
                number: 10,
                step: 'Let cool and enjoy!',
                ingredients: [],
                equipment: []
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/cherry-berry-pie-with-agave-nectar-all-butter-crust-637794'
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 17,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 14,
        spoonacularScore: 16.0,
        healthScore: 1.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 53.59,
        extendedIngredients: [
          {
            id: 20081,
            aisle: 'Baking',
            image: 'flour.png',
            consistency: 'solid',
            name: 'all purpose flour',
            nameClean: 'wheat flour',
            original: '1 cup all purpose flour',
            originalName: 'all purpose flour',
            amount: 1.0,
            unit: 'cup',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'cup',
                unitLong: 'cup'
              },
              metric: {
                amount: 236.588,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 18371,
            aisle: 'Baking',
            image: 'white-powder.jpg',
            consistency: 'solid',
            name: 'baking powder',
            nameClean: 'low sodium baking powder',
            original: '2 teaspoons baking powder',
            originalName: 'baking powder',
            amount: 2.0,
            unit: 'teaspoons',
            meta: [],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 2.0,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 1001,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'butter-sliced.jpg',
            consistency: 'solid',
            name: 'butter',
            nameClean: 'butter',
            original: '1/4 cup butter',
            originalName: 'butter',
            amount: 0.25,
            unit: 'cup',
            meta: [],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 59.147,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 1001,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'butter-sliced.jpg',
            consistency: 'solid',
            name: 'butter',
            nameClean: 'butter',
            original: '2 tablespoons butter',
            originalName: 'butter',
            amount: 2.0,
            unit: 'tablespoons',
            meta: [],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              },
              metric: {
                amount: 2.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps'
              }
            }
          },
          {
            id: 19081,
            aisle: 'Sweet Snacks',
            image: 'milk-chocolate.jpg',
            consistency: 'solid',
            name: 'chocolate',
            nameClean: 'milk chocolate',
            original: '3 1/2 ounces 80%% dark Belgium chocolate (cut into small pieces)',
            originalName: '80%% dark Belgium chocolate (cut into small pieces)',
            amount: 3.5,
            unit: 'ounces',
            meta: [
              'dark',
              'cut into small pieces)'
            ],
            measures: {
              us: {
                amount: 3.5,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 99.223,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 19165,
            aisle: 'Baking',
            image: 'cocoa-powder.png',
            consistency: 'solid',
            name: 'cocoa',
            nameClean: 'hersheys cocoa',
            original: '1/4 cup dark cocoa',
            originalName: 'dark cocoa',
            amount: 0.25,
            unit: 'cup',
            meta: [
              'dark'
            ],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 59.147,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 1053,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'fluid-cream.jpg',
            consistency: 'liquid',
            name: 'cream',
            nameClean: 'cream',
            original: '1/4 cup or more 35%% cream',
            originalName: 'or more 35%% cream',
            amount: 0.25,
            unit: 'cup',
            meta: [],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 59.147,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 1053,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'fluid-cream.jpg',
            consistency: 'liquid',
            name: 'cream',
            nameClean: 'cream',
            original: '1/2 cup 35%% cream',
            originalName: '35%% cream',
            amount: 0.5,
            unit: 'cup',
            meta: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 118.294,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 18373,
            aisle: 'Spices and Seasonings;Baking',
            image: 'white-powder.jpg',
            consistency: 'solid',
            name: 'cream of tartar',
            nameClean: 'cream of tartar',
            original: '1/4 teaspoon cream of tartar',
            originalName: 'cream of tartar',
            amount: 0.25,
            unit: 'teaspoon',
            meta: [],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 10019165,
            aisle: 'Baking',
            image: 'dutch-process-cocoa-powder.png',
            consistency: 'solid',
            name: 'dutch process cocoa',
            nameClean: 'unsweetened dutch processed cocoa powder',
            original: '3/4 dark Dutch cocoa',
            originalName: 'dark Dutch cocoa',
            amount: 0.75,
            unit: '',
            meta: [
              'dark'
            ],
            measures: {
              us: {
                amount: 0.75,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 0.75,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 1124,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'egg-white.jpg',
            consistency: 'solid',
            name: 'egg whites',
            nameClean: 'egg whites',
            original: '6 egg whites',
            originalName: 'egg whites',
            amount: 6.0,
            unit: '',
            meta: [],
            measures: {
              us: {
                amount: 6.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 6.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 1125,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'egg-yolk.jpg',
            consistency: 'solid',
            name: 'egg yolks',
            nameClean: 'egg yolk',
            original: '5 egg yolks beaten',
            originalName: 'egg yolks beaten',
            amount: 5.0,
            unit: '',
            meta: [
              'beaten'
            ],
            measures: {
              us: {
                amount: 5.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 5.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 19336,
            aisle: 'Baking',
            image: 'powdered-sugar.jpg',
            consistency: 'solid',
            name: 'icing sugar',
            nameClean: 'powdered sugar',
            original: '2 cups icing sugar',
            originalName: 'icing sugar',
            amount: 2.0,
            unit: 'cups',
            meta: [],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 473.176,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 2047,
            aisle: 'Spices and Seasonings',
            image: 'salt.jpg',
            consistency: 'solid',
            name: 'salt',
            nameClean: 'salt',
            original: '1/2 teaspoon salt',
            originalName: 'salt',
            amount: 0.5,
            unit: 'teaspoon',
            meta: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 19335,
            aisle: 'Baking',
            image: 'sugar-in-bowl.png',
            consistency: 'solid',
            name: 'sugar',
            nameClean: 'sugar',
            original: '1 cup sugar',
            originalName: 'sugar',
            amount: 1.0,
            unit: 'cup',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'cup',
                unitLong: 'cup'
              },
              metric: {
                amount: 236.588,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 19335,
            aisle: 'Baking',
            image: 'sugar-in-bowl.png',
            consistency: 'solid',
            name: 'sugar',
            nameClean: 'sugar',
            original: 'cup sugar',
            originalName: 'sugar',
            amount: 1.0,
            unit: 'cup',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'cup',
                unitLong: 'cup'
              },
              metric: {
                amount: 236.588,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 2050,
            aisle: 'Baking',
            image: 'vanilla-extract.jpg',
            consistency: 'liquid',
            name: 'vanilla',
            nameClean: 'vanilla extract',
            original: '1/2 teaspoon vanilla',
            originalName: 'vanilla',
            amount: 0.5,
            unit: 'teaspoon',
            meta: [],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              },
              metric: {
                amount: 0.5,
                unitShort: 'tsps',
                unitLong: 'teaspoons'
              }
            }
          },
          {
            id: 4513,
            aisle: null,
            image: null,
            consistency: null,
            name: 'vegetable oil',
            nameClean: null,
            original: 'cup vegetable oil',
            originalName: 'vegetable oil',
            amount: 1.0,
            unit: 'cup',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'cup',
                unitLong: 'cup'
              },
              metric: {
                amount: 236.588,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 14412,
            aisle: 'Beverages',
            image: 'water.png',
            consistency: 'liquid',
            name: 'water',
            nameClean: 'water',
            original: '2/3 cup boiling water',
            originalName: 'boiling water',
            amount: 0.6666666666666666,
            unit: 'cup',
            meta: [
              'boiling'
            ],
            measures: {
              us: {
                amount: 0.667,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 157.725,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          }
        ],
        id: 638797,
        title: "Chocoholic's Deep Dark Dream Chiffon Cake",
        readyInMinutes: 45,
        servings: 16,
        sourceUrl: 'http://www.foodista.com/recipe/PVY6548N/chocoholics-deep-dark-dream-chiffon-cake',
        image: 'https://spoonacular.com/recipeImages/638797-556x370.jpg',
        imageType: 'jpg',
        summary: "Chocoholic's Deep Dark Dream Chiffon Cake might be just the dessert you are searching for. One serving contains <b>331 calories</b>, <b>4g of protein</b>, and <b>14g of fat</b>. This recipe serves 16 and costs 54 cents per serving. A couple people made this recipe, and 14 would say it hit the spot. Head to the store and pick up all purpose flour, 0%% belgium chocolate, cup vegetable oil, and a few other things to make it today. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 17%</b>. This score is not so awesome. Try <a href=\"https://spoonacular.com/recipes/dark-chocolate-chiffon-cake-37486\">Dark Chocolate Chiffon Cake</a>, <a href=\"https://spoonacular.com/recipes/deep-dark-ganache-cake-468584\">Deep & Dark Ganache Cake</a>, and <a href=\"https://spoonacular.com/recipes/deep-dark-chocolate-cake-463666\">Deep Dark Chocolate Cake</a> for similar recipes.",
        cuisines: [],
        dishTypes: [
          'antipasti',
          'starter',
          'snack',
          'appetizer',
          'antipasto',
          "hor d'oeuvre"
        ],
        diets: [],
        occasions: [],
        instructions: '<ol><li>Cake:</li><li>In a bowl add the cocoa and pour in the boiling water. Stir to combine and let cool.</li><li>In a large mixing bowl combine the flour, 1 cup sugar, baking powder and salt.</li><li>In a separate bowl add the 6 egg whites and cream of tartar. With an electric mixer beat the egg whites until soft peaks form, gradually add the 1/3 cup sugar and beat until firm but not dry.</li><li>Make a well in the dry ingredients.</li><li>Add the oil, egg yolks, vanilla and cooled cocoa. Beat until smooth.</li><li>Mix in about a 1/4 of the egg whites to loosen the batter and then fold in the remainder of the egg whites.</li><li>Pour into 2-8 inch prepared cake pans and bake at a preheated 350 F oven for 30-35 minutes. The cake is done when a wooden skewer inserted in the center comes out clean.</li><li>Filling:</li><li>With and electric mixer, blend the sugar, cocoa and butter, add the vanilla and cream. Mix and add more cream to obtain the desired texture.</li><li>Topping:</li><li>In a double boiler or microwave bring the cream to just below the boiling point. Add the chocolate pieces and butter, and with a wooden spoon stir to blend. Allow to cool, this will thicken the ganache gor the topping.</li><li>Assembly:</li><li>With a long knife, slice the cakes in the center to  obtain 4 layers in all.  Sprinkle some Kirsch or other favourite liqueur on the first layer of cake and spread a thin layer of the filling. Place raspberry halves on the filling and place a second layer of cake on top. Continue in the same manner until the remaining 2 layer are filled, leaving the top layer to be iced with the ganache topping.</li></ol>',
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: 'Cake:In a bowl add the cocoa and pour in the boiling water. Stir to combine and let cool.In a large mixing bowl combine the flour, 1 cup sugar, baking powder and salt.In a separate bowl add the 6 egg whites and cream of tartar. With an electric mixer beat the egg whites until soft peaks form, gradually add the 1/3 cup sugar and beat until firm but not dry.Make a well in the dry ingredients.',
                ingredients: [
                  {
                    id: 18373,
                    name: 'cream of tartar',
                    localizedName: 'cream of tartar',
                    image: 'white-powder.jpg'
                  },
                  {
                    id: 18369,
                    name: 'baking powder',
                    localizedName: 'baking powder',
                    image: 'white-powder.jpg'
                  },
                  {
                    id: 1124,
                    name: 'egg whites',
                    localizedName: 'egg whites',
                    image: 'egg-white.jpg'
                  },
                  {
                    id: 19165,
                    name: 'cocoa powder',
                    localizedName: 'cocoa powder',
                    image: 'cocoa-powder.png'
                  },
                  {
                    id: 20081,
                    name: 'all purpose flour',
                    localizedName: 'all purpose flour',
                    image: 'flour.png'
                  },
                  {
                    id: 19335,
                    name: 'sugar',
                    localizedName: 'sugar',
                    image: 'sugar-in-bowl.png'
                  },
                  {
                    id: 14412,
                    name: 'water',
                    localizedName: 'water',
                    image: 'water.png'
                  },
                  {
                    id: 2047,
                    name: 'salt',
                    localizedName: 'salt',
                    image: 'salt.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404628,
                    name: 'hand mixer',
                    localizedName: 'hand mixer',
                    image: 'hand-mixer.png'
                  },
                  {
                    id: 405907,
                    name: 'mixing bowl',
                    localizedName: 'mixing bowl',
                    image: 'mixing-bowl.jpg'
                  }
                ]
              },
              {
                number: 2,
                step: 'Add the oil, egg yolks, vanilla and cooled cocoa. Beat until smooth.',
                ingredients: [
                  {
                    id: 1125,
                    name: 'egg yolk',
                    localizedName: 'egg yolk',
                    image: 'egg-yolk.jpg'
                  },
                  {
                    id: 1052050,
                    name: 'vanilla',
                    localizedName: 'vanilla',
                    image: 'vanilla.jpg'
                  },
                  {
                    id: 19165,
                    name: 'cocoa powder',
                    localizedName: 'cocoa powder',
                    image: 'cocoa-powder.png'
                  },
                  {
                    id: 4582,
                    name: 'cooking oil',
                    localizedName: 'cooking oil',
                    image: 'vegetable-oil.jpg'
                  }
                ],
                equipment: []
              },
              {
                number: 3,
                step: 'Mix in about a 1/4 of the egg whites to loosen the batter and then fold in the remainder of the egg whites.',
                ingredients: [
                  {
                    id: 1124,
                    name: 'egg whites',
                    localizedName: 'egg whites',
                    image: 'egg-white.jpg'
                  }
                ],
                equipment: []
              },
              {
                number: 4,
                step: 'Pour into 2-8 inch prepared cake pans and bake at a preheated 350 F oven for 30-35 minutes. The cake is done when a wooden skewer inserted in the center comes out clean.Filling:With and electric mixer, blend the sugar, cocoa and butter, add the vanilla and cream.',
                ingredients: [
                  {
                    id: 1052050,
                    name: 'vanilla',
                    localizedName: 'vanilla',
                    image: 'vanilla.jpg'
                  },
                  {
                    id: 1001,
                    name: 'butter',
                    localizedName: 'butter',
                    image: 'butter-sliced.jpg'
                  },
                  {
                    id: 19165,
                    name: 'cocoa powder',
                    localizedName: 'cocoa powder',
                    image: 'cocoa-powder.png'
                  },
                  {
                    id: 1053,
                    name: 'cream',
                    localizedName: 'cream',
                    image: 'fluid-cream.jpg'
                  },
                  {
                    id: 19335,
                    name: 'sugar',
                    localizedName: 'sugar',
                    image: 'sugar-in-bowl.png'
                  }
                ],
                equipment: [
                  {
                    id: 404628,
                    name: 'hand mixer',
                    localizedName: 'hand mixer',
                    image: 'hand-mixer.png'
                  },
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg',
                    temperature: {
                      number: 350.0,
                      unit: 'Fahrenheit'
                    }
                  },
                  {
                    id: 3065,
                    name: 'skewers',
                    localizedName: 'skewers',
                    image: 'wooden-skewers.jpg'
                  }
                ],
                length: {
                  number: 35,
                  unit: 'minutes'
                }
              },
              {
                number: 5,
                step: 'Mix and add more cream to obtain the desired texture.Topping:In a double boiler or microwave bring the cream to just below the boiling point.',
                ingredients: [
                  {
                    id: 1053,
                    name: 'cream',
                    localizedName: 'cream',
                    image: 'fluid-cream.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404699,
                    name: 'double boiler',
                    localizedName: 'double boiler',
                    image: 'double-boiler.jpg'
                  },
                  {
                    id: 404762,
                    name: 'microwave',
                    localizedName: 'microwave',
                    image: 'microwave.jpg'
                  }
                ]
              },
              {
                number: 6,
                step: 'Add the chocolate pieces and butter, and with a wooden spoon stir to blend. Allow to cool, this will thicken the ganache gor the topping.Assembly:With a long knife, slice the cakes in the center to  obtain 4 layers in all.',
                ingredients: [
                  {
                    id: 19081,
                    name: 'chocolate',
                    localizedName: 'chocolate',
                    image: 'milk-chocolate.jpg'
                  },
                  {
                    id: 1001,
                    name: 'butter',
                    localizedName: 'butter',
                    image: 'butter-sliced.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 404732,
                    name: 'wooden spoon',
                    localizedName: 'wooden spoon',
                    image: 'wooden-spoon.jpg'
                  },
                  {
                    id: 404745,
                    name: 'knife',
                    localizedName: 'knife',
                    image: 'chefs-knife.jpg'
                  }
                ]
              },
              {
                number: 7,
                step: 'Sprinkle some Kirsch or other favourite liqueur on the first layer of cake and spread a thin layer of the filling.',
                ingredients: [
                  {
                    id: 0,
                    name: 'liqueur',
                    localizedName: 'liqueur',
                    image: 'rum-dark.jpg'
                  },
                  {
                    id: 10614037,
                    name: 'kirsch',
                    localizedName: 'kirsch',
                    image: 'white-rum.jpg'
                  },
                  {
                    id: 0,
                    name: 'spread',
                    localizedName: 'spread',
                    image: ''
                  }
                ],
                equipment: []
              },
              {
                number: 8,
                step: 'Place raspberry halves on the filling and place a second layer of cake on top. Continue in the same manner until the remaining 2 layer are filled, leaving the top layer to be iced with the ganache topping.',
                ingredients: [
                  {
                    id: 9302,
                    name: 'raspberries',
                    localizedName: 'raspberries',
                    image: 'raspberries.jpg'
                  }
                ],
                equipment: []
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/chocoholics-deep-dark-dream-chiffon-cake-638797'
      },
      {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 18,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 9,
        spoonacularScore: 77.0,
        healthScore: 25.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 261.76,
        extendedIngredients: [
          {
            id: 18079,
            aisle: 'Pasta and Rice',
            image: 'breadcrumbs.jpg',
            consistency: 'solid',
            name: 'bread crumbs',
            nameClean: 'breadcrumbs',
            original: '2 cups Italian style bread crumbs',
            originalName: 'Italian style bread crumbs',
            amount: 2.0,
            unit: 'cups',
            meta: [
              'italian'
            ],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 473.176,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 1025062,
            aisle: 'Meat',
            image: 'chicken-breasts.png',
            consistency: 'solid',
            name: 'chicken cutlets',
            nameClean: 'chicken cutlet',
            original: '8 (3-ounces each) chicken cutlets',
            originalName: 'each) chicken cutlets',
            amount: 24.0,
            unit: 'ounces',
            meta: [],
            measures: {
              us: {
                amount: 24.0,
                unitShort: 'oz',
                unitLong: 'ounces'
              },
              metric: {
                amount: 680.389,
                unitShort: 'g',
                unitLong: 'grams'
              }
            }
          },
          {
            id: 1123,
            aisle: 'Milk, Eggs, Other Dairy',
            image: 'egg.png',
            consistency: 'solid',
            name: 'eggs',
            nameClean: 'egg',
            original: '3 eggs beaten',
            originalName: 'eggs beaten',
            amount: 3.0,
            unit: '',
            meta: [
              'beaten'
            ],
            measures: {
              us: {
                amount: 3.0,
                unitShort: '',
                unitLong: ''
              },
              metric: {
                amount: 3.0,
                unitShort: '',
                unitLong: ''
              }
            }
          },
          {
            id: 20081,
            aisle: 'Baking',
            image: 'flour.png',
            consistency: 'solid',
            name: 'flour',
            nameClean: 'wheat flour',
            original: '1 cup Flour',
            originalName: 'Flour',
            amount: 1.0,
            unit: 'cup',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'cup',
                unitLong: 'cup'
              },
              metric: {
                amount: 236.588,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 1026,
            aisle: 'Cheese',
            image: 'mozzarella.png',
            consistency: 'solid',
            name: 'mozzarella cheese',
            nameClean: 'mozzarella',
            original: '4 cups mozzarella cheese (depending on how much cheese you like)',
            originalName: 'mozzarella cheese (depending on how much cheese you like)',
            amount: 4.0,
            unit: 'cups',
            meta: [
              '(depending on how much cheese you like)'
            ],
            measures: {
              us: {
                amount: 4.0,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 946.352,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 1033,
            aisle: 'Cheese',
            image: 'parmesan.jpg',
            consistency: 'solid',
            name: 'parmesan cheese',
            nameClean: 'parmesan',
            original: '1/2 cup Parmesan cheese (Grated fresh, not from a green can)',
            originalName: 'Parmesan cheese (Grated fresh, not from a green can)',
            amount: 0.5,
            unit: 'cup',
            meta: [
              'fresh',
              'green',
              'grated',
              '( , not from a can)'
            ],
            measures: {
              us: {
                amount: 0.5,
                unitShort: 'cups',
                unitLong: 'cups'
              },
              metric: {
                amount: 118.294,
                unitShort: 'ml',
                unitLong: 'milliliters'
              }
            }
          },
          {
            id: 4513,
            aisle: null,
            image: null,
            consistency: null,
            name: 'vegetable oil',
            nameClean: null,
            original: "vegetable oil for frying (you can bake them too, but they're better fried!)",
            originalName: "vegetable oil for frying (you bake them too, but they're better fried!)",
            amount: 1.0,
            unit: 'can',
            meta: [
              'for frying',
              "(you can bake them too, but they're better fried!)"
            ],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'can',
                unitLong: 'can'
              },
              metric: {
                amount: 1.0,
                unitShort: 'can',
                unitLong: 'can'
              }
            }
          }
        ],
        id: 634891,
        title: 'Best Chicken Parmesan',
        readyInMinutes: 45,
        servings: 6,
        sourceUrl: 'http://www.foodista.com/recipe/FZF4ZNP2/best-chicken-parmesan',
        image: 'https://spoonacular.com/recipeImages/634891-556x370.jpg',
        imageType: 'jpg',
        summary: 'The recipe Best Chicken Parmesan could satisfy your Mediterranean craving in roughly <b>45 minutes</b>. This recipe serves 6 and costs $3.51 per serving. One serving contains <b>690 calories</b>, <b>56g of protein</b>, and <b>26g of fat</b>. Only a few people made this recipe, and 9 would say it hit the spot. It works well as a main course. If you have style bread crumbs, chicken cutlets, vegetable oil, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 84%</b>. This score is great. Try <a href="https://spoonacular.com/recipes/easy-parmesan-chicken-fingers-and-parmesan-chicken-wraps-271729">Easy Parmesan Chicken Fingers and Parmesan Chicken Wraps</a>, <a href="https://spoonacular.com/recipes/chicken-chasseur-hunter-style-chicken-with-creamy-polenta-with-gruyere-and-parmesan-325816">Chicken Chasseur (Hunter-Style Chicken) with Creamy Polenta with Gruyere and Parmesan</a>, and <a href="https://spoonacular.com/recipes/parmesan-chicken-136333">Parmesan Chicken</a> for similar recipes.',
        cuisines: [
          'Mediterranean',
          'Italian',
          'European'
        ],
        dishTypes: [
          'lunch',
          'main course',
          'main dish',
          'dinner'
        ],
        diets: [],
        occasions: [],
        instructions: "<ol><li>Depending on how think your chicken breasts are, place them under plastic wrap and pound until thin. If you don't have a meat pounder, use a heavy pot of skillet. You can also fillet these with a knife.</li><li>Get 3 pie plates or containers. Put flour in one, beaten eggs in one and bread crumbs in one.</li><li>Dredge chicken breast in flour, then in the egg wash, and then the bread crumbs.</li><li>Fry cutlets in vegetable oil over med heat. Fry until golden brown.</li><li>Spread a little marinara on the bottom of a 13x9 baking dish.</li><li>Make a layer of chicken. Add more marinara. Use most of the first quart. Add a layer of the cheeses. Repeat layers. Sprinkle parsley over last layer of cheese. Bake in a pre-heated 350 degree oven covered for 35 minutes. uncover and bake until top is bubbly!</li></ol>",
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: "Depending on how think your chicken breasts are, place them under plastic wrap and pound until thin. If you don't have a meat pounder, use a heavy pot of skillet. You can also fillet these with a knife.Get 3 pie plates or containers. Put flour in one, beaten eggs in one and bread crumbs in one.Dredge chicken breast in flour, then in the egg wash, and then the bread crumbs.Fry cutlets in vegetable oil over med heat. Fry until golden brown.",
                ingredients: [
                  {
                    id: 5062,
                    name: 'chicken breast',
                    localizedName: 'chicken breast',
                    image: 'chicken-breasts.png'
                  },
                  {
                    id: 4669,
                    name: 'vegetable oil',
                    localizedName: 'vegetable oil',
                    image: 'vegetable-oil.jpg'
                  },
                  {
                    id: 18079,
                    name: 'breadcrumbs',
                    localizedName: 'breadcrumbs',
                    image: 'breadcrumbs.jpg'
                  },
                  {
                    id: 20081,
                    name: 'all purpose flour',
                    localizedName: 'all purpose flour',
                    image: 'flour.png'
                  },
                  {
                    id: 1123,
                    name: 'egg',
                    localizedName: 'egg',
                    image: 'egg.png'
                  },
                  {
                    id: 1065062,
                    name: 'meat',
                    localizedName: 'meat',
                    image: 'whole-chicken.jpg'
                  },
                  {
                    id: 10018364,
                    name: 'wrap',
                    localizedName: 'wrap',
                    image: 'flour-tortilla.jpg'
                  }
                ],
                equipment: [
                  {
                    id: 3846,
                    name: 'meat tenderizer',
                    localizedName: 'meat tenderizer',
                    image: 'meat-mallet.jpg'
                  },
                  {
                    id: 404730,
                    name: 'plastic wrap',
                    localizedName: 'plastic wrap',
                    image: 'plastic-wrap.jpg'
                  },
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png'
                  },
                  {
                    id: 404745,
                    name: 'knife',
                    localizedName: 'knife',
                    image: 'chefs-knife.jpg'
                  },
                  {
                    id: 404752,
                    name: 'pot',
                    localizedName: 'pot',
                    image: 'stock-pot.jpg'
                  }
                ]
              },
              {
                number: 2,
                step: 'Spread a little marinara on the bottom of a 13x9 baking dish.Make a layer of chicken.',
                ingredients: [
                  {
                    id: 5006,
                    name: 'whole chicken',
                    localizedName: 'whole chicken',
                    image: 'whole-chicken.jpg'
                  },
                  {
                    id: 0,
                    name: 'spread',
                    localizedName: 'spread',
                    image: ''
                  }
                ],
                equipment: [
                  {
                    id: 404646,
                    name: 'baking pan',
                    localizedName: 'baking pan',
                    image: 'roasting-pan.jpg'
                  }
                ]
              },
              {
                number: 3,
                step: 'Add more marinara. Use most of the first quart.',
                ingredients: [],
                equipment: []
              },
              {
                number: 4,
                step: 'Add a layer of the cheeses. Repeat layers.',
                ingredients: [],
                equipment: []
              },
              {
                number: 5,
                step: 'Sprinkle parsley over last layer of cheese.',
                ingredients: [
                  {
                    id: 11297,
                    name: 'parsley',
                    localizedName: 'parsley',
                    image: 'parsley.jpg'
                  },
                  {
                    id: 1041009,
                    name: 'cheese',
                    localizedName: 'cheese',
                    image: 'cheddar-cheese.png'
                  }
                ],
                equipment: []
              },
              {
                number: 6,
                step: 'Bake in a pre-heated 350 degree oven covered for 35 minutes. uncover and bake until top is bubbly!',
                ingredients: [],
                equipment: [
                  {
                    id: 404784,
                    name: 'oven',
                    localizedName: 'oven',
                    image: 'oven.jpg'
                  }
                ],
                length: {
                  number: 35,
                  unit: 'minutes'
                }
              }
            ]
          }
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/best-chicken-parmesan-634891'
      }
    ]
    )
  }, [])

  const handleAdd = (e) => {
    if (selectedFood.length < 4) {
      setSelectedFood(selectedFood.concat(e))
      e.vegan
        ? setVeganQ(veganQ - 1)
        : setNormalQ(normalQ - 1)
    }

    toast({
      title: 'Item added.',
      description: `You've added ${e.title} to the menu`,
      status: 'success',
      duration: 1000,
      containerStyle: {
        width: '80%'
      },
      isClosable: true
    })
  }

  const handleRemove = (index, title, vegan) => {
    const newitems = selectedFood.filter((e, i) => { return i !== index })
    setSelectedFood(newitems)
    vegan
      ? setVeganQ(veganQ + 1)
      : setNormalQ(normalQ + 1)
    toast({
      title: 'Item removed.',
      description: `You've removed ${title} to the menu`,
      status: 'error',
      duration: 3000,
      containerStyle: {
        width: '80%'
      },
      isClosable: true
    })
  }

  const unableitem = (e) => {
    if (e && veganQ === 0) {
      return true
    } else {
      if (!e && !normalQ) {
        return true
      } else return false
    }
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      query && axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${maxItems}&apiKey=f465f1ea39f943b7b3782e0abac6b6aa&maxReadyTime=20`)
        .then((res) => {
          const ids = res.data.results.map((e) => e.id)
          const querys = ids.join(',')
          return axios.get(`https://api.spoonacular.com/recipes/informationBulk?ids=${querys}&apiKey=f465f1ea39f943b7b3782e0abac6b6aa`)
        })
        .then(res => setFood(res.data))
    } catch (error) { console.log(error) }
  }

  return {
    food,
    query,
    selectedFood,
    randomFood,
    handleAdd,
    unableitem,
    handleRemove,
    handleSubmit,
    handleChange
  }
}

export default useMenu
