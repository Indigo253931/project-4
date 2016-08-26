Unit #4 Project: Portfolio Project

                       
                    /////////////////////////////
                    //       About
                    /////////////////////////////

    A user can click from a list of seeded sectors. Depending on the sector chosen, user can pick an industry most fitting to the product they are reviewing. 
        Eventually, a user will also be able to create a sector and industry that belongs to it in order to provide a more extensive list of options for all users. 

    EcoView is an app built for consumers to educate themselves and spread awareness to others about the origins of their purchases - from certified fair-trade coffee, to shampoo not tested on animals, to BPA-free plastics and lead-free paint. 

    Providing product transparency and a community for individuals who support sustainable, yet quality products are the goals of this app.

     It also allows you to document/keep track of your favorite, share your reviews and read/search data submitted by other users to make mroe informed purchases. 

     Support sustainability. Protect animals. Restore the envrionment. Connect, learn from and share with others.
    Users can search for a string in the database which will render all products/companies/industries, etc. related to string.  
    Users can sign up and login with authentication. 

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
   
'Data' 
{
    'sector' : 'String',
    'industry' : ['String'],
    'product' : ['String'],
    'information' : 'String'
}


Sector: Agribusiness
Industries: 
Sector: Energy & Natural Resources
Industries: 
Sector: Construction
Industries: 
Sector: Agribusiness
Industries: 
 Health
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
