const recipes = [
    {
        "id": 1,
        "name": "Hot Cocoa",
        "instructions": "TODO FILL THESE IN",
        "is_deleted": 0,
        "created_at": "2019-01-15 02:12:20",
        "updated_at": "2019-01-15 02:12:20"
    },
    {
        "id": 2,
        "name": "Chocolate Chip Cookies",
        "instructions": "TODO FILL THESE IN",
        "is_deleted": 0,
        "created_at": "2019-01-15 02:12:20",
        "updated_at": "2019-01-15 02:12:20"
    },
    {
        "id": 3,
        "name": "Bacon Avocado and Corn Salad",
        "instructions": "1. Cook bacon and crumble into pieces\n2. Cook corn in skillet until golden brown\n3. Cut avocado into chunks\n4. Combine corn, bacon, cheese, cilantro in a bowl.  \n5. Add lime juice, salt, and pepper to taste",
        "is_deleted": 0,
        "created_at": "2019-01-15 02:12:20",
        "updated_at": "2019-01-15 02:12:20"
    },
    {
        "id": 4,
        "name": "Baked Orzo with Chicken",
        "instructions": "1. Preheat oven to 400 F\n2. Cook and shred 1 lb of chicken\n3. Bring chicken broth to a boil and add orzo, cook about 7 minutes.  Set aside when orzo becomes tender.\n4.In a skillet melt butter, saute onions and mushrooms.\n5. Add marsala to skillet and reduce by half.\n6. Combine orzo mixture, marsala mixture, cream, chicken, fontina (shredded), mozzarella(shredded or diced), peas, salt and pepper.  Stir and pour into baking dish.\n7. Combine breadcrumbs, parmesan, and dried thyme.  Sprinkle on top of pasta.\n8. Bake 25 minutes.",
        "is_deleted": 0,
        "created_at": "2019-01-15 02:12:20",
        "updated_at": "2019-01-15 02:12:20"
    },
    {
        "id": 5,
        "name": "Beef Tacos",
        "instructions": "1. Cook ground meat in skillet\n2. Add seasoning\n3. Combine meat and toppings in taco shell",
        "is_deleted": 0,
        "created_at": "2019-01-15 02:12:20",
        "updated_at": "2019-01-15 02:12:20"
    },
    {
        "id": 6,
        "name": "Chicken Brown Rice Soup",
        "instructions": "1. Turn your electric pressure cooker to the saute function on high and saute the diced onions in the butter, then add garlic\n2. Add the remaining ingredients to the pot. Cook on high pressure for 15 minutes. \n3. Remove the chicken breasts from the pot and shred and lemon juice",
        "is_deleted": 0,
        "created_at": "2019-01-15 02:12:20",
        "updated_at": "2019-01-15 02:12:20"
    },
    {
        "id": 7,
        "name": "Spaghetti ",
        "instructions": "1. Bring pot of water to boil, add noodles and cook until tender\n2. Brown meat in skillet, drain excess fat\n3. Add spaghetti sauce\n4. Drain noodles and combine all ingredients",
        "is_deleted": 0,
        "created_at": "2019-01-15 02:12:20",
        "updated_at": "2019-01-15 02:12:20"
    },
    {
        "id": 8,
        "name": "Sous Vide Chicken",
        "instructions": "1. Season chicken and add to qt size freezer bag\n2. Submerge in water, set sous vide to 155 degrees F\n3. Cook for 50 minutes to 2 hours\n4. remove from bag and cook in skillet with butter for 1 minute on each side",
        "is_deleted": 0,
        "created_at": "2019-01-15 02:12:20",
        "updated_at": "2019-01-15 02:12:20"
    },
    {
        "id": 9,
        "name": "Turkey Chili",
        "instructions": "1. Heat oil in pot and cook turkey\n2. Add onions, garlic, celery, pepper, oregano, bay leaves, chili powder, and cumin.  Cook for 5 min\n3. Add tomatoes, chicken broth, salt and pepper then simmer for 15 min\n4. Add drained beans and cook 5 min\n5. Serve with sour cream, cheese, and lime wedges",
        "is_deleted": 0,
        "created_at": "2019-01-15 02:12:20",
        "updated_at": "2019-01-15 02:12:20"
    },
    {
        "id": 10,
        "name": "Costco Pesto Salmon",
        "instructions": "1. Heat oven to 375 degrees F\n2. Cook until salmon reaches 145 degrees F",
        "is_deleted": 0,
        "created_at": "2019-01-15 02:12:20",
        "updated_at": "2019-01-15 02:12:20"
    },
    {
        "id": 11,
        "name": "Coffee Chocolate Chip Waffles",
        "instructions": "1. Preheat waffle maker and spray with cooking spray\n2. Combine all ingredients in large bowl\n3. Cook in batches, 1/3 c mixture per waffle",
        "is_deleted": 0,
        "created_at": "2019-01-15 02:12:20",
        "updated_at": "2019-01-15 02:12:20"
    },
    {
        "id": 12,
        "name": "Flank Steak",
        "instructions": "1. Create marinate by combining oil, garlic, vinegar, soy sauce, honey, and pepper in a bag\n2. Poke steak with fork and add steak to bag, leave for at least 4 hours\n3. Grill steak until medium",
        "is_deleted": 0,
        "created_at": "2019-01-15 02:12:20",
        "updated_at": "2019-01-15 02:12:20"
    },
    {
        "id": 13,
        "name": "Swedish Meatballs",
        "instructions": "1. Combine 2Tbs butter, onion, garlic, salt, and pepper in skillet and cook for 5 minutes\n2. Combine skillet mixture, breadcrumbs, pork, beef, 1 tsp worcestershire, and eggs in a large bowl and mix well\n3. Form into balls and cook for 20 min in 400 degree oven\n4. In saucepan cook remaining butter, flour, broth, 1 tsp worcestershire, and heavy cream to make gravy\n5. Add cooked meatballs to gravy to coat, top with chopped parsley and salt and pepper to taste",
        "is_deleted": 0,
        "created_at": "2019-01-15 02:12:20",
        "updated_at": "2019-01-15 02:12:20"
    },
    {
        "id": 14,
        "name": "Mashed Potatoes",
        "instructions": "1. Clean, peel, and dice potatoes\n2. Boil in salted water until fork tender\n3. Drain and mash with butter and milk\n4. Spices (salt, pepper, garlic) to taste",
        "is_deleted": 0,
        "created_at": "2019-01-15 02:12:20",
        "updated_at": "2019-01-15 02:12:20"
    },
    {
        "id": 15,
        "name": "Crock Pot Chicken and Dumplings",
        "instructions": "1. In crock-pot add diced onion then chicken\n2. in a separate bowl mix soups and spices.  Spread mixture over chicken then add broth to crock-pot\n3. Cook 4-6 hours on low\n4. Cut biscuits into small pieces\n5. Mix in vegetables and dough pieces into crock-pot and cook 1 hour\n6. Shred chicken and remix",
        "is_deleted": 0,
        "created_at": "2019-01-15 02:12:20",
        "updated_at": "2019-01-15 02:12:20"
    }
];

