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
        {% include figure.liquid loading="eager" path="assets/img/flo_launch.jpg" title="Florence's launch" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="caption">
    Florence's launch in June 2024 at Spaceport America, New Mexico
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/award.jpg" title="ARES accepting award" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/flo_desert.jpg" title="Florence at White Sands" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="caption">
    ARES accepting our 2nd place award (left), and a photo of Florence at the White Sands national park (right)
</div>

Florence represented a large shift for the team in terms of design approach. Our two previous competition rockets, Phobos and Deimos, had fine aspect ratios and featured aerodynamic transitions. Whilst this is beneficial from an aerodynamic performance point of view, it comes at the detriment of rigidity of the airframe. This ultimately lead to the catastrophic failure of our second competition rocket Deimos, whose 4.2 m tall structure was unable to hold up to the bending moments it was subjected to, and shredded into many pieces after being pointed sideways at twice the speed of sound. I was the avionics lead for Deimos, and whilst my electronics survived the destruction of the rocket I was determined to ensure such a devastating failure wouldn't happen again. 

When I became chief engineer for Project Florence, we immediately pivoted to a more robust design, with the aim of massively improving system reliability. What that looked like for us was forgoing the aerodynamic transitions of previous designs, and opting for a single-diameter airframe. This came at the cost of increased drag; to maximise our apogee we made the decision to switch from a dual-separation, dual-deploy recovery scheme, to a single-separation, dual-deploy scheme. This meant our two parachutes would be contained in the same section of the rocket's body, reducing length and mass but increasing the system complexity.

A reliable recovery system is the cornerstone of a successful rocket flight, and a frequent point of failure for university rocket teams. We decided we would take no chances in the development of this system, and turned to Melbourne's skydiving community for assistance. If there is any group qualified to teach you how to make a recovery system, it's the people that routinely trust their lives in their parachutes and release mechanisms. Through this partnership we began incorporating skydiving techniques into our own system, an uncommon approach in rocketry which tends to be a field dominated by outdated practices. These innovations lead to a significantly smaller, lighter, and more reliable rocket recovery system.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/florence_camera_ground.jpg" title="Florence on-board photo" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/florence_camera_chutes.jpg" title="Florence landing" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="caption">
    Stills captured from onboard footage of Florence's second test flight. The left image shows the beautiful expanse of Australian farmland over which we launch, the right show's Florence's two parachutes touching down after a nominal recovery.
</div>

Along with a desire for robustness came a desire for competitiveness. Our competition allocates the largest amount of points to how accurately teams can reach a target apogee. Previously, ARES had been running simulations to determine a predicted apogee, and ballasting the rocket to get it to reach the correct height. For Florence, we decided that we wanted to take the next step and start actively controlling our rocket's apogee during flight. We accomplished this through use of an air brakes sytem, which consists of extendable control surfaces, increasing and decreasing the rocket's overall drag dynamically during ascent. The control for this system ran on one of my flight computers, Hermes. We used model predictive control to simulate all possible rocket trajectories, and used this to create lightweight lookup tables that the air brakes system could query in real time to dynamically update the extention of the air brake leaves. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/air_brakes_adi.jpg" title="Air brakes being installed" class="img-fluid rounded fa-rotate-270 z-depth-1" zoomable=true%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/air_brakes.jpg" title="Air brakes during testing" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="caption">
    Air brakes being integrated into the rocket (left) and the extended mechanism during testing (right)
</div>

To verify system functionality and validate our simulations and CFD, Florence was test launched twice in Australia. Due to altitude limitations a shorter version of the rocket was constructed, allowing us to retain aerodynamic stability using a less powerful rocket motor. We were still able to launch Florence to a little under half the height we would be aiming for in the US, providing critical insight into our system performance. A recovery failure during the first test launch caused moderate (but reparable) damage to a section of the air frame; our second test launch was entirely nominal.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/flo_launch_wide.jpg" title="Florence test launch" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/flo_launch_pad.jpg" title="Florence test launch pad" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="caption">
    Stills of Florence at our two test launches
</div>

Florence was launched in the 2024 Spaceport America Cup. Our design was very well recieved by judges and competition officials. We had a successful launch, reaching an apogee just 0.73% off our target 30'000 ft altitude. We scored 235 out of a possible 240 points for design and build quality, and our outstanding flight performance landed us 4th place overall (out of 152 teams), and 2nd place in our category. We additionally came 3rd in the payload challenge, for our scientific payload investigating the effects of vibration on bacterial health, through the use of Raman spectroscopy. A highlight of the competition, as always, was travelling to the beautiful New Mexico, and experiencing the wonderful culture, hospitality, and landscapes there. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sac_collage/post_recovery.jpg" title="Florence test launch" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sac_collage/team_photo.jpg" title="Florence test launch pad" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sac_collage/vla.jpg" title="Florence test launch pad" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sac_collage/house.jpg" title="Florence test launch" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sac_collage/rocket_in_desert.jpg" title="Florence test launch pad" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="row">
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sac_collage/white_sands.jpg" title="Florence test launch" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sac_collage/team_in_car.jpg" title="Florence test launch pad" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sac_collage/judging.jpg" title="Florence test launch pad" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sac_collage/frr.jpg" title="Florence test launch" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sac_collage/airport.jpg" title="Florence test launch pad" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sac_collage/me_at_judging.jpg" title="Florence test launch pad" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="caption">
    Collage of some of my favourite moments from SAC 2024
</div>

Being Chief Engineer for Florence is by far one of the highlights of my time at the University of Melbourne. Leading the development of what remains one of Australia's highest performing collegiate rockets was an incredibly rewarding experience, even more so thanks to the incredible team of engineers I led. Florence set the direction of ARES' endeavours for the next few years; there's many exciting things to come. 



