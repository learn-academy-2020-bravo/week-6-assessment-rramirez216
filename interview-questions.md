# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: 
  -the name of the foreign key would be animal_id and it would be part of the Sightings model since it belongs_to the animal model.

  Researched answer:
  - The Foreign Key maintains the information between instances of the two models and makes it easier to make changes to a model and all its entities. Foreign key is always on the belongs_to side.



2. Which routes must always be passed params and why?

  Your answer: 
  -routes that take in arguments always need params because they need that information to pass to the controller.

  Researched answer:
  -Parameters allow us to add more information to our program by passing a value into the route rather than directly to the URL.



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:
  get '/game/:guess' => 'main'



4. Name three rails generator commands. What is created by each?

  Your answer:
  - rails generate controller creates a controller file. rails generate model generates a model. rails generate migration lets you create a migration.

  Researched answer:
  -rails generate resource Generating a resource does everything generating a model does, but it also creates a resource in the routes.rb file and an empty folder in the views. rails generate model creates a migration, model , and tests for the files that were generated. rails generate controller created a controller file, a view file, a functional test file, a helper for the view, a JavaScript file, and a stylesheet file.



5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET" displays a list of all users

/users/1      method="GET" displays a specific user

/users/new    method="GET" return a form for creating a new user

/users/       method="POST" create a new user

/users/1      method="PUT" update a specific user

/users/1      method="DELETE" delete a specific user
