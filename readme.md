Unit #4 Project: Portfolio Project

-

                       
                    /////////////////////////////
                    //       About
                    /////////////////////////////

    A user can click from a list of seeded sectors. Depending on chosen sector, user will only have ability to pick an  industry that is predefined to match the parent sector.

        Once an option is chosen, a user is free to submit a form. Eventually, a user will also be able to create a sector and industry that belongs to it in order to provide a more extensive list of options for all users. This will first be verfied by app's admin before update occurs. 

    EcoView is an app built for consumers to educate themselves and spread awareness throughout their communities about the origins of their purchases - certified fair-trade coffee, shampoo not tested on animals, BPA-free plastics, lead-free paint are just a few of the little actions we can take when making choices about our purchases. 


    ### General Approach 

2 Models: 

'User': 
{
    'username' : 'String',
    'email' : 'String',
    'password' : 'String'
    'location' : 'String',
    'avatar' : 'String'
}

  
'Product' 
{
    'name' :
    sector' : 'String',
    'industry' : 'String',
    'company_name' : 'String',
    'description' : 'String',
    'image' : 'String'
}

'sector_industry' 
{
    'sector' : ['']
}

 
2015 - 2016 Top Contributers

Seeded data

Sector: Agribusiness
Industries: ['Crop Production & Basic Processing', 'Tobacco', Dairy', 'Poultry & Eggs', 'Livestock', 'Agricultural Services & Products',  'Food Processing & Sales', 'Forestry & Forest Products']
Top Contributer: 

Sector: Energy & Natural Resources
Industries: ['Oil & Gas', 'Mining', 'Alternative Energy Production & Services', 'Electric Utilities', 'Waste Management']


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
        -Bootstrap
        -Angular
        -Bower
        -Passport

    ### Unsolved problems 

    

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

Use directives ngApp, ngView, ngController and ngRepeat


### Technical Requirements

    *Build a full-stack application

    *Consume and/or serve an API

    *Interactive front-end using a modern front-end framework

    *Be a complete product (multiple relationships and CRUD functionality for 2+ models)

    *Use a database

    *Implement thoughtful user stories

    *Visually impressive design

    * Deploy online

    * A ``readme.md`` file with:
        * An embedded screenshot of the app
        * Explanations of the **technologies** used
        * A couple paragraphs about the **general approach you took**
        * **Installation instructions** for any dependencies
        * Link to your **user stories** – who are your users, what do they want, and why?
        * Link to your **wireframes** – sketches of major views / interfaces in your application
        * Link to your **pitch deck** – documentation of your wireframes, user stories, and proposed architecture
        * Descriptions of any **unsolved problems** or **major hurdles** you had to overcome
