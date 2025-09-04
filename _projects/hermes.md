---
layout: page
title: Project Hermes
description: A robust and scalable rocket flight computer
img: assets/img/hermes_front.jpg
importance: 2
category: Rocketry & Space
giscus_comments: true
---

Hermes is a fully featured flight computer for the control of high-power sounding rockets. It is a comprehensive, futureproofed, turnkey solution that aims to address all potential needs of any large rockets constructed by university teams or
other aerospace bodies. Project Hermes was selected to be presented in a podium session at the 2023 Spaceport America
Cup as one of 20 presentations out of 120 teams.

Hermes was a solo project I undertook over the course of 6 months, and was the culmination of a series of smaller flight
computers I had been developing and testing. I designed, manufactured, programmed, and tested the boards myself.

The board is based around an STM32F4 series microcontroller, which interfaces with a large sensor suite (barometer,
accelerometer, magnetometer, gyroscope) as well as a GPS module, CAN bus, UART port for telemetry, and pyrogenic
ignition channels for parachute deployment. The computer is additionally capable of controlling actuators for active
control systems, a purpose it was used for in 2024. Internally, the computer is programmed in C using the STM32 HAL
framework, and features entirely custom firmware including my own drivers for all sensors, and a Kalman filter for state
determination.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hermes_front.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hermes_back.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Hermes flight computer, front and back. The board pictured flew on ARES' 2023 competition rocket, Deimos
</div>

