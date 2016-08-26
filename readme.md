Unit #4 Project: Portfolio Project

                       
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
    'sector' : 'String',
    'industry' : 'String',
    'product_name' : 'String',
    'information' : 'String',
    'image' : 'String'
}

'User': 
{
    'username' : 'Monica',
    'email' : 'Monica@test.com',
    'password' : 'password'
    'location' : 'Denver, CO',
    'avatar' : 'String'
}
   
'Product' 
{
    'sector' : 'String',
    'industry' : 'String',
    'productname_' : 'String',
    'description' : 'String'
}

2015 - 2016 Top Contributers

Seeded data

Sector: Agribusiness
Industries: ['Crop Production & Basic Processing', 'Tobacco', Dairy', 'Poultry & Eggs', 'Livestock', 'Agricultural Services & Products',  'Food Processing & Sales', 'Forestry & Forest Products']
Top Contributer: 

Sector: Energy & Natural Resources
Industries: 

Sector: Health
Industries:
Products:


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

    ### Unsolved problems 

    

/////////////////////////////
//      User Stories
/////////////////////////////

https://trello.com/b/31kST3qY/project-4

/////////////////////////////
//      Wireframes
/////////////////////////////

/////////////////////////////
//      Pitch Deck
/////////////////////////////

/////////////////////////////
//      Workflow
/////////////////////////////

Create directories and files.

    Client directory for front-end

        Scripts directory
            app.js
            Controllers directory
                strainDirective.js
                strainController.js

        Styles directory
            style.css

        Templates directory
            strainIndex.html
            strainShow.html
            strainDirective.html
            
        index.html

    Server directory for back-end

        Controllers directory
            strainsController.js
        Models directory
            index.js
            strain.js
        Routes directory
            routes.js

    server.js


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
