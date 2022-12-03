import React from "react";
import "./styles/Needs.css";
import Major from "./Major.png";
import Fund from "./funding.png";

export default function Need() {
  return (
    <>
      <div className="head">
        <h1 className="h1">What do the Shouth Shore Community need?</h1>
      </div>
      <div className="boxes">
        <div className="box">
          <h1 className="h2">Mental Health Centers</h1>
          <div className="why">
            <h1>Why are mental health centers important?</h1>
            <p className="whyp">
               
            Often, people in Chicago are highly affected by gun violence. Whether people lost close loved ones, was a victim of gun violence, or saw or heard about people getting shot. Unfortunately, in South Shore, this is a reality for most individuals. Often the trauma experienced is not handled in a safe and healthy way, due to a lack of resources in the community. This leads to more violence and increased suicide rates.. 
            </p>
          </div>
         <div className="ss">
        <img src={Major} alt="" width={500} />
        <img src={Fund} alt="" width={1000} height={500} />
      </div>
          <div className="mentals">
            <div className="mental">
              <p className="p1">
                There are 5 major mental health facilities in the south shore
                neighborhood. Within SSH's service area, 87% of the population
                identifies as African American or black. African Americans deal
                with mental health issues more than any other race/ethic group
                in this community. These major facilities service 411,148
                individuals through this community area.
              </p>
            </div>
            <div className="mental">
              <p className="p1">
                In predominently African American communities such as South
                shore, the suicide rate is at 24%.The suicide rate is at the
                highest between the ages of 18 - 29. Meanwhile, since 2009, the
                city has closed six mental health clinics. Between 2009 and
                2012, the state cut $113.7 million in funding for mental health
                service
              </p>
            </div>
            <div className="mental">
              <p className="p1">
                In communities with a high amount of gun violence, the people in
                the community often suffer from mental health issues such as
                anxiety, depression, and post tramatic stress disorder(ptsd).
                However, due to the South Shore community suffering from
                poverty, often there is no way to get and recieve help for most
                of the individuals in the community.
              </p>
            </div>
          </div>
        </div>
        <div className="school">
          <h2 className="h2"> School Resources</h2>
          <div className="heady">
            <div className="why">
           <h2 className="why">Why Are School Resources Important? </h2>  
          </div>
          
            
          </div>
         .<p className="whyp">
         The needs have changed over the span of the last 2 decades. The violence amongst youth in South Shore has rapidly increased. We need youth protection programs, places for youth to go after school, and added protection to mainstream school routes. We would like to achieve a safer community for young adults like ourselves. 
          </p>
          
        </div>
      </div>
    </>
  );
}
