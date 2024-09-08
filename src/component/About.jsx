

import React, { useState } from 'react';
const About =() =>{
  const [isOpen, setIsOpen] = useState(false);
    return(
        <> 
<div class="bg-background bg-gray-950 text-foreground text-gray-300 p-8">
  <div class="flex flex-col md:flex-row justify-between gap-5">
    <div class="mb-6 md:mb-0 ">
      <h2 class="text-lg font-bold text-white">Online <span className='text-[#22ff39]'>Learning</span> </h2>
      <p class="text-muted-foreground text-sm" >A-143, 9th Floor, Sovereign Corporate  Tower, Sector-136, Noida, Uttar Pradesh - 201305</p>
      <div class="flex space-x-4 mt-2">
        <a href="#" class="text-muted-foreground hover:text-primary">C++</a>
        <a href="#" class="text-muted-foreground hover:text-primary">F</a>
        <a href="#" class="text-muted-foreground hover:text-primary">I</a>
        <a href="#" class="text-muted-foreground hover:text-primary">LinkedIn</a>
        <a href="#" class="text-muted-foreground hover:text-primary">YouTube</a>
      </div>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <div>
        <h3 class="font-semibold text-white">Company</h3>
        <ul class="text-muted-foreground ">
          <li><a href="#" className="hover:text-green-600 ">About Us</a></li>
          <li><a href="#" className="hover:text-green-600"> Careers</a></li>
          <li><a href="#"  className="hover:text-green-600">In Media</a></li>
          <li><a href="#" className="hover:text-green-600">Contact Us</a></li>
          <li><a href="#" className="hover:text-green-600" >Terms and Conditions</a></li>
          <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-green-600">Copyright Policy</a></li>
          <li><a href="#" className="hover:text-green-600">Advertise with us</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-white" >Languages</h3>
        <ul class="text-muted-foreground">
          <li><a href="#" className="hover:text-green-500">Python</a></li>
          <li><a href="#" className="hover:text-green-500">Java</a></li>
          <li><a href="#" className="hover:text-green-500">GoLang</a></li>
          <li><a href="#" className="hover:text-green-500">SQL</a></li>
          <li><a href="#" className="hover:text-green-500">R Language</a></li>
          <li><a href="#" className="hover:text-green-500">Android Tutorial</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold  text-white">Data Structures</h3>
        <ul class="text-muted-foreground">
          <li><a href="#" className="hover:text-green-500">Array</a></li>
          <li><a href="#" className="hover:text-green-500">String</a></li>
          <li><a href="#" className="hover:text-green-500">Linked List</a></li>
          <li><a href="#" className="hover:text-green-500">Stack</a></li>
          <li><a href="#" className="hover:text-green-500">Queue</a></li>
          <li><a href="#" className="hover:text-green-500">Tree</a></li>
          <li><a href="#" className="hover:text-green-500">Graph</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-white">Algorithms</h3>
        <ul class="text-muted-foreground">
          <li><a href="#" className="hover:text-green-500">Sorting</a></li>
          <li><a href="#" className="hover:text-green-500">Searching</a></li>
          <li><a href="#" className="hover:text-green-500">Greedy</a></li>
          <li><a href="#" className="hover:text-green-500">Dynamic Programming</a></li>
          <li><a href="#" className="hover:text-green-500">Pattern Searching</a></li>
          <li><a href="#" className="hover:text-green-500">Recursion</a></li>
          <li><a href="#" className="hover:text-green-500">Backtracking</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-white">Web Development</h3>
        <ul class="text-muted-foreground">
          <li><a href="#" className="hover:text-green-500">HTML</a></li>
          <li><a href="#" className="hover:text-green-500">CSS</a></li>
          <li><a href="#" className="hover:text-green-500">JavaScript</a></li>
          <li><a href="#" className="hover:text-green-500">Bootstrap</a></li>
          <li><a href="#" className="hover:text-green-500">ReactJS</a></li>
          <li><a href="#" className="hover:text-green-500">AngularJS</a></li>
          <li><a href="#" className="hover:text-green-500">NodeJS</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-white">Write & Earn</h3>
        <ul class="text-muted-foreground">
          <li><a href="#" className="hover:text-green-500">Write an Article</a></li>
          <li><a href="#" className="hover:text-green-500">Improve an Article</a></li>
          <li><a href="#" className="hover:text-green-500">Pick Topics to Write</a></li>
          <li><a href="#" className="hover:text-green-500">Write for Interview</a></li>
          <li><a href="#" className="hover:text-green-500">Internships</a></li>
          <li><a href="#" className="hover:text-green-500">Video Internship</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-white">UPSC/SSC/BANK</h3>
        <ul class="text-muted-foreground">
          <li><a href="#" className="hover:text-green-500">Gate</a></li>
          <li><a href="#" className="hover:text-green-500">SSC CGL Syllabus</a></li>
          <li><a href="#" className="hover:text-green-500">IBPS PO Syllabus</a></li>
          <li><a href="#" className="hover:text-green-500">UPSC Economics Notes</a></li>
          <li><a href="#" className="hover:text-green-500">UPSC History Notes</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-white">Data Science & ML </h3>
        <ul class="text-muted-foreground">
          <li><a href="#" className="hover:text-green-500">Data Science With Python</a></li>
          <li><a href="#" className="hover:text-green-500">Data Science For Beginner</a></li>
          <li><a href="#" className="hover:text-green-500">Machine Learning Tutorial</a></li>
          <li><a href="#" className="hover:text-green-500">Maths For Machine Learning</a></li>
          <li><a href="#" className="hover:text-green-500">Pandas Tutorial</a></li>
          <li><a href="#" className="hover:text-green-500">NumPy Tutorial</a></li>
          <li><a href="#" className="hover:text-green-500">  NLP Tutorial</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-white">Interview Corner</h3>
        <ul class="text-muted-foreground">
          <li><a href="#" className="hover:text-green-500">Company Preparation</a></li>
          <li><a href="#" className="hover:text-green-500">Preparation for SDE</a></li>
          <li><a href="#" className="hover:text-green-500">Company Interview Corner</a></li>
          <li><a href="#" className="hover:text-green-500">Experienced Interview</a></li>
          <li><a href="#" className="hover:text-green-500">Internship Interview</a></li>
          <li><a href="#" className="hover:text-green-500">Competitive Programming</a></li>
          <li><a href="#" className="hover:text-green-500"> Aptitude</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-white">Python</h3>
        <ul class="text-muted-foreground">
          <li><a href="#" className="hover:text-green-500">Python Tutorial</a></li>
          <li><a href="#" className="hover:text-green-500">Python Programming Examples</a></li>
          <li><a href="#" className="hover:text-green-500">Django Tutorial</a></li>
          <li><a href="#" className="hover:text-green-500">Python Projects</a></li>
          <li><a href="#" className="hover:text-green-500">  Python Tkinter</a></li>
          <li><a href="#" className="hover:text-green-500">OpenCV Python Tutorial</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-white">GfG School</h3>
        <ul class="text-muted-foreground">
          <li><a href="#" className="hover:text-green-500">CBSE Notes for Class8</a></li>
          <li><a href="#" className="hover:text-green-500">CBSE Notes for Class9</a></li>
          <li><a href="#" className="hover:text-green-500">CBSE Notes for 10th </a></li>
          <li><a href="#" className="hover:text-green-500">CBSE Notes for 11th</a></li>
           <li><a href="#" className="hover:text-green-500">CBSE Notes for 12th</a></li>
          <li><a href="#" className="hover:text-green-500">English Grammar</a></li>
        
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-white">Computer Science</h3>
        <ul class="text-muted-foreground">
          <li><a href="#"  className="hover:text-green-500">GATE CS Notes</a></li>
          <li><a href="#" className="hover:text-green-500">Operating Systems</a></li>
          <li><a href="#" className="hover:text-green-500">Computer Network</a></li>
          <li><a href="#" className="hover:text-green-500">Database Management System</a></li>
          <li><a href="#" className="hover:text-green-500">Software Engineering</a></li>
          <li><a href="#" className="hover:text-green-500">Digital Logic Design</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

        </>

    )
}
export default About;