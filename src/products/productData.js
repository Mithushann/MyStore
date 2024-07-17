const products=[
    {
        "id": 1,
        "name": "Freshly Squeezed Orange Juice",
        "image": "https://example.com/orange-juice.jpg",
        "price": 3.99,
        "details": "Deliciously fresh orange juice squeezed from ripe, juicy oranges."
    },
    {
        "id": 2,
        "name": "Organic Whole Milk",
        "image": "https://example.com/whole-milk.jpg",
        "price": 4.49,
        "details": "Nutrient-rich whole milk sourced from organically raised dairy cows."
    },
    {
        "id": 3,
        "name": "Grade A Large Eggs",
        "image": "https://example.com/eggs.jpg",
        "price": 2.99,
        "details": "Large, grade A eggs with bright yolks, perfect for breakfast or baking."
    },
    {
        "id": 4,
        "name": "Organic Baby Spinach",
        "image": "https://example.com/baby-spinach.jpg",
        "price": 2.79,
        "details": "Tender, organic baby spinach leaves packed with vitamins and minerals."
    },
    {
        "id": 5,
        "name": "Grass-Fed Ground Beef",
        "image": "https://example.com/ground-beef.jpg",
        "price": 7.99,
        "details": "Lean ground beef sourced from grass-fed, pasture-raised cattle."
    },
    {
        "id": 6,
        "name": "Wild-Caught Salmon Fillets",
        "image": "https://example.com/salmon-fillets.jpg",
        "price": 10.99,
        "details": "Fresh, wild-caught salmon fillets rich in omega-3 fatty acids."
    },
    {
        "id": 7,
        "name": "Artisanal Sourdough Bread",
        "image": "https://example.com/sourdough-bread.jpg",
        "price": 4.49,
        "details": "Handcrafted sourdough bread with a crisp crust and tangy flavor."
    },
    {
        "id": 8,
        "name": "Creamy Peanut Butter",
        "image": "https://example.com/peanut-butter.jpg",
        "price": 3.29,
        "details": "Smooth and creamy peanut butter made from roasted peanuts."
    },
    {
        "id": 9,
        "name": "Organic Strawberries",
        "image": "https://example.com/strawberries.jpg",
        "price": 5.99,
        "details": "Sweet and juicy organic strawberries bursting with flavor."
    },
    {
        "id": 10,
        "name": "Cage-Free Chicken Breasts",
        "image": "https://example.com/chicken-breasts.jpg",
        "price": 6.99,
        "details": "Tender, cage-free chicken breasts raised without antibiotics."
    },
    {
        "id": 11,
        "name": "Quinoa & Brown Rice Blend",
        "image": "https://example.com/quinoa-brown-rice.jpg",
        "price": 3.49,
        "details": "Nutritious blend of quinoa and brown rice, ready in minutes."
    },
    {
        "id": 12,
        "name": "Greek Yogurt",
        "image": "https://example.com/greek-yogurt.jpg",
        "price": 2.79,
        "details": "Thick and creamy Greek yogurt with live and active cultures."
    },
    {
        "id": 13,
        "name": "Extra Virgin Olive Oil",
        "image": "https://example.com/olive-oil.jpg",
        "price": 8.99,
        "details": "Premium quality extra virgin olive oil, ideal for cooking and dressing."
    },
    {
        "id": 14,
        "name": "Organic Avocados",
        "image": "https://example.com/avocados.jpg",
        "price": 1.99,
        "details": "Organic avocados with creamy texture and rich, buttery flavor."
    },
    {
        "id": 15,
        "name": "Fair Trade Coffee Beans",
        "image": "https://example.com/coffee-beans.jpg",
        "price": 12.99,
        "details": "Fair trade coffee beans, responsibly sourced for a rich, aromatic brew."
    },
    {
        "id": 16,
        "name": "All-Natural Granola Bars",
        "image": "https://example.com/granola-bars.jpg",
        "price": 4.99,
        "details": "Wholesome granola bars made with natural ingredients and no added preservatives."
    },
    {
        "id": 17,
        "name": "Vitamin D Supplements",
        "image": "https://example.com/vitamin-d.jpg",
        "price": 9.99,
        "details": "Vitamin D supplements to support bone health and immune system function."
    },
    {
        "id": 18,
        "name": "Gluten-Free Pasta",
        "image": "https://example.com/gluten-free-pasta.jpg",
        "price": 3.99,
        "details": "Gluten-free pasta made from alternative grains, perfect for gluten-sensitive diets."
    },
    {
        "id": 19,
        "name": "Sparkling Mineral Water",
        "image": "https://example.com/mineral-water.jpg",
        "price": 1.49,
        "details": "Refreshing sparkling mineral water with natural bubbles and minerals."
    },
    {
        "id": 20,
        "name": "Dark Chocolate Bars",
        "image": "https://example.com/dark-chocolate.jpg",
        "price": 2.99,
        "details": "Indulgent dark chocolate bars with high cocoa content for a rich, decadent treat."
    },
    {
        "id": 21,
        "name": "Free-Range Eggs",
        "image": "https://example.com/free-range-eggs.jpg",
        "price": 4.99,
        "details": "Free-range eggs from hens raised in spacious, humane conditions."
    },
    {
        "id": 22,
        "name": "Raw Honey",
        "image": "https://example.com/raw-honey.jpg",
        "price": 6.49,
        "details": "Raw honey harvested from local hives, full of natural sweetness and antioxidants."
    },
    {
        "id": 23,
        "name": "Green Tea Bags",
        "image": "https://example.com/green-tea.jpg",
        "price": 3.29,
        "details": "Green tea bags packed with antioxidants and a soothing, refreshing flavor."
    },
    {
        "id": 24,
        "name": "Organic Bananas",
        "image": "https://example.com/organic-bananas.jpg",
        "price": 1.29,
        "details": "Organic bananas with a sweet and creamy texture, packed with potassium."
    },
    {
        "id": 25,
        "name": "Almond Butter",
        "image": "https://example.com/almond-butter.jpg",
        "price": 7.49,
        "details": "Rich and creamy almond butter made from high-quality almonds."
    },
    {
        "id": 26,
        "name": "Wildflower Honey",
        "image": "https://example.com/wildflower-honey.jpg",
        "price": 5.99,
        "details": "Pure wildflower honey with a rich floral aroma and sweet, delicate flavor."
    },
    {
        "id": 27,
        "name": "Organic Apples",
        "image": "https://example.com/organic-apples.jpg",
        "price": 3.99,
        "details": "Crisp and juicy organic apples, perfect for snacking or baking."
    },
    {
        "id": 28,
        "name": "Whole Grain Bread",
        "image": "https://example.com/whole-grain-bread.jpg",
        "price": 4.99,
        "details": "Nutritious whole grain bread with a hearty texture and wholesome taste."
    },
    {
        "id": 29,
        "name": "Organic Tomatoes",
        "image": "https://example.com/organic-tomatoes.jpg",
        "price": 2.99,
        "details": "Fresh and flavorful organic tomatoes, ideal for salads and cooking."
    },
    {
        "id": 30,
        "name": "Chia Seeds",
        "image": "https://example.com/chia-seeds.jpg",
        "price": 6.99,
        "details": "Nutrient-packed chia seeds rich in omega-3 fatty acids, fiber, and antioxidants."
    },
    {
        "id": 31,
        "name": "Organic Cucumbers",
        "image": "https://example.com/organic-cucumbers.jpg",
        "price": 1.99,
        "details": "Organic cucumbers with crisp texture and refreshing taste."
    },
    {
        "id": 32,
        "name": "Organic Almond Milk",
        "image": "https://example.com/organic-almond-milk.jpg",
        "price": 3.49,
        "details": "Creamy and delicious organic almond milk, perfect for dairy-free diets."
    },
    {
        "id": 33,
        "name": "Organic Quinoa",
        "image": "https://example.com/organic-quinoa.jpg",
        "price": 5.99,
        "details": "Versatile organic quinoa with a nutty flavor and high protein content."
    },
    {
        "id": 34,
        "name": "Organic Red Bell Peppers",
        "image": "https://example.com/organic-red-bell-peppers.jpg",
        "price": 3.79,
        "details": "Sweet and crunchy organic red bell peppers, packed with vitamins."
    },
    {
        "id": 35,
        "name": "Organic Black Beans",
        "image": "https://example.com/organic-black-beans.jpg",
        "price": 1.99,
        "details": "Nutrient-dense organic black beans, ideal for soups, salads, and sides."
    },
    {
        "id": 36,
        "name": "Organic Spinach",
        "image": "https://example.com/organic-spinach.jpg",
        "price": 2.99,
        "details": "Fresh and nutritious organic spinach leaves, perfect for salads and smoothies."
    },
    {
        "id": 37,
        "name": "Organic Blueberries",
        "image": "https://example.com/organic-blueberries.jpg",
        "price": 4.99,
        "details": "Sweet and antioxidant-rich organic blueberries, perfect for snacking or baking."
    },
    {
        "id": 38,
        "name": "Organic Green Beans",
        "image": "https://example.com/organic-green-beans.jpg",
        "price": 2.49,
        "details": "Fresh and crisp organic green beans, great as a side dish or in stir-fries."
    },
    {
        "id": 39,
        "name": "Organic Extra Firm Tofu",
        "image": "https://example.com/organic-tofu.jpg",
        "price": 3.99,
        "details": "Versatile organic tofu with a firm texture, perfect for stir-fries and tofu scrambles."
    },
    {
        "id": 40,
        "name": "Organic Kale",
        "image": "https://example.com/organic-kale.jpg",
        "price": 2.79,
        "details": "Nutrient-packed organic kale, great for salads, smoothies, and soups."
    },
    {
        "id": 41,
        "name": "Organic Broccoli",
        "image": "https://example.com/organic-broccoli.jpg",
        "price": 2.99,
        "details": "Fresh and nutritious organic broccoli florets, perfect for steaming or roasting."
    },
    {
        "id": 42,
        "name": "Organic Red Potatoes",
        "image": "https://example.com/organic-red-potatoes.jpg",
        "price": 3.49,
        "details": "Creamy and flavorful organic red potatoes, great for roasting, mashing, or salads."
    },
    {
        "id": 43,
        "name": "Organic Carrots",
        "image": "https://example.com/organic-carrots.jpg",
        "price": 1.99,
        "details": "Sweet and crunchy organic carrots, perfect for snacking or cooking."
    },
    {
        "id": 44,
        "name": "Organic Sweet Potatoes",
        "image": "https://example.com/organic-sweet-potatoes.jpg",
        "price": 2.49,
        "details": "Nutrient-rich organic sweet potatoes, delicious baked, mashed, or roasted."
    },
    {
        "id": 45,
        "name": "Organic Celery",
        "image": "https://example.com/organic-celery.jpg",
        "price": 2.29,
        "details": "Fresh and crisp organic celery, great for snacks, soups, and salads."
    },
    {
        "id": 46,
        "name": "Organic Raspberries",
        "image": "https://example.com/organic-raspberries.jpg",
        "price": 5.49,
        "details": "Sweet and tangy organic raspberries, perfect for adding to yogurt or desserts."
    },
    {
        "id": 47,
        "name": "Organic Mangoes",
        "image": "https://example.com/organic-mangoes.jpg",
        "price": 2.99,
        "details": "Juicy and flavorful organic mangoes, perfect for snacking or adding to smoothies."
    },
    {
        "id": 48,
        "name": "Organic Cauliflower",
        "image": "https://example.com/organic-cauliflower.jpg",
        "price": 3.79,
        "details": "Fresh and versatile organic cauliflower, great for roasting, mashing, or adding to dishes."
    },
    {
        "id": 49,
        "name": "Organic Red Onions",
        "image": "https://example.com/organic-red-onions.jpg",
        "price": 1.99,
        "details": "Sweet and mildly pungent organic red onions, perfect for salads, roasting, or sautéing."
    },
    {
        "id": 50,
        "name": "Organic Garlic",
        "image": "https://example.com/organic-garlic.jpg",
        "price": 1.49,
        "details": "Fresh and aromatic organic garlic, essential for adding flavor to savory dishes."
    },
    {
        "id": 51,
        "name": "Organic Bell Peppers",
        "image": "https://example.com/organic-bell-peppers.jpg",
        "price": 3.29,
        "details": "Colorful and nutritious organic bell peppers, great raw in salads or cooked in dishes."
    },
    {
        "id": 52,
        "name": "Organic Green Onions",
        "image": "https://example.com/organic-green-onions.jpg",
        "price": 1.79,
        "details": "Crisp and mild organic green onions, perfect for garnishing salads or adding to stir-fries."
    },
    {
        "id": 53,
        "name": "Organic Lemons",
        "image": "https://example.com/organic-lemons.jpg",
        "price": 1.99,
        "details": "Juicy and tart organic lemons, essential for adding zest and flavor to dishes and beverages."
    },
    {
        "id": 54,
        "name": "Organic Baby Carrots",
        "image": "https://example.com/organic-baby-carrots.jpg",
        "price": 2.49,
        "details": "Sweet and tender organic baby carrots, perfect for snacking or dipping."
    },
    {
        "id": 55,
        "name": "Organic Zucchini",
        "image": "https://example.com/organic-zucchini.jpg",
        "price": 2.79,
        "details": "Versatile organic zucchini, great for grilling, sautéing, or baking."
    },
    {
        "id": 56,
        "name": "Organic Parsley",
        "image": "https://example.com/organic-parsley.jpg",
        "price": 1.29,
        "details": "Fresh and aromatic organic parsley, perfect for adding flavor to soups, salads, and sauces."
    },
    {
        "id": 57,
        "name": "Organic Cilantro",
        "image": "https://example.com/organic-cilantro.jpg",
        "price": 1.29,
        "details": "Bright and citrusy organic cilantro, ideal for enhancing the flavors of Latin American and Asian dishes."
    },
    {
        "id": 58,
        "name": "Organic Cantaloupe",
        "image": "https://example.com/organic-cantaloupe.jpg",
        "price": 3.99,
        "details": "Juicy and sweet organic cantaloupe melon, perfect for snacking or fruit salads."
    },
    {
        "id": 59,
        "name": "Organic Mint",
        "image": "https://example.com/organic-mint.jpg",
        "price": 1.49,
        "details": "Cool and refreshing organic mint leaves, great for teas, cocktails, and desserts."
    },
    {
        "id": 60,
        "name": "Organic Radishes",
        "image": "https://example.com/organic-radishes.jpg",
        "price": 1.79,
        "details": "Crisp and spicy organic radishes, perfect for salads or pickling."
    },
    {
        "id": 61,
        "name": "Organic Watermelon",
        "image": "https://example.com/organic-watermelon.jpg",
        "price": 4.99,
        "details": "Sweet and juicy organic watermelon, perfect for refreshing summer snacks."
    },
    {
        "id": 62,
        "name": "Organic Green Beans",
        "image": "https://example.com/organic-green-beans.jpg",
        "price": 2.49,
        "details": "Fresh and crisp organic green beans, great as a side dish or in stir-fries."
    }
];

export default products;
