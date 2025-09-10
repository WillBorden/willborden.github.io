---
layout: page
title: Project Florence
description: ARES' most ambitious and successful rocket
img: assets/img/flo_desert.jpg
importance: 1
category: Rocketry & Space
---

Project Florence is the University of Melbourne’s most successful entry into the International Rocket Engineering Competitions (formerly the Spaceport America Cup) to date. Its outstanding performance in the 2024 competition placed our team 4th out of 152 international institutions in the overall ranking, and 2nd in our category. As chief engineer, I had direct oversight of the development of this rocket, from early concept design to final manufacturing and testing. I was responsible for facilitating
design reviews, writing and enforcing design requirements, authoring extensive technical documentation, and organising in-depth testing regimes.

Florence flew to an altitude of 29 782 ft (approx. 9.1 km), 0.73% off our target apogee. It reached a maximum velocity of 2200 km/h (approx. Mach 1.8) and a peak acceleration of 26G. Featuring custom electronics, airframe, air brakes, telemetry, and
recovery systems, Florence was lauded for its technical innovation and commitment to in-house design and manufacturing.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/flo_launch.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Florence's launch in June 2024 at Spaceport America, New Mexico
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/award.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/flo_desert.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    ARES accepting our 2nd place award (left), and a photo of Florence at the White Sands national park (right)
</div>

Florence represented a large shift for the team in terms of design approach. Our two previous competition rockets, Phobos and Deimos, were long and thin and featured aerodynamic transitions. Whilst this is beneficial from an aerodynamic performance point of view, it comes at the detriment of rigidness of the airframe. This ultimately lead to the catastrophic failure of our second competition rocket Deimos, whose 4.2 m tall structure was unable to hold up to the bending moments it was subjected to, and shredded into many pieces after being pointed sideways at twice the speed of sound. I was the avionics lead for Deimos, and whilst my electronics survived the destruction of the rocket I was determined to ensure such a devastating failure wouldn't happen again. 

When I became chief engineer for Project Florence, we immediately pivoted to a more robust design, with the aim of massively improving system reliability. What that looked like for us was forgoing the aerodynamic transitions of previous designs, and opting for a single-diameter airframe. This came at the cost of increased drag; to maximise our possible apogee we made the decision to switch from a dual-separation, dual-deploy recovery scheme, to a single-separation, dual-deploy scheme. This meant our two parachutes would be contained in the same section of the rocket's body, reducing length and mass but increasing the system complexity.

A successful recovery system is the cornerstone of a successful rocket flight, and a frequent point of failure for university rocket teams. We decided we would take no chances in the development of this system, and turned to Melbourne's skydiving community. If there is any ground qualified to teach you how to make a recovery system, it's the people that routinely trust their lives in their parachute release mechanisms. Through this partnership we began incorporating skydiving techniques into our own system, an uncommon practice in rocketry which tends to be a field dominated by outdated practices. These innovations lead to a significantly smaller, lighter, and more reliable rocket recovery system.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/florence_camera_ground.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/florence_camera_chutes.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Stills captured from onboard footage of Florence's second test flight. The left image shows the beautiful expanse of Australian farmland over which we launch, the right show's Florence's two parachutes touching down after a nominal recovery.
</div>

Along with a desire for robustness came a desire for competitiveness. The competition in which we compete allocates the largest amount of points to how accurately teams can reach a target apogee. Previously, ARES had been running simulations to determine a predicted apogee, and ballasting the rocket to get it to reach the right height. For Florence we decided that we wanted to take the next step and start actively controlling our rocket's apogee during flight. We accomplished this through use of an air brakes sytem, which consists of control surfaces which extend and retract, increasing and decreasing the rocket's overall drag dynamically during ascent. 



