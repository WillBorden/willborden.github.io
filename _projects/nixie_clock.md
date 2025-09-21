---
layout: page
title: WiFi Nixie Tube Clock
description: A WiFi-controlled clock using Soviet-era tech
img: assets/img/nixie_final.jpg
importance: 1
category: Music & Misc
---

This WiFi-controlled clock uses a discontinued type of Soviet-era neon display (Nixie tubes) to show accurate time and
weather information. I undertook this project at the age of 16, completing all aspects of the design myself. This clock
posed a unique challenge in that the displays run off a nominal 200V DC, whereas the clock itself needed to be powered
over standard 5V USB. 

The device is based around an ESP32 development board, and uses a multiplexed topology to
scan through the digits on-screen. Through the use of an API the clock is able to constantly maintain accurate time
without need for correction for time zone changes, and can parse weather information to display minimum, maximum,
and current temperatures for any desired area.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nixie_final.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Finished clock, in its 3D-printed and plywood case
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nixie_front.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nixie_back.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Front and back of clock PCB stack
</div>

