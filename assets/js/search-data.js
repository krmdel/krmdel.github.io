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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Most recent machine learning and software development projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "GitHub repositories and projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "nav-quotes",
          title: "quotes",
          description: "Daily quotes for inspiration",
          section: "Navigation",
          handler: () => {
            window.location.href = "/quotes/";
          },
        },{id: "nav-photos",
          title: "photos",
          description: "Photography and visual moments",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photos/";
          },
        },{id: "post-coming-soon",
        
          title: "Coming soon...",
        
        description: "Coming soon...",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/coming-soon/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-kerem-graduated-as-salutatorian-from-department-of-engineering-physics-at-gaziantep-university",
          title: 'Kerem graduated as salutatorian from Department of Engineering Physics at Gaziantep University.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2015-06-graduation/";
            },},{id: "news-kerem-received-cbms-travel-grant-for-microtas-2019",
          title: 'Kerem received CBMS Travel Grant for MicroTAS 2019.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2019-10-cbms-grant/";
            },},{id: "news-kerem-39-s-collaborative-microscope-design-received-award-in-fourth-place-at-national-patent-competition",
          title: 'Kerem&amp;#39;s collaborative microscope design received award in fourth place at national patent competition....',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-10-patent-award/";
            },},{id: "news-kerem-obtained-masters-of-science-from-department-of-physics-at-technical-university-of-munich-with-the-highest-distinction",
          title: 'Kerem obtained Masters of Science from Department of Physics at Technical University of...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-04-msc-degree/";
            },},{id: "news-kerem-39-s-perspectives-on-trends-and-predictions-for-ai-in-2025",
          title: 'Kerem&amp;#39;s perspectives on trends and predictions for AI in 2025.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-01-ai-trends/";
            },},{id: "news-kerem-gave-a-seminar-on-ai-powered-real-time-phase-imaging-flow-cytometer-at-biology-create-seminar",
          title: 'Kerem gave a seminar on AI-powered real-time phase imaging flow cytometer at Biology@CREATE...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-03-biology-create/";
            },},{id: "news-we-finished-aitinkerers-39-textarena-agent-hackathon-first-in-place",
          title: 'We finished AITinkerers&amp;#39; TextArena Agent Hackathon first in place.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-03-textarena/";
            },},{id: "news-rt-ham-was-accepted-for-computer-vision-for-science-workshop-at-cvpr-2025",
          title: 'RT-HAM was accepted for Computer Vision for Science Workshop at CVPR 2025.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-rtham-cvpr/";
            },},{id: "news-after-four-years-of-hard-work-we-closed-cellface-project-investigating-the-prognostic-biomarkers-for-acute-care-triage",
          title: 'After four years of hard work, we closed CellFACE project investigating the prognostic...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-08-cellface-closing/";
            },},{id: "news-we-secured-smart-innovation-grant-for-cellface-to-get-our-ai-powered-real-time-phase-flow-cytometer-technology-step-closer-to-commercialization",
          title: 'We secured SMART Innovation Grant for CellFACE to get our AI-powered real-time phase...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-09-smart-grant/";
            },},{id: "photos-2024-02-at",
          title: '2024 02 At',
          description: "Atlanta/USA",
          section: "Photos",handler: () => {
              window.location.href = "/photos/2024-02-at/";
            },},{id: "photos-2024-02-lv",
          title: '2024 02 Lv',
          description: "Las Vegas/USA",
          section: "Photos",handler: () => {
              window.location.href = "/photos/2024-02-lv/";
            },},{id: "photos-2024-10-ont",
          title: '2024 10 Ont',
          description: "Niagara Falls/Canada",
          section: "Photos",handler: () => {
              window.location.href = "/photos/2024-10-ont/";
            },},{id: "photos-2025-01-sfo",
          title: '2025 01 Sfo',
          description: "San Francisco/USA",
          section: "Photos",handler: () => {
              window.location.href = "/photos/2025-01-sfo/";
            },},{id: "photos-2025-02-jk",
          title: '2025 02 Jk',
          description: "Jakarta/Indonesia",
          section: "Photos",handler: () => {
              window.location.href = "/photos/2025-02-jk/";
            },},{id: "photos-2025-05-bk",
          title: '2025 05 Bk',
          description: "Bangkok/Thailand",
          section: "Photos",handler: () => {
              window.location.href = "/photos/2025-05-bk/";
            },},{id: "photos-2025-05-bk2",
          title: '2025 05 Bk2',
          description: "Bangkok/Thailand",
          section: "Photos",handler: () => {
              window.location.href = "/photos/2025-05-bk2/";
            },},{id: "photos-2025-05-hk",
          title: '2025 05 Hk',
          description: "Hong Kong",
          section: "Photos",handler: () => {
              window.location.href = "/photos/2025-05-hk/";
            },},{id: "photos-2025-05-kl",
          title: '2025 05 Kl',
          description: "Kuala Lumpur/Malaysia",
          section: "Photos",handler: () => {
              window.location.href = "/photos/2025-05-kl/";
            },},{id: "photos-2025-05-mc",
          title: '2025 05 Mc',
          description: "Macau",
          section: "Photos",handler: () => {
              window.location.href = "/photos/2025-05-mc/";
            },},{id: "photos-2025-06-pq",
          title: '2025 06 Pq',
          description: "Phu Quoc/Vietnam",
          section: "Photos",handler: () => {
              window.location.href = "/photos/2025-06-pq/";
            },},{id: "photos-2025-09-jb",
          title: '2025 09 Jb',
          description: "Johor Bahru/Malaysia",
          section: "Photos",handler: () => {
              window.location.href = "/photos/2025-09-jb/";
            },},{id: "projects-real-time-deep-learning-phase-imaging-flow-cytometer-reveals-blood-cell-aggregate-biomarkers-for-haematology-diagnostics",
          title: 'Real-time deep learning phase imaging flow cytometer reveals blood cell aggregate biomarkers for...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rt_had/";
            },},{id: "projects-triagent-automated-biomarker-discovery-with-deep-research-grounding-for-triage-in-acute-care-by-llm-based-multi-agent-collaboration",
          title: 'TriAgent: Automated Biomarker Discovery with Deep Research Grounding for Triage in Acute Care...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/triagent/";
            },},{id: "quotes-luck-is-a-dividend-of-sweat-the-more-you-sweat-the-luckier-you-get-ray-kroc",
          title: '“Luck is a dividend of sweat. The more you sweat, the luckier you...',
          description: "",
          section: "Quotes",},{id: "quotes-all-i-want-to-know-is-where-i-m-going-to-die-so-i-don-t-go-there-charlie-munger",
          title: '“All I want to know is where I’m going to die so I...',
          description: "",
          section: "Quotes",},{id: "quotes-a-journey-of-a-thousand-miles-begins-with-a-single-step-lao-tzu",
          title: '“A journey of a thousand miles begins with a single step.” — Lao...',
          description: "",
          section: "Quotes",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%65%72%65%6D.%64%65%6C%69%6B%6F%79%75%6E@%74%75%6D-%63%72%65%61%74%65.%65%64%75.%73%67", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/keremdelikoyun", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jY6YNQ4AAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.tum-create.edu.sg/people/research-team/kerem-delikoyun", "_blank");
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
