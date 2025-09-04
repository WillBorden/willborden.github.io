---
layout: page
title: Hyrbid engine DAQ cabinet
description: Data acquisition and control for a hybrid rocket engine
img: assets/img/hermes_front.jpg
importance: 4
category: Rocketry & Space
---

This DAQ cabinet is designed to control and characterise hybrid rocket engines built by the University of Melbourne’s
rocketry team. It will serve as the primary interface point between the team’s ground station equipment and the rocket
engines. I worked on this project alongside other team members to create a robust and functional system, using DIN
rail to ensure compatibility with standard industrial components.

The system is based around two LabJack DAQ units capable of reading from up to 7 thermocouples, 12 pressure trans-
ducers, and 4 load cells. The system can additionally control 8 valves, which are used to actuate the fluids system. The
LabJacks connect to a local computer running Synnax, a database software designed for rocket engine development.
This is routed to a ground station which displays telemetry and allows manual control of the system.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DAQ cabinet pretty photo (1).jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Finished DAQ cabinet
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DAQ cabinet in combustion lab (1).jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Me doing wiring (1).jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Me finalising the wiring (left), and the cabinet being used for valve characterisation (right)
</div>
