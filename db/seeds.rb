# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

a = User.create([
  { username: 'shao', password: 'shaoshao', first_name: 'shao', last_name: 'wu', email: 'shao@gmail.com'},
  { username: 'aaa', password: 'asdasdasd',first_name: 'Mr. A', last_name: 'bb', email: 'b@gmail.com'},
  { username: 'miu', password: 'miumiumiu',first_name: 'Mr. Miu', last_name: 'Miu Miu', email: 'miumiu@gmail.com'},
  { username: 'miu2', password: 'miumiumiu',first_name: 'Mr. Miu 2', last_name: 'Miu Miu2', email: 'miu2@gmail.com'},
  { username: 'cool', password: 'miumiumiu',first_name: 'Mr. Miu 2', last_name: 'Miu Miu2', email: 'miu@gmail.com'},
  { username: 'not cool', password: 'miumiumiu',first_name: 'Mr. Miu 2', last_name: 'Miu Miu2', email: 'mium@gmail.com'},
  { username: 'okay cool', password: 'miumiumiu',first_name: 'Mr. Miu 2', last_name: 'Miu Miu2', email: 'miu@gmail.com'}
  ])

a = Campaign.create({
  user_id: 1,
  goal: 400000,
  title: "KOOV",
  slogan: "Next Generation Coding & Robotics Kit",
  city: "San Diego",
  country: "United States",
  start_date: "6/27/2017",
  end_date: "7/26/2017",
  square_image: File.open("app/assets/images/camp1/1.png"),
  overview_image: File.open("app/assets/images/camp1/2.png"),
  vid_url: "https://www.youtube.com/embed/4ooLRSAvIks",
  overview: "The all-in-one coding, robotics and design kit for the next generation of innovators from Sony.",
  story: "KOOV is the next generation of coding & robotics kits - a comprehensive solution for STEM education.
  We believe that engaging educational materials for robotics and programming will play a major role in cultivating STEM literacy and nurturing the next generation of creative problem solvers. That is why we built KOOV - on the belief that STEM learning tools should be accessible to all children. The coding & robotics kit for the innovators of tomorrow brought to you by Sony Electronics in conjunction with Sony Global Education.  KOOV comes with everything your child needs to start building robots, make them move with code and share them with other young inventors from across the globe.
  Build using colorful KOOV blocks
  Add sensors, actuators and much more for almost limitless robotic combinations
  Make the robot come alive by coding with the KOOV app
  Share robots with other KOOVers around the world.
  Perfect for those aged 8 and up
  Combining this with a comprehensive, 30+ hour educational course focussing on coding, robotics and design, KOOV is the perfect place for children to enter this exciting space. We all know that our children face an exciting future, with a demand for skills that may not currently be a part of existing curricula.  KOOV helps develop 21st Century Skills; creativity, critical thinking, collaboration and communication, setting them up with the kind of abilities they need for this ever-changing landscape.",
})

Reward.create({
  campaign_id: a.id,
  price: 287,
  title: "KOOV Starter Early Bird 2",
  item: "KOOV Starter Kit",
  description: "1 KOOV Starter kit at 20% off retail. Includes: * KOOV Core micro controller * 172 Blocks & Accessories * 15 Electronic parts * 14 Robot Recipes * Free access to 2 KOOV Learning Courses * Free access to KOOV Robot Recipe sharing"
})

Reward.create({
  campaign_id: a.id,
  price: 300,
  title: "KOOV Adv Early Bird 2",
  item: "KOOV Advance Kit",
  description: "1 KOOV Advanced kit at 30% off retail. Includes: * KOOV Core micro controller * 302 Blocks & Accessories * 23 Electronic parts * 23 Robot Recipes * Free access to 2 KOOV Learning Courses * Free access to KOOV Robot Recipe sharing"
})

Reward.create({
  campaign_id: a.id,
  price: 300,
  title: "KOOV Adv Early Bird 4",
  item: "KOOV Advance Early Bird Kit",
  description: "1 KOOV Advanced kit at 20% off retail. Includes: * KOOV Core micro controller * 302 Blocks & Accessories * 23 Electronic Parts * 23 Robot Recipes * Free access to 2 KOOV Learning Courses * Free access to KOOV Robot Recipe sharing"
})

