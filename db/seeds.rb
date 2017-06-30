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
  { username: 'miu2', password: 'miumiumiu',first_name: 'Mr. Miu 2', last_name: 'Miu Miu2', email: 'miumiu2@gmail.com'}
  ])

Campaign.create({
  user_id: 3,
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
  campaign_id: 1,
  price: 287,
  title: "KOOV Starter Early Bird 2",
  item: "KOOV Starter Kit",
  description: "1 KOOV Starter kit at 20% off retail. Includes: * KOOV Core micro controller * 172 Blocks & Accessories * 15 Electronic parts * 14 Robot Recipes * Free access to 2 KOOV Learning Courses * Free access to KOOV Robot Recipe sharing"
})

Reward.create({
  campaign_id: 1,
  price: 300,
  title: "KOOV Adv Early Bird 2",
  item: "KOOV Advance Kit",
  description: "1 KOOV Advanced kit at 30% off retail. Includes: * KOOV Core micro controller * 302 Blocks & Accessories * 23 Electronic parts * 23 Robot Recipes * Free access to 2 KOOV Learning Courses * Free access to KOOV Robot Recipe sharing"
})

Reward.create({
  campaign_id: 1,
  price: 300,
  title: "KOOV Adv Early Bird 4",
  item: "KOOV Advance Early Bird Kit",
  description: "1 KOOV Advanced kit at 20% off retail. Includes: * KOOV Core micro controller * 302 Blocks & Accessories * 23 Electronic Parts * 23 Robot Recipes * Free access to 2 KOOV Learning Courses * Free access to KOOV Robot Recipe sharing"
})
