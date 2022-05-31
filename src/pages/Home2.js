import React from 'react'
import '../pages/Home.css'
function Home2() {
  return (
      <>
    <div>
    <>
  <nav>
    <ul > 
      <li>
        <a className="a" href="front page.html">
          HOME
        </a>
      </li>
      <li>
        <a className="a" href="#stories-text">
          STORIES
        </a>
      </li>
      <li>
        <a className="a" href="#food-text">
          FOOD
        </a>
      </li>
      <li>
        <a className="a" href="/Mahikanshu/contact.html" >
          CONTACT US
        </a>
      </li>
      <li>
        <a className="a" href="#login">
          LOGIN
        </a>
      </li>
    </ul>
  </nav>
  <div id="rajasthan">
    <p id="local-yatri-text">
      Local Yatri <br />
    </p>
    <p id="local-yatri-rajasthan-text">Rajasthan</p>
    <p />
  </div>
  {/* <logo>
      <a href="front page.html"><img src="logo.png" alt="logo" id="logo"></a>
  </logo> */}
  <br />
  <br />
  <p className="center-alligned-heading" style={{ fontSize: 70 }}>
    Popular Cities
  </p>
  <br />
  <div id="popular-cities">
    {/* images of popular Cities */}
    <img src="https://user-images.githubusercontent.com/97379207/171175445-10aa2d21-3700-4435-82b1-01282a666303.jpg" alt="Jodhpur" className="popular-cities" />
    <img src="https://user-images.githubusercontent.com/97379207/171175714-8222ed8e-f08f-420f-a239-3cf8cd95c85e.jpg" alt="Bikaner" className="popular-cities" />
    <img src="https://user-images.githubusercontent.com/97379207/171175724-f6fa6293-3e72-4c0e-af0a-bd5a7a982efa.jpg" alt="Jaisalmer" className="popular-cities" />
    <img src="https://user-images.githubusercontent.com/97379207/171175727-3354ddd1-a53f-49d6-b487-dec832bd4a4d.jpg" alt="Pushkar" className="popular-cities" />
  </div>
  <div>
    {/* buttons for popular Cities */}
    {/* <a href="/Kunal Bhutani/categories/catagories - Jodhpur.html"> */}
    <a href="awd/public/assets/Kunal Bhutani/categories/catagories - Jodhpur.html">
      <button style={{ marginLeft: 280 }}>
        <p className="button-text">Jodhpur</p>
      </button>
    </a>
    <a href="/Kunal Bhutani/categories/categories - bikaner.html">
      <button style={{ marginLeft: 190 }}>
        <p className="button-text">Bikaner</p>
      </button>
    </a>
    <a href="/Kunal Bhutani/categories/categories - jaisalmer.html">
      <button style={{ marginLeft: 190 }}>
        <p className="button-text">Jaisalmer</p>
      </button>
    </a>
    <a href="/Kunal Bhutani/categories/categories - ajmer.html">
      <button style={{ marginLeft: 180 }}>
        <p className="button-text">Ajmer</p>
      </button>
    </a>
  </div>
  <br />
  <br />
  <p className="center-alligned-heading">Can't decide from where to start?</p>
  <p className="center-alligned-text" style={{ fontSize: 40 }}>
    You can explore the various Purs
  </p>
  <br />
  <br />
  <a href="/Kunal Bhutani/categories/categories jaipur.html">
    <img
      style={{ marginLeft: "5%" }}
      className="city-images"
      src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
      alt="Jaipur"
    />
  </a>
  <div id="jaipur-text">
    <p></p>
    <h1>
      <u>Jaipur</u>
    </h1>
    Jaipur is the capital and largest city of Rajasthan. In 2019 UNESCO World
    Heritage Committee inscribed Jaipur the "Pink City of India" among its World
    Heritage Sites.
    <br />
    There is a government museum at Hawa Mahal and an art gallery at Viratnagar.
    There are statues depicting Rajasthani culture around the city
    <br />
    GolGappa, Pyaaz Kachori, Kathi Roll are some of the flavoursome local foods
    of Jaipur
    <p />
  </div>
  <br />
  <br />
  <div id="udaipur-text">
    <p></p>
    <h1>
      <u>Udaipur</u>
    </h1>
    Udaipur is the historic capital of the kingdom of Mewar in the former
    Rajputana Agency.
    <br />
    It is surrounded by the Aravali Range, which separates it from the Thar
    Desert <br />
    Like any other place in the state of Rajasthan, folk dance and music have an
    important <br /> place in adding to the city's cultural richness. Vibrant
    dance of Bhavai, Ghoomar, <br /> Kachchhi Ghodi add a sparkle to the rich
    cultural heritage of Udaipur. <br />
    Falooda, Jalebi, Mirchi Bada, Daal Bhati Choorma, Dabeli, etc are some of
    the famous <br /> street foods of Udaipur <p />
  </div>
  <a href="/Kunal Bhutani/categories/categories - udaipur.html">
    <img
      style={{ marginTop: "-18%", marginLeft: "60%" }}
      className="city-images"
      src="https://images.unsplash.com/photo-1519998823760-5f7b0549b378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2488&q=80"
      alt="Udaipur"
    />
  </a>
  <br />
  <br />
  <a href="/Kunal Bhutani/categories/catagories - Jodhpur.html">
    <img
      className="city-images"
      style={{ marginTop: "5%", marginLeft: "5%" }}
      src="https://images.unsplash.com/photo-1617339041039-13799cee60b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80"
      alt="Jodhpur"
    />
  </a>
  <div id="jodhpur-text">
    <p></p>
    <h1>
      <u>Jodhpur</u>
    </h1>
    Jodhpur is popularly known as the "Blue City" among people of Rajasthan and
    all over India. <br />
    It is a popular tourist destination, featuring many palaces, forts, and
    temples, set in the stark landscape of the Thar Desert <br />
    The city is famous for its food and its popularity can be judged by the fact
    that one can find sweet shops named "Jodhpur Sweets" in many cities
    throughout India. <br />
    The Makhaniya Lassi, Malai Ghevar, Gulab Halwa, Sev Tamatar are some of the
    leding foods of Jodhpur.
    <p />
  </div>
  <br />
  <br />
  <p
    style={{ marginTop: "5%" }}
    id="stories-text"
    className="center-alligned-heading"
  >
    Explore our latest stories
  </p>
  <br />
  <br />
  <div style={{ display: "flex", flexDirection: "row" }}>
    <figure>
      <img
        id="rajasthan-stories"
        src="https://images.unsplash.com/photo-1544938412-8683ca1f9804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        alt="rajasthan"
      />
    </figure>
    <figure>
      <img
        id="blackbuck"
        src="https://images.unsplash.com/photo-1633183227597-22a417e7b5e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        alt="Black Buck"
      />
      <figcaption id="caption-wildlife">
        <u>Wildlife</u>
      </figcaption>
    </figure>
    <figure>
      <img
        id="hot-air-balloon"
        src="https://images.unsplash.com/photo-1617415420840-48518720fe26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        alt="hot air balloon"
      />
      <figcaption id="caption-adventure">
        <u>Adventure</u>
      </figcaption>
    </figure>
  </div>
  <div id="rajasthan-stories-text">
    <p></p>
    <h2>
      <u>Camel ride</u>
    </h2>
    Explore the prepossessing camel ride while wearing the traditional and{" "}
    <br /> beautiful clothes of rajasthan.
    <p />
  </div>
  <div>
    <p id="wildlife-text">
      Black Buck, Asiatic <br /> Wildcat, White Footed <br /> Fox, royal bengal
      tiger, <br /> Great Indian Bustard,
      <br /> Great Indian Spotted <br />
      Eagle, etc are some <br /> of the wildlife species <br /> that can be
      spotted <br /> in Rajasthan.
    </p>
  </div>
  <div>
    <p id="adventure-text">
      Camping, Wildlife Safaris, <br /> Hot Air Ballooning, Desert <br />{" "}
      Safari, ziplining, etc are <br /> some adventure sports <br />
      that can be experienced <br /> in Rajasthan.
    </p>
  </div>
  <div id="featured" />
  <img id="as-featured-in" src="https://user-images.githubusercontent.com/97379207/171177014-b38a4b44-fb68-4373-89d9-17cb3a2862fa.png" alt="as featured in" />
  <img id="travel-blog" src="https://user-images.githubusercontent.com/97379207/171177032-7ea0cb37-43cb-4634-8238-ef5c10e4375b.png" alt="travel blog" />
  <img id="planetour" src="https://user-images.githubusercontent.com/97379207/171177021-45cf30cf-f376-42ee-9bd9-3d36ad9256cd.png" alt="planetour" />
  <img id="world-travel" src="https://user-images.githubusercontent.com/97379207/171177038-04e0d009-6b7b-4089-9c54-0e37fae32d8e.png" alt="world travel" />
  <img id="skycloud" src="https://user-images.githubusercontent.com/97379207/171177025-0718445f-ceed-4fc0-b80b-67414cdd7079.png" alt="skycloud" />
  <br />
  <br />
  <p className="center-alligned-heading" id="food-text">
    Food
  </p>
  <br />
  <br />
  <div style={{ display: "flex", flexDirection: "row" }}>
    <figure>
      <img
        id="sweets"
        src="https://images.unsplash.com/photo-1631120821877-11c76d4671a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMHN3ZWV0c3xlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="sweets"
      />
      <figcaption id="caption-sweets">
        <u>Sweets</u>
      </figcaption>
    </figure>
    <figure>
      <img
        id="drinks"
        src="http://www.manahotels.in/traveller/wp-content/uploads/2014/06/makhhaiya-lassi2.jpg"
        alt="Makhaniya Lassi"
      />
      <figcaption id="caption-drinks">
        <u>Drinks</u>
      </figcaption>
    </figure>
    {/* <video id="rajasthan-video" autoPlay="" loop="" muted="">
      <source src="https://www.loom.com/share/eca2e9a97e6f4374a2653932e77e6dc4" />
    </video> */}
    <iframe width="740" height="460" src="https://www.loom.com/embed/eca2e9a97e6f4374a2653932e77e6dc4" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>
  <div>
    <p id="sweets-text">
      Doodhiya Kheench, Dilkushar, <br /> Rabri Ghevar, Balushahi,
      <br /> Churma Laddoo, Mawa Kachori,
      <br /> Chhena malpua, etc are some <br /> of the most delecious sweets{" "}
      <br /> of the state.
    </p>
  </div>
  <div>
    <p id="drinks-text">
      One of the many smoothest,
      <br /> yummiest and best drinks <br /> to relish, Chaach is an <br />{" "}
      astounding natural thirst <br /> satisfying drink. It is made <br /> from
      curd and is good for a <br /> healthy digestive system.
    </p>
  </div>
  {/* <div>
    <p id="video-text">
      {" "}
      Watch the full Dale Philip's vlog by clicking on the button below the clip
    </p>
  </div> */}
  <a
    href="https://www.youtube.com/watch?v=JCTBCIC5Wtc&ab_channel=DalePhilip"
    
  >
    <button style={{ marginLeft: 1100, marginTop: "-60px" }}>
      <p className="button-text">Youtube</p>
    </button>
  </a>
  <br />
  <br />
<div></div>
  <footer style={{backgroundColor:'#D4F1F4'}}>
    <p id="footer-local-yatri-text">Local Yatri</p>
    <p id="footer-rajasthan-text">Rajasthan</p>
    <p id="footer-follow-us-text">
      <b>Follow Us</b>
    </p>
    <div id="footer-logo-div">
      <a href="https://www.facebook.com/" >
        <img
          className="footer-logos"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt="facebook logo"
        />
      </a>
      <a href="https://www.instagram.com/accounts/login/" >
        <img
          className="footer-logos"
          src="https://w7.pngwing.com/pngs/477/609/png-transparent-logo-computer-icons-instagram-logo-instagram-logo-miscellaneous-text-trademark.png"
          alt="instagram"
        />
      </a>
      <a
        href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
        
      >
        <img className="footer-logos" src="https://user-images.githubusercontent.com/97379207/171178644-41f1c39b-e390-4c1e-afe4-62a3a2f18adf.png" alt="twitter" />
      </a>
      <a href="https://www.youtube.com/" >
        <img
          className="footer-logos"
          src="https://themayanagari.com/wp-content/uploads/2021/01/6-8.jpg"
          alt="youtube"
        />
      </a>
    </div>
    <p id="footer-subscribe-text">
      <b>Subscribe</b>
    </p>
    <form>
      <input id="subscribe-button" type="email" placeholder="Email Address" />
      <input id="submit-button" type="submit" />
    </form>
    <p id="subscribe-button-tc">
      {" "}
      I want emails from Local Yatri with travel and product information,
      <br /> promotions, advertisements, third-party offers, and surveys. I can{" "}
      <br /> unsubscribe any time using the unsubscribe link at the end of all{" "}
      <br /> emails. Contact Local Yatri or view our Privacy Policy.
    </p>
    <p id="footer-top-cities-text">
      <b>
        <u>TOP CITIES</u>
      </b>
    </p>
    <div id="footer-top-cities">
      <ul style={{ lineHeight: 4 }}>
        <li>
          <a
            href="/Kunal Bhutani/categories/catagories - Jodhpur.html"
            className="footer-items"
          >
            Jodhpur
          </a>
        </li>
        
        <li>
          <a
            href="/Kunal Bhutani/categories/categories - bikaner.html"
            className="footer-items"
          >
            Bikaner
          </a>
        </li>
        
        <li>
          <a
            href="/Kunal Bhutani/categories/categories - jaisalmer.html"
            className="footer-items"
          >
            Jaisalmer
          </a>
        </li>
        
        <li>
          <a
            href="/Kunal Bhutani/categories/categories - ajmer.html"
            className="footer-items"
          >
            Ajmer
          </a>
        </li>
        
        <li>
          <a
            href="/Kunal Bhutani/categories/categories jaipur.html"
            className="footer-items"
          >
            Jaipur
          </a>
        </li>
        
        <li>
          <a
            href="/Kunal Bhutani/categories/categories-udaipur.html"
            className="footer-items"
          >
            Udaipur
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Kota
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Alwar
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Pushkar
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Chittorgarh
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Bhilwara
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Bhndi
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Dholpur
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Hanumangarh
          </a>
        </li>
        
      </ul>
    </div>
    <p id="footer-travel-interests-text">
      <b>
        <u>TRAVEL INTERESTS</u>
      </b>
    </p>
    <div id="footer-travel-interests">
      <ul style={{ lineHeight: 4 }}>
        <li>
          <a href="#" className="footer-items">
            Adventure Travel
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Art and Culture
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Beaches and Island
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Family Holidays
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Festivals
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Food and Drinks
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Honeymoon and Romance
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Wildlife and Nature
          </a>
        </li>
        
      </ul>
    </div>
    <p id="footer-sites-text">
      <b>
        <u>OUR OTHER SITES</u>
      </b>
    </p>
    <div id="footer-sites">
      <ul style={{ lineHeight: 4 }}>
        <li>
          <a href="#" className="footer-items">
            Local Yatri - Jammu
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Local Yatri - Himachal Pradesh
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Local Yatri - Haryana
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Local Yatri - Delhi
          </a>
        </li>
        
        <li>
          <a href="#" className="footer-items">
            Local Yatri - Punjab
          </a>
        </li>
        
      </ul>
    </div>
    <p id="footer-about-us-text">
      <b>
        <u>ABOUT US</u>
      </b>
    </p>
    <div id="footer-about-us">
      <ul style={{ lineHeight: 4 }}>
        <li>
          <a href="/Mahikanshu/privacy.html" className="footer-items">
            Privacy Policy
          </a>
        </li>
        
        <li>
          <a href="/Mahikanshu/terms.html" className="footer-items">
            Terms and Conditions
          </a>
        </li>
        
      </ul>
    </div>
  </footer>
  <div id="copyright" />
    <p id="copyright-text">© 2022 Local Yatri - Rajasthan. All rights reserved. No part of this site may be reproduced without our written permission</p>
</>
<div id='login'></div>
    </div>
    </>
  )
}
export default Home2