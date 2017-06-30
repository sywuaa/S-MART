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
  { username: 'miu', password: 'miumiumiu',first_name: 'Mr. Miu', last_name: 'Miu Miu', email: 'miumiu@gmail.com'}
  ])

b = Campaign.create({
  user_id: 3,
  goal: 30000,
  title: "HEXAGON - Camera",
  slogan: "With a full HD camera, power bank, crash sensor, & more HEXAGON is the ultimate safety device.",
  city: "Hollywood",
  country: "United States",
  vid_url: "https://www.youtube.com/embed/V51YhDyukVg",
  overview: "With a revolutionary Full HD (1080p/720p)  rear-view camera, smart sensors, and a complementary app, HEXAGON is the ultimate safety device for cyclists. Our streaming camera, power bank, activity tracker, odometer, and other smart safety features will be sure to make your ride safe and connected. Let HEXAGON change the way you ride.",
  story: "HEXAGON makes any bike a safer and smarter by seamlessly connecting with your smartphone. View the traffic behind you, live stream your ride, & signal to cars all through smartphone integration. With our rear-facing camera, you can view traffic & stream your ride.HEXAGON has Automatic Stop, Turn, and Motion signals.iOS & Android app with activity tracker, navigation system, and more.Award-winning cyclist, Vittorio Brumotti, loves HEXAGON. Check out the video below to hear Vittorios stamp of approval!HEXAGON is equipped with a rear-facing HD camera, Automatic Stop, Turn, and Motion signals. To navigate the turn signals, HEXAGON comes with a wireless remote that securely attaches to your handle bars. HEXAGONs social and recording features can be managed through the HEXAGON app.HEXAGON comes with two 18650 batteries and can easily be recharged with the complimentary Micro-USB cable. HEXAGON Light has all the great features of HEXAGON, minus the turn signals and the Wireless Remote Control. This slimmed down model has the same rear-facing HD camera, Automatic Stop, and Motion signals. All of HEXAGON Lights features and settings can be managed through the HEXAGON app, so there's no need for the remote!  HEXAGON Light comes with two 18650 batteries and can easily be recharged with the complimentary Micro-USB cable. ",
})
