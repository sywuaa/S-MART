# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

a = User.create([
  { username: 'shao', password: 'shaoshao', first_name: 'Shao', last_name: 'wu', email: 'shao@gmail.com'},
  { username: 'User1', password: 'asdasdasd',first_name: 'User1', last_name: 'bb', email: 'b@gmail.com'},
  { username: 'User2', password: 'miumiumiu',first_name: 'User2', last_name: 'Miu Miu', email: 'miumiu@gmail.com'},
  { username: 'Miu2', password: 'miumiumiu',first_name: 'Mr. Miu 2', last_name: 'Miu Miu2', email: 'miu2@gmail.com'},
  { username: 'Mew', password: 'miumiumiu',first_name: 'Mr. Mew', last_name: 'Miu Miu2', email: 'miu@gmail.com'},
  { username: 'CoolGuy2', password: 'miumiumiu',first_name: 'Cool', last_name: 'Miu Miu2', email: 'mium@gmail.com'},
  { username: 'CoolGuy', password: 'miumiumiu',first_name: 'Mr. Miu 3', last_name: 'Miu Miu3', email: 'miu@gmail.com'},
  { username: 'guest', password: 'miumiumiu',first_name: 'Guest', last_name: 'Miu Miu2', email: 'miu@gmail.com'},
  ])

Reward.create({
  title: "Thank You",
  item: "Message: Thank You for your support",
  description: "Thanks!!!"
})

a = Campaign.create({
  user_id: 1,
  goal: 400000,
  title: "Smart Scanner",
  slogan: "build your own digital library",
  city: "MIAMI BEACH",
  country: "United States",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp1/1.jpeg"),
  overview_image: File.open("app/assets/images/camp1/1.jpeg"),
  carousel_image: File.open("app/assets/images/camp1/11111.jpeg"),
  vid_url: "https://www.youtube.com/embed/dWja_zn_ftc",
  overview: "Let CZUR scanner help to build your private digital library with an easier and faster way.",
  story: "It is Thanksgiving week now. We should thank all of your great support! In return, we will start a thanksgiving customer feedback event. Everyone can get a gift from us. From Nov. 23 to Nov. 30, you can directly get another free button,(besides the one attached with czur scanner that you bought)  once you share our indiegogo on your facebook, twitter or google+. There is one click share button on the left of campaign video. The button is a useful accessory for CZUR scanner, which normally can click 200,000 times.",
})

Reward.create({
  campaign_id: a.id,
  price: 400,
  title: "Core Scanner",
  item: "Scanner + accessories",
  description: "Get one scanner plus with foot pedal and side lights. Side lights can let you scan glossy paper in well results. Future Retail Price: $499+ taxes + shipping"
})

Reward.create({
  campaign_id: a.id,
  price: 29,
  title: "Accessory",
  item: "Cable",
  description: "Need extra cable to handle your work? Now you can bring it anywhere and simply connect and scan. You can also use it as an extension cord and manage to scan from twice as far."
})

Reward.create({
  campaign_id: a.id,
  price: 59,
  title: "Accessory",
  item: "Cables + warranty",
  description: "Need extra cable to handle your work? Now you can bring it anywhere and simply connect and scan. You can also use it as an extension cord and manage to scan from twice as far. Extensive warranty on all cables."
})

b = Campaign.create({
  user_id: 3,
  goal: 10000,
  title: "EverRatchet",
  slogan: "World's First Ratchet Keychain Tool",
  city: "Boulder",
  country: "United States",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp2/2.jpg"),
  overview_image: File.open("app/assets/images/camp2/2.jpg"),
  carousel_image: File.open("app/assets/images/camp2/22222.jpg"),
  vid_url: "https://www.youtube.com/embed/faqft3m_wwU",
  overview: "Thanks to EverRatchet's dynamic ratcheting feature you don't need to lift and reset the tool between each turn making it extremely practical for large jobs or when you are working with limited visibility or space. Fix what you need to fix and get back to life.",
  story: "As our thanks to you for supporting us, we are offering this tool in Stainless Steel and Titanium at a 40% discount on all levels and are including a #2 Phillips Bit and a custom-sized Fire Flint!
  Shipping on our Previous Campaigns - On our previously funded campaigns running from 400 to 900 backers we have shipped anywhere from 3 days to 1.5 weeks ahead of schedule. We make our timelines honest, transparent, and realistic to ensure that you when you support us that we are able to deliver."
})

Reward.create({
  campaign_id: b.id,
  price: 20,
  title: "1 Piece",
  item: "1 x Keychain",
  description: "You will receive 1 keychain tool and it will last almost forever."
})

