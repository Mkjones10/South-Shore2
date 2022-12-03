import React from "react";
import Lh from "./LH.png";
import Heart from './heart.png'
import Home from './home.png'
import Hands from './hands.png'
export default function Homepage() {
  return (
    <div className="home">
      <div className="head22">
        <h1 className="h1">About South Shore</h1>
      </div>
      <p className="whyp">
        The South Shore has been a solid middle-class enclave for much of its
        history, although class divisions among its residents were sometimes
        very high. When African-American families moved to the South Shore in
        the 1950s, white residents worried about neighborhood stability. The
        South Shore Commission initiated a program called "Managed Integration"
        to control the physical decline of the community and achieve racial
        balance. The decline in residential and commercial real estate coincided
        with the growth of the African-American population, which has been
        described as the “redlining” of real estate.
      </p>
      <div className="whyp">
        <h1 className="h2"> Our Project</h1>
        <p className="whyp"> Our project is a website about gun violence in the South Shore community. Our goal is to bring awareness to the issues that gun violence causes for the South shore. Gun violence not only affects the people who commit the crime, but also it affects the youth as well. </p>
      </div>
    
      <div className="lh">
        <img src={Lh} alt="" width={1000} height={300} />
        <h1 className="h2"> About Lawrence Hall</h1>
        <p className="whyp">
          Lawrence hall was founded just after the civil war as a place for
          orphaned children struggling to survive. Throughout the 1900's there
          were many name changes but all had the same goal, to help youth. By
          the 2000's the name Lawrence Hall was crowned and has been since.
          Lawrence hall has always had numerous programs focused towards helping
          youth. A few of these programs include: CYSC, Reporting Center, Lost
          Boys, and RAMP. All these programs target helping youth better
          themselves in a healthy way.
        </p>
      </div>
      <h1 className="h2"> Why Lawrence Hall Is Important</h1>
      <div className="mentals">
        <div className="mental">
          <p className="p1">
            <div className="img">
            <img src={Heart} alt="" srcset="" /></div>
            <h2 className="h2">Inner Healing</h2>
            After a traumatic experience, a child must heal emotionally,
            mentally, and socially to learn and grow. Lawrence Hall treats some
            of the most serious consequences of childhood trauma through
            therapies and positive youth development strategies.
          </p>
        </div>
        <div className="mental">
          <p className="p1">
            <div className="img">
            <img src={Home} alt="" srcset="" /></div>
            <h2 className="h2">Stability</h2>
            Childhood trauma can cause complete distrust in family and home as
            safe spaces. We focus on providing nurturing, healthy living
            environments to promote and ensure stability in our children’s and
            older adolescents’ lives.
          </p>
        </div>
        <div className="mental">
          <p className="p1">
            <div className="img">
            <img src={Hands} alt="" srcset="" /></div>
           <h2 className="h2">Strong Communities </h2> 
            The effects of trauma ripple through communities,
            resulting in mistrust, separation, and oftentimes violence. Lawrence
            Hall supports rebuilding trust and connection in Chicago’s
            communities through a variety of programs and resources.
          </p>
        </div>
      </div>
    </div>
  );
}
