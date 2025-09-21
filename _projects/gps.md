---
layout: page
title: GNSS reciever
description: Custom scratch-built GPS receiver
img: assets/img/gps_wide.png
importance: 3
category: Rocketry & Space
---

This GNSS receiver is an ongoing solo project which aims to construct an entirely custom L1 band GPS receiver for
use with high-power rocketry. This receiver will allow accurate tracking of launch vehicles traveling at high velocities
and altitudes, at a substantially lower cost than commercial solutions. This project has required a large amount of self-
instruction, requiring advanced skills in RF design, satellite communications, PCB design, embedded systems design,
and FPGA systems. 

Pictured below are the first two test modules of the receiver, an RF front end for signal amplification, filtering, and downconversion, and a fractional-N PLL frequency synthesiser which will act as the systems local oscillator. These systems operate in the microwave frequency range, at approximately 1.6 GHz. This is a long-term project, after testing the above subsystems will be combined into an integrated receiver which will handle the computational aspects of the system.


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

The primary problem I'm trying to address with this project is the fact that commercial GPS recievers cannot be used on high-altitude rocket flights. High altitude and space-capable GPS trackers are exorbitantly expensive, and unobtainable for student rocketry teams. I few years ago I decided that I could simply design my own system, and make it as inexpensive as possible. The design is made up of several elements:

- **RF Front End** - this section is responsible for recieving signals from the GPS antenna. Signals in the L1 band are approximately 20dB below the thermal noise floor, so must be treated carefully. The RF section amplifies, filters, and downconverts the signal to a 20MHz IF. The whole section is designed from readily available, non-specialised components. 
- **Local Oscillator** - this section generates an LO used in downconverting the signal to its IF. It needs to be a highly stable, low phase noise design, as any drifting of the LO will result in potential loss of GPS lock in the tracking loops, and a larger search space for doppler shift determination. This is of particular concern in rocketry applications; frequency references are often vibration susceptible so care must be taken to ensure immunity from environmental factors. 
- **Digial Section** - the digital section takes the processed IF and extracts the navigation data in oder to compute a position solution. This first requires identification of visible satellites and determination of carrier and code phases. This is a computationally intensive process, relying on an FFT-based algorithm which marches through an enourmous search spaces of frequency shifts, code offsets, and SV IDs. Next, visible satellites are tracked using simple control loops. A Costas loop extracts navigation bits from the incoming data, and the other loops adjust the system timing to account for each satellite's changing doppler shift. The extracted navigation data is parsed and fed into a position algorithm, which determines the receiver's location using the each satellite's ephemeris data. The digital section additionally decides which satellites to track and which to ignore (to minimise dilution of precision), and manages data storage and communication. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/schem.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Schematic of initial LO design (since deprecated)
</div>

I have currently designed initial prototypes of the RF front and and local oscillator. I'm comparing the results of these against a commercially available integrated GPS front end IC, to verify that my design has a sufficient SNR for use in an integrated receiver. Once this is verified, I will integrate the RF sections with the necessary digital circuitry to create a compact integrated system. 

Whilst this project is far from completed, I have already learned enourmous amounts from the work I have done. This is my first proper RF project, and has been a wonderful challenge to wrap my head around the advanced concepts involved in satellite positioning and RF electronics. I'm excited to continue the development of the project, and would love to one day fly it on a rocket into space. 

