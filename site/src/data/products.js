/**
 * Vionics Product Data — Complete
 * All product information, specs, section content, and frame configuration
 */

const products = {
  headphones: {
    name: "Vionics AuraSound Pro",
    slug: "headphones",
    tagline: "Sound Beyond Dimensions",
    description: "Experience audio in its purest form. The AuraSound Pro combines 40mm custom neodymium drivers with AI-powered spatial audio processing to create a soundscape that transcends reality.",
    folder: "/assets/Headset",
    totalFrames: 40,
    heroFrame: 0,
    ctaFrame: 35,
    category: "Audio",
    price: "$449",
    sections: {
      engineering: {
        label: "Precision Engineering",
        title: "Forged from\nPure Sound",
        description: "Every component is machined from aerospace-grade aluminum and hand-tuned by acoustic engineers. The AuraSound Pro's unibody design eliminates resonance artifacts for studio-grade clarity.",
        specs: [
          { value: "40mm", label: "Custom Drivers" },
          { value: "32Ω", label: "Impedance" },
          { value: "7.4g", label: "Driver Weight" },
        ],
      },
      coreFeature: {
        label: "Spatial Audio",
        title: "Sound That\nSurrounds You",
        description: "Proprietary V-Spatial™ technology maps your ear geometry in real-time, delivering personalized 3D audio that places you at the center of every note, every beat, every whisper.",
        specs: [
          { value: "360°", label: "Spatial Field" },
          { value: "24-bit", label: "Audio Resolution" },
          { value: "96kHz", label: "Sample Rate" },
        ],
      },
      ai: {
        label: "AI Intelligence",
        title: "Audio That\nAdapts to You",
        description: "Neural processing engine analyzes your environment 1,000 times per second. Active Noise Cancellation adapts in real-time while Transparency mode lets the world in naturally.",
        specs: [
          { value: "-45dB", label: "Noise Reduction" },
          { value: "1ms", label: "AI Latency" },
          { value: "∞", label: "Sound Profiles" },
        ],
      },
      experience: {
        label: "Experience",
        title: "60 Hours of\nPure Freedom",
        description: "Ultra-efficient power management powered by the V1 Audio Chip delivers an unprecedented 60 hours of playback. Memory foam ear cushions wrapped in protein leather cradle you in comfort.",
        specs: [
          { value: "60h", label: "Battery Life" },
          { value: "265g", label: "Featherweight" },
          { value: "USB-C", label: "Fast Charge" },
        ],
      },
    },
    fullSpecs: {
      "Audio": {
        "Driver Size": "40mm Custom Neodymium",
        "Frequency Response": "4Hz - 40kHz",
        "Impedance": "32Ω",
        "Sensitivity": "105dB/mW",
        "Audio Codec": "LDAC, aptX HD, AAC",
      },
      "Intelligence": {
        "Processor": "Vionics V1 Audio Chip",
        "ANC": "Hybrid Active Noise Cancellation",
        "Spatial Audio": "V-Spatial™ with Head Tracking",
        "Voice Assistant": "Vionics AI, Siri, Google",
        "Adaptive EQ": "Real-time AI Optimization",
      },
      "Design": {
        "Weight": "265g",
        "Materials": "Aerospace Aluminum, Protein Leather",
        "Colors": "Obsidian Black, Lunar Silver",
        "Ear Cushions": "Memory Foam, Replaceable",
        "Foldable": "Yes, Flat-fold Design",
      },
      "Battery": {
        "Playback Time": "60 hours",
        "Charging": "USB-C, 15W Fast Charge",
        "Quick Charge": "5 min = 3 hours",
        "Wireless Charging": "Qi Compatible",
      },
      "Connectivity": {
        "Bluetooth": "5.4",
        "Multipoint": "Connect 3 devices",
        "Wired": "3.5mm, USB-C Audio",
        "Range": "15m / 50ft",
      },
    },
  },

  smartphone: {
    name: "Vionics Nexus Ultra",
    slug: "smartphone",
    tagline: "The Future in Your Hands",
    description: "A marvel of engineering that redefines what a smartphone can be. The Nexus Ultra features a titanium unibody, neural processing engine, and the most advanced camera system ever built.",
    folder: "/assets/SmartPhone",
    totalFrames: 40,
    heroFrame: 0,
    ctaFrame: 35,
    category: "Mobile",
    price: "$1,299",
    sections: {
      engineering: {
        label: "Precision Engineering",
        title: "Titanium.\nReinvented.",
        description: "Grade 5 titanium unibody milled from a single block with surgical precision. Ceramic Shield front, textured matte back. Every edge, every curve — engineered to perfection.",
        specs: [
          { value: "Ti-5", label: "Grade Titanium" },
          { value: "6.7\"", label: "OLED Display" },
          { value: "162g", label: "Ultra Light" },
        ],
      },
      coreFeature: {
        label: "Neural Camera",
        title: "See What Others\nCan't",
        description: "The V-Optics triple camera system with a 200MP main sensor captures light at a quantum level. Computational photography powered by the V2 Neural Engine delivers images that rival reality.",
        specs: [
          { value: "200MP", label: "Main Sensor" },
          { value: "8K", label: "Video Capture" },
          { value: "f/1.5", label: "Aperture" },
        ],
      },
      ai: {
        label: "AI Intelligence",
        title: "Thinks Before\nYou Do",
        description: "The V2 Neural Engine processes 35 trillion operations per second. On-device AI learns your habits, optimizes battery life, and anticipates your needs before you even reach for your phone.",
        specs: [
          { value: "35T", label: "Ops/Second" },
          { value: "24h+", label: "Smart Battery" },
          { value: "5G+", label: "Connectivity" },
        ],
      },
      experience: {
        label: "Experience",
        title: "All-Day Power,\nAll-Night Display",
        description: "A 5,500mAh silicon-carbon battery lasts beyond a full day. The 6.7-inch ProMotion OLED display refreshes at 120Hz with 2,500 nits peak brightness — visible even under direct sunlight.",
        specs: [
          { value: "5500", label: "mAh Battery" },
          { value: "120Hz", label: "ProMotion" },
          { value: "2500", label: "Peak Nits" },
        ],
      },
    },
    fullSpecs: {
      "Display": {
        "Size": "6.7-inch Super OLED",
        "Resolution": "3200 × 1440 (Quad HD+)",
        "Refresh Rate": "1-120Hz ProMotion",
        "Brightness": "2,500 nits peak",
        "Protection": "Ceramic Shield Ultra",
      },
      "Performance": {
        "Processor": "Vionics V2 Neural Engine",
        "RAM": "16GB LPDDR5X",
        "Storage": "256GB / 512GB / 1TB",
        "Neural Ops": "35 TOPS",
        "GPU": "Integrated V-Graphics",
      },
      "Camera": {
        "Main": "200MP, f/1.5, OIS",
        "Ultra Wide": "50MP, f/2.0, 120° FOV",
        "Telephoto": "64MP, f/2.8, 5x Optical",
        "Front": "32MP, f/1.9, Autofocus",
        "Video": "8K@30fps, 4K@120fps",
      },
      "Battery & Charging": {
        "Capacity": "5,500mAh Silicon-Carbon",
        "Wired Charging": "100W HyperCharge",
        "Wireless": "50W Qi2",
        "Reverse Wireless": "15W",
      },
      "Connectivity": {
        "5G": "Sub-6GHz + mmWave",
        "Wi-Fi": "Wi-Fi 7 (802.11be)",
        "Bluetooth": "5.4",
        "NFC": "Yes",
        "USB": "USB-C 3.2 Gen 2",
      },
    },
  },

  earbuds: {
    name: "Vionics AirPulse",
    slug: "earbuds",
    tagline: "Silence, Amplified",
    description: "Impossibly small. Unbelievably powerful. The AirPulse delivers audiophile-grade sound through custom balanced armature drivers in a design that disappears in your ears.",
    folder: "/assets/Airpods",
    totalFrames: 40,
    heroFrame: 0,
    ctaFrame: 35,
    category: "Audio",
    price: "$299",
    sections: {
      engineering: {
        label: "Micro Engineering",
        title: "Invisible.\nUnforgettable.",
        description: "Custom balanced armature drivers deliver studio-grade audio in a form factor that weighs less than a coin. Precision-molded acoustic chambers create a sound profile that defies physics.",
        specs: [
          { value: "4.2g", label: "Per Earbud" },
          { value: "11mm", label: "Custom Driver" },
          { value: "IP55", label: "Water Resist" },
        ],
      },
      coreFeature: {
        label: "Immersive Audio",
        title: "Studio Sound.\nPocket Size.",
        description: "Dual-driver hybrid architecture pairs a balanced armature with a dynamic driver for full-spectrum audio. Hi-Res Audio certified with LDAC support delivers every nuance of your music.",
        specs: [
          { value: "20Hz", label: "Low Frequency" },
          { value: "40kHz", label: "High Frequency" },
          { value: "Hi-Res", label: "Audio Certified" },
        ],
      },
      ai: {
        label: "AI Intelligence",
        title: "Smart Silence.\nAdaptive Sound.",
        description: "Six-microphone array with bone conduction sensors deliver -42dB noise cancellation. AI adapts to your ear shape and environment, creating a personalized acoustic seal.",
        specs: [
          { value: "-42dB", label: "ANC Depth" },
          { value: "6 Mic", label: "Array" },
          { value: "AI", label: "Adaptive Fit" },
        ],
      },
      experience: {
        label: "Experience",
        title: "36 Hours.\nZero Compromise.",
        description: "8 hours per charge, 36 hours total with the wireless charging case. Multipoint connects to 2 devices simultaneously. Touch controls let you manage music, calls, and AI with a tap.",
        specs: [
          { value: "36h", label: "Total Battery" },
          { value: "8h", label: "Per Charge" },
          { value: "Qi", label: "Wireless Case" },
        ],
      },
    },
    fullSpecs: {
      "Audio": {
        "Driver": "11mm Hybrid (BA + Dynamic)",
        "Frequency": "20Hz - 40kHz",
        "Codec": "LDAC, aptX Adaptive, AAC",
        "Hi-Res Audio": "Certified",
        "Spatial Audio": "V-Spatial™ Lite",
      },
      "Noise Cancellation": {
        "Type": "Hybrid ANC",
        "Depth": "-42dB",
        "Microphones": "6 (3 per earbud)",
        "Transparency": "Adaptive, AI-powered",
        "Wind Noise": "AI Wind Guard",
      },
      "Design": {
        "Weight": "4.2g per earbud / 48g case",
        "Water Resistance": "IP55 (earbuds), IPX4 (case)",
        "Ear Tips": "XS / S / M / L / XL Silicone",
        "Colors": "Obsidian, Pearl, Midnight Blue",
        "Controls": "Capacitive Touch + Squeeze",
      },
      "Battery": {
        "Earbud": "8 hours (ANC on)",
        "With Case": "36 hours total",
        "Fast Charge": "10 min = 2 hours",
        "Case Charging": "USB-C + Qi Wireless",
      },
    },
  },

  smartwatch: {
    name: "Vionics Chronos AI",
    slug: "smartwatch",
    tagline: "Time, Reimagined",
    description: "More than a timepiece — a health guardian, fitness coach, and AI assistant on your wrist. Sapphire crystal, titanium case, and a display that outshines the sun.",
    folder: "/assets/SmartWatch",
    totalFrames: 40,
    heroFrame: 0,
    ctaFrame: 35,
    category: "Wearable",
    price: "$599",
    sections: {
      engineering: {
        label: "Precision Craft",
        title: "Forged in\nTitanium",
        description: "Grade 2 titanium case with sapphire crystal front. The 1.9-inch always-on LTPO3 OLED display renders 2,000 nits of brilliance. Crafted for those who demand perfection.",
        specs: [
          { value: "1.9\"", label: "LTPO3 Display" },
          { value: "2000", label: "Peak Nits" },
          { value: "Ti-2", label: "Titanium Case" },
        ],
      },
      coreFeature: {
        label: "Health Intelligence",
        title: "Your Body.\nDecoded.",
        description: "V-Health sensors measure blood oxygen, ECG, skin temperature, and blood pressure with medical-grade accuracy. Continuous monitoring learns your baseline and alerts you to anomalies.",
        specs: [
          { value: "SpO2", label: "Blood Oxygen" },
          { value: "ECG", label: "Heart Monitor" },
          { value: "24/7", label: "Health Watch" },
        ],
      },
      ai: {
        label: "AI Coach",
        title: "Intelligence\nOn Your Wrist",
        description: "On-device AI processes health data locally for privacy. Personalized fitness coaching adapts to your performance. Smart notifications filter what matters using contextual awareness.",
        specs: [
          { value: "100+", label: "Workout Modes" },
          { value: "AI", label: "Personal Coach" },
          { value: "GPS", label: "Dual-Band" },
        ],
      },
      experience: {
        label: "Experience",
        title: "5 Days.\nOne Charge.",
        description: "Ultra-efficient V-Wear OS and a 580mAh battery deliver up to 5 days of use. Fast magnetic charging gets you to 80% in 30 minutes. Seamless ecosystem integration with all Vionics devices.",
        specs: [
          { value: "5 Day", label: "Battery Life" },
          { value: "580", label: "mAh Battery" },
          { value: "50m", label: "Water Resist" },
        ],
      },
    },
    fullSpecs: {
      "Display": {
        "Type": "1.9\" LTPO3 AMOLED",
        "Resolution": "502 × 410",
        "Always-On": "Yes",
        "Brightness": "2,000 nits peak",
        "Protection": "Sapphire Crystal",
      },
      "Health Sensors": {
        "Heart Rate": "Optical (PPG) + Electrical (ECG)",
        "Blood Oxygen": "SpO2 Monitoring",
        "Temperature": "Skin Temperature Sensor",
        "Blood Pressure": "Cuff-less Estimation",
        "Sleep": "Advanced Sleep Staging",
      },
      "Fitness": {
        "Workouts": "100+ Auto-detect Modes",
        "GPS": "Dual-band L1+L5",
        "Compass": "Digital Compass + Altimeter",
        "Water": "50m / 5ATM",
      },
      "Battery": {
        "Capacity": "580mAh",
        "Typical Use": "Up to 5 days",
        "GPS Mode": "Up to 36 hours",
        "Charging": "Magnetic, 30 min to 80%",
      },
    },
  },

  powerbank: {
    name: "Vionics PowerCore Fusion",
    slug: "powerbank",
    tagline: "Unlimited Energy",
    description: "Graphene-enhanced battery cells deliver 25,000mAh of portable power with 100W bi-directional charging. Power your entire ecosystem from a single sleek device.",
    folder: "/assets/PowerBank",
    totalFrames: 40,
    heroFrame: 0,
    ctaFrame: 35,
    category: "Power",
    price: "$149",
    sections: {
      engineering: {
        label: "Battery Science",
        title: "Graphene.\nUnleashed.",
        description: "Graphene-silicon hybrid cells deliver 30% more capacity in 40% less volume than conventional lithium-ion. Aerospace-grade aluminum housing with precision CNC machining.",
        specs: [
          { value: "25K", label: "mAh Capacity" },
          { value: "340g", label: "Ultra Light" },
          { value: "GaN", label: "Charging IC" },
        ],
      },
      coreFeature: {
        label: "HyperCharge",
        title: "100W.\nBoth Ways.",
        description: "Bi-directional 100W USB-C Power Delivery charges your laptop at full speed. GaN III charging IC manages thermal output with zero throttling. One device to power them all.",
        specs: [
          { value: "100W", label: "USB-C PD" },
          { value: "3×", label: "Output Ports" },
          { value: "GaN III", label: "Technology" },
        ],
      },
      ai: {
        label: "Smart Power",
        title: "AI Power\nManagement",
        description: "Intelligent charge distribution detects connected devices and optimizes power delivery. Smart temperature monitoring prevents overheating. Pass-through charging lets you charge everything simultaneously.",
        specs: [
          { value: "AI", label: "Distribution" },
          { value: "0°C", label: "Thermal Safe" },
          { value: "3+1", label: "Simultaneous" },
        ],
      },
      experience: {
        label: "Experience",
        title: "Power Your\nEcosystem",
        description: "Charge your laptop, phone, earbuds, and watch simultaneously. OLED display shows real-time power stats. Aviation-grade safety with 12 layers of circuit protection.",
        specs: [
          { value: "OLED", label: "Smart Display" },
          { value: "12×", label: "Safety Layers" },
          { value: "500+", label: "Charge Cycles" },
        ],
      },
    },
    fullSpecs: {
      "Battery": {
        "Capacity": "25,000mAh / 92.5Wh",
        "Cell Type": "Graphene-Silicon Hybrid",
        "Cycle Life": "500+ cycles at 80%",
        "Pass-through": "Yes, with smart routing",
      },
      "Charging": {
        "USB-C 1": "100W PD 3.1 (In/Out)",
        "USB-C 2": "30W PD (Out)",
        "USB-A": "22.5W QuickCharge 4+",
        "Wireless": "15W Qi2 Surface",
        "Self Charge": "0-100% in 90 min",
      },
      "Design": {
        "Weight": "340g",
        "Dimensions": "138 × 68 × 24mm",
        "Material": "CNC Aluminum + Soft Touch",
        "Display": "0.96\" OLED Status",
        "Airline Safe": "Yes (under 100Wh)",
      },
    },
  },

  laptop: {
    name: "Vionics ProBook X1",
    slug: "laptop",
    tagline: "Performance, Unleashed",
    description: "The thinnest, most powerful laptop ever created. A neural processing architecture that handles AI workloads natively, wrapped in a CNC-machined titanium body.",
    folder: "/assets/Laptop",
    totalFrames: 40,
    heroFrame: 0,
    ctaFrame: 35,
    category: "Computing",
    price: "$2,499",
    sections: {
      engineering: {
        label: "Industrial Design",
        title: "Titanium Shell.\nZero Flex.",
        description: "CNC-machined from a single block of Grade 5 titanium. At 11.9mm thin and 1.24kg, the ProBook X1 is impossibly light yet structurally rigid enough for MIL-STD-810H certification.",
        specs: [
          { value: "11.9", label: "mm Thin" },
          { value: "1.24", label: "kg Weight" },
          { value: "Ti-5", label: "Unibody" },
        ],
      },
      coreFeature: {
        label: "V3 Neural SOC",
        title: "AI Processing.\nRedefined.",
        description: "The V3 Neural System-on-Chip features 40 CPU cores, 80 GPU cores, and a dedicated 32-core Neural Engine. Up to 128GB unified memory with 400GB/s bandwidth. Performance without precedent.",
        specs: [
          { value: "40+80", label: "CPU+GPU Cores" },
          { value: "128GB", label: "Unified Memory" },
          { value: "32-Core", label: "Neural Engine" },
        ],
      },
      ai: {
        label: "AI Workspace",
        title: "Your AI.\nNatively.",
        description: "Run large language models, generate images, and process video — all on-device. The V3 Neural Engine accelerates AI workloads 6x faster than competitors. Privacy meets performance.",
        specs: [
          { value: "6×", label: "AI Speedup" },
          { value: "70B", label: "LLM On-Device" },
          { value: "0", label: "Cloud Required" },
        ],
      },
      experience: {
        label: "Experience",
        title: "22 Hours.\nBoundless.",
        description: "A 100Wh battery delivers up to 22 hours of use. The 15.3-inch Liquid Retina XDR display with 3,200 × 2,136 resolution renders every pixel with HDR brilliance. Six-speaker sound system fills the room.",
        specs: [
          { value: "22h", label: "Battery Life" },
          { value: "15.3\"", label: "XDR Display" },
          { value: "100W", label: "MagCharge" },
        ],
      },
    },
    fullSpecs: {
      "Display": {
        "Size": "15.3\" Liquid Retina XDR",
        "Resolution": "3200 × 2136",
        "Brightness": "1,600 nits (XDR), 1,000 sustain",
        "Color": "P3 Wide Color, True Tone",
        "Refresh": "24-120Hz ProMotion",
      },
      "Performance": {
        "SoC": "Vionics V3 Neural Chip",
        "CPU": "40-core (32P + 8E)",
        "GPU": "80-core V-Graphics",
        "Neural Engine": "32-core, 45 TOPS",
        "Memory": "Up to 128GB Unified",
      },
      "Storage": {
        "Type": "NVMe SSD",
        "Options": "512GB / 1TB / 2TB / 4TB",
        "Speed": "7.4 GB/s Read",
      },
      "Battery": {
        "Capacity": "100Wh",
        "Life": "Up to 22 hours",
        "Charging": "100W MagCharge + USB-C",
        "Fast Charge": "50% in 30 min",
      },
      "Ports": {
        "Thunderbolt": "3× Thunderbolt 5",
        "MagCharge": "1× Magnetic",
        "HDMI": "1× HDMI 2.1",
        "Audio": "3.5mm headphone jack",
        "SD": "SDXC Card Slot",
      },
    },
  },

  tablet: {
    name: "Vionics Canvas Pro",
    slug: "tablet",
    tagline: "Create Without Limits",
    description: "A 12.9-inch OLED canvas with 120Hz ProMotion and a pressure-sensitive stylus that feels like pen on paper. The Canvas Pro turns imagination into reality.",
    folder: "/assets/Tablet",
    totalFrames: 40,
    heroFrame: 0,
    ctaFrame: 35,
    category: "Computing",
    price: "$1,099",
    sections: {
      engineering: {
        label: "Display Engineering",
        title: "12.9 Inches\nof Brilliance",
        description: "Tandem OLED technology stacks two display panels for 2× the brightness of conventional OLED. Mini-LED backlight with 10,000 dimming zones delivers infinite contrast and true blacks.",
        specs: [
          { value: "12.9\"", label: "Tandem OLED" },
          { value: "2732", label: "× 2048 px" },
          { value: "120Hz", label: "ProMotion" },
        ],
      },
      coreFeature: {
        label: "V-Pencil",
        title: "Precision\nMeets Art",
        description: "The V-Pencil responds to 4,096 levels of pressure with zero latency. Tilt sensitivity mimics natural brush strokes. Magnetic attach, wireless charging, haptic feedback.",
        specs: [
          { value: "4096", label: "Pressure Levels" },
          { value: "<1ms", label: "Latency" },
          { value: "0°", label: "Tilt Aware" },
        ],
      },
      ai: {
        label: "AI Creative Suite",
        title: "Create with\nIntelligence",
        description: "On-device AI generates sketches from descriptions, removes backgrounds instantly, and upscales artwork to print resolution. Your creative AI co-pilot — always private, always available.",
        specs: [
          { value: "AI", label: "Image Gen" },
          { value: "V2", label: "Neural Engine" },
          { value: "∞", label: "Possibilities" },
        ],
      },
      experience: {
        label: "Experience",
        title: "All-Day\nCreativity",
        description: "A 10,758mAh battery delivers 12 hours of active creation. Quad speakers with Dolby Atmos fill your space. Desktop-class performance meets tablet portability.",
        specs: [
          { value: "12h", label: "Battery Life" },
          { value: "468g", label: "Lightweight" },
          { value: "5G", label: "Optional" },
        ],
      },
    },
    fullSpecs: {
      "Display": {
        "Type": "12.9\" Tandem OLED",
        "Resolution": "2732 × 2048",
        "Refresh": "24-120Hz ProMotion",
        "Brightness": "1,600 nits XDR",
        "Color": "P3 Wide, True Tone",
      },
      "Performance": {
        "Chip": "Vionics V2 Neural Engine",
        "RAM": "16GB Unified",
        "Storage": "256GB / 512GB / 1TB / 2TB",
        "Neural Engine": "18 TOPS",
      },
      "Creativity": {
        "V-Pencil": "4096 pressure, tilt, wireless charge",
        "Magic Keyboard": "Full-size, backlit, trackpad",
        "Camera": "12MP Wide + 10MP Ultra Wide",
        "LiDAR": "Yes, for AR",
      },
      "Battery": {
        "Capacity": "10,758mAh",
        "Life": "Up to 12 hours",
        "Charging": "USB-C PD 30W",
      },
    },
  },
};

export default products;

export const productList = Object.values(products);

export function getProduct(slug) {
  return products[slug] || null;
}
