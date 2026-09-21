---
layout: page
title: GNSS receiver
description: Custom GPS L1 band reciever with microwave LO, downconvering RF front end, IF stage with 1-bit digitisation
img: assets/img/new_front_end.jpeg
importance: 3
category: Rocketry & Space
---

In 2023 I decided I wanted to  try and build a GPS receiver from scratch. I had never touched an RF project before and had no idea what I was getting myself into. 3 years and many hardware revisions later in 2026 I successfully acquired my first satellite signals. GPS satellites orbit about 20,000 km away from Earth, and send signals over that distance via a measly 25W transmitter. This means by the time the signals reach earth their strength is almost nonexistent - typically around -130 dBm which is ~20dB below the thermal noise floor. Additionally, all satellites transmit on the same frequency, meaning the already weak signals are all superimposed on top of one another.

My end goal with this project is to design a fully self-contained receiver, which I hope to accomplish in the coming years (hopefully before the end of the decade). This page details the development of just the front end, by far the most difficult part to design, which will be later incorporated into the integrated receiver. Pictured below is my third revision front end, the penultimate board before the version that finally worked. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/new_front_end.jpeg" title="new front end" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Third revision RF analogue front end.
</div>

The architecture of a GPS front end is relatively simple, and doesn't differ much from other downconverting RF receivers. Its main challenges lie in the fragility of the signals themselves; GPS signals are so weak that they are very easily drowned out by losses or interference. The architecture shown below is a superheterodyne receiver, where the incoming RF signal is downconverted to an intermediate frequency (IF) through mixing it with a local oscillator. 