b = Campaign.create({
  user_id: 3,
  goal: 10000,
  title: "The Mindbody Connection",
  slogan: "Overcoming Chronic Pain",
  city: "Boulder",
  country: "United States",
  start_date: "6/27/2017",
  end_date: "7/26/2017",
  square_image: File.open("app/assets/images/camp2/1.png"),
  overview_image: File.open("app/assets/images/camp2/2.png"),
  vid_url: "https://www.youtube.com/embed/gyo3gUl70HM",
  overview: "A brain imaging study investigating a new mindbody approach for the treatment of chronic pain.",
  story: "With rising healthcare costs and opioid use at an all-time high, our country is in desperate need of new treatments for chronic pain.Cutting edge research is giving us a new understanding of this condition, and shining a light on why current treatments for chronic pain are largely ineffective.A brain imaging study showing the effectiveness of a mindbody approach can lead to a fundamental shift in the way that chronic pain is treated. The medical establishment treats chronic pain as though the problem is in the body. On the surface, this makes sense. If a patient's back hurts, it's reasonable to treat their back.But new research is showing that many forms of chronic pain are not caused by physical problems in the body, but rather learned neural pathways in the brain. And just as this pain can be learned, it can be unlearned.Mindbody treatment has been shown to be effective in preliminary research and in clinical practice, but has yet to be embraced as a mainstream treatment for chronic pain.  The medical establishment is slow to change.  In order to shift the way that chronic pain is treated, we'll need compelling evidence in the form of scientific studies. And that is the purpose of this campaign. We are raising funds for a study set to take place at the University of Colorado Boulder between July and September.  The study will involve 90 chronic back pain patients: 30 patients will be treated with a mindbody approach, 30 patients will receive a placebo injection, and another 30 patients will receive no treatment at all.  All 90 patients will undergo fMRI brain scans both before and after treatment to objectively assess the changes in pain for members of each group.",
})

Reward.create({
  campaign_id: b.id,
  price: 20,
  title: "Mindfulness Meditation (Audio)",
  item: "Meditation (Audio)",
  description: "A mindfulness meditation exercise created by Howard Schubiner."
})

Reward.create({
  campaign_id: b.id,
  price: 40,
  title: "Muscle Relaxation (Audio)",
  item: "Muscle Relaxation (Audio), Meditation (Audio)",
  description: "A progressive muscle relaxation exercise created by Alan Gordon, plus previous reward."
})

Reward.create({
  campaign_id: b.id,
  price: 50,
  title: "Self-Care (Audio)",
  item: "Self-Care (Audio), All Other Previous Rewards",
  description: "In addition to a mindfulness meditation and a progressive muscle relaxation exercise, you will receive sample sessions on the topic of generating self-compassion, soothing your inner child, and improving self-esteem."
})

Reward.create({
  campaign_id: b.id,
  price: 60,
  title: "Unlearn Your Pain (Book)",
  item: "Unlearn Your Pain (Book), All Other Previous Rewards",
  description: "Howard Schubiner's book, Unlearn Your Pain will guide readers through a step-by-step approach to recovery."
})

Reward.create({
  campaign_id: b.id,
  price: 75,
  title: "Feeling Emotions (Live class)",
  item: "Feeling Emotions (Live Class), All Other Previous Rewards",
  description: "Howard Schubiner will be leading a live, interactive group discussion (online), on the topic of how to better access emotions."
})

Reward.create({
  campaign_id: b.id,
  price: 100,
  title: "Random Act of Kindness",
  item: "Overcoming Pain (Live Class), All Other Previous Rewards",
  description: "Not interested in perks but want to help the project? Your selflessness is admirable and your generosity is much appreciated! Thank you for your random act of kindness!"
})


c = Campaign.create({
  user_id: 4,
  goal: 5000,
  title: "CozyTap",
  slogan: "Next Generation Computer Interface",
  city: "Budapest",
  country: "Hungary",
  start_date: "6/27/2017",
  end_date: "7/26/2017",
  square_image: File.open("app/assets/images/camp3/1.png"),
  overview_image: File.open("app/assets/images/camp3/2.png"),
  vid_url: "https://www.youtube.com/embed/B3w4_gypTYc",
  overview: "Elevating human-computer interaction to a new, more efficient and more comfortable level.",
  story: "We have all seen people struggle with laptops where desk space is limited, in a conference room, on an airplane. Using a clumsy mouse or touchpad is no fun there. Imagine we could control the mouse cursor with an elegant whoosh of the hand. Right above the keyboard, if we were just typing. Mobile and VR revolutions have come, but laptops have remained our loyal companions in everyday productive work and overnight gaming. Let them sense our intentions comfortably with CozyTap!",
})

