# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

a = User.create([
  { username: 'asd', password: 'asdasdasd', first_name: 'a', last_name: 'aa', email: 'a@gmail.com',  country: 'usa', city: 'new york',},
  { username: 'bsd', password: 'asdasdasd',first_name: 'b', last_name: 'bb', email: 'b@gmail.com', country: 'usa', city: 'new york',}
  ])