The signal is first received by a commercial active patch antenna, with an integrated LNA and SAW. This is then fed into the front end PCB via a u.fl connector, and then another LNA to boost the signal level before the mixer. My receiver uses low-side LO injection, feeding a 1.55282 GHz signal into the mixer, which produces a 22.6 MHz IF. This IF value was chosen primarily based on the amazing work of [Andrew Holme](http://www.aholme.co.uk/GPS/Main.htm) whose page was an incredible resource during this project. The LO must have low phase to preserve carrier SNR, and enable correlation over long sample periods. The bulk of the signal amplification and filtering happens at IF, where it is far easier to design high-Q filters and find high-gain amplifiers. Since GPS signals are so weak, huge amounts of amplification are required to get anything remotely digitisable (upwards of 100 dB total!). This creates a risk running into instability issues, which I encountered with the board pictured above. Solid PCB design is paramount, as is splitting amplification over both the RF and IF sections. This risk can be further mitigated with an extra downconversion, but at the cost of more system complexity. After the IF chain comes a programmable attenuator; this can be dynamically adjusted to keep the ADC input level healthy. A counterintuitive aspect of GPS receiver design is that since the signals are so far below the noise floor, the front end is really just amplifying thermal noise in the signal bandwidth to an appropriate level - this noise is what causes the comaprator to toggle 'randomly'. The GPS signals ride on this noise (much much weaker) and influence the comparator readings near its zero-crossings. This is what allows the signals to still be recoverable.  

The 'ADC' is only an ADC in that it converts an analogue signal to a digital one - in this receiver it consists of a simple comparator, or a 1-bit ADC if you will. It is amazing that such aggressive signal quantisation still allows acquisition of the GPS data, but literature shows it only introduces a 2-3 dB reduction in SNR. It has the benefit of massively reducing the size of the acquired data compared to say an 8- or 12-bit ADC. An extra trick to reduce computational load is intentional aliasing of the IF by undersampling it at 10 MHz. This further downconverts is to a 2.6 MHz baseband, preserving the 2 MHz central lobe bandwidth whilst reducing the sampling rate from 50+ MSa/s to 10 MSa/s. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gps_block_diagram.png" title="GPS front end block diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Front end block diagram.
</div>

As I mentioned above, 7 hardware revisions total were required to get this system to work - 3 local oscillator boards and 4 front end boards. Much of the early failures reflected my own lack of knowledge on RF hardware design, which improved greatly with each new board. Here is a brief summary of the issues encountered with each board:

- **LO V1** - poorly designed loop filter meant the PLL wouldn't lock unless I very carefully placed my finger on a certain inductor, and even then with very poor phase noise.
- **LO V2** - the PLL from V1 was made obsolete, so I adopted a new TI chip which I never successfully communicated with. It used its own communication interface and you couldn't read back any register values you programmed which made debugging a terrible process.
- **LO V3** - worked! Chose a different TI PLL with a friendlier programming interface, and took much greater care with the PCB layout. Unlike V1 where I had terminated one side of the balanced output, I used a Balun to increase the single-ended output power.
- **Front End V1** - poorly designed in general: used an LNA package that was impossible to solder reliably, used IF amplifiers that didn't amplify properly at my IF, and biased my comparator incorrectly so it never triggered at all.
- **Front End V2** - I didn't have tools to properly diagnose the issues with V1, so I applied a band-aid fix to the biasing and hoped for the best. It also didn't work.
- **Front End V3** - The most complex design in the whole project, used a fancy VGA chip and a balanced IF section with crazy high-order high-Q filters, and an 8-bit ADC. I was very careful with the design, but the VGA chip ended up causing instability which left crazy ringing in my output, directly in-band of the L1 signals. 
- **Font End V4** - worked! I went back to a simpler design, mimicking V1 but with much greater care taken to the IF section and comaprator routing. This board still encountered issues, which I'll explain below.

The two years of this project were mainly spent reading up on the GPS constellation and teaching myself enough RF engineering to design some hardware. My first revision of the receiver was constructed and tested in August of 2025, second revision in September 2025, third revision in January 2026, and fourth revision in August 2026. 

My final local oscillator performed well, showing satisfactory phase noise and output level. To test the final version I acquired a TinySA spectrum analyser to properly measure the output; previously had been using the PLL output divider to step the frequency down to something I could measure with the lower-bandwidth scopes at university. The LO has a measured phase noise of -123.4 dBc/Hz at a 1 MHz offset.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/LO_plot_zoomed_out.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/LO_plot_zoomed_in.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Output spectrum analyser plots of 1552.82 MHz local oscillator.
</div>

My fourth revision front end had some initial issues with its LNA - despite me selecting an easier to solder package it is still very small, and I've had reliability issues with them out of the reflow oven. My first time reflowing the board the LNA was consuming no current at all. I replaced it, but instead of reflowing it again I hand soldered it - neglecting the exposed pad under the package. I had naively assumed the pad would mostly be for thermals. This caused the chip to work, but no satellites could be acquired. I managed to procure a cheap VNA and took some measurements of the front end, and found the missing solder on the ground pad was causing very strange changes to the gain pattern. I replicated this on another board to verify that it was the ground pad and not the chip being faulty. 

The below plot shows that on the faulty board, there's a significant gain drop off just before the L1 centre frequency, leading to ~8 dB lower than ideal gain. There's also a strange boost in signals just to the left of the centre frequency, which were likely drowning out the L1 signals. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/lna_vna_measurements.png" title="LNA VNA measurements" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    VNA measurements of RF LNA with proper and improper soldering of exposed pad.
</div>

I made a new version of the board and manually touched up the LNA solder joints out of the oven to make sure everything was connected properly, which finally let me acquire some satellite signals after over a year of trying. My first capture was made of the 19th of September 2026, where I managed to spot SVN-76 (PRN 23). That afternoon and the next day I made more captures and found even more satellites. I don't have a good area with a clear view of the sky to see everything, but the satellites I observed always lined up well with the portions of sky that weren't obstructed. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/first_capture.png" title="first satellite capture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    My first ever successful GPS satellite acquisition of PRN 23.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/second_capture.png" title="second capture" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/third_capture.png" title="third capture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Subsequent captures showing more satellites. The weaker peaks were from satellites at lower inclinations.
</div>

It's very hard to express how good a feeling it was to see that first acquisition spike. The front end isn't free from issues however, the main problem currently is that the input to the comparator is too low, which is stopping it from toggling reliably. I need to go over the design to see if any of my impedance matching networks etc. are off, and if that fails I'll add an extra gain block in the IF section - I was expecting the current design to be a little low, and the attenuator will be able to handle the increased gain. 

This problem means that I had to use my oscilloscope to capture the raw data and process that instead. This was overkill, and gathered many more samples than I needed which made the acquisition computation take ages. It does have the positive of allowing us to see the frequency distribution of the IF section clearly however, which is shown below. The IF filter is clearly working well, its centre frequency and bandwidth are very close to the designed values. I had issues with this with the V3 front end, so for V4 I ran Monte Carlo simulations in uSimmics with manufacturer component tolerances to make sure the filter passband would fall within acceptable limits. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fft_good_capture.png" title="FFT of a good capture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    FFT of 2.4 ms of captured data, showing shape of IF filter.
</div>

Once the data is captured with the oscilloscope, it is processed with a python script that extracts signatures of any GPS signals present. A local copy of each SV's gold code is generated and upsampled to match the incoming data, then the cross-correlation of this and the input data (which is first converted to complex baseband) is computed. This cross correlation has to be performed at carrier centre frequency Doppler shifts of up to +/-5 kHz at 500 Hz offsets, and across all 32 PRNs. Performing it in the frequency domain via FFT saves a lot of time, but it is still a huge search space which takes my laptop about 40 seconds to run through. The peak cross-correlation values for each SV are recorded, which is what is shown in the bar graphs above. Taking the cross-correlation of a present satellite we can see what the actual spike looks like when the satellite's pseudorandom ranging code is detected. This is shown below for PRN 23, which was acquired with a Doppler shift of +1500 Hz and a code phase of 683. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/correlation_spike_strong.png" title="strong correlation spike" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Correlation spike from a successful capture. Pictured here is PRN 23 with a code phase offset of approximately 683.
</div>

Being able to detect satellites is a huge step forward with this project, and de-risks a lot of the later development. Next steps are to try and get the comparator toggling so readings can be made with an FPGA, and then my task will be designing a compact digital section capable of providing useable navigation data. The digital section will likely consist of an FPGA and an MCU, which together will be responsible for satellite acquisition, tracking, ephemeris parsing, navigation solution computation, and autonomous management of which satellites to track and acquire etc. It'll be a big job, but there are luckily plenty of online resources. I've already started writing an ephemeris parser library in C, which is a lot of fun. I also need to upgrade my acquisition setup, as its currently just a mess of wires set up on our outdoor dining table.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/acquisition_setup.png" title="janky acquisition setup" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    My current janky acquisition setup. You can see my antenna by the far wall on a chair, which I positioned to get a last glimpse of PRN 18 before it went behind my house.
</div>

This project has probably taught me the most out of anything I've worked on in electronics. Being able to detect some of the weakest RF signals from objects orbiting the Earth 20,000 km away still seems so impossible to me, which is a lot of what has inspired me to keep moving with this project despite all of the failures I've had. I'm very excited to delve into the digital/software domain after 3 years of RF analogue stuff, and I can't wait to finally get some coordinates off the finished receiver. I'd love to one day fly the finished receiver on a cubesat, or a sounding rocket past the Karman line.


