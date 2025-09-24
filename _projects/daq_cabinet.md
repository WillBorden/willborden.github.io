---
layout: page
title: Hybrid engine DAQ cabinet
description: Data acquisition and control for a hybrid rocket engine
img: assets/img/daq_car_park.jpg
importance: 4
category: Rocketry & Space
---

This DAQ cabinet is designed to control and characterise hybrid rocket engines built by the University of Melbourne’s rocketry team. It will serve as the primary interface point between the team’s ground station equipment and the rocket engines. I worked on this project alongside other team members to create a robust and functional system, using industry-standard instrumentation and control equipment.

The system is based around two LabJack DAQ units capable of reading from up to 7 thermocouples, 12 pressure transducers, and 4 load cells. The system can additionally control 8 valves, which are used to actuate the fluids system. The LabJacks connect to a local computer running Synnax, a database software designed for rocket engine development. This is routed to a ground station which displays telemetry and allows manual control of the system.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/daq_car_park.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Finished DAQ cabinet
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/daq_combustion.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/daq_wiring.jpg" title="example image" class="img-fluid rounded z-depth-1" style="transform: rotate(180deg)" %}
    </div>
</div>
<div class="caption">
    Me finalising the wiring (right), and the cabinet being used for valve characterisation (left)
</div>

This project was one of my first times working with industrial control cabinets. It was a joy to see how easily interconnectable everything is, although care must still be taken to ensure sytem inter-compatibility and good design. It was a challenging project, mainly due to the importance of having robust, reliable control of rocket engines. Designing the system required complex failure mode analysis to determine exactly what the behaviour of the system should be in every nominal and off-nominal case. The cabinet implements many safety features and interrupts to ensure no personnel are in danger during operations. 

The cabinet is currently being used to test ARES' sub-scale hybrid rocket engine, and will be re-used for testing of our upcoming full-scale engine. This full-scale engine will be flown on ARES' next competition rocket, competing in the 2027 International Rocket Engineering Competition. 