Reward.create({
  campaign_id: b.id,
  price: 40,
  title: "Family and Friends",
  item: "4 x Keychain",
  description: "Its a perfect tool for families and friends. It will be life saver! It's the perfect gift."
})

Reward.create({
  campaign_id: b.id,
  price: 70,
  title: "4 x Keychain with upgrades",
  item: "4 x keychain and free upgrades in the future.",
  description: "Its a perfect tool for families and friends. It will be life saver! It's the perfect gift. You will also receive new keychains whenever we upgrade our keychain series."
})


c = Campaign.create({
  user_id: 4,
  goal: 5000,
  title: "Shirt",
  slogan: "Advanced Stain & Odour Repellent Cotton T-shirt",
  city: "Budapest",
  country: "Hungary",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp3/3.png"),
  overview_image: File.open("app/assets/images/camp3/3.png"),
  carousel_image: File.open("app/assets/images/camp3/33333.jpeg"),
  vid_url: "https://www.youtube.com/embed/JcR1_PPbhTk",
  overview: "It “only” took 1 year, but we finally cracked how to engineer t-shirts that will make it easier than ever to look your best.",
  story: "The t-shirts are engineered to make life easier and last a lifetime - without compromising on style and comfort. We use a unique combination of 3 of the most innovative textile technologies - something which has never been done before in a 100% cotton product.",
})

Reward.create({
  campaign_id: c.id,
  price: 19,
  title: "Give it a try",
  item: "1 x shirt",
  description: "Let us know what color you would like and feel free to try them on. You will love it!"
})

Reward.create({
  campaign_id: c.id,
  price: 79,
  title: "Rainbow",
  item: "10 x shirts",
  description: "You will receieve 7 shirts in the colors of the rainbow plus, white, black and gray."
})

Reward.create({
  campaign_id: c.id,
  price: 40,
  title: "Mix and match",
  item: "3 x color of your choice",
  description: "Choose 3 colors and get ready to mix and match. You will love them all!"
})

d = Campaign.create({
  user_id: 5,
  goal: 5000,
  title: "New Portable Charger",
  slogan: "Get Charged anywhere",
  city: "Budapest",
  country: "Hungary",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp4/4.jpeg"),
  overview_image: File.open("app/assets/images/camp4/4.jpeg"),
  carousel_image: File.open("app/assets/images/camp4/44444.jpeg"),
  vid_url: "https://www.youtube.com/embed/FDZX1z-yn7w",
  overview: "Perfect for any device, laptops, cameras, small home appliances, you name it.",
  story: "Engineered by power experts from the ground up, Omnicharge is equipped with intelligent charging management technology to set a new standard for portable power. It frees you from the wall and fits right into the palm of your hand. Omnicharge products are designed to be more than just the next generation power bank - they're an uncompromising power experience for your mobile lifestyle."
})

Reward.create({
  campaign_id: d.id,
  price: 20,
  title: "Charger 2000",
  item: "Charger 2000 - 100 Volts",
  description: "With 100 Volts of power, you can have your devices fully charged at all times."
})

Reward.create({
  campaign_id: d.id,
  price: 59,
  title: "Charger 3000",
  item: "Charger 3000 - 200 Volts",
  description: "With 200 Volts of power, you can have your devices fully charged at all times. Its best for short traveling."
})

Reward.create({
  campaign_id: d.id,
  price: 100,
  title: "Charger 4000",
  item: "Charger 4000 - 500 Volts",
  description: "With 200 Volts of power, you can have your devices fully charged at all times. Its best for long traveling and able to charge laptops."
})


e = Campaign.create({
  user_id: 6,
  goal: 5000,
  title: "Evolutional Laptop",
  slogan: "Fit in the size of your palm",
  city: "Budapest",
  country: "Hungary",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp5/5.png"),
  overview_image: File.open("app/assets/images/camp5/5.png"),
  carousel_image: File.open("app/assets/images/camp5/55555.jpeg"),
  vid_url: "https://www.youtube.com/embed/pd66pmgO3f8",
  overview: "GamePad Digital introduces our 7-inch PC that fits in your pocket! 8GB RAM and 128GB ROM",
  story: "Most successful businessman own a Macbook or Surface.Because they have fashionable appearance and also light and thin, but the drawback is not easily moved.We believe that the future notebook will be thin,but also small. GDP Pocket is such a product, it's not only has luxuriant appearance like Macbook, but also super light and very small, It can be taken away at any time like a mobile phone in your pocket."
})

Reward.create({
  campaign_id: e.id,
  price: 199,
  title: "Laptop 2000",
  item: "Laptop 2000 - 4GB Ram",
  description: "Pocket laptop with Windows 10 installed"
})

