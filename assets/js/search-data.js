// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "My curriculum vitae. You can download a PDF version through the button on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-fender-champ-amp-replica",
          title: 'Fender Champ Amp replica',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/amplifier/";
            },},{id: "projects-hybrid-engine-daq-cabinet",
          title: 'Hybrid engine DAQ cabinet',
          description: "Data acquisition and control for a hybrid rocket engine",
          section: "Projects",handler: () => {
              window.location.href = "/projects/daq_cabinet/";
            },},{id: "projects-project-florence",
          title: 'Project Florence',
          description: "ARES&#39; most ambitious and successful rocket",
          section: "Projects",handler: () => {
              window.location.href = "/projects/florence/";
            },},{id: "projects-gnss-receiver",
          title: 'GNSS receiver',
          description: "Custom scratch-built GPS receiver",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gps/";
            },},{id: "projects-project-hermes",
          title: 'Project Hermes',
          description: "A robust and scalable rocket flight computer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hermes/";
            },},{id: "projects-wifi-nixie-tube-clock",
          title: 'WiFi Nixie Tube Clock',
          description: "A WiFi-controlled clock using Soviet-era tech",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nixie_clock/";
            },},{id: "projects-eurorack-modular-synthesiser",
          title: 'Eurorack Modular Synthesiser',
          description: "Modular synthesiser with a DIY VCO",
          section: "Projects",handler: () => {
              window.location.href = "/projects/synthesiser/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%69%6C%6C.%62%6F%72%64%65%6E%30%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/will-borden-164956259", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.instagram.com/aresunimelb/?hl=en", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