Reward.create({
  campaign_id: c.id,
  price: 39,
  title: "CozyTap Standard",
  item: "CozyTap Classic Color + Box",
  description: "Be among the first people in the world to revolutionize computer interfacing and receive a CozyTap in basic color (Black, White or Green). Your contribution is greatly appreciated!"
})

Reward.create({
  campaign_id: c.id,
  price: 49,
  title: "CozyTap Creative",
  item: "CozyTap Classic Color + Box, Kit for creating new gestures",
  description: "Be among the first people in the world to revolutionize computer interfacing and receive a CozyTap in basic color (Black, White or Green). Your contribution is greatly appreciated!"
})

Reward.create({
  campaign_id: c.id,
  price: 59,
  title: "CozyTap Unique Color",
  item: "CozyTap Unique Color + Box",
  description: "Be among the first people in the world to revolutionize computer interfacing and receive a CozyTap in your unique choices of colors (both body and logo). Your contribution is greatly appreciated!"
})

d = Campaign.create({
  user_id: 5,
  goal: 5000,
  title: "The Perfect Notebook",
  slogan: "One notebook to replace the productivity apps that have failed you. It’s so simple it’s brilliant.",
  city: "Budapest",
  country: "Hungary",
  start_date: "6/27/2017",
  end_date: "7/26/2017",
  square_image: File.open("app/assets/images/camp4/1.png"),
  overview_image: File.open("app/assets/images/camp4/2.png"),
  vid_url: "https://www.youtube.com/embed/Q9beTebBhkc",
  overview: "A notebook and a task manager designed to help you achieve your goals and good work-life balance, using a four-step system: PLAN, ACT, MONITOR, REFLECT.",
  story: "Plan your BIG BLOCK goals for the next two-week cycle. A “BIG BLOCK” is a personal or professional task or goal requiring more than one day to complete, and can be broken down into a few daily tasks. Add to your daily task manager a few small tasks that will get you closer to finishing A BIG BLOCK task.Then, add all your other tasks to the daily task manager according to their priority. Now, act and complete your tasks. Cross completed tasks in the daily task manager and mark your progress in the BIG BLOCKS dashboard, and gain a visual graph of your focus for the period. At the end of a cycle, use the REFLECTION page to learn how you can improve your next cycle.Did you achieve your goals or not? If yes, how will you maintain them? If no, how can you improve? Why didn't you achieve your goals?"
})

Reward.create({
  campaign_id: d.id,
  price: 34,
  title: "ONE PERFECT NOTEBOOK",
  item: "ONE PERFECT NOTEBOOK",
  description: "One Perfect Notebook including the daily task manager pages (40 sheets, 80 pages), the “Big Blocks” system (10 sheets, 20 pages), a ruled notepad (40 sheets, 80 pages) and two ruler bookmark."
})

Reward.create({
  campaign_id: d.id,
  price: 46,
  title: "ONE PERFECT PACK",
  item: "ONE PERFECT PACK",
  description: "One Perfect Notebook, plus 3 refills to keep the notebook going for longer."
})


e = Campaign.create({
  user_id: 6,
  goal: 5000,
  title: "AirLink",
  slogan: "Make Your Headphones Wireless",
  city: "Budapest",
  country: "Hungary",
  start_date: "6/27/2017",
  end_date: "7/26/2017",
  square_image: File.open("app/assets/images/camp5/1.png"),
  overview_image: File.open("app/assets/images/camp5/2.png"),
  vid_url: "https://www.youtube.com/embed/0WQexSll5UY",
  overview: "The only Bluetooth adapter with Hi-Fi Sound. Built-in Mic. Camera Shutter. Sync & Share function.",
  story: "AirLink is the best solution to make your wired headphones adapt to smartphones without headphone jacks. It adds Bluetooth connectivity to any audio device and lets you stream music wirelessly with 24bit Hi-Fi sound. The control system makes volume control, calls answering, virtual assistant control and picture taking easier than ever before. You can also sync and share the audio with your friends. Enjoy it with only half of the market price. Meet AirLink, the world's first Hi-Fi sound Bluetooth adapter with remote control, that can evolve your wired earphones/headphones into wireless and promise you 24bit Hi-Fi sound in your favorite headphones. It adds new features to upgrade your wired headphones. Your old wired headphone might be your prized possession but requires a 3.5mm jack to use on the new smartphone. AirLink lifts you out from this dilemma and makes your wired headphones into wireless. Clipped AirLink on your shirt,  AirLink lets you walk around without tangled cords, even charge your phone while listening to the music.  Running? Hiking? Any other outdoor activities? As the very best companion for working out, AirLink provides the most convenient solution with its short cords. No more tangling with the jungle of cords."
})

