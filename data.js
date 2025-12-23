// ============================================
// THE RENATURAL — 2026 MARKETING MASTER TIMELINE
// ============================================
// 
// HOW TO EDIT THIS FILE:
// 1. Find the swimlane you want to edit
// 2. Change the text in quotes
// 3. Save the file
// 4. Refresh your browser
//
// INTENSITY LEVELS: 1 (light) to 5 (heavy)
// MILESTONE: Add milestone text to mark important months
// ============================================

const CONFIG = {
  title: "The Renatural — 2026 Marketing Master Timeline",
  subtitle: "Comprehensive swimlane view with customer thinking, platforms, milestones, dependencies, and risks",
  
  metrics: {
    revenueTarget: "$3M",
    wigs: "2,000",
    accessories: "5,300",
    totalBudget: "$473K",
    wigCAC: "$210",
    targetCVR: "0.5%",
    sessionsNeeded: "400K"
  },

  quarters: {
    q1: { label: "Q1 — INVEST", budget: "$75K", months: ["jan", "feb", "mar"] },
    q2: { label: "Q2 — INVEST", budget: "$113K", months: ["apr", "may", "jun"] },
    q3: { label: "Q3 — HARVEST", budget: "$128K", months: ["jul", "aug", "sep"] },
    q4: { label: "Q4 — HARVEST", budget: "$157K", months: ["oct", "nov", "dec"] }
  },

  gates: [
    { after: "mar", label: "Q1→Q2 GATE" },
    { after: "jun", label: "Q2→Q3 GATE" },
    { after: "sep", label: "★ Q3→Q4 GATE (CRITICAL)" }
  ],

  stickyNotes: [
    { text: "📝 Year 1 = Buying data, not just clicks. Full universe exploration.", type: "note" },
    { text: "📝 75/25 WigFix vs Wig entry split is hypothetical — track and adjust.", type: "note" },
    { text: "📝 40-day lag: Influencer dispatch → content live.", type: "note" },
    { text: "📝 3-month WigFix → Wig conversion window is THE ENGINE.", type: "note" },
    { text: "⚠️ July +45% MoM target is aggressive. Depends on showroom momentum.", type: "risk" },
    { text: "⚠️ Q4 CPCs are 4x baseline. Budget must be reserved.", type: "risk" },
    { text: "⚠️ Q3→Q4 Gate is CRITICAL. $157K holiday spend unlocks here.", type: "risk" },
    { text: "📝 HSA/FSA approved — NO competitor has this. Feature everywhere.", type: "note" },
    { text: "📝 Dynamic content by complexion/texture = Q4 build for BFCM.", type: "note" }
  ]
};

const TIERS = [
  {
    id: "acquisition",
    name: "TIER 1: ACQUISITION",
    budget: "$473K Total Budget",
    color: "acquisition"
  },
  {
    id: "consideration", 
    name: "TIER 2: CONSIDERATION",
    budget: "Nurture & Engagement",
    color: "consideration"
  },
  {
    id: "conversion",
    name: "TIER 3: CONVERSION", 
    budget: "Purchase",
    color: "conversion"
  },
  {
    id: "retention",
    name: "TIER 4: RETENTION",
    budget: "Lifetime Value", 
    color: "retention"
  }
];

