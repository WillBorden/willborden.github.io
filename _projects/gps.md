---
layout: page
title: GNSS reciever
description: Custom scratch-built GPS receiver
img: assets/img/GPS FRONT END.png
importance: 3
category: Rocketry & Space
---

This GNSS receiver is an ongoing solo project which aims to construct an entirely custom L1 band GPS receiver for
use with high-power rocketry. This receiver will allow accurate tracking of launch vehicles traveling at high velocities
and altitudes, at a substantially lower cost than commercial solutions. This project has required a large amount of self-
instruction, requiring advanced skills in RF design, satellite communications, PCB design, embedded systems design,
and FPGA systems. Pictured above are the first two test modules of the receiver, an RF front end for signal amplifica-
tion, filtering, and downconversion, and a fractional-N PLL frequency synthesiser which will act as the systems local
oscillator. These systems operate in the microwave frequency range, at approximately 1.6 GHz. This is a long-term
project, after testing the above subsystems will be combined into an integrated receiver which will handle the computa-
tion aspects of the system.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/GPS FRONT END.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/GPS LO.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Initial RF front end (left) and PLL-based local oscillator (right)
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/schem.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Schematic of initial LO design
</div>

