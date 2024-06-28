import React from "react"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import 'remixicon/fonts/remixicon.css'
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(()=>{
    gsap
    function firstsection(){
      var tl1 = gsap.timeline();
      tl1.from("nav h1, nav h4, nav button", {
        y: -30,
        opacity: 0,
        duration: 0.3,
        delay: 0.3,
        stagger: 0.2
      })
  
      tl1.from(".center .center-part1 h1", {
        x: -200,
        opacity: 0,
        duartion: 0.1,
        // delay: 0.1,
      })
  
      tl1.from(".center .center-part1 p", {
        x: -50,
        opacity: 0,
        duartion: 0.1,
        // delay: 0.1,
      })
  
      tl1.from(".center .center-part1 button", {
        x: -50,
        opacity: 0,
        duartion: 0.1,
        // delay: 0.1,
      })
  
      tl1.from(".center .center-part2 img", {
        x: 100,
        opacity: 0,
        duartion: 0.1,
        // delay: 0.1,
      }, "-=1")
      
      tl1.from(".section1 .sectionbottom .a",{
        x: -50,
        opacity: 0,
        delay: 0.1,
        duration: 0.1,
      })
  
      tl1.from(".section1 .sectionbottom .b",{
        y: -50,
        opacity: 0,
        delay: 0.2,
        duration: 0.2,
      })
  
      tl1.from(".section1 .sectionbottom .c",{
        y: 50,
        opacity: 0,
        delay: 0.2,
        duration: 0.2,
      })
    }
    firstsection();



    function secondsection(){
      var tl2 = gsap.timeline({
        scrollTrigger:{
          trigger: ".section2",
          scroller: "body",
          // markers: true,
          start: "top 50%",
          end: "top 0%",
          scrub: 2
        }
      })
      tl2.from(".section2 .sectionstart h3", {
        x: -50,
        opacity: 0
      })

      tl2.from(".section2 .sectionstart p", {
        x: -20,
        opacity: 0
      })

      tl2.from(".elem", {
        x: -50,
        opacity: 0,
        duration: 0.3
      },"left")

      tl2.from(".elem1", {
        x: 50,
        opacity: 0,
        duration: 0.3
      },"right")

      tl2.from(".elem2", {
        x: -50,
        opacity: 0,
        duration: 0.3
      },"right")

      tl2.from(".elem3", {
        x: 50,
        opacity: 0,
        duration: 0.3
      },"left")
    }

    secondsection();
  })
  return (
    <>
      <section className='section1'>
        <nav>
          <h1><i class="ri-shining-2-fill"></i>WizardZ</h1>
          <div className="menu">
            <h4>About us</h4>
            <h4>Services</h4>
            <h4>Use cases</h4>
            <h4>Pricing</h4>
            <h4>Blog</h4>
            <button>Request a quote</button>
          </div>
        </nav>
        <div className="center">
          <div className="center-part1">
            <h1>Navigating the digital landscape for success</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eaque tempore, labore eius soluta perspiciatis ratione perferendis, doloribus esse rem asperiores? In nam exercitationem placeat ab ea rem quas nesciunt repellat? Dolorum iusto unde id eaque itaque officia quod obcaecati.</p>
            <button>Book a consultation</button>
          </div>
          <div className="center-part2">
            <img src="https://thisisdma.com/Hero.svg" alt="" />
          </div>
        </div>
        <div className="sectionbottom">
          <img className="a" src="https://freelogopng.com/images/all_img/1688364239amazon-logo-black.png" alt="" />
          <img className="b" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dribbble_Text_Logo_Script.svg/2560px-Dribbble_Text_Logo_Script.svg.png" alt="" />
          <img className="c" src="https://upload.wikimedia.org/wikipedia/commons/7/71/HubSpot_Logo.png" alt="" />
          <img className="a" src="https://seeklogo.com/images/N/notion-logo-4CE8FBF5C5-seeklogo.com.png" alt="" />
          <img className="b" src="https://cdn.freebiesupply.com/logos/large/2x/netflix-2-logo-black-and-white.png" alt="" />
          <img className="c" src="https://freelogopng.com/images/all_img/1685422912zoom-logo-black-and-white.png" alt="" />
        </div>
      </section>
      <section className="section2">
        <div className="sectionstart">
          <h3>Services</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quis aperiam amet inventore iure cumque excepturi ex delectus dolore maxime!</p>
        </div>
        <div className="container">
          <div className="elem">
            <div className="part1">
              <h2>Search engine optimization</h2>
              <h4><i class="ri-arrow-right-up-line"></i>Learn more</h4>
            </div>
            <div className="part2">
              <img src="https://digisavvy.com/wp-content/uploads/2021/11/10.svg" alt="" />
            </div>
          </div>
          <div className="elem1">
            <div className="part1">
              <h2>Search engine optimization</h2>
              <h4><i class="ri-arrow-right-up-line"></i>Learn more</h4>
            </div>
            <div className="part2">
              <img src="https://digisavvy.com/wp-content/uploads/2021/11/10.svg" alt="" />
            </div>
          </div>
          <div className="elem2">
            <div className="part1">
              <h2>Search engine optimization</h2>
              <h4><i class="ri-arrow-right-up-line"></i>Learn more</h4>
            </div>
            <div className="part2">
              <img src="https://thisisdma.com/services/03.svg" alt="" />
            </div>
          </div>
          <div className="elem3">
            <div className="part1">
              <h2>Search engine optimization</h2>
              <h4><i class="ri-arrow-right-up-line"></i>Learn more</h4>
            </div>
            <div className="part2">
              <img src="https://digisavvy.com/wp-content/uploads/2021/11/10.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