Reward.create({
  campaign_id: e.id,
  price: 22,
  title: "Add-on - Premium Earphone",
  item: "Short-Cord Earphone",
  description: "Save 44% off $39 Retail Price and get ONE(1) AirLink Customized Short-Cord Earphone. This premium earphone works perfectly with AirLink Adapter. No tangle wires, more freedom."
})

Reward.create({
  campaign_id: e.id,
  price: 29,
  title: "Early Bird - 1× AirLink",
  item: "AirLink Bluetooth Adapter",
  description: "Save 26% off the $39 Retail Price and Get ONE(1) AirLink Bluetooth Adapter! Available in Black and White colors. Shipping Worldwide."
})

Reward.create({
  campaign_id: e.id,
  price: 49,
  title: "Early Bird - 1x Sport Pack",
  item: "AirLink Bluetooth Adapter, Micro USB Charging Cable, 3.5mm AUX Cable, Short-Cord Earphone",
  description: "Save 37% off the $78 Retail Price. This pack includes ONE(1) AirLink Bluetooth Adapter & ONE(1) Short-Cord Earphone, making you more convenient for exercise and other daily uses. Available in Black and White colors. Shipping Worldwide."
})

Reward.create({
  campaign_id: e.id,
  price: 89,
  title: "2x Sport Pack",
  item: "AirLink Bluetooth Adapter (2), Micro USB Charging Cable (2), 3.5mm AUX Cable (2), Short-Cord Earphone (2)",
  description: "Save 43% off the $156 Retail Price. These packs include TWO(2) AirLink Bluetooth Adapters & TWO(2) Customized Short-Cord Earphones. Enjoy outdoor time wirelessly with your friend. Available in Black and White colors. Shipping Worldwide."
})




f = Campaign.create({
  user_id: 7,
  goal: 1000,
  title: "LAER",
  slogan: "A Laptop Sleeve To Charge All Your Devices",
  city: "Budapest",
  country: "Hungary",
  start_date: "6/27/2017",
  end_date: "7/26/2017",
  square_image: File.open("app/assets/images/camp6/1.png"),
  overview_image: File.open("app/assets/images/camp6/2.png"),
  vid_url: "https://www.youtube.com/embed/nRfjWVx-5kI",
  overview: "USB-C, Tracking, DC, USB Quick Charge, Swappable Battery Size, QI Wireless Charging, App Controlled.",
  story: "We spent the last year creating LAER (pronounced layer) to simplify your life. It's a bluetooth enabled laptop sleeve that replaces all chargers, adapters, cables, portable batteries, wireless charging pads with one compact device made for travel and working on the go. Features include DC charging for PC and Mac (MagSafe), USB-C Power Delivery, USB Quick Charge, QI wireless charging, switchable battery capacity, adapters for all countries, controlled via app, and tracking with TrackR. Creativity and productivity doesn’t just happen at your desk anymore. Ideas are shaped on the go in airports, classrooms, and coffee shops. When you’re on the move you don’t need to see flashing battery icons and 10% notifications. Now more than ever you need power that moves with you. We’ve made LAER for this purpose. It’s a bluetooth enabled laptop sleeve which can charge your laptop (PC & Mac), smartphone and tablet simultaneously wherever you are. It has wireless charging, tracking with TrackR, and USB-C - so instead of having to pack chargers, adapters and power banks, you just bring LAER. We designed a composite material specially for LAER allowing the sleeve to be durable, and lightweight. The outer material is a nylon fabric chosen for its durability and aesthetic, the padding is a dense foam to protect your laptop from impact, and the inner fabric is a soft material to protect from scratches."
})