const SWIMLANES = [
  // ============================================
  // TIER 1: ACQUISITION
  // ============================================
  {
    id: "content-production",
    name: "Content Production",
    tier: "acquisition",
    customerThinking: "N/A — Internal workstream",
    platforms: "Photography, Video, UGC, Polished Brand Assets (Merit + Loewe inspired)",
    budget: "$65K",
    role: "Creative assets for all channels",
    months: {
      jan: { activity: "Assets for launch", intensity: 5, milestone: "★ Heavy" },
      feb: { activity: "WigFix 2.0 creative", intensity: 4 },
      mar: { activity: "Ongoing", intensity: 3 },
      apr: { activity: "Showroom content", intensity: 4 },
      may: { activity: "Ongoing", intensity: 3 },
      jun: { activity: "Ongoing", intensity: 3 },
      jul: { activity: "Ongoing", intensity: 2 },
      aug: { activity: "Holiday shoot", intensity: 4, milestone: "★ Holiday" },
      sep: { activity: "Holiday shoot", intensity: 4 },
      oct: { activity: "Light", intensity: 1 },
      nov: { activity: "Light", intensity: 1 },
      dec: { activity: "Light", intensity: 1 }
    },
    milestones: "Jan: Campaign assets ready\nAug-Sep: Holiday shoot complete",
    dependencies: "Must complete before campaigns launch",
    risk: "Campaigns run with weak creative; delayed launch"
  },
  {
    id: "google-nonbrand",
    name: "Google Ads — Non-Brand Search",
    tier: "acquisition",
    customerThinking: "\"I need a quality wig\"\n\"wigs for alopecia\"\n\"comfortable wigs\"",
    platforms: "BIGGEST BUCKET\nBeauty, medical, utility, style keywords\nFull universe exploration → optimize",
    budget: "~$135K",
    role: "Primary acquisition",
    months: {
      jan: { activity: "Warm up", intensity: 1 },
      feb: { activity: "Launch", intensity: 3, milestone: "★ Launch" },
      mar: { activity: "Ramp", intensity: 3 },
      apr: { activity: "Optimize", intensity: 4 },
      may: { activity: "Scale", intensity: 4 },
      jun: { activity: "Scale", intensity: 4 },
      jul: { activity: "Scale", intensity: 4 },
      aug: { activity: "Pre-holiday", intensity: 4 },
      sep: { activity: "Pre-holiday", intensity: 4 },
      oct: { activity: "4x CPCs", intensity: 5, milestone: "★ 4x CPCs" },
      nov: { activity: "BFCM peak", intensity: 5 },
      dec: { activity: "Holiday", intensity: 5 }
    },
    milestones: "Feb: Full launch\nQ2: Find winning clusters\nQ4: 4x CPC budget",
    dependencies: "Content assets ready\nHSA/FSA messaging approved",
    risk: "Miss high-intent traffic\nSlow data collection"
  },
  {
    id: "google-brand",
    name: "Google Ads — Brand Search",
    tier: "acquisition",
    customerThinking: "\"I've heard of The Renatural\"\n\"the renatural wigs\"",
    platforms: "Google Search: Brand terms\nDefense against competitors",
    budget: "~$20K",
    role: "Brand defense",
    months: {
      jan: { activity: "Warm up", intensity: 2 },
      feb: { activity: "Launch", intensity: 3 },
      mar: { activity: "Ongoing", intensity: 3 },
      apr: { activity: "Ongoing", intensity: 3 },
      may: { activity: "Ongoing", intensity: 3 },
      jun: { activity: "Ongoing", intensity: 3 },
      jul: { activity: "Ongoing", intensity: 3 },
      aug: { activity: "Ongoing", intensity: 3 },
      sep: { activity: "Ongoing", intensity: 3 },
      oct: { activity: "Scale", intensity: 4 },
      nov: { activity: "Scale", intensity: 4 },
      dec: { activity: "Scale", intensity: 4 }
    },
    milestones: "Feb: Full launch",
    dependencies: "Content assets ready",
    risk: "Lose branded traffic to competitors"
  },
  {
    id: "google-competitor",
    name: "Google Ads — Competitor",
    tier: "acquisition",
    customerThinking: "\"lace front wigs\"\n(we don't sell, but can bid)",
    platforms: "Google Search: Competitor terms\nConquest plays",
    budget: "~$15K",
    role: "Conquest",
    months: {
      jan: { activity: "—", intensity: 0 },
      feb: { activity: "Test", intensity: 2 },
      mar: { activity: "Test", intensity: 2 },
      apr: { activity: "Scale winners", intensity: 3 },
      may: { activity: "Scale", intensity: 3 },
      jun: { activity: "Scale", intensity: 3 },
      jul: { activity: "Scale", intensity: 3 },
      aug: { activity: "Scale", intensity: 3 },
      sep: { activity: "Scale", intensity: 3 },
      oct: { activity: "Scale", intensity: 3 },
      nov: { activity: "Scale", intensity: 3 },
      dec: { activity: "Scale", intensity: 3 }
    },
    milestones: "Q2: Identify winning conquest terms",
    dependencies: "Non-brand learnings inform strategy",
    risk: "Lower priority; minimal risk",
    riskLevel: "low"
  },
  {
    id: "google-pmax-wigs",
    name: "Google PMAX — Wigs",
    tier: "acquisition",
    customerThinking: "\"Show me options\"\nVisual discovery",
    platforms: "Google PMAX: Multiple asset groups\nVideo, text, images optimization",
    budget: "~$20K",
    role: "Full optimization",
    months: {
      jan: { activity: "—", intensity: 0 },
      feb: { activity: "Launch", intensity: 3, milestone: "★ Launch" },
      mar: { activity: "Optimize", intensity: 3 },
      apr: { activity: "Scale", intensity: 4 },
      may: { activity: "Scale", intensity: 4 },
      jun: { activity: "Scale", intensity: 4 },
      jul: { activity: "Scale", intensity: 4 },
      aug: { activity: "Scale", intensity: 4 },
      sep: { activity: "Scale", intensity: 4 },
      oct: { activity: "Scale", intensity: 4 },
      nov: { activity: "Peak", intensity: 5 },
      dec: { activity: "Peak", intensity: 5 }
    },
    milestones: "Feb: Launch with full assets",
    dependencies: "Content assets (video, images, text)",
    risk: "Underperforming PMAX; wasted spend"
  },
  {
    id: "google-pmax-wigfix",
    name: "Google PMAX — WigFix",
    tier: "acquisition",
    customerThinking: "\"What's this WigFix thing?\"\n\"wig headband\"",
    platforms: "Google PMAX: Multiple asset groups for WigFix 2.0",
    budget: "~$10K",
    role: "Entry point acquisition",
    months: {
      jan: { activity: "Warm up", intensity: 1 },
      feb: { activity: "Launch", intensity: 2 },
      mar: { activity: "WigFix 2.0", intensity: 4, milestone: "★ WigFix 2.0" },
      apr: { activity: "Optimize", intensity: 3 },
      may: { activity: "Scale", intensity: 3 },
      jun: { activity: "Scale", intensity: 3 },
      jul: { activity: "Scale", intensity: 3 },
      aug: { activity: "Scale", intensity: 3 },
      sep: { activity: "Scale", intensity: 3 },
      oct: { activity: "Scale", intensity: 3 },
      nov: { activity: "Peak", intensity: 4 },
      dec: { activity: "Peak", intensity: 4 }
    },
    milestones: "Mar: WigFix 2.0 launch support",
    dependencies: "WigFix 2.0 product ready\nAssets ready",
    risk: "Miss accessory targets"
  },
  {
    id: "meta-prospecting-wigs",
    name: "Meta — Prospecting Wigs",
    tier: "acquisition",
    customerThinking: "\"This looks premium\"\n\"I've seen this brand\"",
    platforms: "Lookalikes (purchasers, ATC, email, video) + Advantage+\nUGC, Polished brand, Testimonials",
    budget: "~$40K",
    role: "Cold acquisition",
    months: {
      jan: { activity: "—", intensity: 0 },
      feb: { activity: "Test", intensity: 2 },
      mar: { activity: "Ramp", intensity: 3 },
      apr: { activity: "Scale", intensity: 4 },
      may: { activity: "Scale", intensity: 4 },
      jun: { activity: "Scale", intensity: 4 },
      jul: { activity: "Scale", intensity: 4 },
      aug: { activity: "Scale", intensity: 4 },
      sep: { activity: "Scale", intensity: 4 },
      oct: { activity: "Scale", intensity: 4 },
      nov: { activity: "BFCM", intensity: 5 },
      dec: { activity: "Holiday", intensity: 5 }
    },
    milestones: "Q2: Scale winning audiences",
    dependencies: "Retargeting pools from site traffic",
    risk: "Prospecting without warm audiences = high CAC"
  },
  {
    id: "meta-prospecting-wigfix",
    name: "Meta — Prospecting WigFix",
    tier: "acquisition",
    customerThinking: "\"$29 is low risk\"\n\"Let me try it\"",
    platforms: "Separate campaign\nLookalikes + Advantage+",
    budget: "~$15K",
    role: "Entry point acquisition",
    months: {
      jan: { activity: "—", intensity: 0 },
      feb: { activity: "Test", intensity: 2 },
      mar: { activity: "WigFix 2.0", intensity: 4, milestone: "★ WigFix 2.0" },
      apr: { activity: "Scale", intensity: 3 },
      may: { activity: "Scale", intensity: 3 },
      jun: { activity: "Scale", intensity: 3 },
      jul: { activity: "Scale", intensity: 3 },
      aug: { activity: "Scale", intensity: 3 },
      sep: { activity: "Scale", intensity: 3 },
      oct: { activity: "Scale", intensity: 3 },
      nov: { activity: "BFCM", intensity: 4 },
      dec: { activity: "Holiday", intensity: 4 }
    },
    milestones: "Mar: WigFix 2.0 launch campaign",
    dependencies: "WigFix 2.0 ready\nCreative assets",
    risk: "Miss accessory acquisition targets"
  },
  {
    id: "influencer",
    name: "Influencer",
    tier: "acquisition",
    customerThinking: "\"My favorite creator uses this\"\n\"I trust their recommendation\"",
    platforms: "Mid + Macro tiers\nWigFix 2.0 + Wigs\nHybrid comp (flat + affiliate)\nWhitelisting for paid",
    budget: "$68K",
    role: "Social proof + content",
    months: {
      jan: { activity: "—", intensity: 0 },
      feb: { activity: "Products sent", intensity: 4, milestone: "★ Dispatch" },
      mar: { activity: "Content live", intensity: 4, milestone: "★ Content live" },
      apr: { activity: "Showroom content", intensity: 4 },
      may: { activity: "Scale", intensity: 4 },
      jun: { activity: "Scale", intensity: 3 },
      jul: { activity: "—", intensity: 0 },
      aug: { activity: "Holiday contracts", intensity: 4, milestone: "★ Holiday contracts" },
      sep: { activity: "Contracts", intensity: 4 },
      oct: { activity: "Content live", intensity: 4 },
      nov: { activity: "Content live", intensity: 3 },
      dec: { activity: "—", intensity: 0 }
    },
    milestones: "Feb: Dispatch products\nMid-Mar: Content live\nAug-Sep: Holiday contracts",
    dependencies: "Products ready for dispatch\n40-day content lag",
    risk: "Q2 prospecting weakened\nHoliday content delayed"
  },
  {
    id: "ctv",
    name: "CTV",
    tier: "acquisition",
    customerThinking: "\"I keep seeing this brand\"\n\"They're on my TV now\"",
    platforms: "Retargeting ONLY\nATC + high-intent visitors\nVibe.co / MNTN / Tatari / Roku",
    budget: "$25K",
    role: "Retargeting only",
    months: {
      jan: { activity: "—", intensity: 0 },
      feb: { activity: "—", intensity: 0 },
      mar: { activity: "—", intensity: 0 },
      apr: { activity: "LAUNCH", intensity: 3, milestone: "★ LAUNCH" },
      may: { activity: "Ramp", intensity: 3 },
      jun: { activity: "Ramp", intensity: 3 },
      jul: { activity: "Scale", intensity: 4 },
      aug: { activity: "Scale", intensity: 4 },
      sep: { activity: "Scale", intensity: 4 },
      oct: { activity: "Scale", intensity: 4 },
      nov: { activity: "Peak", intensity: 5 },
      dec: { activity: "Peak", intensity: 5 }
    },
    milestones: "Apr: CTV launch",
    dependencies: "Retargeting pools from Feb-Mar traffic",
    risk: "No audience = wasted spend"
  },
  {
    id: "pr-press",
    name: "PR / Press",
    tier: "acquisition",
    customerThinking: "\"I read about this brand\"\n\"It was in [publication]\"",
    platforms: "Earned media, credibility\nProduct launches, Showroom, Gift guides",
    budget: "$25K",
    role: "Credibility + awareness",
    months: {
      jan: { activity: "WigFix 2.0 prep", intensity: 3 },
      feb: { activity: "WigFix 2.0 prep", intensity: 3 },
      mar: { activity: "Launch press", intensity: 5, milestone: "★ WigFix 2.0" },
      apr: { activity: "Opening press", intensity: 5, milestone: "★ Showroom" },
      may: { activity: "Maintenance", intensity: 2 },
      jun: { activity: "Maintenance", intensity: 2 },
      jul: { activity: "Maintenance", intensity: 2 },
      aug: { activity: "Maintenance", intensity: 2 },
      sep: { activity: "Maintenance", intensity: 2 },
      oct: { activity: "Gift guides", intensity: 4, milestone: "★ Gift guides" },
      nov: { activity: "Gift guides", intensity: 4 },
      dec: { activity: "Gift guides", intensity: 3 }
    },
    milestones: "Mar: WigFix 2.0 press\nApr: Showroom press\nQ4: Gift guides",
    dependencies: "Product/showroom ready for press",
    risk: "Missed press moments\nLower credibility"
  },
  {
    id: "seo-organic",
    name: "SEO / Organic",
    tier: "acquisition",
    customerThinking: "\"How do I care for my wig?\"\n\"wigs for alopecia\"",
    platforms: "Blog + Landing Pages\nEducational, Inspirational, Problem/Solution\nAI/Q&A optimization",
    budget: "Content budget",
    role: "Long-term acquisition",
    months: {
      jan: { activity: "Foundation", intensity: 3 },
      feb: { activity: "New content", intensity: 3 },
      mar: { activity: "New content", intensity: 3 },
      apr: { activity: "New content", intensity: 3 },
      may: { activity: "New content", intensity: 3 },
      jun: { activity: "New content", intensity: 3 },
      jul: { activity: "New content", intensity: 3 },
      aug: { activity: "New content", intensity: 3 },
      sep: { activity: "New content", intensity: 3 },
      oct: { activity: "New content", intensity: 3 },
      nov: { activity: "New content", intensity: 3 },
      dec: { activity: "New content", intensity: 3 }
    },
    milestones: "Ongoing: Build organic foundation",
    dependencies: "Content production capacity",
    risk: "Long-term organic growth delayed"
  },
  {
    id: "b2b-wholesale",
    name: "B2B / Wholesale",
    tier: "acquisition",
    customerThinking: "\"My salon needs a wig supplier\"\n\"I want to become an affiliate\"",
    platforms: "Affiliate page + Wholesale page\nSalons + Stylists",
    budget: "Q1 Launch",
    role: "B2B acquisition",
    months: {
      jan: { activity: "Pages live", intensity: 4, milestone: "★ Pages live" },
      feb: { activity: "Outreach", intensity: 3 },
      mar: { activity: "Outreach", intensity: 3 },
      apr: { activity: "Ongoing", intensity: 2 },
      may: { activity: "Ongoing", intensity: 2 },
      jun: { activity: "Ongoing", intensity: 2 },
      jul: { activity: "Ongoing", intensity: 2 },
      aug: { activity: "Ongoing", intensity: 2 },
      sep: { activity: "Ongoing", intensity: 2 },
      oct: { activity: "Ongoing", intensity: 2 },
      nov: { activity: "Ongoing", intensity: 2 },
      dec: { activity: "Ongoing", intensity: 2 }
    },
    milestones: "Dec 2025/Jan: Pages live",
    dependencies: "Pages built\nPricing/terms finalized",
    risk: "Missed B2B revenue\nHigher ROAS pressure"
  },

  // ============================================
  // TIER 2: CONSIDERATION
  // ============================================
  {
    id: "meta-retargeting",
    name: "Meta Retargeting",
    tier: "consideration",
    customerThinking: "\"I should go back to that site\"\n\"I keep seeing them\"",
    platforms: "ATC + Product Viewers (Primary)\nWigFix: 7-30d window\nWigs: 90d window",
    budget: "Included in $90K Meta",
    role: "Recovery + consideration",
    months: {
      jan: { activity: "—", intensity: 0 },
      feb: { activity: "Launch", intensity: 3, milestone: "★ Launch" },
      mar: { activity: "Ramp", intensity: 3 },
      apr: { activity: "Ramp", intensity: 4 },
      may: { activity: "Scale", intensity: 4 },
      jun: { activity: "Scale", intensity: 4 },
      jul: { activity: "Scale", intensity: 4 },
      aug: { activity: "Scale", intensity: 4 },
      sep: { activity: "Scale", intensity: 4 },
      oct: { activity: "Scale", intensity: 4 },
      nov: { activity: "BFCM", intensity: 5 },
      dec: { activity: "Holiday", intensity: 5 }
    },
    milestones: "Feb: Retargeting live",
    dependencies: "Site traffic to build audiences",
    risk: "Leaky funnel\nLost warm prospects"
  },
  {
    id: "youtube-retargeting",
    name: "YouTube Retargeting",
    tier: "consideration",
    customerThinking: "\"I keep seeing their videos\"",
    platforms: "Primary Google retargeting placement",
    budget: "Included in $200K Google",
    role: "Mid-funnel touchpoints",
    months: {
      jan: { activity: "—", intensity: 0 },
      feb: { activity: "Launch", intensity: 2, milestone: "★ Launch" },
      mar: { activity: "Ramp", intensity: 3 },
      apr: { activity: "Ramp", intensity: 3 },
      may: { activity: "Scale", intensity: 3 },
      jun: { activity: "Scale", intensity: 3 },
      jul: { activity: "Scale", intensity: 3 },
      aug: { activity: "Scale", intensity: 3 },
      sep: { activity: "Scale", intensity: 3 },
      oct: { activity: "Scale", intensity: 4 },
      nov: { activity: "Peak", intensity: 4 },
      dec: { activity: "Peak", intensity: 4 }
    },
    milestones: "Feb: Launch",
    dependencies: "Video assets\nSite traffic",
    risk: "Missed mid-funnel touchpoints"
  },
  {
    id: "email-wigfix-wig",
    name: "Email — WigFix→Wig Journey",
    tier: "consideration",
    customerThinking: "\"Maybe I should get a real wig\"\n\"I like this brand\"\n\"Their wigs look premium\"",
    platforms: "Klaviyo: 3-month nurture (W2-W12)\nTriggered by delivery confirmation\nEducation → Social proof → Consultation → CTA",
    budget: "THE ENGINE",
    role: "75% of customers enter here",
    months: {
      jan: { activity: "Build flows", intensity: 4 },
      feb: { activity: "Build flows", intensity: 4 },
      mar: { activity: "Flows live", intensity: 5, milestone: "★ Flows live" },
      apr: { activity: "First cohort", intensity: 3 },
      may: { activity: "Optimize", intensity: 3 },
      jun: { activity: "Optimize", intensity: 3 },
      jul: { activity: "First conversions", intensity: 4, milestone: "★ First conversions" },
      aug: { activity: "Ongoing", intensity: 3 },
      sep: { activity: "Dynamic build", intensity: 4, milestone: "★ Dynamic build" },
      oct: { activity: "Dynamic build", intensity: 4 },
      nov: { activity: "BFCM personalized", intensity: 5, milestone: "★ Dynamic live" },
      dec: { activity: "Holiday", intensity: 5 }
    },
    milestones: "Mar: Flow live\nJul: First wig conversions\nSep-Oct: Dynamic content build\nNov: BFCM personalization",
    dependencies: "Delivery trigger setup\nContent for 12 weeks\nQuiz integration for dynamic",
    risk: "CRITICAL: Broken conversion engine\nMissed wig sales from accessory buyers",
    riskLevel: "critical"
  },
  {
    id: "email-cart-abandon",
    name: "Email/SMS — Cart Abandon",
    tier: "consideration",
    customerThinking: "\"I forgot about that\"\n\"Maybe I should go back\"",
    platforms: "Klaviyo: Abandoned Cart WigFix (SMS ✓)\nAbandoned Cart Wig (SMS ✓)\nWigFix: 7-30d / Wig: 90d",
    budget: "Revenue recovery",
    role: "SMS for high-intent",
    months: {
      jan: { activity: "Build", intensity: 4 },
      feb: { activity: "Build", intensity: 4 },
      mar: { activity: "Flows live", intensity: 5, milestone: "★ Flows live" },
      apr: { activity: "Optimize", intensity: 3 },
      may: { activity: "Optimize", intensity: 3 },
      jun: { activity: "Optimize", intensity: 3 },
      jul: { activity: "Optimize", intensity: 3 },
      aug: { activity: "Optimize", intensity: 3 },
      sep: { activity: "Optimize", intensity: 3 },
      oct: { activity: "Optimize", intensity: 4 },
      nov: { activity: "BFCM", intensity: 5 },
      dec: { activity: "Holiday", intensity: 5 }
    },
    milestones: "Mar: Cart abandon flows live",
    dependencies: "Klaviyo setup\nSMS enabled",
    risk: "Lost revenue from cart abandoners"
  },
  {
    id: "shade-finder-quiz",
    name: "Shade Finder Quiz",
    tier: "consideration",
    customerThinking: "\"What shade matches me?\"\n\"I want to find my perfect match\"",
    platforms: "On-site quiz: Captures complexion, texture, journey, shade\nReward: Free Sample Kit\nUnlocks dynamic content (Q4)",
    budget: "Personalization engine",
    role: "High-intent signal",
    months: {
      jan: { activity: "Optimize", intensity: 2 },
      feb: { activity: "Optimize", intensity: 2 },
      mar: { activity: "Free kit link", intensity: 3, milestone: "★ Free kit link" },
      apr: { activity: "Optimize", intensity: 3 },
      may: { activity: "Optimize", intensity: 3 },
      jun: { activity: "Optimize", intensity: 3 },
      jul: { activity: "Optimize", intensity: 3 },
      aug: { activity: "Optimize", intensity: 3 },
      sep: { activity: "Dynamic build", intensity: 4, milestone: "★ Dynamic build" },
      oct: { activity: "Dynamic build", intensity: 4 },
      nov: { activity: "Dynamic live", intensity: 5, milestone: "★ Dynamic live" },
      dec: { activity: "BFCM", intensity: 5 }
    },
    milestones: "Mar: Free Sample Kit with quiz\nQ4: Dynamic content by complexion/texture",
    dependencies: "Quiz functional\nEmail integration\nSample Kit inventory",
    risk: "Generic emails\nLower personalization"
  },
  {
    id: "sample-kit",
    name: "Sample Kit",
    tier: "consideration",
    customerThinking: "\"Let me see/feel the quality\"\n\"I want to match my shade\"",
    platforms: "Hair swatch + scalp replica + measuring tape\n$25 paid / FREE with quiz completion",
    budget: "High-intent signal",
    role: "Faster wig conversion path",
    months: {
      jan: { activity: "Available", intensity: 2 },
      feb: { activity: "Available", intensity: 2 },
      mar: { activity: "Free w/ quiz", intensity: 4, milestone: "★ Free w/ quiz" },
      apr: { activity: "Optimize", intensity: 3 },
      may: { activity: "Optimize", intensity: 3 },
      jun: { activity: "Optimize", intensity: 3 },
      jul: { activity: "Optimize", intensity: 3 },
      aug: { activity: "Optimize", intensity: 3 },
      sep: { activity: "Optimize", intensity: 3 },
      oct: { activity: "Optimize", intensity: 3 },
      nov: { activity: "Optimize", intensity: 3 },
      dec: { activity: "Optimize", intensity: 3 }
    },
    milestones: "Mar: Free Sample Kit with quiz completion",
    dependencies: "Inventory\nQuiz integration",
    risk: "Missed high-intent signal\nSlower conversions"
  },
  {
    id: "consultation-showroom",
    name: "Consultation — Showroom",
    tier: "consideration",
    customerThinking: "\"I want to try before I buy\"\n\"I need to see it in person\"",
    platforms: "In-person: Fitting, try-on, custom measurements\nSame pricing as online\nMonthly events",
    budget: "High-intent conversion",
    role: "★ Opens April",
    months: {
      jan: { activity: "—", intensity: 0 },
      feb: { activity: "—", intensity: 0 },
      mar: { activity: "—", intensity: 0 },
      apr: { activity: "OPENS", intensity: 5, milestone: "★ OPENS" },
      may: { activity: "Ramp consults", intensity: 3 },
      jun: { activity: "Ramp consults", intensity: 4 },
      jul: { activity: "Target jump", intensity: 5, milestone: "★ +45% target" },
      aug: { activity: "Scale", intensity: 4 },
      sep: { activity: "Scale", intensity: 4 },
      oct: { activity: "Scale", intensity: 4 },
      nov: { activity: "Scale", intensity: 4 },
      dec: { activity: "Holiday events", intensity: 5 }
    },
    milestones: "Apr: Showroom opens\nJul: +45% wig target (aggressive)",
    dependencies: "Showroom build complete\nStaff hired/trained",
    risk: "CRITICAL: July targets unrealistic\nMissed consultation revenue",
    riskLevel: "critical"
  },

  // ============================================
  // TIER 3: CONVERSION
  // ============================================
  {
    id: "checkout",
    name: "Checkout",
    tier: "conversion",
    customerThinking: "\"I'm ready to buy\"\n\"Can I use my HSA?\"",
    platforms: "Shopify: Shop Pay, Affirm, Klarna, Afterpay\n★ HSA/FSA APPROVED — No competitor has this\nNo discounts — free gifts only",
    budget: "Major differentiator",
    role: "Feature HSA/FSA everywhere",
    months: {
      jan: { activity: "Available", intensity: 3 },
      feb: { activity: "Available", intensity: 3 },
      mar: { activity: "Available", intensity: 3 },
      apr: { activity: "Available", intensity: 3 },
      may: { activity: "Available", intensity: 3 },
      jun: { activity: "Available", intensity: 3 },
      jul: { activity: "Available", intensity: 3 },
      aug: { activity: "Available", intensity: 3 },
      sep: { activity: "Available", intensity: 3 },
      oct: { activity: "Peak", intensity: 5 },
      nov: { activity: "Peak", intensity: 5 },
      dec: { activity: "Peak", intensity: 5 }
    },
    milestones: "HSA/FSA = major differentiator\nFeature in all medical keywords",
    dependencies: "Checkout functional",
    risk: "N/A",
    riskLevel: "low"
  },
  {
    id: "bundles",
    name: "Bundles",
    tier: "conversion",
    customerThinking: "\"I'll get the bundle\"\n\"Better value together\"",
    platforms: "Wig Cap + WigFix\nWigFix x2\nWigFix + Wig Cap + Mirror Comb",
    budget: "Q1 Build",
    role: "AOV optimization",
    months: {
      jan: { activity: "Build", intensity: 4 },
      feb: { activity: "Launch", intensity: 5, milestone: "★ Launch" },
      mar: { activity: "Optimize", intensity: 3 },
      apr: { activity: "Optimize", intensity: 3 },
      may: { activity: "Optimize", intensity: 3 },
      jun: { activity: "Optimize", intensity: 3 },
      jul: { activity: "Optimize", intensity: 3 },
      aug: { activity: "Optimize", intensity: 3 },
      sep: { activity: "Optimize", intensity: 3 },
      oct: { activity: "Optimize", intensity: 3 },
      nov: { activity: "Optimize", intensity: 3 },
      dec: { activity: "Optimize", intensity: 3 }
    },
    milestones: "Feb: Bundles live",
    dependencies: "Shopify setup\nInventory",
    risk: "Lower AOV on accessories"
  },

  // ============================================
  // TIER 4: RETENTION
  // ============================================
  {
    id: "insurance-program",
    name: "Insurance Program",
    tier: "retention",
    customerThinking: "\"I want to protect my investment\"\n\"I need maintenance help\"",
    platforms: "Maintenance service: Washing, assessment, repairs\nEnrollment at checkout + post-purchase\n(Wigs already have 1-year warranty)",
    budget: "Q2 Launch",
    role: "Recurring revenue + touchpoints",
    months: {
      jan: { activity: "—", intensity: 0 },
      feb: { activity: "—", intensity: 0 },
      mar: { activity: "—", intensity: 0 },
      apr: { activity: "Prep", intensity: 3 },
      may: { activity: "LAUNCH", intensity: 5, milestone: "★ LAUNCH" },
      jun: { activity: "Ramp", intensity: 3 },
      jul: { activity: "Ramp", intensity: 3 },
      aug: { activity: "Ongoing", intensity: 3 },
      sep: { activity: "Ongoing", intensity: 3 },
      oct: { activity: "Ongoing", intensity: 3 },
      nov: { activity: "Ongoing", intensity: 3 },
      dec: { activity: "Ongoing", intensity: 3 }
    },
    milestones: "Q2/May: Insurance program launch",
    dependencies: "Service infrastructure\nPricing finalized",
    risk: "Missed recurring revenue\nFewer customer touchpoints"
  },
  {
    id: "referral-program",
    name: "Referral Program",
    tier: "retention",
    customerThinking: "\"My friend needs this\"\n\"I want to share\"",
    platforms: "Post-wig purchase trigger\nLoops back to Acquisition",
    budget: "2026 Build",
    role: "Acquisition loop",
    months: {
      jan: { activity: "Build", intensity: 2 },
      feb: { activity: "Build", intensity: 2 },
      mar: { activity: "Build", intensity: 2 },
      apr: { activity: "Build", intensity: 2 },
      may: { activity: "Build", intensity: 2 },
      jun: { activity: "Launch", intensity: 4, milestone: "★ Launch" },
      jul: { activity: "Optimize", intensity: 3 },
      aug: { activity: "Optimize", intensity: 3 },
      sep: { activity: "Optimize", intensity: 3 },
      oct: { activity: "Optimize", intensity: 3 },
      nov: { activity: "Optimize", intensity: 3 },
      dec: { activity: "Optimize", intensity: 3 }
    },
    milestones: "Q2: Referral program live",
    dependencies: "Program structure\nTracking setup",
    risk: "Higher CAC\nMissed organic acquisition"
  },
  {
    id: "wigfix-replenishment",
    name: "WigFix Replenishment",
    tier: "retention",
    customerThinking: "\"I need more WigFix\"\n\"Running low\"",
    platforms: "Klaviyo: 90-120 day replenishment flow\n2-3x per customer",
    budget: "Repeat purchase",
    role: "Accessory LTV",
    months: {
      jan: { activity: "Build", intensity: 3 },
      feb: { activity: "Build", intensity: 3 },
      mar: { activity: "Live", intensity: 4, milestone: "★ Live" },
      apr: { activity: "First cohort", intensity: 2 },
      may: { activity: "Ongoing", intensity: 2 },
      jun: { activity: "First replenish", intensity: 3, milestone: "★ First replenish" },
      jul: { activity: "Ongoing", intensity: 3 },
      aug: { activity: "Ongoing", intensity: 3 },
      sep: { activity: "Ongoing", intensity: 3 },
      oct: { activity: "Ongoing", intensity: 3 },
      nov: { activity: "Ongoing", intensity: 3 },
      dec: { activity: "Ongoing", intensity: 3 }
    },
    milestones: "Mar: Flow live\nJun: First replenishment cohort",
    dependencies: "Delivery date tracking",
    risk: "Missed repeat purchases"
  },
  {
    id: "events-community",
    name: "Events & Community",
    tier: "retention",
    customerThinking: "\"I love this community\"\n\"I want to connect\"",
    platforms: "Showroom-based: Styling workshops, meetups, influencer appearances, trunk shows\nMonthly minimum",
    budget: "Community building",
    role: "Loyalty + retention",
    months: {
      jan: { activity: "—", intensity: 0 },
      feb: { activity: "—", intensity: 0 },
      mar: { activity: "—", intensity: 0 },
      apr: { activity: "First event", intensity: 4, milestone: "★ First event" },
      may: { activity: "Monthly", intensity: 3 },
      jun: { activity: "Monthly", intensity: 3 },
      jul: { activity: "Monthly", intensity: 3 },
      aug: { activity: "Monthly", intensity: 3 },
      sep: { activity: "Monthly", intensity: 3 },
      oct: { activity: "Monthly", intensity: 3 },
      nov: { activity: "Monthly", intensity: 3 },
      dec: { activity: "Holiday events", intensity: 4 }
    },
    milestones: "Apr: First showroom event\nOngoing: Monthly minimum",
    dependencies: "Showroom open\nEvent planning",
    risk: "Weaker community\nLower retention"
  },
  {
    id: "vip-content",
    name: "VIP Content",
    tier: "retention",
    customerThinking: "\"I'm part of something special\"\n\"I get exclusive access\"",
    platforms: "Wig owners only: Exclusive tutorials, early access, private community\n(Currently only get promo content)",
    budget: "Q2 Launch",
    role: "Loyalty + retention",
    months: {
      jan: { activity: "Plan", intensity: 1 },
      feb: { activity: "Plan", intensity: 1 },
      mar: { activity: "Plan", intensity: 1 },
      apr: { activity: "Build", intensity: 2 },
      may: { activity: "Build", intensity: 2 },
      jun: { activity: "Launch", intensity: 4, milestone: "★ Launch" },
      jul: { activity: "Ongoing", intensity: 3 },
      aug: { activity: "Ongoing", intensity: 3 },
      sep: { activity: "Ongoing", intensity: 3 },
      oct: { activity: "Ongoing", intensity: 3 },
      nov: { activity: "Ongoing", intensity: 3 },
      dec: { activity: "Ongoing", intensity: 3 }
    },
    milestones: "Q2: VIP content program live",
    dependencies: "Content creation\nCommunity platform",
    risk: "Wig owners only get promos\nLower loyalty"
  }
];