const recipeJoins = [

    { "id": "1", "recipe_id": "1", "ingredient_id": "5", "amount": "1.00", "unit_of_measurement_id": 6 },
    { "id": "2", "recipe_id": "1", "ingredient_id": "4", "amount": "1.50", "unit_of_measurement_id": 6 },
    { "id": "3", "recipe_id": "1", "ingredient_id": "6", "amount": "1.00", "unit_of_measurement_id": 2 },
    { "id": "4", "recipe_id": "2", "ingredient_id": "3", "amount": "0.50", "unit_of_measurement_id": 6 },
    { "id": "5", "recipe_id": "2", "ingredient_id": "7", "amount": "0.50", "unit_of_measurement_id": 6 },
    { "id": "6", "recipe_id": "2", "ingredient_id": "4", "amount": "0.25", "unit_of_measurement_id": 6 },
    { "id": "7", "recipe_id": "2", "ingredient_id": "8", "amount": "1.00", "unit_of_measurement_id": 2 },
    { "id": "8", "recipe_id": "2", "ingredient_id": "9", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "9", "recipe_id": "2", "ingredient_id": "10", "amount": "1.25", "unit_of_measurement_id": 6 },
    { "id": "10", "recipe_id": "2", "ingredient_id": "11", "amount": "0.50", "unit_of_measurement_id": 2 },
    { "id": "11", "recipe_id": "2", "ingredient_id": "12", "amount": "0.50", "unit_of_measurement_id": 2 },
    { "id": "12", "recipe_id": "2", "ingredient_id": "13", "amount": "6.00", "unit_of_measurement_id": 4 },
    { "id": "13", "recipe_id": "3", "ingredient_id": "14", "amount": "5.00", "unit_of_measurement_id": 1 },
    { "id": "14", "recipe_id": "3", "ingredient_id": "15", "amount": "2.00", "unit_of_measurement_id": 6 },
    { "id": "15", "recipe_id": "3", "ingredient_id": "16", "amount": "0.50", "unit_of_measurement_id": 6 },
    { "id": "16", "recipe_id": "3", "ingredient_id": "17", "amount": "2.00", "unit_of_measurement_id": 3 },
    { "id": "17", "recipe_id": "3", "ingredient_id": "18", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "18", "recipe_id": "3", "ingredient_id": "19", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "19", "recipe_id": "4", "ingredient_id": "20", "amount": "4.00", "unit_of_measurement_id": 6 },
    { "id": "20", "recipe_id": "4", "ingredient_id": "21", "amount": "1.00", "unit_of_measurement_id": 5 },
    { "id": "21", "recipe_id": "4", "ingredient_id": "3", "amount": "3.00", "unit_of_measurement_id": 3 },
    { "id": "22", "recipe_id": "4", "ingredient_id": "22", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "23", "recipe_id": "4", "ingredient_id": "23", "amount": "8.00", "unit_of_measurement_id": 4 },
    { "id": "24", "recipe_id": "4", "ingredient_id": "24", "amount": "1.00", "unit_of_measurement_id": 6 },
    { "id": "25", "recipe_id": "4", "ingredient_id": "25", "amount": "0.50", "unit_of_measurement_id": 6 },
    { "id": "26", "recipe_id": "4", "ingredient_id": "26", "amount": "4.00", "unit_of_measurement_id": 4 },
    { "id": "27", "recipe_id": "4", "ingredient_id": "27", "amount": "4.00", "unit_of_measurement_id": 4 },
    { "id": "28", "recipe_id": "4", "ingredient_id": "28", "amount": "1.00", "unit_of_measurement_id": 6 },
    { "id": "29", "recipe_id": "4", "ingredient_id": "29", "amount": "0.50", "unit_of_measurement_id": 6 },
    { "id": "30", "recipe_id": "4", "ingredient_id": "30", "amount": "0.25", "unit_of_measurement_id": 6 },
    { "id": "31", "recipe_id": "4", "ingredient_id": "31", "amount": "1.00", "unit_of_measurement_id": 2 },
    { "id": "32", "recipe_id": "4", "ingredient_id": "11", "amount": "0.50", "unit_of_measurement_id": 2 },
    { "id": "33", "recipe_id": "4", "ingredient_id": "32", "amount": "0.50", "unit_of_measurement_id": 2 },
    { "id": "34", "recipe_id": "4", "ingredient_id": "33", "amount": "1.00", "unit_of_measurement_id": 5 },
    { "id": "35", "recipe_id": "5", "ingredient_id": "34", "amount": "1.00", "unit_of_measurement_id": 5 },
    { "id": "36", "recipe_id": "5", "ingredient_id": "35", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "37", "recipe_id": "5", "ingredient_id": "36", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "38", "recipe_id": "5", "ingredient_id": "37", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "39", "recipe_id": "5", "ingredient_id": "38", "amount": "4.00", "unit_of_measurement_id": 4 },
    { "id": "40", "recipe_id": "5", "ingredient_id": "39", "amount": "0.50", "unit_of_measurement_id": 6 },
    { "id": "41", "recipe_id": "5", "ingredient_id": "40", "amount": "0.50", "unit_of_measurement_id": 6 },
    { "id": "42", "recipe_id": "6", "ingredient_id": "3", "amount": "2.00", "unit_of_measurement_id": 3 },
    { "id": "43", "recipe_id": "6", "ingredient_id": "22", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "44", "recipe_id": "6", "ingredient_id": "41", "amount": "1.00", "unit_of_measurement_id": 3 },
    { "id": "45", "recipe_id": "6", "ingredient_id": "42", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "46", "recipe_id": "6", "ingredient_id": "43", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "47", "recipe_id": "6", "ingredient_id": "44", "amount": "1.00", "unit_of_measurement_id": 2 },
    { "id": "48", "recipe_id": "6", "ingredient_id": "45", "amount": "0.50", "unit_of_measurement_id": 6 },
    { "id": "49", "recipe_id": "6", "ingredient_id": "33", "amount": "1.00", "unit_of_measurement_id": 5 },
    { "id": "50", "recipe_id": "6", "ingredient_id": "46", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "51", "recipe_id": "6", "ingredient_id": "47", "amount": "8.00", "unit_of_measurement_id": 6 },
    { "id": "52", "recipe_id": "7", "ingredient_id": "48", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "53", "recipe_id": "7", "ingredient_id": "34", "amount": "1.00", "unit_of_measurement_id": 5 },
    { "id": "54", "recipe_id": "7", "ingredient_id": "49", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "55", "recipe_id": "7", "ingredient_id": "50", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "56", "recipe_id": "8", "ingredient_id": "33", "amount": "1.00", "unit_of_measurement_id": 5 },
    { "id": "57", "recipe_id": "8", "ingredient_id": "51", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "58", "recipe_id": "8", "ingredient_id": "52", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "59", "recipe_id": "8", "ingredient_id": "3", "amount": "1.00", "unit_of_measurement_id": 3 },
    { "id": "60", "recipe_id": "9", "ingredient_id": "53", "amount": "1.00", "unit_of_measurement_id": 3 },
    { "id": "61", "recipe_id": "9", "ingredient_id": "54", "amount": "1.00", "unit_of_measurement_id": 5 },
    { "id": "62", "recipe_id": "9", "ingredient_id": "22", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "63", "recipe_id": "9", "ingredient_id": "41", "amount": "2.00", "unit_of_measurement_id": 3 },
    { "id": "64", "recipe_id": "9", "ingredient_id": "55", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "65", "recipe_id": "9", "ingredient_id": "42", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "66", "recipe_id": "9", "ingredient_id": "56", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "67", "recipe_id": "9", "ingredient_id": "57", "amount": "1.00", "unit_of_measurement_id": 3 },
    { "id": "68", "recipe_id": "9", "ingredient_id": "58", "amount": "2.00", "unit_of_measurement_id": 1 },
    { "id": "69", "recipe_id": "9", "ingredient_id": "59", "amount": "3.00", "unit_of_measurement_id": 3 },
    { "id": "70", "recipe_id": "9", "ingredient_id": "60", "amount": "2.00", "unit_of_measurement_id": 2 },
    { "id": "71", "recipe_id": "9", "ingredient_id": "61", "amount": "2.00", "unit_of_measurement_id": 1 },
    { "id": "72", "recipe_id": "9", "ingredient_id": "20", "amount": "2.00", "unit_of_measurement_id": 6 },
    { "id": "73", "recipe_id": "9", "ingredient_id": "62", "amount": "2.00", "unit_of_measurement_id": 1 },
    { "id": "74", "recipe_id": "9", "ingredient_id": "38", "amount": "8.00", "unit_of_measurement_id": 4 },
    { "id": "75", "recipe_id": "9", "ingredient_id": "40", "amount": "0.50", "unit_of_measurement_id": 6 },
    { "id": "76", "recipe_id": "9", "ingredient_id": "18", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "77", "recipe_id": "10", "ingredient_id": "63", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "78", "recipe_id": "10", "ingredient_id": "51", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "79", "recipe_id": "11", "ingredient_id": "64", "amount": "0.50", "unit_of_measurement_id": 6 },
    { "id": "80", "recipe_id": "11", "ingredient_id": "65", "amount": "2.00", "unit_of_measurement_id": 6 },
    { "id": "81", "recipe_id": "11", "ingredient_id": "66", "amount": "0.50", "unit_of_measurement_id": 6 },
    { "id": "82", "recipe_id": "11", "ingredient_id": "67", "amount": "1.00", "unit_of_measurement_id": 6 },
    { "id": "83", "recipe_id": "11", "ingredient_id": "9", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "84", "recipe_id": "11", "ingredient_id": "68", "amount": "2.00", "unit_of_measurement_id": 3 },
    { "id": "85", "recipe_id": "11", "ingredient_id": "69", "amount": "0.25", "unit_of_measurement_id": 6 },
    { "id": "86", "recipe_id": "12", "ingredient_id": "70", "amount": "2.00", "unit_of_measurement_id": 5 },
    { "id": "87", "recipe_id": "12", "ingredient_id": "53", "amount": "0.30", "unit_of_measurement_id": 6 },
    { "id": "88", "recipe_id": "12", "ingredient_id": "41", "amount": "2.00", "unit_of_measurement_id": 3 },
    { "id": "89", "recipe_id": "12", "ingredient_id": "71", "amount": "2.00", "unit_of_measurement_id": 3 },
    { "id": "90", "recipe_id": "12", "ingredient_id": "72", "amount": "0.30", "unit_of_measurement_id": 6 },
    { "id": "91", "recipe_id": "12", "ingredient_id": "73", "amount": "0.25", "unit_of_measurement_id": 6 },
    { "id": "92", "recipe_id": "12", "ingredient_id": "32", "amount": "0.50", "unit_of_measurement_id": 2 },
    { "id": "93", "recipe_id": "12", "ingredient_id": "51", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "94", "recipe_id": "13", "ingredient_id": "29", "amount": "1.00", "unit_of_measurement_id": 6 },
    { "id": "95", "recipe_id": "13", "ingredient_id": "3", "amount": "4.00", "unit_of_measurement_id": 3 },
    { "id": "96", "recipe_id": "13", "ingredient_id": "22", "amount": "0.50", "unit_of_measurement_id": 1 },
    { "id": "97", "recipe_id": "13", "ingredient_id": "41", "amount": "2.00", "unit_of_measurement_id": 3 },
    { "id": "98", "recipe_id": "13", "ingredient_id": "11", "amount": "2.00", "unit_of_measurement_id": 2 },
    { "id": "99", "recipe_id": "13", "ingredient_id": "32", "amount": "0.25", "unit_of_measurement_id": 2 },
    { "id": "100", "recipe_id": "13", "ingredient_id": "67", "amount": "0.50", "unit_of_measurement_id": 6 },
    { "id": "101", "recipe_id": "13", "ingredient_id": "74", "amount": "2.00", "unit_of_measurement_id": 2 },
    { "id": "102", "recipe_id": "13", "ingredient_id": "34", "amount": "0.75", "unit_of_measurement_id": 5 },
    { "id": "103", "recipe_id": "13", "ingredient_id": "75", "amount": "0.50", "unit_of_measurement_id": 5 },
    { "id": "104", "recipe_id": "13", "ingredient_id": "9", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "105", "recipe_id": "13", "ingredient_id": "76", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "106", "recipe_id": "13", "ingredient_id": "10", "amount": "2.00", "unit_of_measurement_id": 3 },
    { "id": "107", "recipe_id": "13", "ingredient_id": "77", "amount": "1.50", "unit_of_measurement_id": 6 },
    { "id": "108", "recipe_id": "13", "ingredient_id": "25", "amount": "0.25", "unit_of_measurement_id": 6 },
    { "id": "109", "recipe_id": "13", "ingredient_id": "78", "amount": "2.00", "unit_of_measurement_id": 3 },
    { "id": "110", "recipe_id": "14", "ingredient_id": "79", "amount": "4.00", "unit_of_measurement_id": 1 },
    { "id": "111", "recipe_id": "14", "ingredient_id": "3", "amount": "4.00", "unit_of_measurement_id": 3 },
    { "id": "112", "recipe_id": "14", "ingredient_id": "67", "amount": "0.50", "unit_of_measurement_id": 6 },
    { "id": "113", "recipe_id": "15", "ingredient_id": "22", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "114", "recipe_id": "15", "ingredient_id": "80", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "115", "recipe_id": "15", "ingredient_id": "81", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "116", "recipe_id": "15", "ingredient_id": "78", "amount": "1.00", "unit_of_measurement_id": 3 },
    { "id": "117", "recipe_id": "15", "ingredient_id": "82", "amount": "1.00", "unit_of_measurement_id": 2 },
    { "id": "118", "recipe_id": "15", "ingredient_id": "32", "amount": "1.00", "unit_of_measurement_id": 2 },
    { "id": "119", "recipe_id": "15", "ingredient_id": "33", "amount": "1.00", "unit_of_measurement_id": 5 },
    { "id": "120", "recipe_id": "15", "ingredient_id": "20", "amount": "2.00", "unit_of_measurement_id": 6 },
    { "id": "121", "recipe_id": "15", "ingredient_id": "83", "amount": "1.00", "unit_of_measurement_id": 1 },
    { "id": "122", "recipe_id": "15", "ingredient_id": "84", "amount": "1.00", "unit_of_measurement_id": 1 }

];

