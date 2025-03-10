import React, { useEffect } from 'react';
import CardItem from '../CardItem';
import Aos from "aos";
import "aos/dist/aos.css";
import "./Cards.css";
import Trivia from "../images/trivia.jpg"
import Scheduler from "../images/scheduler.png"
import Employee from "../images/employee-engin.PNG"
import Burger from "../images/burger.png"
import Workout from "../images/img-4.jpg"
import Barber from "../images/barber-img.png"


function Cards() {

   useEffect(() => {
      Aos.init({ duration: 2000 });
   }, [])

   return (
      <div className="cards" id="projects">
         <div className="bgimg ">
            <h1 className="text-warning">PROJECTS</h1>
         </div>
         <div className='cards__container'>
            <div className='cards__wrapper'>
               <ul className='cards__items'>
                  <CardItem
                     aos="fade-down-right"
                     label="Face & Mouth Expression Detection"
                     src="https://cdn.dribbble.com/users/35212/screenshots/6201955/12_2x.png"
                     text="Face recognition that recognize facial expression and depending on the Users facial expressions a message will be rendered suitable to the current expression. Mouth detection, which detects the movements of the upper and lower lips. Which will be ultimatly interpreted and give visual indications, if the user is talking or silent."
                     live="https://moelak.github.io/face-and-mouth-detection/"
                     github="https://github.com/shadysaleh01/face-and-mouth-detection"
                     icon1="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" alt1="technologies"
                     icon2="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt2="technologies"
                     icon3="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt3="technologies"
                     icon4="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt4="technologies"
                     icon5="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" alt5="technologies"
                     icon6="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" alt6="technologies"
                     icon7="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" alt7="technologies"
                     icon8="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" alt8="technologies"
                     icon9="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png" alt9="technologies"
                  />
                  <CardItem
                     aos="fade-down-left"
                     src={Trivia}
                     label="Learn-Smart"
                     text="Learn Squad application is a competitive clan based trivia game which consists of 6 categories of questions. Each category displays 10 questions with 60 seconds time limit to answer. users can choose and answer to gain the cash along with marking the territory based on the acquired cash."
                     live="https://learn-squad.herokuapp.com/"
                     github="https://github.com/shadysaleh01/Learn-Smart"
                     icon1="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" alt1="technologies"
                     icon2="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt2="technologies"
                     icon3="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt3="technologies"
                     icon4="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt4="technologies"
                     icon5="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" alt5="technologies"
                     icon6="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png" alt6="technologies"
                     icon7="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" alt7="technologies"
                     icon8="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" alt8="technologies"
                     icon9="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" alt9="technologies"
                     icon10="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" alt10="technologies"
                     icon11="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" alt11="technologies"
                     icon12="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/markdown/markdown.png" alt12="technologies"
                     icon13="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png" alt13="technologies"
                  />
               </ul>
               <ul className="cards__items" >
                  <CardItem
                     aos="fade-right"
                     src={Scheduler}
                     label="Work Day Scheduler"
                     text="A simple calender app for scheduling work day important events to a daily planner SO that you can manage your time effectively"
                     live="https://shadysaleh01.github.io/Work-Day-Scheduler/"
                     github="https://github.com/shadysaleh01/Work-Day-Scheduler"
                     icon1="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
                     icon2="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                     icon3="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                     icon4="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                     icon5="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
                     icon6="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png"
                     icon7="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                     icon8="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                     icon9="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"
                     icon10="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"
                  />
                  <CardItem
                     aos="fade-bottom"
                     src={Burger}
                     label="Eat-Da-Burger!"
                     text=" A restaurant app that lets users input burgers they'd like to eat. The app will display the burger on the waiting list to be eaten with an Eat Me! Button next to it. By clicking it, the burger will move to the Eaten list with a Remove Button next to it. This app will store every burger in a database, whether eaten or not."
                     live="https://eat-da-burger2.herokuapp.com/"
                     github="https://github.com/shadysaleh01/Burger"
                     icon1="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
                     icon2="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                     icon3="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                     icon4="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                     icon5="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
                     icon6="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png"
                     icon7="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                     icon8="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                     icon9="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"
                     icon10="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"
                     icon11="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png" alt11="technologies"
                  />
                  <CardItem
                     aos="fade-left"
                     src={Employee}
                     label="Template Engine"
                     text="A software engineering team generator command line application. The application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user."
                     live="https://shadysaleh01.github.io/Team-Profile-Generator/"
                     github="https://github.com/shadysaleh01/Team-Profile-Generator"
                     icon1="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
                     icon2="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                     icon3="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                     icon4="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                     icon5="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
                     icon6="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png"
                     icon7="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                     icon8="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                     icon9="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"
                     icon10="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"
                  />
               
               </ul>
               <ul className='cards__items' >
                  <CardItem
                     aos="fade-up-right"
                     src={Barber}
                     label="Barber App"
                     text="This is a barber app with a similar concept to Uber, which allows users to request barbers to the comfort of their own home or hotel room. Users can view barber profiles, check out prices and reviews, view menus of barber services, request barbers, pay, and review their experience through the app."
                     live="https://evening-stream-54641.herokuapp.com/" 
                     github=""
                     icon1="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt1="technologies"
                     icon2="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt2="technologies"
                     icon3="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt3="technologies"
                     icon4="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt4="technologies"
                     icon5="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" alt5="technologies"
                     icon6="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" alt6="technologies"
                     icon7="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" alt7="technologies"
                     icon8="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" alt8="technologies"
                     icon9="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" alt9="technologies"
                     icon10="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/markdown/markdown.png" alt10="technologies"
                     icon11="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png" alt11="technologies"
                     
                  />
                  <CardItem
                     aos="fade-up-left"
                     src={Workout}
                     text="Application to view create and track daily workouts. Also to log multiple exercises in a workout on a given day. It should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, It should be able to track the distance traveled."
                     label="Workout Tracker"
                     github="https://github.com/shadysaleh01/workout-tracker"
                     live="https://frozen-river-75779.herokuapp.com/?id=5fa32ba228d78e0017e1f027"
                  />
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Cards
