# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

a = User.create([
  { username: 'asd', password: 'asdasdasd', first_name: 'a', last_name: 'aa', email: 'a@gmail.com'},
  { username: 'bsd', password: 'asdasdasd',first_name: 'b', last_name: 'bb', email: 'b@gmail.com'},
  { username: 'miu', password: 'miumiumiu',first_name: 'Mr. Miu', last_name: 'Miu Miu', email: 'miumiu@gmail.com'}
  ])

b = Campaign.create([
  { user_id: 3, title: 'CarbotAnimation', goal: 100000, slogan: 'cute cartoon', overview: 'funny cartoon', city: 'new york', country: 'usa', vid_url: 'https://www.youtube.com/embed/_dehv-Kqeqs'},
  { user_id: 3, title: 'CarbotAnimation', goal: 100000, slogan: 'cute cartoon', overview: 'funny cartoon', city: 'new york', country: 'usa', vid_url: 'https://www.youtube.com/embed/_dehv-Kqeqs'},
  { user_id: 3, title: 'CarbotAnimation', goal: 100000, slogan: 'cute cartoon', overview: 'funny cartoon', city: 'new york', country: 'usa', vid_url: 'https://www.youtube.com/embed/_dehv-Kqeqs'},
  { user_id: 3, title: 'CarbotAnimation', goal: 100000, slogan: 'cute cartoon', overview: 'funny cartoon', city: 'new york', country: 'usa', vid_url: 'https://www.youtube.com/embed/_dehv-Kqeqs'},
  { user_id: 3, title: 'CarbotAnimation', goal: 100000, slogan: 'cute cartoon', overview: 'funny cartoon', city: 'new york', country: 'usa', vid_url: 'https://www.youtube.com/embed/_dehv-Kqeqs'},
  { user_id: 3, title: 'CarbotAnimation', goal: 100000, slogan: 'cute cartoon', overview: 'funny cartoon', city: 'new york', country: 'usa', vid_url: 'https://www.youtube.com/embed/_dehv-Kqeqs'},
  { user_id: 3, title: 'CarbotAnimation', goal: 100000, slogan: 'cute cartoon', overview: 'funny cartoon', city: 'new york', country: 'usa', vid_url: 'https://www.youtube.com/embed/_dehv-Kqeqs'},
  { user_id: 3, title: 'CarbotAnimation', goal: 100000, slogan: 'cute cartoon', overview: 'funny cartoon', city: 'new york', country: 'usa', vid_url: 'https://www.youtube.com/embed/_dehv-Kqeqs'},
  { user_id: 3, title: 'CarbotAnimation', goal: 100000, slogan: 'cute cartoon', overview: 'funny cartoon', city: 'new york', country: 'usa', vid_url: 'https://www.youtube.com/embed/_dehv-Kqeqs'},
  { user_id: 3, title: 'CarbotAnimation', goal: 100000, slogan: 'cute cartoon', overview: 'funny cartoon', city: 'new york', country: 'usa', vid_url: 'https://www.youtube.com/embed/_dehv-Kqeqs'},
  { user_id: 3, title: 'CarbotAnimation', goal: 100000, slogan: 'cute cartoon', overview: 'funny cartoon', city: 'new york', country: 'usa', vid_url: 'https://www.youtube.com/embed/_dehv-Kqeqs'},
  { user_id: 3, title: 'CarbotAnimation', goal: 100000, slogan: 'cute cartoon', overview: 'funny cartoon', city: 'new york', country: 'usa', vid_url: 'https://www.youtube.com/embed/_dehv-Kqeqs'}
  ])

c = Reward.create([
  { title: 'All you can eat', description: 'eating frenzy', campaign_id: 1, price: 15},
  { title: 'All you can eat X2 ', description: 'eating frenzy X2', campaign_id: 1, price: 30},
  { title: 'Fish Miu', description: 'fish miu for 10 minutes', campaign_id: 2, price: 10},
  { title: 'Fish Miu X2', description: 'fish miu for 20 minutes', campaign_id: 2, price: 20},
  { title: 'Fish Miu X3', description: 'fish miu for 30 minutes', campaign_id: 2, price: 30}
  ])

d = Contribution.create([
  { user_id: 1, reward_id: 1},
  { user_id: 1, reward_id: 2},
  { user_id: 2, reward_id: 2}
  ])
