
exports.seed = async (knex, Promise) => {

  await knex('shopping_list').del();
  await knex('meal_plan_recipe').del();
  await knex('meal_plan').del();
  await knex('recipes_ingredients').del();
  await knex('ingredient').del();

  return await knex('ingredient').insert([

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

  ]);

  // return await knex.raw('SELECT setval(\'ingredient_id_seq\', (SELECT MAX(id) from ingredient));'); // postgres

};