Reward.create({
  campaign_id: f.id,
  price: 35,
  title: "EARLY BIRD PRICE WiFi 35% OFF",
  item: "BUILT-IN WiFi & LIPO BATTERY",
  description: "Add-on Module: Built-in WiFi & 1200mAh LIPO Battery Turn your VastStick into a Wireless Hotspot, Home Cloud or Media Center. This Perk can be used as stand-alone HotSpot or as an Add-on to a VastStick Unit."
})

Reward.create({
  campaign_id: f.id,
  price: 149,
  title: "EARLY BIRD PRICE 64GB 35% OFF",
  item: "64 GigaByte VastStick",
  description: "VastStick Stand-Alone Unit With 64GB Data Storage Capacity includes 8 x 8GB microSD Cards Expandable to 4TB. Save or Backup All your Videos, Movies, Images, Programs and Files."
})

Reward.create({
  campaign_id: f.id,
  price: 160,
  title: "EARLY BIRD BUNDLE VS/Wifi 35%",
  item: "BUILT-IN WiFi & LIPO BATTERY, VastStick Stand Alone Unit",
  description: "VastStick Stand-Alone Unit Not populated with any microSD Cards 16 x microSD Cards Slots Start with as small as 8GB Expandable to 4TB of Data Storage Capacity Save or Backup All your Videos, Movies, Images, Programs and Files. + Built-in WiFi & 1200mAh LIPO Battery Make the VastStick your Wireless Hotspot, Home Cloud & Media Center All-in-One."
})

g = Campaign.create({
  user_id: 7,
  goal: 1000,
  title: "LAER",
  slogan: "A Laptop Sleeve To Charge All Your Devices",
  city: "Budapest",
  country: "Hungary",
  start_date: "6/27/2017",
  end_date: "7/26/2017",
  square_image: File.open("app/assets/images/camp7/1.png"),
  overview_image: File.open("app/assets/images/camp7/2.png"),
  vid_url: "https://www.youtube.com/embed/FsHXblckruY",
  overview: "USB-C, Tracking, DC, USB Quick Charge, Swappable Battery Size, QI Wireless Charging, App Controlled.",
  story: "We spent the last year creating LAER (pronounced layer) to simplify your life. It's a bluetooth enabled laptop sleeve that replaces all chargers, adapters, cables, portable batteries, wireless charging pads with one compact device made for travel and working on the go. Features include DC charging for PC and Mac (MagSafe), USB-C Power Delivery, USB Quick Charge, QI wireless charging, switchable battery capacity, adapters for all countries, controlled via app, and tracking with TrackR. Creativity and productivity doesn’t just happen at your desk anymore. Ideas are shaped on the go in airports, classrooms, and coffee shops. When you’re on the move you don’t need to see flashing battery icons and 10% notifications. Now more than ever you need power that moves with you. We’ve made LAER for this purpose. It’s a bluetooth enabled laptop sleeve which can charge your laptop (PC & Mac), smartphone and tablet simultaneously wherever you are. It has wireless charging, tracking with TrackR, and USB-C - so instead of having to pack chargers, adapters and power banks, you just bring LAER. We designed a composite material specially for LAER allowing the sleeve to be durable, and lightweight. The outer material is a nylon fabric chosen for its durability and aesthetic, the padding is a dense foam to protect your laptop from impact, and the inner fabric is a soft material to protect from scratches."
})

Reward.create({
  campaign_id: g.id,
  price: 140,
  title: "LAER PRO Super Early Bird",
  item: "LAER Laptop Sleeve, 5,000 mAh battery, 20,000 mAh battery",
  description: "SAVE 30% off RRP with this super early bird discount"
})

Reward.create({
  campaign_id: g.id,
  price: 160,
  title: "LAER TRAVELER Super Early Bird",
  item: "LAER Laptop Sleeve, 5,000 mAh battery, 20,000 mAh battery, LAER Sling Bag",
  description: "SAVE 30% off RRP with this super early bird discount"
})

Reward.create({
  campaign_id: g.id,
  price: 260,
  title: "LAER PRO DUO Super Early Bird",
  item: "LAER Laptop Sleeve (2), 5,000 mAh battery (2), 20,000 mAh battery (2)",
  description: "SAVE 30% off RRP with this super early bird discount"
})

