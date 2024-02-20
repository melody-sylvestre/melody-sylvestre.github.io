export default function portfolio() {
    //TODO:  find a way to make this less repetitive otherwise the styling is going to be awful :(
    return (
        <div id="portfolio" className="portfolio_section">
            <h2>Portfolio</h2>
            <p className="portfolio_intro_text">
                As a student of the iO Academy full stack software development course, I have worked on several personal
                and team projects. You will find below a brief description of each of them.
            </p>
            <div className="project_cards_container">

                <div className="project_card">
                    <img src="images/company_website.png" alt="Screenshot of Company website" />
                    <h3>Company website</h3>
                    <div className="project_text">
                        <p>I created a website for a fictional company as a personal project. On the frontend, I used React.JS and more particularly the React Router library to create the different pages and elements of this website. Styling was implemented with SCSS. For the backend, I created a REST API in PHP using the MVC framework Slim, in order to link the frontend with the MySQL database. The content of the banner on the homepage is fetched from the database using a GET request to this API. Users' answers to the form on the "Contact us" page are stored in the database by sending a POST request to the API. </p>
                        <div className="project_links_bar">
                            <a href="https://github.com/melody-sylvestre/companyWebsite_v2" target="_blank">Github</a>
                            <a href="https://company.2023-melodys.dev.io-academy.uk/" target="_blank">Live</a>
                        </div>
                    </div>
                </div>


                <div className="project_card">
                    <img src="images/margarater.jpg" alt="Screenshot of Margarater website" />
                    <h3>Pizza toppings rater</h3>
                    <div className="project_text">
                        <p>A website where you can vote for your favourite pizza toppings! We used a MERN stack to create a
                            website where users can either choose their favourite topping among 2 randomly selected toppings
                            or see the top 10 toppings from all the votes. On the frontend, I created the card components in which the
                            toppings are displayed, using React.JS, Typescript and SCSS. I used Node.js,
                            Express.js and Typescript on the backend to implement the endpoint that allows saving the users' votes in the
                            MongoDB database with a POST request.</p>
                        <div className="project_links_bar">
                            <a href="https://github.com/tauroid/margarater" target="_blank">Github</a>
                            <a href="https://2023-jan-chickens-margarater.dev.io-academy.uk/" target="_blank">Live</a>
                        </div>
                    </div>
                </div>

                <div className="project_card">
                    <img src="images/Pro-to-type.png" alt="Screenshot of our typing speed game Pro-to-type" />

                    <h3>Pro-To-Type</h3>
                    <div className="project_text">
                        <p>
                            This is a typing speed game where players have 60s to copy a randomly generated text. At the end
                            of the game, they can see their typing speed and accuracy scores. We used JavaScript, HTML and
                            CSS to create this app. I worked on various functionalities of this app such as fetching a
                            random text to copy from an API with a GET request, comparing the player's input to the reference text and a timer.
                            I was also scrum master for this project.
                        </p>

                        <div className="project_links_bar">
                            <a href="https://github.com/iO-Academy/Pro-to-type" target="_blank">Github</a>
                            <a href="https://jan23-pro-to-type.dev.io-academy.uk" target="_blank">Live</a>
                        </div>
                    </div>
                </div>

                <div className="project_card">
                    <img src="images/project_manager_api_json.jpg"
                        alt="Screenshot of the data provided by the project management API" />
                    <h3>Project management API</h3>
                    <div className="project_text">
                        <p>
                            We created a backend RESTful API for a project management app with PHP and SQL. We used OOP to
                            create endpoints following the SOLID principles for the application architecture, allowing users
                            to display all the projects from the database or a specific project. I worked on the class
                            containing the details of a project, unit testing with PHPUnit and error handling.
                        </p>
                        <div className="project_links_bar">
                            <a href="https://github.com/iO-Academy/23-jan-chickens-project-management-api"
                                target="_blank">Github</a>
                            <a href="https://2023-jan-chickens-project-management-api.dev.io-academy.uk/projects.php"
                                target="_blank">Live</a>
                        </div>
                    </div>
                </div>

                <div className="project_card">
                    <img src="images/Food_delivery_app.png" alt="Screenshot of our food app." />
                    <h3>Food Delivery App</h3>
                    <div className="project_text">
                        <p>
                            We developed the frontend for a food delivery app using Bootstrap CSS and React.JS. I implemented
                            the React components that allow diners to choose a restaurant, fetch its menu from a supplied API with a GET request and
                            display it on the webpage.
                        </p>
                        <div className="project_links_bar">
                            <a href="https://github.com/iO-Academy/23-jan-chickens-food-delivery-app"
                                target="_blank">Github</a>
                            <a href="https://2023-jan-chickens-food-delivery.dev.io-academy.uk/" target="_blank">Live</a>
                        </div>
                    </div>
                </div>

                <div className="project_card">
                    <img src="images/academy_portal.png" alt="A random image" />
                    <h3>iO Academy Portal</h3>
                    <div className="project_text">
                        <p>
                            We contributed to the development of management software for iO Academy, which would handle the
                            logistics of its training courses. We implemented a feature allowing students to edit their
                            profile. I worked on the PHP backend. I used the existing Slim
                            framework to implement a new endpoint for the API so that the new data are validated, sanitised,
                            and added to the MySQL database.
                        </p>
                        <div className="project_links_bar">
                            <a href="https://github.com/iO-Academy/AcademyPortal" target="_blank">Github</a>
                        </div>
                    </div>
                </div>

                <div className="project_card">
                    <img src="images/yarnApp.png" alt="Screenshot my yarn collection app" />
                    <h3>Collection app</h3>
                    <div className="project_text">
                        <p>A simple PHP app to visualise a yarn stash. It interrogates a MySQL database and displays all its
                            items in a pre-defined format, with minimal CSS styling. I used PHPUnit to test the functions of this app.
                        </p>
                        <div className="project_links_bar">
                            <a href="https://github.com/melody-sylvestre/yarnApp" target="_blank">Github</a>
                            <a href="https://2023-melodys.dev.io-academy.uk/yarnApp/" target="_blank">Live</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}