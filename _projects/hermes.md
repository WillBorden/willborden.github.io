---
layout: page
title: Project Hermes
description: A robust and scalable rocket flight computer
img: assets/img/hermes_front_wide.jpg
importance: 2
category: Rocketry & Space
---

Hermes is a fully featured flight computer for the control of high-power sounding rockets. It is a comprehensive, futureproofed, turnkey solution that aims to address all potential needs of any large rockets constructed by university teams or other aerospace bodies. Project Hermes was selected to be presented in a podium session at the 2023 Spaceport America Cup as one of 20 presentations out of 120 teams.

Hermes was a solo project I undertook over the course of 6 months, and was the culmination of a series of smaller flight
computers I had been developing and testing. I designed, manufactured, programmed, and tested the boards myself.

The board is based around an STM32F4 series microcontroller, which interfaces with a large sensor suite (barometer,
accelerometer, magnetometer, gyroscope) as well as a GPS module, CAN bus, UART port for telemetry, and pyrogenic
ignition channels for parachute deployment. The computer is additionally capable of controlling actuators for active
control systems, a purpose it was used for in 2024. Internally, the computer is programmed in C using the STM32 HAL
framework, and features entirely custom firmware including my own drivers for all sensors, and a Kalman filter for state
determination.

Hermes is still ARES' primary student-designed flight computer, almost 3 years after it was first created. It is yet to undergo a single hardware revision from my initial design, and has been successfully used for a much broader scope of tasks than it was made for. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hermes_front.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hermes_back.jpg" title="example image" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="caption">
    Hermes flight computer, front and back. The board pictured flew on ARES' 2023 competition rocket, Deimos
</div>

I began designing flight computers as soon as I joined ARES, in my first few weeks of university. I scrounged together some breakout boards I found lying around, and put together my first few iterations of my designs. I remember vividly conducting my first tests of these boards by standing in the middle of the University of Melbourne's South Lawn, and throwing the computers as high as I could in the air to test that the state logic was working well. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/first_flight_computer.jpeg" title="first flight computer" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/second_fc.png" title="second flight computer" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="caption">
    My first prototype flight computers, built in my first months of university. Both flew on various L2 rocket flights
</div>

Very quickly, I decided I needed to turn these boards into a proper integrated PCB. Commercial rocketry flight computers can cost upwards of $500 USD, and have limited functionality. My goal was to create something scalable, robust, and able to hold its own against any projects the team might throw at it in the future. 

I chose to work with the STM32 family of microcontrollers, a first foray for me. Alongside the F4 series chip, I added a full IMU (with acceleration readings up to 64G in 3 axes), a GPS reciever, a high-quality barometric pressure sensor, provisions for igniting pyrogenic charges, and servo motor drivers. Expandability was a big focus of mine; I included communication ports for talking to radio modules, and a CAN bus for integration with any other modules ARES might create in the future.

I wrote all the firmware from scratch, including the peripheral drivers and the rocket's Kalman filter. It initially used a simple state machine in conjunction with DMA to handle events, but has since been overhauled to run on a custom RTOS. The board has even been used to run neural networks, for lightweight air brake look-up table compression.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hermes_deimos.JPG" title="Deimos avionics bay" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hermes_florence.JPG" title="Florence avionics bay" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hermes_lemaire.JPG" title="Lemaire avionics bay" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="caption">
    Hermes proudly featuring on all ARES competition entries since its creation: Deimos, Florence, and Lemaire
</div>

For Hermes' first appearance at the Spaceport America Cup in 2023, it was chosen to be presented as a podium presentation. All competing teams must submit an extended abstract on an area of their work they are proud of, and Hermes was selected as ARES' most exciting project of the year. This abstract was selected for presentation, and I had the opportunity to deliver a talk on my process designing and implementing the system. The talk was very well recieved; I had so many questions from teams wanting to build their own similar systems that the organisers had to cut off the presentation during question time - I spent the better part of an hour sharing information to other university students outside the presentation hall. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/me_presenting_hermes.JPG" title="Me presenting Hermes at SAC 2024" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="caption">
    Me presenting our avionics system at SAC 2024 for judging. Hermes' blue screw terminals are visible by my left hand.
</div>

Since its creation, Hermes has flown successfully on every major rocket ARES has built. It is the team's workhorse for data collection and telemetry, and is responsible for controlling air brakes systems and interfacing with ARES' IOT infrastructure. I learned a lot about embedded systems design and programming in particular, which I have since been able to apply to many additional projects. I'm very proud of Hermes, and am glad to have been able to create such a useful and reliable tool for ARES endeavours. 



