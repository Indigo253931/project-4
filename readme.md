Unit #4 Project

    About 

    How do the actions we take as individuals, and as the human race entirely, impact our health, other species, and the Earth?

    GlobalRev seeks to answer these questions by constructing a platform for both obtaining information, spreading awareness and contributing your own ideas on how to actively take on these problems. 

    Whether through a product reccomendation or sharing data that increases transparency surrounding a crisis, the only limitation we have in ending the destruction that our planet faces is within our own failure to unite, take action and make positive changes for all.


### General Approach 

Three models: User, Product and SectorIndustry


User can CRUD product data

                    Relationships:

        
        User has many product reviews. 
        A product has one sector and one industry.

    ### Technologies Used

    For server side:
        -JavaScript
        -Mongodb
        -Node
        -Express

    For client side:
        -HTML
        -CSS
        -Angular
        -Bower

    ### Unsolved problems 

 

Heroku App
https://young-fjord-78970.herokuapp.com/


/////////////////////////////
//      User Stories
/////////////////////////////

https://trello.com/b/31kST3qY/project-4

/////////////////////////////
//      Wireframes
/////////////////////////////

<h2>Home</h2><img class='wireframes' src='Wireframes/Home.png'/><br>
<h2>About</h2><img class='wireframes' src='Wireframes/About.png'/><br>
<h2>Sign Up</h2><img class='wireframes' src='Wireframes/SignUp.png'/><br>
<h2>Login</h2><img class='wireframes' src='Wireframes/Login.png'/><br>
<h2>New product</h2><img class='wireframes' src='Wireframes/newProduct.png'/><br>
<h2>All products</h2><img class='wireframes' src='Wireframes/indexProduct.png'/><br>
<h2>One product</h2><img class='wireframes' src='Wireframes/showProduct.png'/><br>
<h2>Delete product</h2><img class='wireframes' src='Wireframes/deleteProduct.png'/><br>
/////////////////////////////
//      Pitch Deck
/////////////////////////////

/////////////////////////////
//      Workflow
/////////////////////////////


-Create client directory for front end.

    -Create public directory and touch index.html (this is the homepage)

            -Create a scripts directory and touch app.js.
            
            -Create a styles directory and touch styles.css. Here you will add custom styling to your pages.      
                -Create images directory to store app's images
            
           -Create templates directory and touch files needed for all views (productIndex.html, productShow.html, profile.html, about.html productNew.html, productUpdate.html, signUp.html, login.html)
    
 -Install technologies needed in public directory (Angular, Bower, Bootstrap and Passport) 

-Include bootstrap, styles.css, angular/bower and app.js in index.hmtl 

-Create server directory.
-Install Node, Express and Mongo

    -Add 'node_modules' to .gitignore file.
    -Create models directory. 
        -Touch index.js, product.js and user.js
    -Create routes directory.
        -Touch routes.js


-Touch server.js and require mongoose.
    -Require and use express.
    -Require and use body parser.
    -Requrie mongoose.
    -Require models.
    -Create empty array for products. 
    -Create HTML endpoint for homepage.
    -Create API routes.
    -Create JSON endpoints to get all products, get one product by id, create a product, edit a product and delete a product.
    -Set up server to listen on port 3000.

-Touch seed.js. 
    -Require models in db variable. 
    -Include seeded data array for products.


Install Bower for front-end dependencies 
    
    Use 'npm install -g bower'. 
    Bower enables local file installation. 
    
    Initialize with 'bower init' to generate bower.json file. 
    This will provide a way to share code without sending third-party libraries.

    Use'bower install --save angular' to pull down Angular.

    Link index.html to Angular with '<script type="text/javascript" src="bower_components/angular/angular.js"></script>' above app.js's script link

Use NPM to require Express:
    
    Initialize node in directory with 'npm init -y'.
    Install express with 'npm install --save express'.
    Package.json will track project associated dependencies and metadata.
    
    Add 'node_modules' to .gitignore file so it is not tracked by git.

Require Mongoose in server.js

Install body parser and mongoose
    'npm install mongoose --save'

Use directives ngApp, ngView, ngModel,  ngController and ngRepeat

