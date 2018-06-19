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
  title: "Camp 1",
  slogan: "Support Campaign 1",
  city: "MIAMI BEACH",
  country: "United States",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp1/1.jpeg"),
  overview_image: File.open("app/assets/images/camp1/11.jpeg"),
  carousel_image: File.open("app/assets/images/camp1/111.jpeg"),
  vid_url: "https://www.youtube.com/embed/dWja_zn_ftc",
  overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  story: "Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
})

Reward.create({
  campaign_id: a.id,
  price: 20,
  title: "Perk 1",
  item: "Camp 1 Reward 1",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: a.id,
  price: 59,
  title: "Perk 2",
  item: "Camp 1 Reward 2",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: a.id,
  price: 69,
  title: "Perk 3",
  item: "Camp 1 Reward 3",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

b = Campaign.create({
  user_id: 3,
  goal: 10000,
  title: "Camp 2",
  slogan: "Support Campaign 2",
  city: "Boulder",
  country: "United States",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp2/2.jpeg"),
  overview_image: File.open("app/assets/images/camp2/22.jpeg"),
  carousel_image: File.open("app/assets/images/camp2/222.jpeg"),
  vid_url: "https://www.youtube.com/embed/gyo3gUl70HM",
  overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  story: "Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
})

Reward.create({
  campaign_id: b.id,
  price: 20,
  title: "Perk 1",
  item: "Camp 2 Reward 1",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: b.id,
  price: 59,
  title: "Perk 2",
  item: "Camp 2 Reward 2",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: b.id,
  price: 69,
  title: "Perk 3",
  item: "Camp 2 Reward 3",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})


c = Campaign.create({
  user_id: 4,
  goal: 5000,
  title: "Camp 3",
  slogan: "Support Campaign 3",
  city: "Budapest",
  country: "Hungary",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp3/3.jpeg"),
  overview_image: File.open("app/assets/images/camp3/33.jpeg"),
  carousel_image: File.open("app/assets/images/camp3/333.jpeg"),
  vid_url: "https://www.youtube.com/embed/JcR1_PPbhTk",
  overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  story: "Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
})

Reward.create({
  campaign_id: c.id,
  price: 20,
  title: "Perk 1",
  item: "Camp 3 Reward 1",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: c.id,
  price: 59,
  title: "Perk 2",
  item: "Camp 3 Reward 2",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: c.id,
  price: 69,
  title: "Perk 3",
  item: "Camp 3 Reward 3",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

d = Campaign.create({
  user_id: 5,
  goal: 5000,
  title: "Camp 4",
  slogan: "Support Campaign 4",
  city: "Budapest",
  country: "Hungary",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp4/4.jpeg"),
  overview_image: File.open("app/assets/images/camp4/44.jpeg"),
  carousel_image: File.open("app/assets/images/camp4/444.jpeg"),
  vid_url: "https://www.youtube.com/embed/FDZX1z-yn7w",
  overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  story: "Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
})

Reward.create({
  campaign_id: d.id,
  price: 20,
  title: "Perk 1",
  item: "Camp 4 Reward 1",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: d.id,
  price: 59,
  title: "Perk 2",
  item: "Camp 4 Reward 2",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: d.id,
  price: 69,
  title: "Perk 3",
  item: "Camp 4 Reward 3",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})


e = Campaign.create({
  user_id: 6,
  goal: 5000,
  title: "Camp 5",
  slogan: "Support Campaign 5",
  city: "Budapest",
  country: "Hungary",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp5/5.jpeg"),
  overview_image: File.open("app/assets/images/camp5/55.jpeg"),
  carousel_image: File.open("app/assets/images/camp5/555.jpeg"),
  vid_url: "https://www.youtube.com/embed/pd66pmgO3f8",
  overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  story: "Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
})

Reward.create({
  campaign_id: e.id,
  price: 20,
  title: "Perk 1",
  item: "Camp 5 Reward 1",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: e.id,
  price: 59,
  title: "Perk 2",
  item: "Camp 5 Reward 2",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: e.id,
  price: 69,
  title: "Perk 3",
  item: "Camp 5 Reward 3",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

f = Campaign.create({
  user_id: 7,
  goal: 1000,
  title: "Camp 6",
  slogan: "Support Campaign 6",
  city: "Budapest",
  country: "Hungary",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp6/6.jpeg"),
  overview_image: File.open("app/assets/images/camp6/66.jpeg"),
  carousel_image: File.open("app/assets/images/camp6/666.jpeg"),
  vid_url: "https://www.youtube.com/embed/HzccCLaLMmw",
  overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  story: "Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
})

Reward.create({
  campaign_id: f.id,
  price: 20,
  title: "Perk 1",
  item: "Camp 6 Reward 1",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: f.id,
  price: 59,
  title: "Perk 2",
  item: "Camp 6 Reward 2",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: f.id,
  price: 69,
  title: "Perk 6",
  item: "Camp 3 Reward 3",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

g = Campaign.create({
  user_id: 7,
  goal: 1000,
  title: "Camp 7",
  slogan: "Support Campaign 7",
  city: "Budapest",
  country: "Hungary",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp7/7.jpeg"),
  overview_image: File.open("app/assets/images/camp7/77.jpeg"),
  carousel_image: File.open("app/assets/images/camp7/777.jpeg"),
  vid_url: "https://www.youtube.com/embed/4H5l-h300Fw",
  overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  story: "Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
})

Reward.create({
  campaign_id: g.id,
  price: 20,
  title: "Perk 1",
  item: "Camp 7 Reward 1",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: g.id,
  price: 59,
  title: "Perk 2",
  item: "Camp 7 Reward 2",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: g.id,
  price: 69,
  title: "Perk 3",
  item: "Camp 7 Reward 3",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

h = Campaign.create({
  user_id: 1,
  goal: 1000,
  title: "Lorem Ipsum",
  slogan: "What is Lorem Ipsum?",
  city: "Budapest",
  country: "Hungary",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp8/8.jpeg"),
  overview_image: File.open("app/assets/images/camp8/88.jpeg"),
  carousel_image: File.open("app/assets/images/camp8/888.jpeg"),
  vid_url: "https://www.youtube.com/embed/am_QS6WeWXo",
  overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  story: "Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
})

Reward.create({
  campaign_id: h.id,
  price: 20,
  title: "Perk 1",
  item: "Camp 8 Reward 1",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: h.id,
  price: 59,
  title: "Perk 2",
  item: "Camp 8 Reward 2",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: h.id,
  price: 69,
  title: "Perk 3",
  item: "Camp 8 Reward 3",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

j = Campaign.create({
  user_id: 6,
  goal: 1000,
  title: "Camp 9",
  slogan: "Support Campaign 9",
  city: "Budapest",
  country: "Hungary",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp9/9.jpeg"),
  overview_image: File.open("app/assets/images/camp9/99.jpeg"),
  carousel_image: File.open("app/assets/images/camp9/999.jpeg"),
  vid_url: "https://www.youtube.com/embed/KshBUgq36jU",
  overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  story: "Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
})

Reward.create({
  campaign_id: j.id,
  price: 20,
  title: "Perk 1",
  item: "Camp 9 Reward 3",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: j.id,
  price: 59,
  title: "Perk 2",
  item: "Camp 9 Reward 2",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: j.id,
  price: 69,
  title: "Perk 3",
  item: "Camp 9 Reward 3",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

k = Campaign.create({
  user_id: 1,
  goal: 1000,
  title: "Camp 10",
  slogan: "Support Campaign 10",
  city: "Budapest",
  country: "Hungary",
  start_date: "06-01-2018",
  end_date: "08-01-2018",
  square_image: File.open("app/assets/images/camp10/10.jpeg"),
  overview_image: File.open("app/assets/images/camp10/100.jpeg"),
  carousel_image: File.open("app/assets/images/camp10/1000.jpeg"),
  vid_url: "https://www.youtube.com/embed/ebPkbovnS6w",
  overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  story: "Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
})

Reward.create({
  campaign_id: k.id,
  price: 20,
  title: "Perk 1",
  item: "Camp 10 Reward 1",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: k.id,
  price: 59,
  title: "Perk 2",
  item: "Camp 10 Reward 2",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})

Reward.create({
  campaign_id: k.id,
  price: 69,
  title: "Perk 3",
  item: "Camp 10 Reward 3",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
})
