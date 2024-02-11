import { RecipeRequest } from "../model/recipe";

const seedRecipes: readonly RecipeRequest[] = [
    {
        name: 'Hot Cocoa',
        instructions: 'TODO FILL THESE IN',
        ingredients: [
            { name: 'Cocoa Powder', quantity: 1.00, unit: 'cup' },
            { name: 'Sugar', quantity: 1.50, unit: 'cup' },
            { name: 'Cayenne Pepper', quantity: 1.00, unit: 'tsp' }
        ]
    },
    {
        name: 'Chocolate Chip Cookies',
        instructions: 'TODO FILL THESE IN',
        ingredients: [
            { name: 'Butter', quantity: 0.50, unit: 'cup' },
            { name: 'Brown Sugar', quantity: 0.50, unit: 'cup' },
            { name: 'Sugar', quantity: 0.25, unit: 'cup' },
            { name: 'Vanilla Extract', quantity: 1.00, unit: 'tsp' },
            { name: 'Egg', quantity: 1.00, unit: 'unit' },
            { name: 'Flour', quantity: 1.25, unit: 'cup' },
            { name: 'Salt', quantity: 0.50, unit: 'tsp' },
            { name: 'Baking Soda', quantity: 0.50, unit: 'tsp' },
            { name: 'Chocolate Chips', quantity: 6.00, unit: 'oz' }
        ]
    },
    {
        name: 'Bacon Avocado and Corn Salad',
        instructions: '1. Cook bacon and crumble into pieces\n' +
            '2. Cook corn in skillet until golden brown\n' +
            '3. Cut avocado into chunks\n' +
            '4. Combine corn, bacon, cheese, cilantro in a bowl.  \n' +
            '5. Add lime juice, salt, and pepper to taste',
        ingredients: [
            { name: 'Bacon', quantity: 5.00, unit: 'unit' },
            { name: 'Corn', quantity: 2.00, unit: 'cup' },
            { name: 'Feta Cheese', quantity: 0.50, unit: 'cup' },
            { name: 'Cilantro', quantity: 2.00, unit: 'tbs' },
            { name: 'Lime', quantity: 1.00, unit: 'unit' },
            { name: 'Avocado', quantity: 1.00, unit: 'unit' }
        ]
    },
    {
        name: 'Baked Orzo with Chicken',
        instructions: '1. Preheat oven to 400 F\n' +
            '2. Cook and shred 1 lb of chicken\n' +
            '3. Bring chicken broth to a boil and add orzo, cook about 7 minutes.  Set aside when orzo becomes tender.\n' +
            '4.In a skillet melt butter, saute onions and mushrooms.\n' +
            '5. Add marsala to skillet and reduce by half.\n' +
            '6. Combine orzo mixture, marsala mixture, cream, chicken, fontina (shredded), mozzarella(shredded or diced), peas, salt and pepper.  Stir and pour into baking dish.\n' +
            '7. Combine breadcrumbs, parmesan, and dried thyme.  Sprinkle on top of pasta.\n' +
            '8. Bake 25 minutes.',
        ingredients: [
            { name: 'Chicken Broth', quantity: 4.00, unit: 'cup' },
            { name: 'Orzo Pasta', quantity: 1.00, unit: 'lb' },
            { name: 'Butter', quantity: 3.00, unit: 'tbs' },
            { name: 'Onion', quantity: 1.00, unit: 'unit' },
            { name: 'Mushrooms', quantity: 8.00, unit: 'oz' },
            { name: 'Marsala', quantity: 1.00, unit: 'cup' },
            { name: 'Heavy Cream', quantity: 0.50, unit: 'cup' },
            { name: 'Fontina Cheese', quantity: 4.00, unit: 'oz' },
            { name: 'Mozzarella', quantity: 4.00, unit: 'oz' },
            { name: 'Peas', quantity: 1.00, unit: 'cup' },
            { name: 'Bread Crumbs', quantity: 0.50, unit: 'cup' },
            { name: 'Parmesan', quantity: 0.25, unit: 'cup' },
            { name: 'Thyme', quantity: 1.00, unit: 'tsp' },
            { name: 'Salt', quantity: 0.50, unit: 'tsp' },
            { name: 'Pepper', quantity: 0.50, unit: 'tsp' },
            { name: 'Chicken', quantity: 1.00, unit: 'lb' }
        ]
    },
    {
        name: 'Beef Tacos',
        instructions: '1. Cook ground meat in skillet\n' +
            '2. Add seasoning\n' +
            '3. Combine meat and toppings in taco shell',
        ingredients: [
            { name: 'Ground Beef', quantity: 1.00, unit: 'lb' },
            { name: 'Tortillas ', quantity: 1.00, unit: 'unit' },
            { name: 'Lettice', quantity: 1.00, unit: 'unit' },
            { name: 'Taco Seasoning', quantity: 1.00, unit: 'unit' },
            { name: 'Cheddar Cheese', quantity: 4.00, unit: 'oz' },
            { name: 'Salsa', quantity: 0.50, unit: 'cup' },
            { name: 'Sour Cream', quantity: 0.50, unit: 'cup' }
        ]
    },
    {
        name: 'Chicken Brown Rice Soup',
        instructions: '1. Turn your electric pressure cooker to the saute function on high and saute the diced onions in the butter, then add garlic\n' +
            '2. Add the remaining ingredients to the pot. Cook on high pressure for 15 minutes. \n' +
            '3. Remove the chicken breasts from the pot and shred and lemon juice',
        ingredients: [
            { name: 'Butter', quantity: 2.00, unit: 'tbs' },
            { name: 'Onion', quantity: 1.00, unit: 'unit' },
            { name: 'Garlic', quantity: 1.00, unit: 'tbs' },
            { name: 'Celery', quantity: 1.00, unit: 'unit' },
            { name: 'Carrots', quantity: 1.00, unit: 'unit' },
            { name: 'Italian Herbs', quantity: 1.00, unit: 'tsp' },
            { name: 'Brown Rice', quantity: 0.50, unit: 'cup' },
            { name: 'Chicken', quantity: 1.00, unit: 'lb' },
            { name: 'Lemon', quantity: 1.00, unit: 'unit' },
            { name: 'Chicken Stock', quantity: 8.00, unit: 'cup' }
        ]
    },
    {
        name: 'Spaghetti ',
        instructions: '1. Bring pot of water to boil, add noodles and cook until tender\n' +
            '2. Brown meat in skillet, drain excess fat\n' +
            '3. Add spaghetti sauce\n' +
            '4. Drain noodles and combine all ingredients',
        ingredients: [
            { name: 'Spaghetti Sauce', quantity: 1.00, unit: 'unit' },
            { name: 'Ground Beef', quantity: 1.00, unit: 'lb' },
            { name: 'Spaghetti Noodles', quantity: 1.00, unit: 'unit' },
            { name: 'Dinner Rolls', quantity: 1.00, unit: 'unit' }
        ]
    },
    {
        name: 'Sous Vide Chicken',
        instructions: '1. Season chicken and add to qt size freezer bag\n' +
            '2. Submerge in water, set sous vide to 155 degrees F\n' +
            '3. Cook for 50 minutes to 2 hours\n' +
            '4. remove from bag and cook in skillet with butter for 1 minute on each side',
        ingredients: [
            { name: 'Chicken', quantity: 1.00, unit: 'lb' },
            { name: 'Frozen Vegetables', quantity: 1.00, unit: 'unit' },
            { name: 'Freezer Bags', quantity: 1.00, unit: 'unit' },
            { name: 'Butter', quantity: 1.00, unit: 'tbs' }
        ]
    },
    {
        name: 'Turkey Chili',
        instructions: '1. Heat oil in pot and cook turkey\n' +
            '2. Add onions, garlic, celery, pepper, oregano, bay leaves, chili powder, and cumin.  Cook for 5 min\n' +
            '3. Add tomatoes, chicken broth, salt and pepper then simmer for 15 min\n' +
            '4. Add drained beans and cook 5 min\n' +
            '5. Serve with sour cream, cheese, and lime wedges',
        ingredients: [
            { name: 'Olive Oil', quantity: 1.00, unit: 'tbs' },
            { name: 'Ground Turkey', quantity: 1.00, unit: 'lb' },
            { name: 'Onion', quantity: 1.00, unit: 'unit' },
            { name: 'Garlic', quantity: 2.00, unit: 'tbs' },
            { name: 'Red Pepper', quantity: 1.00, unit: 'unit' },
            { name: 'Celery', quantity: 1.00, unit: 'unit' },
            { name: 'Jalapeno', quantity: 1.00, unit: 'unit' },
            { name: 'Oregano', quantity: 1.00, unit: 'tbs' },
            { name: 'Bay Leaves', quantity: 2.00, unit: 'unit' },
            { name: 'Chili Powder', quantity: 3.00, unit: 'tbs' },
            { name: 'Cumin', quantity: 2.00, unit: 'tsp' },
            { name: 'Canned Diced Tomato', quantity: 2.00, unit: 'unit' },
            { name: 'Chicken Broth', quantity: 2.00, unit: 'cup' },
            { name: 'Canned Red Kidney Beans', quantity: 2.00, unit: 'unit' },
            { name: 'Cheddar Cheese', quantity: 8.00, unit: 'oz' },
            { name: 'Sour Cream', quantity: 0.50, unit: 'cup' },
            { name: 'Lime', quantity: 1.00, unit: 'unit' }
        ]
    },
    {
        name: 'Costco Pesto Salmon',
        instructions: '1. Heat oven to 375 degrees F\n2. Cook until salmon reaches 145 degrees F',
        ingredients: [
            { name: 'Costco Pesto Salmon', quantity: 1.00, unit: 'unit' },
            { name: 'Frozen Vegetables', quantity: 1.00, unit: 'unit' }
        ]
    },
    {
        name: 'Coffee Chocolate Chip Waffles',
        instructions: '1. Preheat waffle maker and spray with cooking spray\n' +
            '2. Combine all ingredients in large bowl\n' +
            '3. Cook in batches, 1/3 c mixture per waffle',
        ingredients: [
            { name: 'Coffee', quantity: 0.50, unit: 'cup' },
            { name: 'Bisquick', quantity: 2.00, unit: 'cup' },
            { name: 'Mini Chocolate Chips', quantity: 0.50, unit: 'cup' },
            { name: 'Milk', quantity: 1.00, unit: 'cup' },
            { name: 'Egg', quantity: 1.00, unit: 'unit' },
            { name: 'Vegetable Oil', quantity: 2.00, unit: 'tbs' },
            { name: 'Syrup', quantity: 0.25, unit: 'cup' }
        ]
    },
    {
        name: 'Flank Steak',
        instructions: '1. Create marinate by combining oil, garlic, vinegar, soy sauce, honey, and pepper in a bag\n' +
            '2. Poke steak with fork and add steak to bag, leave for at least 4 hours\n' +
            '3. Grill steak until medium',
        ingredients: [
            { name: 'Flank Steak', quantity: 2.00, unit: 'lb' },
            { name: 'Olive Oil', quantity: 0.30, unit: 'cup' },
            { name: 'Garlic', quantity: 2.00, unit: 'tbs' },
            { name: 'Red Wine Vinegar', quantity: 2.00, unit: 'tbs' },
            { name: 'Soy Sauce', quantity: 0.30, unit: 'cup' },
            { name: 'Honey', quantity: 0.25, unit: 'cup' },
            { name: 'Pepper', quantity: 0.50, unit: 'tsp' },
            { name: 'Frozen Vegetables', quantity: 1.00, unit: 'unit' }
        ]
    },
    {
        name: 'Swedish Meatballs',
        instructions: '1. Combine 2Tbs butter, onion, garlic, salt, and pepper in skillet and cook for 5 minutes\n' +
            '2. Combine skillet mixture, breadcrumbs, pork, beef, 1 tsp worcestershire, and eggs in a large bowl and mix well\n' +
            '3. Form into balls and cook for 20 min in 400 degree oven\n' +
            '4. In saucepan cook remaining butter, flour, broth, 1 tsp worcestershire, and heavy cream to make gravy\n' +
            '5. Add cooked meatballs to gravy to coat, top with chopped parsley and salt and pepper to taste',
        ingredients: [
            { name: 'Bread Crumbs', quantity: 1.00, unit: 'cup' },
            { name: 'Butter', quantity: 4.00, unit: 'tbs' },
            { name: 'Onion', quantity: 0.50, unit: 'unit' },
            { name: 'Garlic', quantity: 2.00, unit: 'tbs' },
            { name: 'Salt', quantity: 2.00, unit: 'tsp' },
            { name: 'Pepper', quantity: 0.25, unit: 'tsp' },
            { name: 'Milk', quantity: 0.50, unit: 'cup' },
            { name: 'Worcestershire Sauce', quantity: 2.00, unit: 'tsp' },
            { name: 'Ground Beef', quantity: 0.75, unit: 'lb' },
            { name: 'Ground Pork', quantity: 0.50, unit: 'lb' },
            { name: 'Egg', quantity: 1.00, unit: 'unit' },
            { name: 'Egg White', quantity: 1.00, unit: 'unit' },
            { name: 'Flour', quantity: 2.00, unit: 'tbs' },
            { name: 'Beef Broth', quantity: 1.50, unit: 'cup' },
            { name: 'Heavy Cream', quantity: 0.25, unit: 'cup' },
            { name: 'Parsley', quantity: 2.00, unit: 'tbs' }
        ]
    },
    {
        name: 'Mashed Potatoes',
        instructions: '1. Clean, peel, and dice potatoes\n' +
            '2. Boil in salted water until fork tender\n' +
            '3. Drain and mash with butter and milk\n' +
            '4. Spices (salt, pepper, garlic) to taste',
        ingredients: [
            { name: 'Russet Potatoes', quantity: 4.00, unit: 'unit' },
            { name: 'Butter', quantity: 4.00, unit: 'tbs' },
            { name: 'Milk', quantity: 0.50, unit: 'cup' }
        ]
    },
    {
        name: 'Crock Pot Chicken and Dumplings',
        instructions: '1. In crock-pot add diced onion then chicken\n' +
            '2. in a separate bowl mix soups and spices.  Spread mixture over chicken then add broth to crock-pot\n' +
            '3. Cook 4-6 hours on low\n' +
            '4. Cut biscuits into small pieces\n' +
            '5. Mix in vegetables and dough pieces into crock-pot and cook 1 hour\n' +
            '6. Shred chicken and remix',
        ingredients: [
            { name: 'Onion', quantity: 1.00, unit: 'unit' },
            { name: 'Cream of Celery Soup', quantity: 1.00, unit: 'unit' },
            { name: 'Cream of Chicken Soup', quantity: 1.00, unit: 'unit' },
            { name: 'Parsley', quantity: 1.00, unit: 'tbs' },
            { name: 'Poultry Seasoning', quantity: 1.00, unit: 'tsp' },
            { name: 'Pepper', quantity: 1.00, unit: 'tsp' },
            { name: 'Chicken', quantity: 1.00, unit: 'lb' },
            { name: 'Chicken Broth', quantity: 2.00, unit: 'cup' },
            { name: 'Frozen Peas and Carrots', quantity: 1.00, unit: 'unit' },
            { name: 'Biscuit Dough', quantity: 1.00, unit: 'unit' }
        ]
    },
    {
        name: "White Chicken Chili",
        instructions: `
            Place everything up through the salt into the slow cooker or Instant Pot.
            For the Instant Pot, cook on high pressure for 12 minutes, then let natural release for 10 minutes. 
            For the Slow Cooker, cook on low for 4-6 hours (or high for 2-4). 
            Remove chicken, shred, and return to the pot. Stir together, add a squeeze of fresh lime juice, and serve as is or with avocado and tortilla chips.
        `,
        ingredients: [
            { name: "Boneless, skinless chicken breasts", quantity: 3, unit: "unit" },
            { name: "Coconut milk", quantity: 13.5, unit: "oz" },
            { name: "Salsa verde", quantity: 12, unit: "oz" },
            { name: "White beans (canned)", quantity: 28, unit: "oz" },
            { name: "Frozen corn", quantity: 2, unit: "cup" },
            { name: "Diced green chilies", quantity: 4, "unit": "oz" },
            { name: "Cumin", quantity: 1.5, unit: "tsp" },
            { name: "Garlic powder", quantity: 1, unit: "tsp" },
            { name: "Salt", quantity: 1, unit: 'tsp' },
            { name: "Lime", quantity: 1, unit: "unit" },
            { name: "Avocado", quantity: 1, unit: "unit", is_optional: true },
            { name: "Tortilla chips", quantity: 1, unit: "unit", is_optional: true }
        ]
    }

];

export default seedRecipes;
