# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Trail.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      first_name: 'DemoUser',
      last_name: 'Lin' ,
      bio: 'This is a demo user.',
      email: 'yanxilinnn@gmail.com', 
      password: 'password'
    )
  
    Trail.create!( t_name: 'TestTrail', length: '1000', longitude: '40.736287401994566',  latitude: '-73.9937891255057', difficulty_level: 'easy', elevation_gain: '100ft', estimated_time: '2h', description: 'This is a test trail. ', contry: 'USA', city: 'New York', park_id: '1')
    Trail.create!( t_name: 'TestTrail222', length: '222',longitude: '222222222', latitude: '-222222222', difficulty_level: 'hard', elevation_gain: '222ft', estimated_time: '2h', description: 'This is a test trail222. ',contry: 'Canada', city: 'DDD', park_id: '2' )
    
    
    
    # More users
    # 10.times do 
    #   User.create!({
    #     first_name: Faker::Name.first_name,
    #     last_name: Faker::Name.last_name,
    #     email: Faker::Internet.unique.email,
    #     password: 'password',
    #     bio: 'I am demo user :)'
    #   }) 
    # end
  
    puts "Done!"
  end