Reward.create({
  campaign_id: e.id,
  price: 499,
  title: "Laptop 3000",
  item: "Laptop 3000 - 8GB Ram",
  description: "Pocket laptop based on Ubuntu. Perfect for development."
})

Reward.create({
  campaign_id: e.id,
  price: 699,
  title: "Laptop 3000+",
  item: "Laptop 3000 - 16GB Ram",
  description: "Pocket laptop based on Ubuntu / Linux. Accessories include: carrying case, extra external battery, type C cabels."
})

f = Campaign.create({
  user_id: 7,
  goal: 1000,
  title: "The Best Wine",
  slogan: "Buy now or never",
  city: "Budapest",
  country: "Hungary",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp6/6.jpeg"),
  overview_image: File.open("app/assets/images/camp6/6.jpeg"),
  carousel_image: File.open("app/assets/images/camp6/66666.jpg"),
  vid_url: "https://www.youtube.com/embed/HzccCLaLMmw",
  overview: "Specialise in all kinds of wine. ",
  story: "You are investing in convertible debt in this offering. Perks are meant to be a thank you from the company for investing. The perks below are inclusive of lower dollar amount perks. Alcohol perks are redeemable at the Eight Shires Distillery or investors can request it to be delivered, in which case they must pay a shipping fee that will be based on their state or country assuming that it is legal to ship to that destination."
})

Reward.create({
  campaign_id: f.id,
  price: 200,
  title: "Once per month",
  item: "1 bottle of wine per month of your choice for 12 months",
  description: "Now you can taste our wine and feel the difference monthly."
})

Reward.create({
  campaign_id: f.id,
  price: 300,
  title: "Two years",
  item: "1 bottle of wine per month of your choice for 24 months",
  description: "Already loving it? Keep it coming for another year at 50% off."
})

Reward.create({
  campaign_id: f.id,
  price: 700,
  title: "5 years",
  item: "1 bottle of wine per month of your choice for 60 months",
  description: "Your car warranty might not last as long as our wine. So keep them coming!"
})

g = Campaign.create({
  user_id: 7,
  goal: 1000,
  title: "Magnetic Cable",
  slogan: "New way to charge",
  city: "Budapest",
  country: "Hungary",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp7/7.jpg"),
  overview_image: File.open("app/assets/images/camp7/7.jpg"),
  carousel_image: File.open("app/assets/images/camp7/77777.jpg"),
  vid_url: "https://www.youtube.com/embed/4H5l-h300Fw",
  overview: "EASIEST CABLE CONNECTION EVER - Just put you phone on a table and move magnetic charging cable with one hand to a phone, within a few centimeters it will jump like a snake directly to its port.",
  story: "NO MORE PHONE DAMAGE DUE TO TRIPPING OVER A CABLE - No need for a phone case or cover! This magnetic cell phone charger cord is detachable and your device will remain safely on the table after accidental snag. HANDY CHOICE FOR A CAR DRIVER - After using this micro usb car charger the only question you'll be asking is why it's still not the standard item in every car. This cable magnet system is something. EXTREME CHARGING SPEED MAGNETIC DATA CABLE - Save your time with 40% faster charging speed compared to most of 3.0 quick charger cables. Also it's easy to use micro USB quick car charger. PREMIUM QUALITY UPGRADED VERSION - We invested a lot of time and money, it passed 40,00 tests to create even better android phone charging cable. We're proud of it's new magnet charging cable system."
})

Reward.create({
  campaign_id: g.id,
  price: 19,
  title: "Magnetic Cable",
  item: "Magnetic cable x 1 + 2 ports ( microUSB and lighting )",
  description: "Magnetic Charging Cable - Magnetic Phone Charger - Micro USB Charger Cord - Fast Charging Cable "
})

Reward.create({
  campaign_id: g.id,
  price: 29,
  title: "Extra cable",
  item: "2 x Magnetic cables + 2 ports ( microUSB and lighting )",
  description: "Magnetic Charging Cable - Magnetic Phone Charger - Micro USB Charger Cord - Fast Charging Cable. Now you can have an extra cable to carry around and stay charged."
})

Reward.create({
  campaign_id: g.id,
  price: 59,
  title: "Perk 3",
  item: "3 x Magnetic cables + 6 ports ( microUSB and lighting )",
  description: "Magnetic Charging Cable - Magnetic Phone Charger - Micro USB Charger Cord - Fast Charging Cable. Now your whole family can use the same technology and stay charged anywhere around you house."
})

