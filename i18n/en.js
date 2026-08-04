/* ─── AITHORIS i18n — English strings ─────────────────────────────────────
 *
 * HOW TO ADD A NEW PAGE:
 *   1. Add a new namespace object here (e.g. about: { headline: '…' })
 *   2. Mirror the same structure in es.js
 *   3. Use data-i18n="about.headline" in the HTML
 * ───────────────────────────────────────────────────────────────────────── */
window.i18nStrings = window.i18nStrings || {};
window.i18nStrings.en = {

  meta: {
    title: 'AITHORIS | AI Engineering Company',
    description: 'AITHORIS engineers AI agents, workflow automations, and intelligent systems that help organizations simplify complexity and make better decisions.',
  },

  skip: { link: 'Skip to content' },

  nav: {
    about:     'About',
    services:  'Services',
    whyAithoris:  'Why AITHORIS',
    portfolio: 'Portfolio',
    contact:   'Contact',
    cta:       'Book a Session',
    menuOpen:  'Open menu',
    menuClose: 'Close menu',
    lang:      'Language',
  },

  hero: {
    eyebrow:    'Connecting Intelligence',
    headline:   'Most organizations don\'t have an <span class="font-bold text-signal">AI</span> problem.<br>They have a complexity problem.',
    body:       'AI is how the problem gets solved and how that solution turns into revenue, engineered as agents, workflow automations, and intelligent systems built around how your organization actually works.',
    ctaPrimary:  'Book a Discovery Session',
    ctaSecondary:'See Our Work',
  },

  credibility: {
    label:        'What we operate on, not a client roster',
    intelligence: 'Intelligence',
    engineering:  'Engineering',
    precision:    'Precision',
    trust:        'Trust',
    simplicity:   'Simplicity',
  },

  services: {
    eyebrow: 'What We Build',
    heading: 'Purpose-built systems, not generic tools.',
    card1: {
      title: 'AI Agents',
      body:  'Autonomous systems that execute complex, multi-step workflows: researching, analyzing, deciding, and acting within defined parameters and oversight frameworks.',
    },
    card2: {
      title: 'Workflow Automation',
      body:  'End-to-end automation of repetitive, rule-based processes: connecting data sources, applications, and teams into coherent operational systems.',
    },
    card3: {
      title: 'Knowledge Systems',
      body:  'Structured repositories that capture, organize, and surface organizational intelligence: making expertise accessible regardless of who is in the room.',
    },
    card4: {
      title: 'AI Consulting',
      body:  'Strategic guidance for organizations navigating AI adoption: covering architecture, governance, vendor selection, team readiness, and long-term planning.',
    },
    card5: {
      title: 'Custom AI Development',
      body:  'Purpose-built AI integrations designed around specific business problems, not pre-packaged products forced into contexts they were not designed for.',
    },
  },

  howWeWork: {
    eyebrow: 'How We Work',
    heading: 'From problem to production.',
    step1: {
      title: 'Discover',
      body:  'Every engagement starts with the real business problem, not the technology. We map what\'s broken before we decide what to build.',
    },
    step2: {
      title: 'Design',
      body:  'AI adapts to how your team already works. We design around existing workflows, not around the limitations of a model.',
    },
    step3: {
      title: 'Engineer',
      body:  'Every system we ship is transparent in its operation, explainable in its decisions, and built to scale with modular, documented architecture.',
    },
    step4: {
      title: 'Refine',
      body:  'Quality doesn\'t end at launch. We hold every system to the same standard of care after deployment as we did on day one.',
    },
  },

  founding: {
    eyebrow: 'Select Founding Partners',
    heading: 'We build AI systems that move businesses forward.',
    body:    'Technology alone doesn\'t solve problems. Well-engineered systems do. We design AI that streamlines operations, connects knowledge, and automates complex workflows with precision, working alongside your team from strategy through implementation. Every engagement gets direct senior-level attention and an uncompromising focus on quality.',
    cta:     'Start a Conversation',
  },

  statement: {
    eyebrow: 'Engineered for Production',
    body:    'Most AI pilots never reach production.<br><span class="font-medium">We start there.</span>',
  },

  whyAithoris: {
    eyebrow: 'Why AITHORIS',
    heading: 'Built for the gap others leave open.',
    body:    'AI projects tend to fail in one of two ways: agencies move fast but leave fragile systems behind, or consultancies move carefully but never ship. Here\'s the standard we hold ourselves to instead: on every engagement, not just the pitch.',
    table: {
      col: {
        agencies:   'AI Agencies',
        consulting: 'Large Consulting',
      },
      row1: { label: 'Engineering discipline', agencies: 'Variable',          consulting: 'Layered approvals', aithoris: 'Rigorous, documented'  },
      row2: { label: 'Speed to production',    agencies: 'Fast, fragile',     consulting: 'Slow, thorough',    aithoris: 'Fast, reliable'        },
      row3: { label: 'Explainability',         agencies: 'Rarely prioritized',consulting: 'Rarely delivered',  aithoris: 'Engineered in'         },
      row4: { label: 'Governance',             agencies: 'Absent',            consulting: 'Process-heavy',     aithoris: 'Right-sized'           },
      row5: { label: 'Design quality',         agencies: 'Generic',           consulting: 'Enterprise standard',aithoris: 'Premium, branded'     },
    },
    footnote: 'Our own operating standard, not a scored audit of any specific firm.',
  },

  contact: {
    heading:     'Stop managing complexity.<br>Start operating through it.',
    body:        'Tell us about your workflows. We\'ll assess what\'s worth automating, map the highest-value opportunities, and tell you honestly whether AI is the right tool, before we build anything.',
    form: {
      name:     'Name',
      email:    'Work email',
      company:  'Company (optional)',
      message:  'What are you looking to solve?',
      submit:   'Book a Discovery Session',
      sending:  'Sending…',
      success:  'Thanks! We\'ll reply within one business day.',
      error:    'Something went wrong. Email us directly at hello@aithoris.io instead.',
      emailAlt: 'Prefer email? Write to <a href="mailto:hello@aithoris.io" class="underline hover:text-signal">hello@aithoris.io</a>',
    },
  },

  footer: {
    tagline:   'Connecting Intelligence.',
    copyright: '© 2026 AITHORIS. All rights reserved.',
    label:     'AI Engineering Company',
  },

  about: {
    meta: {
      title:       'AITHORIS | About',
      description: 'AITHORIS is an AI engineering and intelligent automation partner focused on helping organizations operate more efficiently, make better decisions, and scale with confidence.',
    },
    hero: {
      eyebrow:  'About AITHORIS',
      headline: 'Engineering Intelligence. Delivering Business Results.',
      body:     'Technology alone doesn\'t transform a business. The right strategy, the right systems, and the right execution do. At AITHORIS, we design intelligent AI solutions that help organizations eliminate inefficiencies, automate repetitive work, reduce operational costs, and create new opportunities for growth. Every solution we build is engineered around one objective: helping your business perform better.',
      closer:   'We don\'t implement AI because it\'s trending.<br><span class="font-medium text-ivory">We engineer intelligent systems because they solve real business problems.</span>',
      cta:      'Let\'s Build Something Smarter',
    },
    whoWeAre: {
      eyebrow: 'Who We Are',
      heading: 'Your AI Engineering Partner for Business Transformation',
      body1:   'AITHORIS is an AI engineering and intelligent automation company focused on helping organizations operate more efficiently, make better decisions, and scale with confidence.',
      body2:   'We work with companies that recognize technology should be an advantage, not another challenge to manage.',
      body3:   'Instead of offering generic AI tools, we take the time to understand how your business operates, where opportunities exist, and how intelligent systems can create measurable improvements across your organization.',
      body4:   'Whether it\'s streamlining internal operations, improving customer experiences, accelerating decision-making, or creating entirely new revenue opportunities, every solution we develop is built around your business, not around the latest technology trend.',
      closer:  'Because real innovation isn\'t about adding more software.<br><span class="font-medium text-ivory">It\'s about making work simpler, faster, and more valuable.</span>',
    },
    whyWeExist: {
      eyebrow:  'Why We Exist',
      heading:  'Businesses Don\'t Need More Technology.<br>They Need Better Systems.',
      problems: 'Every organization has hidden inefficiencies.<br>Manual processes that waste valuable time.<br>Information trapped across disconnected systems.<br>Teams performing repetitive work that could be automated.<br>Opportunities lost because critical decisions take too long.',
      reframe:  'These challenges aren\'t technology problems.<br><span class="font-medium text-ivory">They\'re business problems.</span>',
      body:     'Our mission is to engineer intelligent systems that remove those barriers, allowing people to focus on what they do best: creating value, serving customers, and growing the business.',
      closer:   'When technology works the way it should, it becomes nearly invisible.<br>Your teams simply work faster.<br>Your customers receive better experiences.<br>Your business becomes more efficient.',
    },
    different: {
      eyebrow: 'What Makes AITHORIS Different',
      heading: 'Three commitments, on every engagement.',
      body:    'None of this is complicated. It\'s just consistently rare.',
      card1: { title: 'Practical Intelligence',            body: 'We build systems that solve the specific problem in front of us, not general-purpose AI in search of a use case. If it doesn\'t remove work, cut cost, or speed up a decision, we don\'t build it just because the technology exists.' },
      card2: { title: 'Solutions Built Around You',        body: 'Every system is designed around your existing workflows, data, and team, not the other way around. You shouldn\'t have to change how your business runs to fit a piece of software; the software fits how your business already wins.' },
      card3: { title: 'Partnership Beyond Deployment',     body: 'We stay accountable after launch: monitoring, refining, and supporting what we build for as long as you need us. Your business keeps evolving, so the system has to evolve with it. That\'s not an add-on service. It\'s the job.' },
    },
    founders: {
      eyebrow: 'Founders',
      heading: 'Two careers, one conclusion.',
      intro:   'AITHORIS wasn\'t founded by strategists guessing at technology, or engineers guessing at business. It was founded by two people who spent their careers on opposite sides of the same problem: the right decision, undone by a system nobody built to carry it.',
      tito: {
        name:  'Tito Burga',
        title: 'Co-Founder, Design & AI Engineering',
        bio1:  'Tito spent 25 years directing creative and brand strategy inside some of the largest broadcast networks in the U.S., including Telemundo, CBS, Cox Media Group, Gray Television, and Sinclair Broadcast Group. His work has earned an Emmy win, two additional Emmy nominations, an EMA award, and three NBC Ovation Awards.',
        bio2:  'In 2022, he retrained as a UX designer and front-end developer, and now builds with the same AI tools AITHORIS engineers for clients. Two decades of understanding how audiences and organizations actually consume information, paired with hands-on fluency in the tools reshaping how work gets built: that combination is what he brings to every engagement.',
      },
      cesar: {
        name:  'César Montoya',
        title: 'Co-Founder, Leadership & Execution Strategy',
        bio1:  'César spent 20 years inside banking, finance, and human-resources leadership, including senior roles at Banco Wiese and Banco de Comercio, before founding Centro Internacional de Competencias, where he advises boards and executive teams across Latin America.',
        bio2:  'His diagnosis, refined over two decades of watching strategy meet reality: organizations rarely fail from a bad plan. They fail because the leadership architecture responsible for executing it was never designed to hold it. One of the practices he built around that thesis applies AI directly to executive decision-making, the same discipline AITHORIS now builds for clients at scale.',
      },
      why: {
        eyebrow: 'Why We Built AITHORIS',
        heading: 'The same problem, seen from two different rooms.',
        body1:   'Tito spent 25 years watching broadcast organizations buy the right technology and still lose the story, because nobody engineered the system connecting the creative, the technology, and the team using it.',
        body2:   'César spent 20 years watching boards approve the right strategy and still lose the execution, because nobody engineered the leadership architecture required to carry it.',
        closer:  'AITHORIS exists because those are the same failure. Clients get both halves of the fix: a system built to work, and the organizational readiness to make it stick.',
      },
      vision: {
        eyebrow: 'Our Shared Thesis',
        heading: 'Complexity doesn\'t disappear. It moves.',
        body:    'We started AITHORIS on one belief: intelligence, human or artificial, only creates value when it\'s connected to a system built to hold it. Complexity doesn\'t disappear when an organization adopts AI. It moves, from the user\'s experience to the system\'s architecture, or from the strategy to the people executing it. Deciding where it goes, and engineering it well once it lands there, is the work.',
      },
      cta: {
        heading: 'This is who you\'d be working with.',
        body:    'No account managers between you and the people making the decisions. Tell us what\'s slow, manual, or inconsistent in your operation, and you\'ll be talking to one of us.',
        primary: 'Talk to a Founder',
      },
    },
    impact: {
      eyebrow: 'The Business Impact',
      heading: 'What changes when the system is right.',
      item1: { title: 'Hours back',                        body: 'Repetitive work moves from your team\'s calendar to the system\'s.' },
      item2: { title: 'Fewer errors',                       body: 'Structured logic replaces manual re-entry and guesswork.' },
      item3: { title: 'Faster decisions',                   body: 'Information reaches the right person before the moment passes.' },
      item4: { title: 'Consistent quality',                 body: 'Every output follows the same standard, every time.' },
      item5: { title: 'Lower operating cost',                body: 'Automation absorbs the volume, not another hire.' },
      item6: { title: 'Scalable capacity',                  body: 'Growth doesn\'t require growing headcount at the same rate.' },
      item7: { title: 'Institutional knowledge, retained',  body: 'What one person knows becomes what the system knows.' },
      item8: { title: 'Room for judgment work',             body: 'Your team spends time on decisions, not data entry.' },
    },
    industries: {
      eyebrow: 'Industries We Help',
      heading: 'Built for how you work, whatever that work is.',
      body:    'The problems we solve, unqualified leads, disconnected data, manual documentation, repetitive coordination, show up in every industry. We don\'t specialize in a vertical. We specialize in engineering the system your operation actually needs.',
    },
    commitment: {
      eyebrow:   'Our Commitment',
      statement: 'We commit to the outcome, not the output.',
      body:      'A system nobody uses isn\'t a success. We measure our work by what it changes in your business, not by how well it demos.',
    },
    cta: {
      heading:   'Ready to see what a well-engineered system feels like?',
      body:      'Tell us what\'s slow, manual, or inconsistent in your operation. We\'ll tell you honestly whether AI is the right fix, and what production-grade would actually look like.',
      primary:   'Schedule a Discovery Call',
      secondary: 'Explore Our Solutions',
    },
  },

  portfolio: {
    meta: {
      title:       'AITHORIS | Portfolio',
      description: 'Automation systems AITHORIS has built: lead qualification, quote and invoice generation, video production, script writing, and LinkedIn publishing, each built from a real, observed problem.',
    },
    hero: {
      eyebrow:  'Systems We\'ve Built',
      headline: 'Every project started as someone\'s problem, not a pitch.',
      body:     'These aren\'t client case studies with a name attached to them. They\'re automation systems we built ourselves, from problems we saw or heard about directly: a lawyer buried in unqualified leads, a real estate agent stuck editing property videos, workflows we needed for our own operation. Each card below shows the problem, the system we built, and what it actually does.',
    },
    labels: {
      painPoint:   'Pain Point',
      system:      'System',
      description: 'What It Does',
    },
    cardCta: 'View details',
    framing: {
      eyebrow: 'How to Read This',
      heading: 'Pain point. System. What it does.',
      body:    'Every project below follows the same structure: the problem we saw, the system we built to solve it, and what that system actually does once it\'s running.',
    },
    project1: {
      title:       'Lead Qualifier',
      painPoint:   'Law firms, real estate teams, and small businesses lose hours triaging inbound leads by hand, reading intake forms one at a time and guessing which ones are worth a callback.',
      system:      'An AI intake agent that reads the information a prospect submits, asks a clarifying question where the submission is incomplete, and scores the lead against criteria the business sets.',
      description: 'The agent qualifies each lead as it arrives, tags it ready, borderline, or not a fit, and hands the team a structured summary instead of a raw form submission.',
      modal: {
        painPoint: {
          headline: 'Qualifying leads shouldn\'t be the job that eats your day.',
          body: '<p>Law firms, real estate agents, and growing businesses all hit the same wall: leads come in fast, but figuring out which ones are worth pursuing takes time nobody has. Someone has to read every inquiry, cross-check details, weigh intent against fit, and decide who gets a callback today versus who waits, or gets missed entirely.</p><p>That manual triage becomes a bottleneck. High-value leads sit in a queue behind low-value ones. Follow-up slows down. And the busier the business gets, the worse the problem becomes.</p>',
        },
        system: {
          headline: 'An automated Lead Qualifier workflow that does the thinking for you.',
          body: '<p>Instead of a person manually sorting through every submission, the system takes the lead\'s information the moment it comes in, contact details, needs, budget, timeline, or case specifics, and runs it through a structured scoring model built around what actually makes a lead worth pursuing.</p><p>No spreadsheets. No manual review queue. No guesswork about who to call first.</p>',
        },
        description: {
          headline: 'Fill in the lead\'s information, and the workflow takes it from there.',
          body: '<p>It analyzes the details against a defined set of qualifying criteria: intent, budget, urgency, fit, and returns a clear score. High-scoring leads surface immediately as priorities. Lower-scoring ones are flagged for nurture or follow-up later.</p><p>The result: faster response times, no lead falling through the cracks, and a team that spends its time closing instead of sorting.</p>',
        },
      },
    },
    project2: {
      title:       'Quote & Invoice Generator',
      painPoint:   'Putting together a quote or invoice for every new request means re-typing the same line items, pricing, and terms by hand, and one wrong number holds up payment.',
      system:      'A workflow that takes the job details someone enters into a form and turns them into a formatted quote or invoice automatically.',
      description: 'Fill in the line items once. The workflow builds the document, applies the right pricing and terms, and sends it straight to the client.',
      modal: {
        painPoint: {
          headline: 'Getting paid should be simple. In practice, it\'s anything but.',
          body: '<p>Every business, from a solo freelancer to a growing agency, runs into the same wall at the end of a project: someone has to sit down and turn the work into a quote or an invoice. That means digging back through hours logged, calculating labor costs, double-checking the math so nothing\'s over- or under-billed, formatting it so it looks professional, and then writing an email that doesn\'t sound like it was thrown together in five minutes.</p><p>It\'s tedious. It\'s repetitive. And it happens over and over, for every client, every project. Multiply that by a busy month and you\'ve got hours of admin work that has nothing to do with the actual craft, hours that could\'ve gone toward the next project, the next client, the next win. Worse, when this process is rushed, mistakes creep in: wrong totals, missing line items, invoices that go out late, all things that can delay payment or make a business look less polished than it actually is.</p><p>The real cost isn\'t just time. It\'s momentum.</p>',
        },
        system: {
          headline: 'This is where the Quote & Invoice Generator changes the equation.',
          body: '<p>Instead of manually rebuilding a quote or invoice from scratch every time, this workflow takes the repetitive parts off your plate entirely. You provide the details once, the job, the hours, the rate, the client, and the system handles the rest: calculating totals, applying the right formatting, and packaging everything into a document that looks like it came from a professional studio, because it did.</p><p>It\'s not just about saving time, though that\'s a large part of it. It\'s about consistency. Every quote and invoice follows the same clean, branded structure. Every calculation is accurate. Every email that goes out reads like it was written by someone who has their business fully together, because now, it is.</p><p>Think of it as a behind-the-scenes assistant that never gets tired, never makes a math error, and never forgets a step.</p>',
        },
        description: {
          headline: 'The entire process, from raw job details to a client\'s inbox, happens in one smooth flow.',
          body: '<p>Fill in the essentials: hours worked, labor rate, project scope, client information, and the workflow takes over from there. It automatically calculates the total cost, factoring in every variable provided, and builds a clean, professional quote or invoice around it. No formatting from scratch. No formulas to double-check. No blank email staring back at you.</p><p>Then it goes one step further: it drafts a polished, client-ready email, attaches the finished document, and sends it, promptly and consistently, every time.</p><p>What used to take 30-45 minutes of manual work now takes a few minutes of input. What clients receive isn\'t just a document, it\'s a signal that they\'re working with someone organized and on top of their business. That\'s the shift this project delivers: from busywork to momentum, from manual to automatic, from "I\'ll get to it later" to "it\'s already done."</p>',
        },
      },
    },
    project3: {
      title:       'Real Estate Video Generator',
      painPoint:   'Listing agents either pay for a video crew on every property or skip video entirely, because coordinating a shoot for each new listing costs more time and money than most listings justify.',
      system:      'A workflow that takes the property details and photos an agent already has and assembles them into a structured walkthrough video, no camera crew or editor required.',
      description: 'The agent fills in the property details and uploads photos once. The workflow paces the shots, adds the property information, and returns a finished video ready to download.',
      modal: {
        painPoint: {
          headline: 'Every real estate agent is racing against the same clock.',
          body: '<p>The faster a property gets in front of buyers, the faster it sells. And one of the most powerful tools for doing that is video: it\'s how potential buyers fall in love with a home before they ever set foot inside.</p><p>But video is also where agents lose control of their own timeline. Instead of listing a property the moment it\'s ready, agents have to wait: on a videographer to schedule a shoot, on an editor to cut the footage, on rounds of back-and-forth before the final video is approved. What should take a day or two can stretch into a week or more. And in real estate, a week of delay can mean a missed window, a cooling market, or a buyer who found something else in the meantime.</p><p>The agent isn\'t in the driver\'s seat. Their listing timeline depends on someone else\'s schedule.</p>',
        },
        system: {
          headline: 'The Real Estate Video Generator puts that control back where it belongs: in the agent\'s hands.',
          body: '<p>Instead of coordinating a video shoot and waiting on an editor, the agent becomes the entire production team, using nothing but their phone. This workflow takes the photos they\'re already taking for the listing and transforms them into a fully edited, publish-ready video, automatically. No scheduling. No back-and-forth. No waiting on a third party to greenlight the next step.</p><p>It\'s not a stripped-down, DIY-looking video either. It\'s a professionally edited piece built for how buyers actually browse: fast, visual, and made for the web and social feeds where listings live and get shared.</p>',
        },
        description: {
          headline: 'The agent walks through the property, takes pictures with their phone, and that\'s it.',
          body: '<p>They upload the photos they\'d take anyway, fill in a few key details about the house, and their job is done.</p><p>From there, the workflow takes over. In a couple of minutes, it stitches the photos into a polished, professionally paced video, complete with smooth transitions and a structure built to hold a viewer\'s attention, ready to publish immediately to the listing site, the agency\'s website, and every social platform where buyers are scrolling.</p><p>What used to take days of coordinating with a videographer and editor now takes minutes, start to finish, with zero dependency on anyone else\'s calendar. The agent lists faster, markets faster, and sells faster, because the biggest bottleneck in the process has simply been removed.</p><p>That\'s the real win here: agents don\'t just get a video. They get their timeline back.</p>',
        },
      },
    },
    project4: {
      title:       'Script Generator',
      painPoint:   'Producing a script for TV, radio, and social media means writing the same story three separate times, in whatever format each platform expects, sometimes in two languages.',
      system:      'A generator that takes one brief and produces scripts formatted for TV, radio, or social media, in English or Spanish.',
      description: 'Enter the topic once and choose the formats needed. The workflow returns one script per format, ready to record or post.',
      modal: {
        painPoint: {
          headline: 'Every producer in TV, radio, and digital media eventually runs into the same job: write the script that sells.',
          body: '<p>Whether it\'s a motorcycle dealership, a bookstore, a restaurant, or an image campaign for a brand trying to reposition itself, someone has to turn a product or a message into words that work on air, on screen, or on a feed.</p><p>That\'s harder than it sounds. A script isn\'t just writing: it\'s writing that has to fit a format, hit a runtime, match the tone of the market it\'s airing in, and still sound like the client, not like a generic ad. Producers end up doing research on top of writing: studying the client\'s brand voice, understanding what resonates in that specific market, adjusting for language and cultural nuance, and then rewriting the same core message in multiple lengths for different platforms.</p><p>It\'s a lot of moving parts for something that, on a busy production day, might need to happen five times before lunch.</p>',
        },
        system: {
          headline: 'The Script Generator takes that entire process and compresses it into something fast, informed, and ready to use.',
          body: '<p>Instead of starting from a blank page, the producer gets a workflow that does the groundwork first: researching the market the script needs to speak to and pulling insight straight from the client\'s own website to understand their voice, tone, and brand identity. From there, it writes. Not a generic template, but a script shaped around what that specific market expects and what that specific client sounds like.</p><p>And because production doesn\'t happen in just one format, the system generates scripts built for Radio, TV, and social media, in the lengths each platform actually needs, with full support for Spanish, meeting the demands of one of the fastest-growing markets in media without adding a second workflow or a translation step.</p>',
        },
        description: {
          headline: 'The producer gives the workflow the essentials, and the system takes it from there.',
          body: '<p>It researches the client\'s website to understand their brand voice and researches the market to understand tone, language, and what actually connects with that audience. Then it writes the script, or scripts, tailored to the platform: a punchy 15-second social cut, a 30-second radio spot, a longer TV narrative, all pulling from the same brand-accurate foundation. Need it in Spanish? It\'s built in, not bolted on.</p><p>What used to take hours of research and multiple rewrites now takes minutes. The producer isn\'t starting from zero and isn\'t guessing at tone. They\'re reviewing a script that already sounds like the brand and already fits the market, ready to move straight into production.</p><p>That\'s the real value: less time writing to figure it out, more time producing something that sells.</p>',
        },
      },
    },
    project5: {
      title:       'LinkedIn Post Generator',
      painPoint:   'Posting on LinkedIn every week takes research, writing, and finding or making an image, on top of whatever else is already on the schedule.',
      system:      'A pipeline that drafts an article and a header image for a topic someone selects, then holds it for review before anything goes out.',
      description: 'Pick a topic and review the draft. Once approved, the workflow publishes the post to LinkedIn directly, no manual copy-pasting.',
      modal: {
        painPoint: {
          headline: 'For some, posting on social media is second nature: a quick thought, a quick share, done.',
          body: '<p>But for professionals, it\'s something else entirely. A LinkedIn post isn\'t just content. It\'s a reflection of expertise, credibility, and relationship-building with clients, colleagues, and community. It has to say something worth reading, look polished enough to be taken seriously, and land at the right moment.</p><p>That\'s where things get hard. Writing a post that actually resonates, not generic, not forgettable, takes time most professionals don\'t have between meetings, projects, and everything else on their plate. And a great post isn\'t just words; it needs a relevant image to stop the scroll and support the message. By the time both are ready, the moment to post has often passed, or the whole thing gets pushed to "later" and never happens.</p><p>The result: valuable insight stays in someone\'s head instead of in front of the audience that needs to see it.</p>',
        },
        system: {
          headline: 'The LinkedIn Post Generator turns that entire process into something fast, professional, and worry-free.',
          body: '<p>Instead of staring at a blank post box trying to find the right words, the workflow generates a well-crafted article-style post paired with a relevant, on-brand image, built to actually resonate with the professional\'s audience, not just fill space.</p><p>But speed doesn\'t mean losing control. Before anything goes live, the user reviews and approves it, so what gets published is always exactly what they want their network to see. It\'s professional content creation and secure, one-click publishing, working together.</p>',
        },
        description: {
          headline: 'The user simply signals what they want to post about, and the workflow takes it from there.',
          body: '<p>It writes a polished, professional article suited for LinkedIn\'s format and pairs it with a relevant image that supports the message visually.</p><p>Once it\'s ready, the user reviews it. Nothing publishes without their approval, giving them full confidence and control over what represents them publicly. Once approved, the post goes live quickly and securely: no extra apps, no manual formatting, no last-minute scrambling to find an image.</p><p>What used to take up an entire block of someone\'s afternoon: writing, editing, sourcing an image, second-guessing the wording, now takes minutes. The professional stays visible, stays consistent, and stays connected with their community and clients, without content creation becoming another job on top of their job.</p><p>That\'s the real win: showing up on LinkedIn the way top professionals do, without the time cost that usually stops them.</p>',
        },
      },
    },
    cta: {
      eyebrow: 'Have a Similar Problem?',
      heading: 'If one of these looks like your problem, let\'s talk about building yours.',
      body:    'Every system on this page started the same way this conversation would: a specific process that was costing time or money. Tell us what\'s slow, manual, or inconsistent in your operation, and we\'ll tell you honestly whether an automated system is the right fix.',
      button:  'Start a Conversation',
    },
  },

};