const ingredients = [

    {
        id: 1,
        name: 'White Onion'
    },
    {
        id: 2,
        name: 'Yellow Onion'
    },
    {
        id: 3,
        name: 'Butter'
    },
    {
        id: 4,
        name: 'Sugar'
    },
    {
        id: 5,
        name: 'Cocoa Powder'
    },
    {
        id: 6,
        name: 'Cayenne Pepper'
    },
    {
        id: 7,
        name: 'Brown Sugar'
    },
    {
        id: 8,
        name: 'Vanilla Extract'
    },
    {
        id: 9,
        name: 'Egg'
    },
    {
        id: 10,
        name: 'Flour'
    },
    {
        id: 11,
        name: 'Salt'
    },
    {
        id: 12,
        name: 'Baking Soda'
    },
    {
        id: 13,
        name: 'Chocolate Chips'
    },
    {
        id: 14,
        name: 'Bacon'
    },
    {
        id: 15,
        name: 'Corn'
    },
    {
        id: 16,
        name: 'Feta Cheese'
    },
    {
        id: 17,
        name: 'Cilantro'
    },
    {
        id: 18,
        name: 'Lime'
    },
    {
        id: 19,
        name: 'Avocado'
    },
    {
        id: 20,
        name: 'Chicken Broth'
    },
    {
        id: 21,
        name: 'Orzo Pasta'
    },
    {
        id: 22,
        name: 'Onion'
    },
    {
        id: 23,
        name: 'Mushrooms'
    },
    {
        id: 24,
        name: 'Marsala'
    },
    {
        id: 25,
        name: 'Heavy Cream'
    },
    {
        id: 26,
        name: 'Fontina Cheese'
    },
    {
        id: 27,
        name: 'Mozzarella'
    },
    {
        id: 28,
        name: 'Peas'
    },
    {
        id: 29,
        name: 'Bread Crumbs'
    },
    {
        id: 30,
        name: 'Parmesan'
    },
    {
        id: 31,
        name: 'Thyme'
    },
    {
        id: 32,
        name: 'Pepper'
    },
    {
        id: 33,
        name: 'Chicken'
    },
    {
        id: 34,
        name: 'Ground Beef'
    },
    {
        id: 35,
        name: 'Tortillas '
    },
    {
        id: 36,
        name: 'Lettice'
    },
    {
        id: 37,
        name: 'Taco Seasoning'
    },
    {
        id: 38,
        name: 'Cheddar Cheese'
    },
    {
        id: 39,
        name: 'Salsa'
    },
    {
        id: 40,
        name: 'Sour Cream'
    },
    {
        id: 41,
        name: 'Garlic'
    },
    {
        id: 42,
        name: 'Celery'
    },
    {
        id: 43,
        name: 'Carrots'
    },
    {
        id: 44,
        name: 'Italian Herbs'
    },
    {
        id: 45,
        name: 'Brown Rice'
    },
    {
        id: 46,
        name: 'Lemon'
    },
    {
        id: 47,
        name: 'Chicken Stock'
    },
    {
        id: 48,
        name: 'Spaghetti Sauce'
    },
    {
        id: 49,
        name: 'Spaghetti Noodles'
    },
    {
        id: 50,
        name: 'Dinner Rolls'
    },
    {
        id: 51,
        name: 'Frozen Vegetables'
    },
    {
        id: 52,
        name: 'Freezer Bags'
    },
    {
        id: 53,
        name: 'Olive Oil'
    },
    {
        id: 54,
        name: 'Ground Turkey'
    },
    {
        id: 55,
        name: 'Red Pepper'
    },
    {
        id: 56,
        name: 'Jalapeno'
    },
    {
        id: 57,
        name: 'Oregano'
    },
    {
        id: 58,
        name: 'Bay Leaves'
    },
    {
        id: 59,
        name: 'Chili Powder'
    },
    {
        id: 60,
        name: 'Cumin'
    },
    {
        id: 61,
        name: 'Canned Diced Tomato'
    },
    {
        id: 62,
        name: 'Canned Red Kidney Beans'
    },
    {
        id: 63,
        name: 'Costco Pesto Salmon'
    },
    {
        id: 64,
        name: 'Coffee'
    },
    {
        id: 65,
        name: 'Bisquick'
    },
    {
        id: 66,
        name: 'Mini Chocolate Chips'
    },
    {
        id: 67,
        name: 'Milk'
    },
    {
        id: 68,
        name: 'Vegetable Oil'
    },
    {
        id: 69,
        name: 'Syrup'
    },
    {
        id: 70,
        name: 'Flank Steak'
    },
    {
        id: 71,
        name: 'Red Wine Vinegar'
    },
    {
        id: 72,
        name: 'Soy Sauce'
    },
    {
        id: 73,
        name: 'Honey'
    },
    {
        id: 74,
        name: 'Worcestershire Sauce'
    },
    {
        id: 75,
        name: 'Ground Pork'
    },
    {
        id: 76,
        name: 'Egg White'
    },
    {
        id: 77,
        name: 'Beef Broth'
    },
    {
        id: 78,
        name: 'Parsley'
    },
    {
        id: 79,
        name: 'Russet Potatoes'
    },
    {
        id: 80,
        name: 'Cream of Celery Soup'
    },
    {
        id: 81,
        name: 'Cream of Chicken Soup'
    },
    {
        id: 82,
        name: 'Poultry Seasoning'
    },
    {
        id: 83,
        name: 'Frozen Peas and Carrots'
    },
    {
        id: 84,
        name: 'Biscuit Dough'
    }

];

const unitsOfMeasurement = [{ id: 1, name: 'unit' },
{ id: 2, name: 'tsp' },
{ id: 3, name: 'tbs' },
{ id: 4, name: 'oz' },
{ id: 5, name: 'lb' },
{ id: 6, name: 'cup' },
{ id: 7, name: 'pint' },
{ id: 8, name: 'quart' },
{ id: 9, name: 'gallon' }];


const recipeResults = [];

recipes.forEach(recipe => {

    const recipeIngredients = recipeJoins
        .filter(recipeJoin => recipeJoin.recipe_id === recipe.id.toString())
        .map(recipeJoin => {
            const ingredient = ingredients.find(ingredient => ingredient.id.toString() === recipeJoin.ingredient_id);
            return {
                name: ingredient?.name,
                quantity: recipeJoin?.amount,
                unit: unitsOfMeasurement.find(unit => unit.id === recipeJoin.unit_of_measurement_id)?.name
            };
        });

    const result2 = { ...recipe, ingredients: recipeIngredients };

    console.log(result2);
});