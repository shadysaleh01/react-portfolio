import React, { useEffect } from 'react';
import CardItem from '../CardItem';
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";

function Cards() {

   useEffect(() => {
      Aos.init({ duration: 2000 });
   }, [])

   return (
      <div className="cards">
         <h1> Projects</h1>
         <div className='cards__container'>
            <div className='cards__wrapper'>
               <ul className='cards__items'>
                  <CardItem
                     aos="fade-down-right"
                     src="https://cdn.dribbble.com/users/35212/screenshots/6201955/12_2x.png"
                     text="Face recognition that recognize facial expression and depending on the Users facial expressions a message will be rendered suitable to the current expression. Mouth detection, which detects the movements of the upper and lower lips. Which will be ultimatly interpreted and give visual indications, if the user is talking or silent."
                     label="Face & Mouth Expression Detection"
                     path="/https://moelak.github.io/face-and-mouth-detection/"
                  />
                  <CardItem
                     aos="fade-down-left"
                     src="images/img-2.jpg"
                     text="Application for a business owner to be able to view and manage the departments, roles, and employees in the company so that they can organize and plan the business."
                     label="Employee Tracker"
                     path="https://drive.google.com/file/d/1Pwn3fYSZNIo4YPHkMn_99IPh5XitLi9P/preview"
                  />
               </ul>
               <ul className="cards__items" >
                  <CardItem
                     aos="fade-right"
                     src="images/scheduler.png"
                     text="A simple calender app for scheduling work day important events to a daily planner SO that you can manage your time effectively"
                     label="Work Day Scheduler"
                     path="https://shadysaleh01.github.io/Work-Day-Scheduler/"
                  />
                  <CardItem
                     aos="fade-bottom"
                     src="images/employee-engin.PNG"
                     text="A software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user."
                     label="Template Engine"
                     path="https://shadysaleh01.github.io/Team-Profile-Generator/"
                  />
                  <CardItem
                     aos="fade-left"
                     src="images/trivia.jpg"
                     text="Learn Squad application is a competitive clan based trivia game which consists of 6 categories of questions. Each category displays 10 questions with 60 seconds time limit to answer. users can choose and answer to gain the cash along with marking the territory based on the acquired cash."
                     label="Learn-Smart"
                     path="https://blooming-everglades-09738.herokuapp.com"
                  />
               </ul>
               <ul className='cards__items' >
                  <CardItem
                     aos="fade-up-right"
                     src="images/burger.png"
                     text="Created a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the top list of the page waiting to be eaten. Each burger in the waiting area also has an Eat Me! button. When the user clicks it, the burger will move to the bottom list of the page. This app will store every burger in a database, whether eaten or not."
                     label="Eat-Da-Burger!"
                     path="https://eat-da-burger2.herokuapp.com/"
                  />
                  <CardItem
                     aos="fade-up-left"
                     src="images/img-4.jpg"
                     text="Application for a business owner to be able to view and manage the departments, roles, and employees in the company so that they can organize and plan the business."
                     label="Employee Tracker"
                     path="https://drive.google.com/file/d/1Pwn3fYSZNIo4YPHkMn_99IPh5XitLi9P/preview"
                  />
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Cards
