
exports.seed = async (knex, Promise) => {

  await knex('recipes_ingredients').del();
  await knex('recipe').del();
  return await knex('recipe').insert([
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
  ]);

  // return await knex.raw('SELECT setval(\'recipe_id_seq\', (SELECT MAX(id) from recipe));'); // postgres

};
