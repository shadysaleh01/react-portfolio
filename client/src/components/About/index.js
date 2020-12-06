import React, { useEffect } from 'react'
// import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos";
import "aos/dist/aos.css"
import "./About.css"

function About() {
   useEffect(() => {
      Aos.init({ duration: 2000 });
   }, [])
   return (
      <div className="container" id="about">
         <div class="card mb-3 col-lg-10 col-md-8 col-sm-10 offset-lg-1 offset-md-2 offset-sm-1 narrow text-center shadow-lg p-3 mb-5 rounded bg-white border-light" id="card" data-aos="fade-up"
            data-aos-duration="3000" >
            <div class="card-horizontal shadow-lg">
               <div class="img-square-wrapper col-lg-7">
                  <img class="img" src="../images/portfolio.jpg" alt="Card image cap" />
               </div>
               <div class="card-body col-lg-10">
                  <h3 class="card-title">ABOUT ME</h3>
                  <p class="card-text">Hello, I'm Shady Saleh! I live in California. I'm a Full Stack Developer with a background in Computer Science and life-long commitment to learning and growing in the technical field. I am dedicated to combining my creativity and problem solving skills to develop clean code for user-friendly applications and websites. I design, build, operate & debug web applications. I’m extremely passionate about projects in web and application development. I make optimization and functionality my priority. I’m also highly experienced in many programming frameworks, and Dom manipulation. I am known among colleagues for leadership, teamwork, integrity, and attention to detail no matter the complexity of the project. I'm aiming to develop my own online E-commerce company by utilizing sales channels like Amazon & eBay Marketplaces.</p>
               </div>

            </div>
            {/* <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
         </div> */}
         </div>
         <div class="card mb-3 col-lg-10 col-md-8 col-sm-10 offset-lg-1 offset-md-2 offset-sm-1 narrow text-center shadow-lg p-3 mb-5 rounded bg-white border-light" id="card" data-aos="fade-up"
            data-aos-duration="3000" >
            <div class="card-horizontal shadow-lg">

               <div class="card-body col-lg-10">
                  <h3 class="card-title">SKILLS</h3>
                  <div className="divSkills">

                     <img className="skills" align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
                     <img className="skills" align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
                     <img className="skills" align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
                     <img className="skills" align="left" alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />
                     <img className="skills" align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
                     <img className="skills" align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
                     <img className="skills" align="left" alt="GraphQL" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/graphql/graphql.png" />
                     <img className="skills" align="left" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
                     <img className="skills" align="left" alt="SQL" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png" />
                     <img className="skills" align="left" alt="MySQL" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" />
                     <img className="skills" align="left" alt="MongoDB" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />
                     <img className="skills" align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
                     <img className="skills" align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
                     <img className="skills" align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />
                     <img className="skills" align="left" alt="Mongoose" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png" />
                     <img className="skills" align="left" alt="Bootstrap" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png" />
                     <img className="skills" align="left" alt="Express" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />
                     {/* <img className="skills" align="left" alt="heroku" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/heroku/heroku.png" /> */}
                     <img className="skills" align="left" alt="Markdown" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/markdown/markdown.png" />
                     <img className="skills" align="left" alt="npm" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png" />
                     <img className="skills" align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
                     <img className="skills" align="left" alt="Component" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/web-components/web-components.png" />
                     <img className="skills" align="left" alt="webpack" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png" />
                  </div>
               </div>

            </div>
            {/* <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
         </div> */}
         </div>
      </div>
   )
}

export default About;