h = Campaign.create({
  user_id: 1,
  goal: 1000,
  title: "Exotic Spa Candles",
  slogan: "Brilliant Colours and Sensual Sensations!",
  city: "Budapest",
  country: "Hungary",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp8/8.jpg"),
  overview_image: File.open("app/assets/images/camp8/8.jpg"),
  carousel_image: File.open("app/assets/images/camp8/88888.jpg"),
  vid_url: "https://www.youtube.com/embed/am_QS6WeWXo",
  overview: "They melt at a very low temperature of 94-98 Degrees Fahrenheit / 34-37 Degrees Celsius, allowing for gentle, yet sensation rich, exploration with temperature play.",
  story: "After burning myself with a candle that was marketed as an adult product safe for dripping on skin, my partner and I began researching candle making, wax and burn temperatures.  Over the last four years we explored our options and market tested several recipes.  The recipe we have settled on has yielded consistent and stimulating results!  Over 98% of individuals who sampled our candles enjoyed the experience and indicated interest in using this product again. We lovingly crafted our product in our home, and once we had created the appropriate amount of stock, we traveled, testing our product in various communities.  Not only did the people love our candles as much as we do, but their excitement began to catch on, and as a result market demand for our product increased rapidly!  We had retailers asking about pricing and wanting to carry our sexy candles! Currently we can manufacture 96 candles per day, if we work relentlessly, as we are hand crafting them.  To meet the market demand we have hit that point where we need to invest a significant amount of money into a machine for making our delightful candles.  We have sexy packaging, amazing posters, Demo Reels for stores to show-We just need a brilliant machine to speed up the production of these amazing candles!"
})

Reward.create({
  campaign_id: h.id,
  price: 10,
  title: "A drip of wax",
  item: "Exotic Spa Candle (Assorted Colours)",
  description: "For those who are seeking to test the product before fully committing! Supporters at this level will receive 1 Exotic Spa Candle of a random colour."
})

Reward.create({
  campaign_id: h.id,
  price: 30,
  title: "Wax it",
  item: "Blacklight Beginner Kit",
  description: "Looking to rave about these candles? This reward is for you! Comes with 3 black light reactive candles, UV Flashlight, drop sheet, instructive brochure and our love and gratitude!"
})

Reward.create({
  campaign_id: h.id,
  price: 50,
  title: "Waxgasm",
  item: "Exotic Friendship Package",
  description: "Enjoy waxgasm after waxgasm with an entire collection of candles (all ten regular colours plus five black light reactive colours), a signed photo of our candle model and co-designer, Angel, and an instructional video showing advanced tips and tricks for creating your own amazing designs!"
})

# j = Campaign.create({
#   user_id: 6,
#   goal: 1000,
#   title: "Camp 9",
#   slogan: "Support Campaign 9",
#   city: "Budapest",
#   country: "Hungary",
#   start_date: "06-01-2018",
#   end_date: "08-01-2018",
#   square_image: File.open("app/assets/images/camp9/9.jpeg"),
#   overview_image: File.open("app/assets/images/camp9/99.jpeg"),
#   carousel_image: File.open("app/assets/images/camp9/999.jpeg"),
#   vid_url: "https://www.youtube.com/embed/KshBUgq36jU",
#   overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
#   story: "Why do we use it?
#   It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
# })
#
# Reward.create({
#   campaign_id: j.id,
#   price: 20,
#   title: "Perk 1",
#   item: "Camp 9 Reward 3",
#   description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
# })
#
# Reward.create({
#   campaign_id: j.id,
#   price: 59,
#   title: "Perk 2",
#   item: "Camp 9 Reward 2",
#   description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
# })
#
# Reward.create({
#   campaign_id: j.id,
#   price: 69,
#   title: "Perk 3",
#   item: "Camp 9 Reward 3",
#   description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
# })
#
# k = Campaign.create({
#   user_id: 1,
#   goal: 1000,
#   title: "Camp 10",
#   slogan: "Support Campaign 10",
#   city: "Budapest",
#   country: "Hungary",
#   start_date: "06-01-2018",
#   end_date: "08-01-2018",
#   square_image: File.open("app/assets/images/camp10/10.jpeg"),
#   overview_image: File.open("app/assets/images/camp10/100.jpeg"),
#   carousel_image: File.open("app/assets/images/camp10/1000.jpeg"),
#   vid_url: "https://www.youtube.com/embed/ebPkbovnS6w",
#   overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
#   story: "Why do we use it?
#   It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
# })
#
# Reward.create({
#   campaign_id: k.id,
#   price: 20,
#   title: "Perk 1",
#   item: "Camp 10 Reward 1",
#   description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
# })
#
# Reward.create({
#   campaign_id: k.id,
#   price: 59,
#   title: "Perk 2",
#   item: "Camp 10 Reward 2",
#   description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
# })
#
# Reward.create({
#   campaign_id: k.id,
#   price: 69,
#   title: "Perk 3",
#   item: "Camp 10 Reward 3",
#   description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
# })