h = Campaign.create({
  user_id: 1,
  goal: 1000,
  title: "Zeppy",
  slogan: "Your Sound-Buddy",
  city: "Budapest",
  country: "Hungary",
  start_date: "6/27/2017",
  end_date: "7/26/2017",
  square_image: File.open("app/assets/images/camp8/1.png"),
  overview_image: File.open("app/assets/images/camp8/2.png"),
  vid_url: "https://www.youtube.com/embed/BQ5ZDmgXU4Y",
  overview: "The highest quality FLOATING Bluetooth speaker and MUCH MORE. Check out how",
  story: "Zeppy is the highest quality floating bluetooth speaker, but also much more: Zeppy's team embarked on a mission to change the way we experience music. For the first time ever in HiFi history, materials are used that transmit sound waves to your body or water. Now you can feel the music. Water- and saltwater proof, floatable and light weight - all along with incredible stereo sound, optimized for 6 different use cases by Bongiovi's sound experts. Up to 8 Zeppys can be paired to distribute the sound. A true Sound-Buddy for every situation, that will change the way you listen to music forever. Together with Bongiovi Acoustics’ engineers, six specific sound profiles were created utilizing the patented Digital Power Station™ technology. Sound is optimized in real-time for these use cases. Zeppy's design and material allow us to transmit sound waves to the water or your body! Listen and see for yourself how this looks like in water. The song played is by Axel Wolph. Pair up to 8 Zeppys wirelessly to amplify your music and share it across different rooms and areas. Simply place one Zeppy on top of the other, and the tune is automatically synchronized. The integrated circuit on the membrane makes this pairing process so easy. Zeppy is perfectly engineered with a completely new approach in design and material, resulting in seven submitted patents. Creating a unique audio experience to touch all of your senses. Designed in Austria, made in Germany and thought-out to the smallest detail by renowned designer Johannes Scherr. We use ARPRO, a material never used before in HiFi history to achieve the sound quality and versatility, we were aiming for. Its properties let Zeppy transmit sound waves to other surfaces like your body or water. ARPRO consists of 96% air which makes it extremely lightweight, and lets Zeppy even float. Used in the automotive industry to improve vehicle safety it withstands multiple impacts without damage. This makes Zeppy very robust."
})

Reward.create({
  campaign_id: h.id,
  price: 79,
  title: "One Zeppy - Launch Special",
  item: "ZEPPY",
  description: "Get 1 x Zeppy including the Loop for only 79€. Save 60% from the 199€ retail price. Zeppy is available in the colors Black, Silver and Rainbow."
})

Reward.create({
  campaign_id: h.id,
  price: 89,
  title: "One Zeppy - Super Early Bird",
  item: "ZEPPY",
  description: "Get 1 x Zeppy including the Loop for only 89€. Save 55% from the 199€ retail price. Zeppy is available in the colors Black, Silver and Rainbow."
})

Reward.create({
  campaign_id: h.id,
  price: 158,
  title: "Two Zeppys - Launch Special",
  item: "ZEPPY (2)",
  description: "Get 2 x Zeppy including the Loop for only 79€ each. Save 60% from the 398€ retail price. Zeppy is available in the colors Black, Silver and Rainbow."
})

j = Campaign.create({
  user_id: 6,
  goal: 1000,
  title: "intelliPLUG",
  slogan: "your friendly Wi-Fi Smart Plug",
  city: "Budapest",
  country: "Hungary",
  start_date: "6/27/2017",
  end_date: "7/26/2017",
  square_image: File.open("app/assets/images/camp9/1.png"),
  overview_image: File.open("app/assets/images/camp9/2.png"),
  vid_url: "https://www.youtube.com/embed/51hRR61Bkfo",
  overview: "App Enabled Smart Plug, No Hub Required, Control Anything From Anywhere, Works w/Alexa & Google Home",
  story: "intelliPLUG is a sleek,  affordable, wi-fi enabled smart plug that allows you to control your lights, appliances & any plugged-in device directly from your smartphone or tablet, anywhere in the world! Through the app you can turn on/off plugs, set timers and schedule plugs to turn on & off automatically. Use Amazon Alexa or Google Home?  Connect your intellIPLUG and you’ll able to access all the features with nothing but the sound of your voice. Smart Home for Everyone! Premium features- Amazon Alexa integration, UL certification, automatic upgrades as new features are implemented; you're all set with intelliPLUG. User-friendliness- Download the app, plug in the intelliPLUG, and go from zero to smart-home in less than 60 seconds! Affordability. - intelliPLUG is the most competitively priced smart plug on the market, so go wild, grab a bunch, and turn your home into a smart-house haven! intelliPLUG is perfect for controlling devices without having to manually switch it on or off. Compact and designed around modern lifestyles, intelliPLUG doesn’t block off adjacent sockets, while its neutral color and minimal form blend in completely with indoor environments. It’s sturdy, built to last and remarkably easy to set up, and has been conceived and designed as a low-cost solution to turn everyday electronic devices into smart appliances."
})

