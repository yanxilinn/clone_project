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
    ApplicationRecord.connection.reset_pk_sequence!('trails')

    User.create!(
      first_name: 'DemoUser',
      last_name: 'Lin' ,
      bio: 'This is a demo user.',
      email: 'yanxilinnn@gmail.com', 
      password: 'password'
    )
  
    Trail.create!(
      t_name: 'Mount Tamalpais State Trail', 
      length: '8.4',
      longitude: '-122.61119506209867', 
      latitude: '37.889304787838924', 
      difficulty_level: 'easy', 
      elevation_gain: '351ft', 
      estimated_time: '2h', 
      description: "Want to find the best trails in Mount Tamalpais State Park for an adventurous hike or a family trip? AllTrails has 76 great hiking trails, biking trails, running trails and more. Enjoy hand-curated trail maps, along with reviews and photos from nature lovers like you. Ready for your next hike or bike ride? Explore one of 8 easy hiking trails in Mount Tamalpais State Park that are great for the whole family. Looking for a more strenuous hike? We've got you covered, with trails ranging from 39 to 10,570 feet in elevation gain. Whatever you have planned for the day, you can find the perfect trail for your next trip to Mount Tamalpais State Park.",
      contry: 'USA', 
      city: 'NY', 
      park_id: '1' )

    Trail.create!(
      t_name: 'East and West Drive Loop', 
      length: '6.1',
      longitude: '-130', 
      latitude: '37.8262', 
      difficulty_level: 'hard', 
      elevation_gain: '285ft', 
      estimated_time: '4h', 
      description: "Get to know this 6.1-mile loop trail near New York City, New York. Generally considered an easy route, it takes an average of 2 h 2 min to complete. This is a very popular area for birding, road biking, and running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.",
      contry: 'USA', 
      city: 'NY', 
      park_id: '2' )
    
    Trail.create!(
      t_name: 'Jennings Beach To Pine Creek Point Trail', 
      length: '4.9',
      longitude: '-50.4997', 
      latitude: '37.8262', 
      difficulty_level: 'moderate', 
      elevation_gain: '29ft', 
      estimated_time: '1h', 
      description: "Get to know this 4.9-mile out-and-back trail near Fairfield, Connecticut. Generally considered a moderately challenging route, it takes an average of 1 h 25 min to complete. This trail is great for birding, hiking, and horseback riding, and it's unlikely you'll encounter many other people while exploring. The best times to visit this trail are March through November. Dogs are welcome, but must be on a leash.",
      contry: 'USA', 
      city: 'NY', 
      park_id: '3' )

    Trail.create!(
      t_name: 'Twin Brooks Park Loop', 
      length: '2.5',
      longitude: '60.4997', 
      latitude: '37.8262', 
      difficulty_level: 'easy', 
      elevation_gain: '314ft', 
      estimated_time: '1h', 
      description: "Explore this 2.5-mile loop trail near Trumbull, Connecticut. Generally considered an easy route, it takes an average of 1 h 2 min to complete. This is a popular trail for hiking, running, and walking, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.",
      contry: 'USA', 
      city: 'NY', 
      park_id: '4' )

    Trail.create!(
      t_name: 'Teepee to Thrilla to Viper to IMBA Loop', 
      length: '4.9',
      longitude: '-12.4997', 
      latitude: '37.8262', 
      difficulty_level: 'moderate', 
      elevation_gain: '167ft', 
      estimated_time: '2h', 
      description: "Try this 4.9-mile loop trail near Floral Park, New York. Generally considered a moderately challenging route, it takes an average of 1 h 34 min to complete. This is a very popular area for hiking and mountain biking, so you'll likely encounter other people while exploring. The best times to visit this trail are March through October. Dogs are welcome, but must be on a leash. ",
      contry: 'USA', 
      city: 'NY', 
      park_id: '5' )

    Trail.create!(
      t_name: 'Forest Park Loop', 
      length: '2.3',
      longitude: '-22.4997', 
      latitude: '37.8262', 
      difficulty_level: 'easy', 
      elevation_gain: '131ft', 
      estimated_time: '3h', 
      description: "Discover this 2.3-mile loop trail near New York City, New York. Generally considered an easy route, it takes an average of 47 min to complete. This is a very popular area for birding, horseback riding, and mountain biking, so you'll likely encounter other people while exploring. The best times to visit this trail are March through November. Dogs are welcome, but must be on a leash. ",
      contry: 'USA', 
      city: 'NY', 
      park_id: '6' )

    Trail.create!(
      t_name: 'Alley Pond Park Loop', 
      length: '3.2',
      longitude: '22.4997', 
      latitude: '37.8262', 
      difficulty_level: 'moderate', 
      elevation_gain: '219', 
      estimated_time: '1h', 
      description: "Discover this 3.2-mile loop trail near New York City, New York. Generally considered a moderately challenging route, it takes an average of 1 h 8 min to complete. This is a very popular area for hiking, running, and walking, so you'll likely encounter other people while exploring. ",
      contry: 'USA', 
      city: 'NY', 
      park_id: '7' )

    Trail.create!(
      t_name: 'Joe Michaels Mile', 
      length: '5',
      longitude: '132.4997', 
      latitude: '37.8262', 
      difficulty_level: 'easy', 
      elevation_gain: '82ft', 
      estimated_time: '1.5h', 
      description: "Experience this 5.0-mile out-and-back trail near Queens, New York. Generally considered an easy route, it takes an average of 1 h 30 min to complete. This is a very popular area for road biking, running, and walking, so you'll likely encounter other people while exploring. The best times to visit this trail are February through November. Dogs are welcome and may be off-leash in some areas. ",
      contry: 'USA', 
      city: 'NY', 
      park_id: '8' )

    Trail.create!(
      t_name: 'Pelham Bay Park and Pelham Parkway', 
      length: '6.7',
      longitude: '-49.97', 
      latitude: '37.8262', 
      difficulty_level: 'easy', 
      elevation_gain: '193ft', 
      estimated_time: '2h', 
      description: "Enjoy this 6.7-mile loop trail near Pelham, New York. Generally considered an easy route, it takes an average of 2 h 6 min to complete. This is a popular trail for hiking, road biking, and running, but you can still enjoy some solitude during quieter times of day. Dogs are welcome, but must be on a leash.",
      contry: 'USA', 
      city: 'NY', 
      park_id: '9' )

    Trail.create!(
      t_name: 'hunter Island Loop Trail', 
      length: '2',
      longitude: '-122.4997', 
      latitude: '37.8262', 
      difficulty_level: 'easy', 
      elevation_gain: '49', 
      estimated_time: '0.5h', 
      description: "Experience this 2.0-mile loop trail near Pelham, New York. Generally considered an easy route, it takes an average of 37 min to complete. This is a very popular area for hiking, running, and walking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash. ",
      contry: 'USA', 
      city: 'NY', 
      park_id: '10' )

    Review.create!(
      user_id: 1,
      trail_id: 1,
      rating: 5,
      review: "This is a test review for trail 1",
      date: "2022-10-19"
    )

  
    puts "Done!"
  end