Reward.create({
  campaign_id: j.id,
  price: 10,
  title: "Thank you! Every bit counts!",
  item: "A Heartfelt Thank You",
  description: "Thank you! Every bit counts and we mean it! We'll even post a public thank you to you on our Indiegogo and on social media."
})

Reward.create({
  campaign_id: j.id,
  price: 30,
  title: "A Made For You Snack",
  item: "A Heartfelt Thank You, A Thank You Snack",
  description: "We're so thankful we're writing you a thank you note, which you can bring to the restaurant and redeem for a complimentary snack made specifically for you by our chef!"
})

Reward.create({
  campaign_id: j.id,
  price: 50,
  title: "Kanpai with Chef Soma",
  item: "A Heartfelt Thank You,A Thank You Snack, Kanpai with Chef",
  description: "Bring in our heartfelt, handwritten thank you note for a special snack made and delivered by chef along with a complimentary glass of sake. We'll make chef Soma say thanks with a big hug, which will be a slight torture for her and worth every penny!"
})

k = Campaign.create({
  user_id: 1,
  goal: 1000,
  title: "Kamonegi",
  slogan: "Handmade Soba and Traditional Tempura",
  city: "Budapest",
  country: "Hungary",
  start_date: "6/27/2017",
  end_date: "7/26/2017",
  square_image: File.open("app/assets/images/camp10/1.png"),
  overview_image: File.open("app/assets/images/camp10/2.png"),
  vid_url: "https://www.youtube.com/embed/LB6q5uJVtes",
  overview: "Help Kamonegi bring traditional soba and tempura to Seattle",
  story: "Kamonegi, the first pop-up series in the nation to highlight handmade soba, has found its brick and mortar location in Seattle's Fremont-Wallingford neighborhood. Kamonegi the restaurant will be unique in its offerings, making Seattle home to one of the few restaurants in the nation focused on buckwheat noodles, soba, made by hand in the nihachi style - 80 percent buckwheat and 20 percent flour, and seasonal tempura featuring the region's heirloom, organic, and foraged produce. Kamonegi, founded by Chef Mutsuko Soma. started as a series of pop-ups along the west coast, but having a restaurant has always been a goal for Soma, who worked as a chef in many Seattle restaurants before returning to Japan to study soba making. There, she learned that Washington state was among the highest producers of buckwheat in the U.S. and made the decision to bring and promote the art of soba making to the United States, specifically Seattle. The name Kamonegi refers to a harmonious culinary pairing of duck and leek, or more specifically, a duck bringing you a leek which symbolizes the good luck of one good thing that brings another. Kamonegi the restaurant will continue to focus on handmade soba along with craft tempura, two classic dishes born out of Japan's Edo period. Your support of our campaign will help bring two currently underrepresented facets of Japanese cuisine to the Pacific Northwest and support a small neighborhood restaurant with wholesome food and a family friendly atmosphere. "
})

Reward.create({
  campaign_id: k.id,
  price: 10,
  title: "Thank you! Every bit counts!",
  item: "A Heartfelt Thank You",
  description: "Thank you! Every bit counts and we mean it! We'll even post a public thank you to you on our Indiegogo and on social media."
})

Reward.create({
  campaign_id: k.id,
  price: 30,
  title: "A Made For You Snack",
  item: "A Heartfelt Thank You, A Thank You Snack",
  description: "We're so thankful we're writing you a thank you note, which you can bring to the restaurant and redeem for a complimentary snack made specifically for you by our chef!"
})

Reward.create({
  campaign_id: k.id,
  price: 50,
  title: "Kanpai with Chef Soma",
  item: "A Heartfelt Thank You,A Thank You Snack, Kanpai with Chef",
  description: "Bring in our heartfelt, handwritten thank you note for a special snack made and delivered by chef along with a complimentary glass of sake. We'll make chef Soma say thanks with a big hug, which will be a slight torture for her and worth every penny!"
})
