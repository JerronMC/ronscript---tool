let initializeApp = null;
let getFirestore = null;
let doc = null;
let setDoc = null;
let onSnapshot = null;
let getDoc = null;
let updateDoc = null;
let increment = null;
let arrayUnion = null;
let getAuth = null;
let GoogleAuthProvider = null;
let signInWithPopup = null;
let signInWithRedirect = null;
let getRedirectResult = null;
let signOut = null;
let onAuthStateChanged = null;
let auth = null;
let db = null;
let firebaseBooted = false;

const firebaseConfig = {
  apiKey: "AIzaSyDLo82_t-ldJZZflwfG06ZNztnQnZ0CZII",
  authDomain: "project-f4d4093a-d950-4692-ace.firebaseapp.com",
  projectId: "project-f4d4093a-d950-4692-ace",
  storageBucket: "project-f4d4093a-d950-4692-ace.firebasestorage.app",
  messagingSenderId: "1021343442010",
  appId: "1:1021343442010:web:1d3a702988d43e7425e463"
};

async function bootFirebase() {
  if (firebaseBooted) return true;
  try {
    const appModule = await import("https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js");
    const fsModule = await import("https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js");

    initializeApp = appModule.initializeApp;
    getFirestore = fsModule.getFirestore;
    doc = fsModule.doc;
    setDoc = fsModule.setDoc;
    onSnapshot = fsModule.onSnapshot;
    getDoc = fsModule.getDoc;
    updateDoc = fsModule.updateDoc;
    increment = fsModule.increment;
    arrayUnion = fsModule.arrayUnion;
    const authModule = await import("https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js");
    getAuth = authModule.getAuth;
    GoogleAuthProvider = authModule.GoogleAuthProvider;
    signInWithPopup = authModule.signInWithPopup;
    signInWithRedirect = authModule.signInWithRedirect;
    getRedirectResult = authModule.getRedirectResult;
    signOut = authModule.signOut;
    onAuthStateChanged = authModule.onAuthStateChanged;

    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
    firebaseBooted = true;
    return true;
  } catch (error) {
    db = null;
    firebaseBooted = false;
    console.warn("Firebase unavailable; local mode enabled.", error);
    return false;
  }
}

const APP_META = {
  name: "RON SCRIPTS",
  version: "12.2.5",
  build: "RON-ULTIMATE-V12.2.5-REAL-FIX-2026.08.25.5",
  channel: "ULTIMATE",
  release: "100 MICRO-UPDATES • VIP • PREMIUM • NEW UI",
  updated: "2026-08-25"
};

const scriptData = [
  // =========================================================
  // ARGUS
  // =========================================================

  {
    id: "argus_titan",
    title: "Argus x Collector Titan",
    url: "https://sfile.co/UR4EPrdbUk3",
    hero: "Argus",
    type: "Crossover",
    tags: ["Collector", "Titan"]
  },

  {
    id: "vergil_argus_vip",
    title: "Vergil x Argus — VIP",
    url: "https://www.mediafire.com/file/7onrit7xsnvnhz6/Vergil+x+Argus.zip/file",
    hero: "Argus",
    type: "Access",
    tags: ["VIP", "Access"],
    accessOnly: true,
    accessMessage:
      "Ask the creator to get the script. You need approval."
  },

  {
    id: "argus_aizen",
    title: "Argus x Sosuke Aizen",
    url: "https://sfile.co/ms4tmWTzw7j",
    hero: "Argus",
    type: "Crossover",
    tags: ["aizen", "bleach"]
  },

  {
    id: "argus_rimuru",
    title: "Argus x Rimuru",
    url: "https://sfile.co/ZusTdAkONGg",
    hero: "Argus",
    type: "Crossover",
    tags: ["rimuru", "tensei-slime"]
  },

  {
    id: "argus_basic",
    title: "Argus Basic",
    url: "https://sfile.co/H4YSK",
    hero: "Argus",
    type: "Basic",
    tags: ["basic"]
  },

  {
    id: "argus_aartox",
    title: "Argus x Aartox",
    url: "https://sfile.co/AeRRXUKv2AM",
    hero: "Argus",
    type: "Crossover",
    tags: ["aartox"]
  },

  {
    id: "argus_hidan2",
    title: "Argus x Hidan 2 (Transform)",
    url: "https://www.mediafire.com/file/0lmz5xm85oks3z8/ARGUS_X_HIDAN_2_%2528TRANSFORM%2529_BY_RON_replace_Default.zip/file",
    hero: "Argus",
    type: "Effects",
    tags: ["transform"]
  },

  {
    id: "argus_hidan3",
    title: "Argus x Hidan V3.5",
    url: "https://sfile.co/mEvqZNGg1Pz",
    hero: "Argus",
    type: "Premium",
    tags: ["premium", "hidan", "v3.5"],
    premiumApprovalOnly: true,
    approvalLevel: "hard"
  },

  {
    id: "argus_gojo",
    title: "Argus — Gojo Shinjuku",
    url: "https://www.mediafire.com/file/mih8q8mp75u8zs2/Season+-+Argus+Gojo+Shinjuku+Showdown.zip/file",
    hero: "Argus",
    type: "Crossover",
    tags: []
  },

  {
    id: "argus_vader",
    title: "Argus — Darth Vader",
    url: "https://sfile.co/6H4gP29nlCJ",
    hero: "Argus",
    type: "Crossover",
    tags: []
  },

  // =========================================================
  // ALDOUS
  // =========================================================

  {
    id: "aldous_col",
    title: "Aldous — Collector",
    url: "https://sfile.mobi/7T1SBJxCFiQ",
    hero: "Aldous",
    type: "Premium",
    tags: ["collector"]
  },

  {
    id: "aldous_saitama1",
    title: "Aldous — Saitama (Link 1)",
    url: "https://sfile.mobi/5nT9SXg8ogS",
    hero: "Aldous",
    type: "Custom",
    tags: []
  },

  {
    id: "aldous_saitama2",
    title: "Aldous — Saitama (Link 2)",
    url: "https://sfile.mobi/7wSY8BllsWY",
    hero: "Aldous",
    type: "Custom",
    tags: []
  },

  // =========================================================
  // ALUCARD
  // =========================================================

  {
    id: "alucard_light",
    title: "Alucard — Lightborn",
    url: "https://sfile.mobi/95itv77QlyA",
    hero: "Alucard",
    type: "Premium",
    tags: []
  },

  {
    id: "alucard_leg",
    title: "Alucard — Legend",
    url: "https://sfile.mobi/21autDXSBmY",
    hero: "Alucard",
    type: "Premium",
    tags: ["legend"]
  },

  // =========================================================
  // BENEDETTA
  // =========================================================

  {
    id: "bene_col",
    title: "Benedetta — Collector",
    url: "https://sfile.mobi/8XmeYrXkS4B",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector"]
  },

  {
    id: "bene_death",
    title: "Benedetta — Collector Death Oath",
    url: "https://sfile.mobi/37rldelJ1Y0",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector"]
  },

  {
    id: "bene_ducati1",
    title: "Benedetta — Ducati Collector 1",
    url: "https://sfile.mobi/8tWF0Vs8h2Z",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector"]
  },

  {
    id: "bene_ducati2",
    title: "Benedetta — Ducati Collector 2",
    url: "https://sfile.mobi/7EeWb9HDMsG",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector"]
  },

  {
    id: "bene_up_def",
    title: "Benedetta — Collector (Default)",
    url: "https://sfile.mobi/5vhL4BKVaws",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector", "default"]
  },

  {
    id: "bene_up_bas",
    title: "Benedetta — Collector (Basic)",
    url: "https://sfile.mobi/9FPNnavLlCw",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector", "basic"]
  },

  {
    id: "bene_up_star",
    title: "Benedetta — Collector (Starlight)",
    url: "https://sfile.mobi/aKjNYzNPK8X",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector", "starlight"]
  },

  {
    id: "bene_up_spec",
    title: "Benedetta — Collector (Special)",
    url: "https://sfile.mobi/80pOAOThbqu",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector", "special"]
  },

  {
    id: "bene_up_cov",
    title: "Benedetta — Collector (Covenant)",
    url: "https://sfile.mobi/9jFPjR8c4Ez",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector"]
  },

  // =========================================================
  // CHOU
  // =========================================================

  {
    id: "chou_stun",
    title: "Chou — Stun",
    url: "https://sfile.mobi/87JBm5jO36r",
    hero: "Chou",
    type: "Custom",
    tags: []
  },

  {
    id: "chou_kof",
    title: "Chou — KOF",
    url: "https://sfile.mobi/avm2GnWYa4W",
    hero: "Chou",
    type: "Crossover",
    tags: ["kof"]
  },

  {
    id: "chou_dawn_up",
    title: "Chou — Dawning (Updated)",
    url: "https://sfile.mobi/4jqXIicV56s",
    hero: "Chou",
    type: "Custom",
    tags: []
  },

  {
    id: "chou_dawn_kof",
    title: "Chou — Dawning (KOF upload)",
    url: "https://sfile.mobi/87OZNUL3bim",
    hero: "Chou",
    type: "Crossover",
    tags: ["kof"]
  },

  {
    id: "chou_naruto",
    title: "Chou — Naruto",
    url: "https://sfile.mobi/8myrpAFk1Uo",
    hero: "Chou",
    type: "Crossover",
    tags: ["naruto"]
  },

  // =========================================================
  // DYRRoth
  // =========================================================

  {
    id: "dyrroth_frieza",
    title: "Dyrroth x Frieza",
    url: "https://www.mediafire.com/file/ghqpd8q05kmpdy9/dyrroth+x+frieza.zip/file",
    hero: "Dyrroth",
    type: "Crossover",
    tags: []
  },

  {
    id: "dyrroth_sasuke",
    title: "Dyrroth — Sasuke",
    url: "https://sfile.mobi/9UAgJidOAou",
    hero: "Dyrroth",
    type: "Crossover",
    tags: []
  },

  {
    id: "dyrroth_gon",
    title: "Dyrroth — Gon / HxH",
    url: "https://sfile.mobi/bzU0cmqx5m7",
    hero: "Dyrroth",
    type: "Crossover",
    tags: ["hxh"]
  },

  {
    id: "dyrroth_hxh_bas",
    title: "Dyrroth — HxH Basic",
    url: "https://sfile.mobi/3IlXNrJ7L2z",
    hero: "Dyrroth",
    type: "Crossover",
    tags: ["basic", "hxh"]
  },

  {
    id: "dyrroth_hxh_ven",
    title: "Dyrroth — HxH Venom",
    url: "https://sfile.mobi/58WbAKGix2r",
    hero: "Dyrroth",
    type: "Crossover",
    tags: ["hxh"]
  },

  // =========================================================
  // FANNY
  // =========================================================

  {
    id: "fanny_asp_def",
    title: "Fanny — Aspirant (Default)",
    url: "https://sfile.mobi/1zuX25a5isL",
    hero: "Fanny",
    type: "Premium",
    tags: ["default", "aspirant"]
  },

  {
    id: "fanny_asp_eli",
    title: "Fanny — Aspirant (Elite)",
    url: "https://sfile.mobi/80p0AELQ5iL",
    hero: "Fanny",
    type: "Premium",
    tags: ["elite", "aspirant"]
  },

  {
    id: "fanny_asp_luc",
    title: "Fanny — Aspirant (Luckybox)",
    url: "https://sfile.mobi/3eUXXHMcjYm",
    hero: "Fanny",
    type: "Premium",
    tags: ["aspirant"]
  },

  {
    id: "fanny_asp_val",
    title: "Fanny — Aspirant (Valentine)",
    url: "https://sfile.mobi/4qMYDIF6msj",
    hero: "Fanny",
    type: "Premium",
    tags: ["aspirant"]
  },

  {
    id: "fanny_asp_sea",
    title: "Fanny — Aspirant (Season)",
    url: "https://sfile.mobi/ao91UKtjpeo",
    hero: "Fanny",
    type: "Premium",
    tags: ["aspirant", "season"]
  },

  {
    id: "fanny_asp_2",
    title: "Fanny — Aspirant 2",
    url: "https://sfile.mobi/37m0crzZuUK",
    hero: "Fanny",
    type: "Premium",
    tags: ["aspirant"]
  },

  {
    id: "fanny_asp_rep",
    title: "Fanny — Aspirant Replace Elite",
    url: "https://sfile.mobi/8IKDqdfgqID",
    hero: "Fanny",
    type: "Premium",
    tags: ["elite", "aspirant"]
  },

  {
    id: "fanny_kibou",
    title: "Fanny — Blade of Kibou",
    url: "https://sfile.mobi/bsxtBJOxna7",
    hero: "Fanny",
    type: "Premium",
    tags: []
  },

  {
    id: "fanny_aot",
    title: "Fanny — AOT Elite",
    url: "https://sfile.mobi/5nUAyZMj0kv",
    hero: "Fanny",
    type: "Crossover",
    tags: ["elite", "aot"]
  },

  // =========================================================
  // GORD
  // =========================================================

  {
    id: "gord_leg",
    title: "Gord — Legend",
    url: "https://sfile.mobi/21autDXSBmY",
    hero: "Gord",
    type: "Premium",
    tags: ["legend"]
  },

  // =========================================================
  // GUSION
  // =========================================================

  {
    id: "gusion_kakashi",
    title: "Gusion — Kakashi Default",
    url: "https://www.mediafire.com/file/0z0caqgc4rhgi61/GUSION_KAKASIH_DELFAUT_%2528SFILE.MOBI%2529.zip/file",
    hero: "Gusion",
    type: "Crossover",
    tags: ["default"]
  },

  {
    id: "gusion_leg",
    title: "Gusion — Legend",
    url: "https://sfile.mobi/7pi3efwYX6z",
    hero: "Gusion",
    type: "Premium",
    tags: ["legend"]
  },

  {
    id: "gusion_leg_eli",
    title: "Gusion — Legend Replace Elite",
    url: "https://sfile.mobi/1ztU46DfrCm",
    hero: "Gusion",
    type: "Premium",
    tags: ["legend", "elite"]
  },

  {
    id: "gusion_leg_fx",
    title: "Gusion — Legend Full Effect",
    url: "https://sfile.mobi/6rWl4Khvz2Z",
    hero: "Gusion",
    type: "Effects",
    tags: ["legend", "effect"]
  },

  {
    id: "gusion_col_leg",
    title: "Gusion — Collector/Legend",
    url: "https://sfile.mobi/6H9yEtGgCW0",
    hero: "Gusion",
    type: "Premium",
    tags: ["collector", "legend"]
  },

  // =========================================================
  // HAYABUSA
  // =========================================================

  {
    id: "haya_anbu",
    title: "Hayabusa — Kakashi Anbu",
    url: "https://sfile.mobi/80o0HaKU36u",
    hero: "Hayabusa",
    type: "Crossover",
    tags: []
  },

  {
    id: "haya_sum",
    title: "Hayabusa — Kakashi Summer",
    url: "https://sfile.mobi/1kIyloFQ5en",
    hero: "Hayabusa",
    type: "Crossover",
    tags: []
  },

  {
    id: "haya_bas",
    title: "Hayabusa — Kakashi Basic",
    url: "https://sfile.mobi/4MWAAgmJLyx",
    hero: "Hayabusa",
    type: "Crossover",
    tags: ["basic"]
  },

  // =========================================================
  // IXIA
  // =========================================================

  {
    id: "ixia_star",
    title: "Ixia — Starlight Painted",
    url: "https://sfile.mobi/30aK5XPLawQ",
    hero: "Ixia",
    type: "Premium",
    tags: ["starlight"]
  },

  // =========================================================
  // JULIAN
  // =========================================================

  {
    id: "julian_fatcat",
    title: "Julian — FATCAT",
    url: "https://sfile.mobi/4jpzLNgtaMy",
    hero: "Julian",
    type: "Custom",
    tags: []
  },

  // =========================================================
  // KADITA
  // =========================================================

  {
    id: "kadita_lake",
    title: "Kadita — Divine Sakura",
    url: "https://www.mediafire.com/file/c2zhk0t62rxthir/Kadita_Divine_sakura_lake_-_Create_skin_V2.zip/file",
    hero: "Kadita",
    type: "Custom",
    tags: []
  },

  {
    id: "kadita_star",
    title: "Kadita — Starlight",
    url: "https://sfile.mobi/80pSDlzzEcR",
    hero: "Kadita",
    type: "Premium",
    tags: ["starlight"]
  },

  // =========================================================
  // KAGURA
  // =========================================================

  {
    id: "kagura_sum",
    title: "Kagura — Annual Starlight",
    url: "https://sfile.mobi/9FQWojRpLiE",
    hero: "Kagura",
    type: "Premium",
    tags: ["starlight"]
  },

  // =========================================================
  // KARRIE
  // =========================================================

  {
    id: "karrie_kishin",
    title: "Karrie — Kishin",
    url: "https://sfile.mobi/8Q8wflHwUE4",
    hero: "Karrie",
    type: "Custom",
    tags: []
  },

  // =========================================================
  // LAYLA
  // =========================================================

  {
    id: "layla_col_def",
    title: "Layla — Collector (Default)",
    url: "https://sfile.mobi/9FOp2J4hnU2",
    hero: "Layla",
    type: "Premium",
    tags: ["collector", "default"]
  },

  {
    id: "layla_col_bas",
    title: "Layla — Collector (Basic)",
    url: "https://sfile.mobi/9cgoLx6fAsC",
    hero: "Layla",
    type: "Premium",
    tags: ["collector", "basic"]
  },

  {
    id: "layla_col_asp",
    title: "Layla — Collector (Aspirant)",
    url: "https://sfile.mobi/9cgoLmbuBGV",
    hero: "Layla",
    type: "Premium",
    tags: ["collector", "aspirant"]
  },

  {
    id: "layla_col_star",
    title: "Layla — Collector (Starlight)",
    url: "https://sfile.mobi/4jom5yKAYM5",
    hero: "Layla",
    type: "Premium",
    tags: ["collector", "starlight"]
  },

  {
    id: "layla_col_clas",
    title: "Layla — Collector (Classic)",
    url: "https://sfile.mobi/94SoHYZXOgh",
    hero: "Layla",
    type: "Premium",
    tags: ["collector"]
  },

  {
    id: "layla_col_new",
    title: "Layla — Collector (New Star)",
    url: "https://sfile.mobi/5gumBEMNMIA",
    hero: "Layla",
    type: "Premium",
    tags: ["collector"]
  },

  // =========================================================
  // LESLEY
  // =========================================================

  {
    id: "lesley_leg",
    title: "Lesley — Legend Mutiara",
    url: "https://sfile.mobi/5Rg0ATjQ3eU",
    hero: "Lesley",
    type: "Premium",
    tags: ["legend"]
  },

  // =========================================================
  // LING
  // =========================================================

  {
    id: "ling_koku",
    title: "Ling — Kokushibo",
    url: "https://sfile.mobi/51KACqI4bY9",
    hero: "Ling",
    type: "Crossover",
    tags: []
  },

  {
    id: "ling_neo_bas",
    title: "Ling — Neobeast Basic",
    url: "https://sfile.mobi/1GUdqEDwHut",
    hero: "Ling",
    type: "Default",
    tags: ["basic"]
  },

  {
    id: "ling_neo_col",
    title: "Ling — Neobeast Collector",
    url: "https://sfile.mobi/2SJYyLFIyso",
    hero: "Ling",
    type: "Premium",
    tags: ["collector"]
  },

  {
    id: "ling_neo_spec",
    title: "Ling — Neobeast Special",
    url: "https://sfile.mobi/5YO0fziYnK9",
    hero: "Ling",
    type: "Premium",
    tags: ["special"]
  },

  {
    id: "ling_neo_star",
    title: "Ling — Neobeast Starlight",
    url: "https://sfile.mobi/4jnZkiwnkIc",
    hero: "Ling",
    type: "Premium",
    tags: ["starlight"]
  },

  {
    id: "ling_neo_mworld",
    title: "Ling — Neobeast M-World",
    url: "https://sfile.mobi/3IrZ0r1QGcw",
    hero: "Ling",
    type: "Custom",
    tags: []
  },

  {
    id: "ling_mworld",
    title: "Ling — M-World",
    url: "https://sfile.mobi/avsvoWQ9gWe",
    hero: "Ling",
    type: "Custom",
    tags: []
  },

  {
    id: "ling_dragon",
    title: "Ling — Dragon Tamer",
    url: "https://sfile.mobi/1GHzWNBLN6V",
    hero: "Ling",
    type: "Crossover",
    tags: []
  },

  // =========================================================
  // MELISSA
  // =========================================================

  {
    id: "melissa_jjk",
    title: "Melissa — Jujutsu Kaisen",
    url: "https://sfile.mobi/AWZqUnt2Ni7",
    hero: "Melissa",
    type: "Custom",
    tags: []
  },

  // =========================================================
  // MIYA
  // =========================================================

  {
    id: "miya_leg",
    title: "Miya — Elite → Legend",
    url: "https://sfile.mobi/738r8dhx1CA",
    hero: "Miya",
    type: "Premium",
    tags: ["legend", "elite"]
  },

  {
    id: "miya_star",
    title: "Miya — Starlight → Default",
    url: "https://sfile.mobi/bOLrh6eZNY7",
    hero: "Miya",
    type: "Premium",
    tags: ["starlight", "default"]
  },

  // =========================================================
  // MOSKOV
  // =========================================================

  {
    id: "moskov_allstar",
    title: "Moskov — All-Star Default",
    url: "https://sfile.mobi/8PVsk41trGp",
    hero: "Moskov",
    type: "Default",
    tags: ["default"]
  },

  {
    id: "moskov_wyrm_def",
    title: "Moskov — Wyrmlord → Default",
    url: "https://sfile.mobi/80kvAQcbPaT",
    hero: "Moskov",
    type: "Premium",
    tags: ["default"]
  },

  {
    id: "moskov_wyrm_bas",
    title: "Moskov — Wyrmlord → Basic",
    url: "https://sfile.mobi/7SWvx7b94cy",
    hero: "Moskov",
    type: "Premium",
    tags: ["basic"]
  },

  // =========================================================
  // SUYOU
  // =========================================================

  {
    id: "suyou_sasuke",
    title: "Suyou — Sasuke Uchiha",
    url: "https://sfile.mobi/94RPBW41tm6",
    hero: "Suyou",
    type: "Crossover",
    tags: []
  },

  // =========================================================
  // VALE
  // =========================================================

  {
    id: "vale_dawn",
    title: "Vale — Dawning",
    url: "https://sfile.mobi/37yWYL0RpeO",
    hero: "Vale",
    type: "Custom",
    tags: []
  },

  // =========================================================
  // YIN
  // =========================================================

  {
    id: "yin_meguna",
    title: "Yin x Meguna Sukuna",
    url: "https://www.mediafire.com/file/uenfpk06eqdfjv2/Yin+x+Meguna+reincarnation+Sukuna+Heian+Era.zip/file",
    hero: "Yin",
    type: "Crossover",
    tags: []
  },

  {
    id: "yin_vessel",
    title: "Yin X Sukuna-Megumi Vessel",
    url: "https://www.mediafire.com/file/64hnvm8z60tv45u/%255BUchi_Cop%255D-Yin_X_Sukuna-Megumi_Vessel_Optimized%252BRevamp_hein_Era_Fix_v1.zip/file",
    hero: "Yin X Sukuna-Megumi Vessel",
    type: "Crossover",
    tags: []
  },

  {
    id: "yin_aot",
    title: "Yin — AOT",
    url: "https://sfile.mobi/8B5TbFW7kIM",
    hero: "Yin",
    type: "Crossover",
    tags: ["aot"]
  },

  {
    id: "yin_obito",
    title: "Yin — Obito",
    url: "https://sfile.mobi/9Nd1d7ouhGS",
    hero: "Yin",
    type: "Crossover",
    tags: []
  },

  {
    id: "yin_jjk",
    title: "Yin — Jujutsu Kaisen",
    url: "https://sfile.mobi/51vMWbCkZqh",
    hero: "Yin",
    type: "Custom",
    tags: []
  },

  // =========================================================
  // OTHER
  // =========================================================

  {
    id: "arlott_zoro",
    title: "Arlott X Zoro Default",
    url: "https://www.mediafire.com/file/bk0skwlzc0vqhel/Script_Arlot_X_Zoro_Default_%2528SFILE.MOBI%2529.zip/file",
    hero: "Arlott X Zoro Default",
    type: "Crossover",
    tags: ["default"]
  },

  {
    id: "brody_choso",
    title: "Brody as Choso 3D MODEL",
    url: "https://www.mediafire.com/file/4tbe3ivff83qujx/Brody_as_Choso_3D_MODEL_by_XvinoyOfficial_Replace_Default_%2528SFILE.MOBI%2529.zip/file",
    hero: "Brody as Choso 3D MODEL",
    type: "Crossover",
    tags: []
  },

  {
    id: "bane_kisame",
    title: "Bane X Kisame Full Effect",
    url: "https://www.mediafire.com/file/qewc5z6qwux5wf7/%255BPREMIUM%255D_Bane_X_Kisame%252B%2528Full_Effect%252BShark.zip/file",
    hero: "Bane X Kisame Full Effect",
    type: "Effects",
    tags: ["effect"]
  },

  {
    id: "server_1",
    title: "Exclusive Server Pack 1",
    url: "https://sfile.co/XZVpBmzlr88",
    hero: "Exclusive Server Pack 1",
    type: "Custom",
    tags: []
  },

  {
    id: "server_2",
    title: "Exclusive Server Pack 2",
    url: "https://sfile.co/M8js0dbtDNA",
    hero: "Exclusive Server Pack 2",
    type: "Custom",
    tags: []
  },

  {
    id: "server_3",
    title: "Exclusive Server Pack 3",
    url: "https://sfile.co/lFGVzOaGcga",
    hero: "Exclusive Server Pack 3",
    type: "Custom",
    tags: []
  }
];

const customScriptSkins = [
  { id: "custom_argus_ichigo", title: "Argus x Ichigo — Bankai Concept", hero: "Argus", type: "Custom", tags: ["ichigo", "bankai"], customOnly: true, preserveDefault: true, description: "Fan concept: Argus with a Bankai-inspired transformation theme and red-black slash effects." },
  { id: "custom_argus_gojo", title: "Argus x Gojo — Limitless Concept", hero: "Argus", type: "Custom", tags: ["gojo", "limitless"], customOnly: true, preserveDefault: true, description: "Fan concept: a Limitless-style aura package with blue energy trails and a high-speed ultimate." },
  { id: "custom_argus_sukuna", title: "Argus x Sukuna — Heian Concept", hero: "Argus", type: "Custom", tags: ["sukuna", "heian"], customOnly: true, preserveDefault: true, description: "Fan concept: demonic armor, crimson aura and a Heian-era inspired finisher." },
  { id: "custom_gusion_aizen", title: "Gusion x Aizen — Illusion Cut", hero: "Gusion", type: "Custom", tags: ["aizen", "illusion"], customOnly: true, preserveDefault: true, description: "Fan concept: illusion-themed teleport trails and a mirrored slash effect." },
  { id: "custom_ling_kokushibo", title: "Ling x Kokushibo — Moon Edge", hero: "Ling", type: "Custom", tags: ["kokushibo", "moon"], customOnly: true, preserveDefault: true, description: "Fan concept: moon-blade trails with layered crimson crescents." },
  { id: "custom_yin_madara", title: "Yin x Madara — Rinnegan Concept", hero: "Yin", type: "Custom", tags: ["madara", "rinnegan"], customOnly: true, preserveDefault: true, description: "Fan concept: purple-black aura, ocular glow and a gravity-style ultimate." },
  { id: "custom_fanny_levi", title: "Fanny x Levi — ODM Concept", hero: "Fanny", type: "Custom", tags: ["levi", "aot"], customOnly: true, preserveDefault: true, description: "Fan concept: dual-cable visual trails, steel-blue accents and a rapid spin finisher." },
  { id: "custom_dyrroth_vegeta", title: "Dyrroth x Vegeta — Ultra Ego", hero: "Dyrroth", type: "Custom", tags: ["vegeta", "ultra-ego"], customOnly: true, preserveDefault: true, description: "Fan concept: purple battle aura, impact bursts and a transformation-ready finisher." },
  { id: "custom_chou_roronoa", title: "Chou x Zoro — Three Sword Concept", hero: "Chou", type: "Custom", tags: ["zoro", "swords"], customOnly: true, preserveDefault: true, description: "Fan concept: green slash trails and a three-sword inspired ultimate animation." },
  { id: "custom_benedetta_mikasa", title: "Benedetta x Mikasa — Scout Concept", hero: "Benedetta", type: "Custom", tags: ["mikasa", "aot"], customOnly: true, preserveDefault: true, description: "Fan concept: scout-style mobility effects and steel cable motion cues." },
  { id: "custom_layla_neon", title: "Layla — Cyber Neon Custom", hero: "Layla", type: "Custom", tags: ["neon", "cyber"], customOnly: true, preserveDefault: true, description: "Original custom concept featuring a holographic cannon, magenta beam and scanline muzzle flash." },
  { id: "custom_moskov_void", title: "Moskov — Void Wyrm Custom", hero: "Moskov", type: "Custom", tags: ["void", "wyrm"], customOnly: true, preserveDefault: true, description: "Original custom concept with violet projectile trails and void-dragon impact effects." },
  { id: "custom_kagura_sakura", title: "Kagura — Sakura Eclipse Custom", hero: "Kagura", type: "Custom", tags: ["sakura", "eclipse"], customOnly: true, preserveDefault: true, description: "Original custom concept mixing cherry-blossom petals with eclipse shadows." },
  { id: "custom_vale_storm", title: "Vale — Storm Emperor Custom", hero: "Vale", type: "Custom", tags: ["storm", "emperor"], customOnly: true, preserveDefault: true, description: "Original custom concept centered on a thunderstorm aura and charged wind blades." },
  { id: "custom_julian_time", title: "Julian — Time Rift Custom", hero: "Julian", type: "Custom", tags: ["time", "rift"], customOnly: true, preserveDefault: true, description: "Original custom concept with clockwork shards, time-split dashes and rewind visuals." },
  { id: "custom_nana_witch", title: "Nana — Moon Witch Custom", hero: "Nana", type: "Custom", tags: ["witch", "moon"], customOnly: true, preserveDefault: true, description: "Original custom concept with lunar sigils, soft purple particles and spellbook motifs." },
  { id: "custom_nolan_rift", title: "Nolan — Rift Runner Custom", hero: "Nolan", type: "Custom", tags: ["rift", "runner"], customOnly: true, preserveDefault: true, description: "Original custom concept with fractured portals and high-speed dimensional cuts." },
  { id: "custom_ruby_bloodmoon", title: "Ruby — Blood Moon Custom", hero: "Ruby", type: "Custom", tags: ["blood-moon", "scythe"], customOnly: true, preserveDefault: true, description: "Original custom concept with crimson moon particles and a spectral scythe trail." },

  { id: "custom_argus_sasuke", title: "Argus x Sasuke — Eternal Flame", hero: "Argus", type: "Custom", tags: ["sasuke", "uchiha", "flame"], customOnly: true, preserveDefault: true, description: "Custom concept with violet flame trails, lightning sparks, and a dark Uchiha-inspired finisher." },
  { id: "custom_argus_rimuru", title: "Argus x Rimuru — Tempest Core", hero: "Argus", type: "Custom", tags: ["rimuru", "tempest", "slime"], customOnly: true, preserveDefault: true, description: "Original concept featuring cyan energy rings, slime-like particles, and a Tempest-inspired ultimate." },
  { id: "custom_argus_aizen", title: "Argus x Aizen — Kyoka Illusion", hero: "Argus", type: "Custom", tags: ["aizen", "illusion", "bleach"], customOnly: true, preserveDefault: true, description: "Fan concept focused on mirror illusions, purple-black energy, and a calm cinematic finisher." },
  { id: "custom_alucard_hollow", title: "Alucard — Hollow Night", hero: "Alucard", type: "Custom", tags: ["hollow", "night", "mask"], customOnly: true, preserveDefault: true, description: "Original custom concept with moonlit red energy, mask fragments, and spectral blade trails." },
  { id: "custom_chou_ryomen", title: "Chou x Ryomen — Shrine Fist", hero: "Chou", type: "Custom", tags: ["shrine", "curse", "fist"], customOnly: true, preserveDefault: true, description: "Custom concept with cursed red-black impact rings and shrine-inspired melee effects." },
  { id: "custom_gusion_kakashi", title: "Gusion x Kakashi — Lightning Trace", hero: "Gusion", type: "Custom", tags: ["kakashi", "lightning", "ninja"], customOnly: true, preserveDefault: true, description: "Custom concept built around lightning kunai trails, silver flashes, and quickstep effects." },
  { id: "custom_ling_sasuke", title: "Ling x Sasuke — Moon Chidori", hero: "Ling", type: "Custom", tags: ["sasuke", "chidori", "moon"], customOnly: true, preserveDefault: true, description: "Custom concept mixing crescent sword trails with electric blue Chidori-style bursts." },
  { id: "custom_yin_itadori", title: "Yin x Itadori — Black Flash", hero: "Yin", type: "Custom", tags: ["itadori", "black-flash", "jjk"], customOnly: true, preserveDefault: true, description: "Custom concept with timed black impact flashes and red cursed-energy accents." },
  { id: "custom_fanny_mikasa", title: "Fanny x Mikasa — Crimson Scout", hero: "Fanny", type: "Custom", tags: ["mikasa", "scout", "aot"], customOnly: true, preserveDefault: true, description: "Custom concept with high-speed cable trails, blade arcs, and scout-style motion cues." },
  { id: "custom_dyrroth_sukuna", title: "Dyrroth x Sukuna — Malevolent Rush", hero: "Dyrroth", type: "Custom", tags: ["sukuna", "domain", "rush"], customOnly: true, preserveDefault: true, description: "Custom concept with layered crimson slashes and domain-inspired impact rings." },
  { id: "custom_benedetta_yoruichi", title: "Benedetta x Yoruichi — Flash Step", hero: "Benedetta", type: "Custom", tags: ["yoruichi", "flash-step", "speed"], customOnly: true, preserveDefault: true, description: "Original custom concept focused on lightning-speed movement and violet flash trails." },
  { id: "custom_layla_mecha", title: "Layla — Mecha Pulse Custom", hero: "Layla", type: "Custom", tags: ["mecha", "pulse", "cyber"], customOnly: true, preserveDefault: true, description: "Original sci-fi concept with reactor glows, hard-light panels, and a pulse cannon." },
  { id: "custom_moskov_akaza", title: "Moskov x Akaza — Destruction Spear", hero: "Moskov", type: "Custom", tags: ["akaza", "destruction", "demon"], customOnly: true, preserveDefault: true, description: "Custom concept with blue-red destruction rings and heavy demonic spear impacts." },
  { id: "custom_kagura_rukia", title: "Kagura x Rukia — Ice Blossom", hero: "Kagura", type: "Custom", tags: ["rukia", "ice", "blossom"], customOnly: true, preserveDefault: true, description: "Original concept mixing icy petals, pale blue sigils, and elegant freeze visuals." },
  { id: "custom_vale_tornado", title: "Vale — Celestial Cyclone", hero: "Vale", type: "Custom", tags: ["cyclone", "celestial", "wind"], customOnly: true, preserveDefault: true, description: "Custom concept with layered wind rings, star particles, and a huge cyclone finisher." },
  { id: "custom_julian_vergil", title: "Julian x Vergil — Rift Blade", hero: "Julian", type: "Custom", tags: ["vergil", "rift", "blade"], customOnly: true, preserveDefault: true, description: "Custom concept with dimensional sword cuts, blue afterimages, and portal edges." },
  { id: "custom_nana_anya", title: "Nana — Twilight Sprite", hero: "Nana", type: "Custom", tags: ["sprite", "twilight", "magic"], customOnly: true, preserveDefault: true, description: "Original playful concept with twilight particles, tiny sprites, and soft magical bursts." },
  { id: "custom_nolan_toji", title: "Nolan x Toji — Rift Hunter", hero: "Nolan", type: "Custom", tags: ["toji", "hunter", "rift"], customOnly: true, preserveDefault: true, description: "Custom concept focused on silent mobility, dimensional cuts, and dark steel accents." },
  { id: "custom_ruby_harley", title: "Ruby — Harlequin Moon", hero: "Ruby", type: "Custom", tags: ["harlequin", "moon", "scythe"], customOnly: true, preserveDefault: true, description: "Original custom concept with crescent moon particles, carnival accents, and a spectral scythe." },

  { id:"custom_masha_frost", title:"Masha — Frostbite Rework", hero:"Masha", type:"Custom", tags:["frost", "rework"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_khufra_void", title:"Khufra — Void Chains", hero:"Khufra", type:"Custom", tags:["void", "chains"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_guin_winter", title:"Guinevere — Winter Bloom", hero:"Guinevere", type:"Custom", tags:["winter", "bloom"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_layla_starcannon", title:"Layla — Star Cannon", hero:"Layla", type:"Custom", tags:["star", "cannon"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_beatrix_raven", title:"Beatrix — Raven Arsenal", hero:"Beatrix", type:"Custom", tags:["raven", "arsenal"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_claude_neon", title:"Claude — Neon Bandit", hero:"Claude", type:"Custom", tags:["neon", "bandit"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_mathilda_sky", title:"Mathilda — Sky Relic", hero:"Mathilda", type:"Custom", tags:["sky", "relic"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_floryn_moon", title:"Floryn — Moon Garden", hero:"Floryn", type:"Custom", tags:["moon", "garden"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_atlas_mecha", title:"Atlas — Black Mecha", hero:"Atlas", type:"Custom", tags:["mecha"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_esme_cosmic", title:"Esmeralda — Cosmic Shield", hero:"Esmeralda", type:"Custom", tags:["cosmic", "shield"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_masha_ember", title:"Masha — Ember Claw", hero:"Masha", type:"Custom", tags:["ember"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_hylos_arc", title:"Hylos — Arc Sentinel", hero:"Hylos", type:"Custom", tags:["arc"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_minotaur_rune", title:"Minotaur — Rune Breaker", hero:"Minotaur", type:"Custom", tags:["rune"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_phoveus_gravity", title:"Phoveus — Gravity Core", hero:"Phoveus", type:"Custom", tags:["gravity"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_terizla_iron", title:"Terizla — Iron Forge", hero:"Terizla", type:"Custom", tags:["iron"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_silvanna_lumen", title:"Silvanna — Lumen Guard", hero:"Silvanna", type:"Custom", tags:["lumen"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_hanabi_fox", title:"Hanabi — Foxfire", hero:"Hanabi", type:"Custom", tags:["foxfire"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_baxia_magma", title:"Baxia — Magma Wheel", hero:"Baxia", type:"Custom", tags:["magma"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_barats_dino", title:"Barats — Dino Reactor", hero:"Barats", type:"Custom", tags:["dino"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
  { id:"custom_diggie_clock", title:"Diggie — Clockwork Star", hero:"Diggie", type:"Custom", tags:["clockwork"], customOnly:true, preserveDefault:true, description:"New v10 custom concept slot. No public download URL attached yet." },
];

// Keep custom concepts in the main searchable vault too.
scriptData.push(...customScriptSkins);

const realLinkSkins = [
  { id: "real_argus_aizen", title: "Argus x Aizen — Real Script", url: "https://sfile.co/ms4tmWTzw7j", hero: "Argus", type: "Crossover", tags: ["aizen", "bleach", "verified-link"], sourceVerified: true, preserveDefault: true },
  { id: "real_argus_rimuru", title: "Argus x Rimuru — Real Script", url: "https://sfile.co/ZusTdAkONGg", hero: "Argus", type: "Crossover", tags: ["rimuru", "tempest", "verified-link"], sourceVerified: true, preserveDefault: true },
  { id: "real_argus_basic", title: "Argus — Basic Real Script", url: "https://sfile.co/H4YSK", hero: "Argus", type: "Basic", tags: ["basic", "verified-link"], sourceVerified: true, preserveDefault: true },
  { id: "real_argus_aartox", title: "Argus x Aartox — Real Script", url: "https://sfile.co/AeRRXUKv2AM", hero: "Argus", type: "Crossover", tags: ["aartox", "verified-link"], sourceVerified: true, preserveDefault: true },
  { id: "real_chou_kof_default", title: "Chou KOF — Default (Community Script)", url: "https://sfile.mobi/5gvBSj2gAgv", hero: "Chou", type: "Crossover", tags: ["kof", "default", "verified-link"], sourceVerified: true, preserveDefault: true },
  { id: "real_chou_kof_basic", title: "Chou KOF — Basic (Community Script)", url: "https://sfile.mobi/7T1DkcBlnOB", hero: "Chou", type: "Crossover", tags: ["kof", "basic", "verified-link"], sourceVerified: true, preserveDefault: true },
  { id: "real_benedetta_covenant", title: "Benedetta Covenant — Default", url: "https://sfile.mobi/avwSLaRq1yE", hero: "Benedetta", type: "Premium", tags: ["covenant", "default", "verified-link"], sourceVerified: true, preserveDefault: true },
  { id: "real_ling_collector", title: "Ling Collector — Replace Dragon Tamer", url: "https://sfile.mobi/4c0HckoFeUl", hero: "Ling", type: "Premium", tags: ["collector", "dragon-tamer", "verified-link"], sourceVerified: true, preserveDefault: true }
];
scriptData.push(...realLinkSkins);

const V12_CUSTOM_CONCEPTS = [
  {
    "id": "custom_v12_001_aamon",
    "title": "Aamon — Cyber Custom",
    "hero": "Aamon",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "cyber"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Cyber-themed visual concept for Aamon. No public download URL is attached."
  },
  {
    "id": "custom_v12_002_alice",
    "title": "Alice — Eclipse Custom",
    "hero": "Alice",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "eclipse"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Eclipse-themed visual concept for Alice. No public download URL is attached."
  },
  {
    "id": "custom_v12_003_alpha",
    "title": "Alpha — Arc Custom",
    "hero": "Alpha",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "arc"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Arc-themed visual concept for Alpha. No public download URL is attached."
  },
  {
    "id": "custom_v12_004_angela",
    "title": "Angela — Frost Custom",
    "hero": "Angela",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "frost"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Frost-themed visual concept for Angela. No public download URL is attached."
  },
  {
    "id": "custom_v12_005_atlas",
    "title": "Atlas — Void Custom",
    "hero": "Atlas",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "void"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Void-themed visual concept for Atlas. No public download URL is attached."
  },
  {
    "id": "custom_v12_006_aulus",
    "title": "Aulus — Crimson Custom",
    "hero": "Aulus",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "crimson"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Crimson-themed visual concept for Aulus. No public download URL is attached."
  },
  {
    "id": "custom_v12_007_aurora",
    "title": "Aurora — Solar Custom",
    "hero": "Aurora",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "solar"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Solar-themed visual concept for Aurora. No public download URL is attached."
  },
  {
    "id": "custom_v12_008_badang",
    "title": "Badang — Phantom Custom",
    "hero": "Badang",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "phantom"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Phantom-themed visual concept for Badang. No public download URL is attached."
  },
  {
    "id": "custom_v12_009_balmond",
    "title": "Balmond — Aether Custom",
    "hero": "Balmond",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "aether"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Aether-themed visual concept for Balmond. No public download URL is attached."
  },
  {
    "id": "custom_v12_010_barats",
    "title": "Barats — Pulse Custom",
    "hero": "Barats",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "pulse"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Pulse-themed visual concept for Barats. No public download URL is attached."
  },
  {
    "id": "custom_v12_011_baxia",
    "title": "Baxia — Cyber Custom",
    "hero": "Baxia",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "cyber"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Cyber-themed visual concept for Baxia. No public download URL is attached."
  },
  {
    "id": "custom_v12_012_beatrix",
    "title": "Beatrix — Eclipse Custom",
    "hero": "Beatrix",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "eclipse"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Eclipse-themed visual concept for Beatrix. No public download URL is attached."
  },
  {
    "id": "custom_v12_013_belerick",
    "title": "Belerick — Arc Custom",
    "hero": "Belerick",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "arc"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Arc-themed visual concept for Belerick. No public download URL is attached."
  },
  {
    "id": "custom_v12_014_bruno",
    "title": "Bruno — Frost Custom",
    "hero": "Bruno",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "frost"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Frost-themed visual concept for Bruno. No public download URL is attached."
  },
  {
    "id": "custom_v12_015_carmilla",
    "title": "Carmilla — Void Custom",
    "hero": "Carmilla",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "void"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Void-themed visual concept for Carmilla. No public download URL is attached."
  },
  {
    "id": "custom_v12_016_cecilion",
    "title": "Cecilion — Crimson Custom",
    "hero": "Cecilion",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "crimson"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Crimson-themed visual concept for Cecilion. No public download URL is attached."
  },
  {
    "id": "custom_v12_017_chang-e",
    "title": "Chang'e — Solar Custom",
    "hero": "Chang'e",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "solar"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Solar-themed visual concept for Chang'e. No public download URL is attached."
  },
  {
    "id": "custom_v12_018_claude",
    "title": "Claude — Phantom Custom",
    "hero": "Claude",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "phantom"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Phantom-themed visual concept for Claude. No public download URL is attached."
  },
  {
    "id": "custom_v12_019_clint",
    "title": "Clint — Aether Custom",
    "hero": "Clint",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "aether"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Aether-themed visual concept for Clint. No public download URL is attached."
  },
  {
    "id": "custom_v12_020_cyclops",
    "title": "Cyclops — Pulse Custom",
    "hero": "Cyclops",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "pulse"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Pulse-themed visual concept for Cyclops. No public download URL is attached."
  },
  {
    "id": "custom_v12_021_diggie",
    "title": "Diggie — Cyber Custom",
    "hero": "Diggie",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "cyber"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Cyber-themed visual concept for Diggie. No public download URL is attached."
  },
  {
    "id": "custom_v12_022_edith",
    "title": "Edith — Eclipse Custom",
    "hero": "Edith",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "eclipse"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Eclipse-themed visual concept for Edith. No public download URL is attached."
  },
  {
    "id": "custom_v12_023_esmeralda",
    "title": "Esmeralda — Arc Custom",
    "hero": "Esmeralda",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "arc"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Arc-themed visual concept for Esmeralda. No public download URL is attached."
  },
  {
    "id": "custom_v12_024_estes",
    "title": "Estes — Frost Custom",
    "hero": "Estes",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "frost"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Frost-themed visual concept for Estes. No public download URL is attached."
  },
  {
    "id": "custom_v12_025_eudora",
    "title": "Eudora — Void Custom",
    "hero": "Eudora",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "void"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Void-themed visual concept for Eudora. No public download URL is attached."
  },
  {
    "id": "custom_v12_026_faramis",
    "title": "Faramis — Crimson Custom",
    "hero": "Faramis",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "crimson"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Crimson-themed visual concept for Faramis. No public download URL is attached."
  },
  {
    "id": "custom_v12_027_floryn",
    "title": "Floryn — Solar Custom",
    "hero": "Floryn",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "solar"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Solar-themed visual concept for Floryn. No public download URL is attached."
  },
  {
    "id": "custom_v12_028_franco",
    "title": "Franco — Phantom Custom",
    "hero": "Franco",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "phantom"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Phantom-themed visual concept for Franco. No public download URL is attached."
  },
  {
    "id": "custom_v12_029_freya",
    "title": "Freya — Aether Custom",
    "hero": "Freya",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "aether"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Aether-themed visual concept for Freya. No public download URL is attached."
  },
  {
    "id": "custom_v12_030_gatotkaca",
    "title": "Gatotkaca — Pulse Custom",
    "hero": "Gatotkaca",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "pulse"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Pulse-themed visual concept for Gatotkaca. No public download URL is attached."
  },
  {
    "id": "custom_v12_031_gloo",
    "title": "Gloo — Cyber Custom",
    "hero": "Gloo",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "cyber"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Cyber-themed visual concept for Gloo. No public download URL is attached."
  },
  {
    "id": "custom_v12_032_granger",
    "title": "Granger — Eclipse Custom",
    "hero": "Granger",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "eclipse"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Eclipse-themed visual concept for Granger. No public download URL is attached."
  },
  {
    "id": "custom_v12_033_grock",
    "title": "Grock — Arc Custom",
    "hero": "Grock",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "arc"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Arc-themed visual concept for Grock. No public download URL is attached."
  },
  {
    "id": "custom_v12_034_guinevere",
    "title": "Guinevere — Frost Custom",
    "hero": "Guinevere",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "frost"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Frost-themed visual concept for Guinevere. No public download URL is attached."
  },
  {
    "id": "custom_v12_035_hanabi",
    "title": "Hanabi — Void Custom",
    "hero": "Hanabi",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "void"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Void-themed visual concept for Hanabi. No public download URL is attached."
  },
  {
    "id": "custom_v12_036_hanzo",
    "title": "Hanzo — Crimson Custom",
    "hero": "Hanzo",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "crimson"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Crimson-themed visual concept for Hanzo. No public download URL is attached."
  },
  {
    "id": "custom_v12_037_harith",
    "title": "Harith — Solar Custom",
    "hero": "Harith",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "solar"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Solar-themed visual concept for Harith. No public download URL is attached."
  },
  {
    "id": "custom_v12_038_harley",
    "title": "Harley — Phantom Custom",
    "hero": "Harley",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "phantom"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Phantom-themed visual concept for Harley. No public download URL is attached."
  },
  {
    "id": "custom_v12_039_helcurt",
    "title": "Helcurt — Aether Custom",
    "hero": "Helcurt",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "aether"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Aether-themed visual concept for Helcurt. No public download URL is attached."
  },
  {
    "id": "custom_v12_040_hilda",
    "title": "Hilda — Pulse Custom",
    "hero": "Hilda",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "pulse"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Pulse-themed visual concept for Hilda. No public download URL is attached."
  },
  {
    "id": "custom_v12_041_hirara",
    "title": "Hirara — Cyber Custom",
    "hero": "Hirara",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "cyber"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Cyber-themed visual concept for Hirara. No public download URL is attached."
  },
  {
    "id": "custom_v12_042_hylos",
    "title": "Hylos — Eclipse Custom",
    "hero": "Hylos",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "eclipse"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Eclipse-themed visual concept for Hylos. No public download URL is attached."
  },
  {
    "id": "custom_v12_043_irithel",
    "title": "Irithel — Arc Custom",
    "hero": "Irithel",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "arc"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Arc-themed visual concept for Irithel. No public download URL is attached."
  },
  {
    "id": "custom_v12_044_jawhead",
    "title": "Jawhead — Frost Custom",
    "hero": "Jawhead",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "frost"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Frost-themed visual concept for Jawhead. No public download URL is attached."
  },
  {
    "id": "custom_v12_045_johnson",
    "title": "Johnson — Void Custom",
    "hero": "Johnson",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "void"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Void-themed visual concept for Johnson. No public download URL is attached."
  },
  {
    "id": "custom_v12_046_kaja",
    "title": "Kaja — Crimson Custom",
    "hero": "Kaja",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "crimson"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Crimson-themed visual concept for Kaja. No public download URL is attached."
  },
  {
    "id": "custom_v12_047_kalea",
    "title": "Kalea — Solar Custom",
    "hero": "Kalea",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "solar"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Solar-themed visual concept for Kalea. No public download URL is attached."
  },
  {
    "id": "custom_v12_048_karina",
    "title": "Karina — Phantom Custom",
    "hero": "Karina",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "phantom"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Phantom-themed visual concept for Karina. No public download URL is attached."
  },
  {
    "id": "custom_v12_049_khaleed",
    "title": "Khaleed — Aether Custom",
    "hero": "Khaleed",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "aether"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Aether-themed visual concept for Khaleed. No public download URL is attached."
  },
  {
    "id": "custom_v12_050_khufra",
    "title": "Khufra — Pulse Custom",
    "hero": "Khufra",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "pulse"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Pulse-themed visual concept for Khufra. No public download URL is attached."
  },
  {
    "id": "custom_v12_051_kimmy",
    "title": "Kimmy — Cyber Custom",
    "hero": "Kimmy",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "cyber"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Cyber-themed visual concept for Kimmy. No public download URL is attached."
  },
  {
    "id": "custom_v12_052_lancelot",
    "title": "Lancelot — Eclipse Custom",
    "hero": "Lancelot",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "eclipse"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Eclipse-themed visual concept for Lancelot. No public download URL is attached."
  },
  {
    "id": "custom_v12_053_lapu-lapu",
    "title": "Lapu-Lapu — Arc Custom",
    "hero": "Lapu-Lapu",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "arc"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Arc-themed visual concept for Lapu-Lapu. No public download URL is attached."
  },
  {
    "id": "custom_v12_054_leomord",
    "title": "Leomord — Frost Custom",
    "hero": "Leomord",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "frost"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Frost-themed visual concept for Leomord. No public download URL is attached."
  },
  {
    "id": "custom_v12_055_lolita",
    "title": "Lolita — Void Custom",
    "hero": "Lolita",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "void"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Void-themed visual concept for Lolita. No public download URL is attached."
  },
  {
    "id": "custom_v12_056_lunox",
    "title": "Lunox — Crimson Custom",
    "hero": "Lunox",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "crimson"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Crimson-themed visual concept for Lunox. No public download URL is attached."
  },
  {
    "id": "custom_v12_057_luo-yi",
    "title": "Luo Yi — Solar Custom",
    "hero": "Luo Yi",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "solar"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Solar-themed visual concept for Luo Yi. No public download URL is attached."
  },
  {
    "id": "custom_v12_058_marcel",
    "title": "Marcel — Phantom Custom",
    "hero": "Marcel",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "phantom"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Phantom-themed visual concept for Marcel. No public download URL is attached."
  },
  {
    "id": "custom_v12_059_martis",
    "title": "Martis — Aether Custom",
    "hero": "Martis",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "aether"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Aether-themed visual concept for Martis. No public download URL is attached."
  },
  {
    "id": "custom_v12_060_masha",
    "title": "Masha — Pulse Custom",
    "hero": "Masha",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "pulse"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Pulse-themed visual concept for Masha. No public download URL is attached."
  },
  {
    "id": "custom_v12_061_mathilda",
    "title": "Mathilda — Cyber Custom",
    "hero": "Mathilda",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "cyber"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Cyber-themed visual concept for Mathilda. No public download URL is attached."
  },
  {
    "id": "custom_v12_062_minotaur",
    "title": "Minotaur — Eclipse Custom",
    "hero": "Minotaur",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "eclipse"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Eclipse-themed visual concept for Minotaur. No public download URL is attached."
  },
  {
    "id": "custom_v12_063_minsitthar",
    "title": "Minsitthar — Arc Custom",
    "hero": "Minsitthar",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "arc"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Arc-themed visual concept for Minsitthar. No public download URL is attached."
  },
  {
    "id": "custom_v12_064_odette",
    "title": "Odette — Frost Custom",
    "hero": "Odette",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "frost"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Frost-themed visual concept for Odette. No public download URL is attached."
  },
  {
    "id": "custom_v12_065_pharsa",
    "title": "Pharsa — Void Custom",
    "hero": "Pharsa",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "void"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Void-themed visual concept for Pharsa. No public download URL is attached."
  },
  {
    "id": "custom_v12_066_popol-and-kupa",
    "title": "Popol and Kupa — Crimson Custom",
    "hero": "Popol and Kupa",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "crimson"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Crimson-themed visual concept for Popol and Kupa. No public download URL is attached."
  },
  {
    "id": "custom_v12_067_rafaela",
    "title": "Rafaela — Solar Custom",
    "hero": "Rafaela",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "solar"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Solar-themed visual concept for Rafaela. No public download URL is attached."
  },
  {
    "id": "custom_v12_068_roger",
    "title": "Roger — Phantom Custom",
    "hero": "Roger",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "phantom"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Phantom-themed visual concept for Roger. No public download URL is attached."
  },
  {
    "id": "custom_v12_069_saber",
    "title": "Saber — Aether Custom",
    "hero": "Saber",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "aether"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Aether-themed visual concept for Saber. No public download URL is attached."
  },
  {
    "id": "custom_v12_070_selena",
    "title": "Selena — Pulse Custom",
    "hero": "Selena",
    "type": "Custom",
    "tags": [
      "custom",
      "v12",
      "pulse"
    ],
    "customOnly": true,
    "preserveDefault": true,
    "description": "RON SCRIPTS v12 Custom Lab concept. Pulse-themed visual concept for Selena. No public download URL is attached."
  }
];
scriptData.push(...V12_CUSTOM_CONCEPTS);

const heroVault = [
  "Argus",
  "Aldous",
  "Alucard",
  "Benedetta",
  "Chou",
  "Dyrroth",
  "Fanny",
  "Gord",
  "Gusion",
  "Hayabusa",
  "Ixia",
  "Julian",
  "Kadita",
  "Kagura",
  "Karrie",
  "Layla",
  "Lesley",
  "Ling",
  "Melissa",
  "Miya",
  "Moskov",
  "Suyou",
  "Vale",
  "Yin",
  "Yin X Sukuna-Megumi Vessel",
  "Arlott X Zoro Default",
  "Brody as Choso 3D MODEL",
  "Bane X Kisame Full Effect",
  "Exclusive Server Pack 1",
  "Exclusive Server Pack 2",
  "Exclusive Server Pack 3",
  "Zhuxin",
  "Lukas",
  "Chip",
  "Cici",
  "Nolan",
  "Nana",
  "Ruby",
  "Paquito",
  "Natan",
  "Novaria",
  "Joy",
  "Arlott",
  "Xavier",
  "Fredrinn",
  "Valentina",


  // =========================================================
  // VERIFIED REAL-LINK ADDITIONS — 2.1.4-NO-MELODIAS
  // These entries use externally hosted files that were verified by search.
  // Existing Argus links above are intentionally preserved unchanged.
  // =========================================================

  {
    id: "argus_neobeast_2025",
    title: "Argus — Neobeast",
    url: "https://sfile.co/b6uBSjqDFm7",
    hero: "Argus",
    type: "Crossover",
    tags: ["neobeast"]
  },
  {
    id: "argus_aizen_model_2026",
    title: "Argus x Sosuke Aizen — 3D Model",
    url: "https://sfile.co/sFLTJNw31aP",
    hero: "Argus",
    type: "Crossover",
    tags: ["aizen", "3d-model"]
  },
  {
    id: "argus_aizen_banezy",
    title: "Argus x Aizen — Banezy Official",
    url: "https://sfile.co/7aNlPGVxFSK",
    hero: "Argus",
    type: "Crossover",
    tags: ["aizen", "banezy"]
  },
  {
    id: "argus_ling_neobeast",
    title: "Argus x Ling Neobeast — Replace Default",
    url: "https://sfile.co/7LEe7kgxXOm",
    hero: "Argus",
    type: "Crossover",
    tags: ["ling", "neobeast"]
  },
  {
    id: "chou_kof_real_2025",
    title: "Chou — KOF Script",
    url: "https://sfile.mobi/avm2GnWYa4W",
    hero: "Chou",
    type: "Crossover",
    tags: ["kof"]
  },
  {
    id: "chou_dawning_kof_2025",
    title: "Chou — KOF Updated Dawning",
    url: "https://sfile.mobi/87OZNUL3bim",
    hero: "Chou",
    type: "Crossover",
    tags: ["kof", "dawning"]
  },
  {
    id: "fanny_asp_fullpack",
    title: "Fanny — Aspirant Full Pack",
    url: "https://sfile.co/1d9L4hzSEc6",
    hero: "Fanny",
    type: "Premium",
    tags: ["aspirant", "full-pack"]
  },
  {
    id: "fanny_asp_valentine_real",
    title: "Fanny — Aspirant Valentine",
    url: "https://sfile.co/4qMYDIF6msj",
    hero: "Fanny",
    type: "Premium",
    tags: ["aspirant", "valentine"]
  },
  {
    id: "fanny_asp_elite_real",
    title: "Fanny — Aspirant Elite",
    url: "https://sfile.co/80p0AELQ5iL",
    hero: "Fanny",
    type: "Premium",
    tags: ["aspirant", "elite"]
  },
  {
    id: "fanny_asp_season_real",
    title: "Fanny — Aspirant Season",
    url: "https://sfile.co/ao91UKtjpeo",
    hero: "Fanny",
    type: "Premium",
    tags: ["aspirant", "season"]
  },
  {
    id: "fanny_asp_topup_s22",
    title: "Fanny — Aspirant TopUp S22",
    url: "https://sfile.co/7Ef0p7TbQQa",
    hero: "Fanny",
    type: "Premium",
    tags: ["aspirant", "topup"]
  },
  {
    id: "gusion_col_valentine_2025",
    title: "Gusion — Collector Revamp Valentine",
    url: "https://sfile.co/K6f8Lyp0xks",
    hero: "Gusion",
    type: "Premium",
    tags: ["collector", "valentine"]
  },
  {
    id: "gusion_col_elite_2025",
    title: "Gusion — Collector Revamp Elite",
    url: "https://sfile.co/7cTZEVQqPoh",
    hero: "Gusion",
    type: "Premium",
    tags: ["collector", "elite"]
  },
  {
    id: "gusion_col_basic_2025",
    title: "Gusion — Collector Revamp Basic",
    url: "https://sfile.co/u2Fe52XPRI5",
    hero: "Gusion",
    type: "Premium",
    tags: ["collector", "basic"]
  },
  {
    id: "gusion_legend_replace_2024",
    title: "Gusion — Replace Elite to Legend",
    url: "https://sfile.co/bHetECC0lq7",
    hero: "Gusion",
    type: "Premium",
    tags: ["legend", "elite"]
  },
  {
    id: "ling_collector_neobeast_alt",
    title: "Ling — Collector Neobeast (Alt)",
    url: "https://sfile.mobi/bdQpUrKADu7",
    hero: "Ling",
    type: "Premium",
    tags: ["collector", "neobeast"]
  },
  {
    id: "ling_collector_default_update",
    title: "Ling — Collector Default Update",
    url: "https://sfile.co/9jJMoRBeeIa",
    hero: "Ling",
    type: "Premium",
    tags: ["collector", "default"]
  },
  {
    id: "ling_collector_basic_update",
    title: "Ling — Collector Basic Update",
    url: "https://sfile.co/3eZJ2wx9BK0",
    hero: "Ling",
    type: "Premium",
    tags: ["collector", "basic"]
  },
  {
    id: "ling_collector_special_update",
    title: "Ling — Collector Special Update",
    url: "https://sfile.co/1dpHWqwWfKm",
    hero: "Ling",
    type: "Premium",
    tags: ["collector", "special"]
  },
  {
    id: "lukas_naruto_default_rimuru",
    title: "Lukas — Naruto Uzumaki Replace Default",
    url: "https://sfile.co/6zJtF7FNlu8",
    hero: "Lukas",
    type: "Crossover",
    tags: ["naruto", "default"]
  },
  {
    id: "lukas_naruto_basic_real",
    title: "Lukas — Naruto Uzumaki Replace Basic",
    url: "https://sfile.co/5JScXtQ6cwc",
    hero: "Lukas",
    type: "Crossover",
    tags: ["naruto", "basic"]
  },
  {
    id: "ling_neobeast_basic_master",
    title: "Ling — Neobeast Basic Master Script",
    url: "https://sfile.mobi/2LlYuRJUOIl",
    hero: "Ling",
    type: "Premium",
    tags: ["neobeast", "basic"]
  },
  {
    id: "ling_neobeast_default_crossbow",
    title: "Ling — Neobeast Default CrossBow",
    url: "https://sfile.mobi/6kZisaAB9Kr",
    hero: "Ling",
    type: "Premium",
    tags: ["neobeast", "default"]
  }

,
  "Masha",
  "Khufra",
  "Esmeralda",
  "Guinevere",
  "Lylia",
  "Atlas",
  "Barats",
  "Beatrix",
  "Claude",
  "Clint",
  "Diggie",
  "Mathilda",
  "Floryn",
  "Flamita",
  "Baxia",
  "Hylos",
  "Minotaur",
  "Phoveus",
  "Terizla",
  "Silvanna",
  "Hanabi",
  "Kalea",
  "Sora"];


const V12_HERO_EXPANSION = [
  "Aamon",
  "Alice",
  "Alpha",
  "Angela",
  "Atlas",
  "Aulus",
  "Aurora",
  "Badang",
  "Balmond",
  "Barats",
  "Baxia",
  "Beatrix",
  "Belerick",
  "Bruno",
  "Carmilla",
  "Cecilion",
  "Chang'e",
  "Claude",
  "Clint",
  "Cyclops",
  "Diggie",
  "Edith",
  "Esmeralda",
  "Estes",
  "Eudora",
  "Faramis",
  "Floryn",
  "Franco",
  "Freya",
  "Gatotkaca",
  "Gloo",
  "Granger",
  "Grock",
  "Guinevere",
  "Hanabi",
  "Hanzo",
  "Harith",
  "Harley",
  "Helcurt",
  "Hilda",
  "Hirara",
  "Hylos",
  "Irithel",
  "Jawhead",
  "Johnson",
  "Kaja",
  "Kalea",
  "Karina",
  "Khaleed",
  "Khufra",
  "Kimmy",
  "Lancelot",
  "Lapu-Lapu",
  "Leomord",
  "Lolita",
  "Lunox",
  "Luo Yi",
  "Marcel",
  "Martis",
  "Masha",
  "Mathilda",
  "Minotaur",
  "Minsitthar",
  "Odette",
  "Pharsa",
  "Popol and Kupa",
  "Rafaela",
  "Roger",
  "Saber",
  "Selena",
  "Silvanna",
  "Sun",
  "Terizla",
  "Thamuz",
  "Tigreal",
  "Uranus",
  "Valir",
  "Vexana",
  "Wanwan",
  "X.Borg",
  "Yve",
  "Yu Zhong",
  "Zetian",
  "Zhask",
  "Zilong"
];
heroVault.push(...V12_HERO_EXPANSION.filter(h => !heroVault.includes(h)));

const state = {
  query: "",
  hero: "all",
  type: "all",
  sort: "featured",
  favoritesOnly: false,
  view: localStorage.getItem("ron_view") || "grid",
  theme: localStorage.getItem("ron_theme") || "neon",
  uiStyle: localStorage.getItem("ron_ui_style") || "ronconsole",
  language: localStorage.getItem("ron_language") || "en",
  reduceMotion: localStorage.getItem("ron_motion") === "off",
  compact: localStorage.getItem("ron_compact") === "on",
  currentCommentId: null,
  user: null,
  isCreator: false,
  vipId: localStorage.getItem("ron_vip_id") || "",
  vipActive: localStorage.getItem("ron_vip_active") === "1",
  debug: new URLSearchParams(location.search).get("debug") === "1",
  lastRender: "never",
  lastError: "none",
  approvals: (() => { try { return JSON.parse(localStorage.getItem("ron_approvals") || "{}"); } catch { localStorage.removeItem("ron_approvals"); return {}; } })()
};

const cache = {};
let unsubscribers = [];

const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

function escapeHTML(v = "") {
  return String(v).replace(
    /[&<>'"]/g,
    c =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
      })[c]
  );
}

function shortDescription(s) {
  if (s.description) return s.description;
  if (s.accessOnly) return "VIP entry • creator permission required";
  if (s.customOnly) return "Custom concept • no public file attached";
  return "Community skin script entry";
}

function initials(name) {
  const safeName = typeof name === "string" ? name : String(name ?? "");
  return safeName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(x => x[0])
    .join("")
    .toUpperCase() || "?";
}

function toast(msg) {
  const root = $("#toast-root");
  if (!root) return;

  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;

  root.appendChild(el);

  setTimeout(() => el.remove(), 2800);
}

function favoriteKey(id) {
  return `ron_fav_${id}`;
}

function isFavorite(id) {
  return localStorage.getItem(favoriteKey(id)) === "1";
}

function setFavorite(id, on) {
  if (on) {
    localStorage.setItem(favoriteKey(id), "1");
  } else {
    localStorage.removeItem(favoriteKey(id));
  }
}

function getFavorites() {
  return scriptData.filter(s => isFavorite(s.id));
}

function firestoreReady() {
  return !!db && !!getDoc && !!setDoc && !!doc;
}

function createVipId() {
  const raw = (crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`)
    .replace(/[^a-zA-Z0-9]/g, "")
    .toUpperCase();
  return `RON-${raw.slice(0, 4)}-${raw.slice(4, 8)}`;
}

function getVipId() {
  if (!state.vipId) {
    state.vipId = createVipId();
    localStorage.setItem("ron_vip_id", state.vipId);
  }
  return state.vipId;
}

async function refreshVipStatus() {
  const id = getVipId();

  // The authenticated creator is always VIP.
  if (state.isCreator === true) {
    state.vipActive = true;
    localStorage.setItem("ron_vip_active", "1");
    updateVipUI();
    try {
      if (typeof renderScripts === "function") renderScripts();
    } catch (e) {
      console.warn("VIP UI refresh failed", e);
    }
    return true;
  }

  if (!firestoreReady()) {
    state.vipActive = localStorage.getItem("ron_vip_active") === "1";
    updateVipUI();
    return state.vipActive;
  }
  try {
    const snap = await getDoc(doc(db, "vipMembers", id));
    state.vipActive = !!snap.exists() && snap.data()?.active === true;
    localStorage.setItem("ron_vip_active", state.vipActive ? "1" : "0");
  } catch (e) {
    console.warn("VIP status check failed", e);
  }
  updateVipUI();

  // Re-render the cards after the async VIP check so approved members
  // immediately see Download instead of VIP Access.
  try {
    if (typeof renderScripts === "function") renderScripts();
  } catch (e) {
    console.warn("VIP UI refresh failed", e);
  }

  return state.vipActive;
}

async function requestVip() {
  const id = getVipId();
  if (!firestoreReady()) {
    return toast("Cloud access is unavailable. Your VIP ID is still saved on this device.");
  }
  try {
    await setDoc(doc(db, "vipRequests", id), {
      memberId: id,
      status: "pending",
      requestedAt: new Date().toISOString(),
      appVersion: APP_META.version,
      build: APP_META.build
    }, { merge: true });
    toast("VIP request sent. Send your Member ID to the creator.");
  } catch (e) {
    console.warn("VIP request failed", e);
    toast("VIP request could not be sent right now.");
  }
}


async function checkCreatorAccess() {
  if (!auth || !getDoc || !db || !state.user) {
    state.isCreator = false;
    updateCreatorUI();
    return false;
  }
  try {
    const snap = await getDoc(doc(db, "creatorAdmins", state.user.uid));
    const data = snap.exists() ? (snap.data() || {}) : {};
    state.isCreator = data.active === true || data.role === "creator";
  } catch (e) {
    console.warn("Creator access check failed", e);
    state.isCreator = false;
  }
  updateCreatorUI();
  return state.isCreator;
}

async function creatorSignIn() {
  if (!auth || !GoogleAuthProvider) {
    return toast("Google login is not ready. Enable Google in Firebase Auth.");
  }
  const provider = new GoogleAuthProvider();
  try {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || "");
    if (isMobile && signInWithRedirect) {
      await signInWithRedirect(auth, provider);
      return;
    }
    if (signInWithPopup) {
      await signInWithPopup(auth, provider);
      return;
    }
    if (signInWithRedirect) {
      await signInWithRedirect(auth, provider);
      return;
    }
    toast("Google login is not available.");
  } catch (e) {
    console.warn("Creator sign-in failed", e);
    if (signInWithRedirect) {
      try {
        await signInWithRedirect(auth, provider);
        return;
      } catch (redirectError) {
        console.warn("Google redirect sign-in failed", redirectError);
      }
    }
    const code = e?.code || "";
    if (code.includes("popup-blocked")) {
      toast("Google popup was blocked. Tap Creator login again.");
    } else if (code.includes("unauthorized-domain")) {
      toast("Add your GitHub Pages domain in Firebase Auth authorized domains.");
    } else if (code.includes("operation-not-allowed")) {
      toast("Enable Google sign-in in Firebase Authentication.");
    } else {
      toast("Google login failed. Check Firebase Auth settings.");
    }
  }
}

async function creatorSignOut() {
  if (!auth || !signOut) return;
  try { await signOut(auth); } catch (e) { console.warn(e); }
}

async function creatorSetVip(active) {
  if (!state.isCreator) return toast("Creator access required.");
  const input = $("#creator-member-id");
  const id = input?.value.trim();
  if (!id) return toast("Enter a Member ID first.");
  try {
    await setDoc(doc(db, "vipMembers", id), {
      active,
      updatedAt: new Date().toISOString(),
      updatedBy: state.user.uid
    }, { merge: true });
    toast(active ? "VIP enabled for this member." : "VIP removed for this member.");
    if (id === getVipId()) await refreshVipStatus();
    updateCreatorUI();
  } catch (e) {
    console.warn("VIP role change failed", e);
    toast("Could not change VIP role. Check Firestore rules.");
  }
}

function updateCreatorUI() {
  const gate = $("#creator-admin-panel");
  const signed = $("#creator-auth-status");
  const email = $("#creator-auth-email");
  const login = $("#creator-login");
  const logout = $("#creator-logout");
  if (!gate) return;
  gate.hidden = !state.isCreator;
  if (signed) signed.textContent = state.isCreator ? "Creator verified" : (state.user ? "Signed in — not approved as creator" : "Not signed in");
  if (email) email.textContent = state.user?.email || "";
  if (login) login.hidden = !!state.user;
  if (logout) logout.hidden = !state.user;
}

function updateVipUI() {
  const badge = $("#vip-status-badge");
  const dot = $("#vip-status-dot");
  const label = $("#vip-status-label");
  const idEl = $("#vip-member-id");
  if (badge) {
    badge.textContent = state.vipActive ? "VIP ACTIVE" : "STANDARD";
    badge.classList.toggle("active", state.vipActive);
  }
  if (dot) dot.classList.toggle("active", state.vipActive);
  if (label) label.textContent = state.vipActive ? "VIP member — protected downloads unlocked" : "Standard member — permission required for VIP downloads";
  if (idEl) idEl.textContent = getVipId();
}

function updateVipModalUI() {
  const dot = $("#vip-status-dot-2");
  const label = $("#vip-status-label-2");
  const id = $("#vip-member-id-2");
  if (dot) dot.classList.toggle("active", state.vipActive);
  if (label) label.textContent = state.vipActive ? "VIP member — access enabled" : "Standard member — awaiting approval";
  if (id) id.textContent = getVipId();
}


function openVipCenter(requestedSkin = "") {
  const modal = $("#vip-modal");
  if (!modal) return;
  updateVipUI();
  updateVipModalUI();
  const request = $("#vip-request-skin");
  if (request) request.textContent = requestedSkin ? `Requested skin: ${requestedSkin}` : "";
  modal.showModal();
}

function openVipDownload(s) {
  refreshVipStatus().then(active => {
    if (active) {
      window.open(s.url, "_blank", "noopener,noreferrer");
    } else {
      openVipCenter(s.title);
    }
  });
}

function closeDebugPanel() {
  state.debug = false;
  localStorage.setItem("ron_debug", "0");
  const panel = $("#debug-panel");
  if (panel) {
    panel.hidden = true;
    panel.setAttribute("aria-hidden", "true");
    panel.style.display = "none";
  }
  const toggle = $("#debug-toggle");
  if (toggle) toggle.textContent = "Off";
  document.body.classList.remove("debug-open");
}

function updateDebugPanel(extra = "") {
  const panel = $("#debug-panel");
  if (!panel) return;
  panel.hidden = !state.debug;
  if (!state.debug) return;
  const lines = [
    `RON DEBUG • ${APP_META.version}`,
    `Build: ${APP_META.build}`,
    `Scripts: ${scriptData.length}`,
    `Custom: ${customScriptSkins.length}`,
    `VIP: ${state.vipActive ? "ACTIVE" : "STANDARD"}`,
    `Member ID: ${getVipId()}`,
    `Render: ${state.lastRender}`,
    `Last error: ${state.lastError}`,
    extra ? `Event: ${extra}` : ""
  ].filter(Boolean);
  const content = $("#debug-panel-content");
  if (content) content.innerHTML = lines.map(x => `<span>${escapeHTML(x)}</span>`).join("");
  const report = $("#debug-report-lines");
  if (report) report.innerHTML = lines.map(x => `<span>${escapeHTML(x)}</span>`).join("");
}


window.addEventListener("error", event => {
  state.lastError = event.message || "Unknown error";
  updateDebugPanel("runtime error");
});

window.addEventListener("unhandledrejection", event => {
  state.lastError = event.reason?.message || String(event.reason || "Unhandled promise rejection");
  updateDebugPanel("unhandled rejection");
});

async function ensureDoc(id) {
  if (!firestoreReady()) return;

  try {
    await setDoc(
      doc(db, "scripts", id),
      {
        likes: 0,
        views: 0,
        comments: [],
        ratings: []
      },
      { merge: true }
    );
  } catch (e) {
    console.warn("Firebase init failed", e);
  }
}

async function mutate(id, payload) {
  if (!firestoreReady()) return false;

  try {
    await updateDoc(doc(db, "scripts", id), payload);
    return true;
  } catch (e) {
    console.warn("Firebase write failed", e);
    toast("Cloud sync unavailable — saved locally where possible.");
    return false;
  }
}

function hydrateControls() {
  const themeSelect = $("#theme-select");
  if (themeSelect) themeSelect.value = state.theme;

  const motionToggle = $("#motion-toggle");
  if (motionToggle) {
    motionToggle.textContent = state.reduceMotion ? "Off" : "On";
  }

  const compactToggle = $("#compact-toggle");
  if (compactToggle) {
    compactToggle.textContent = state.compact ? "On" : "Off";
  }

  const creatorLogin = $("#creator-login");
if (creatorLogin) creatorLogin.addEventListener("click", creatorSignIn);
const creatorLogout = $("#creator-logout");
if (creatorLogout) creatorLogout.addEventListener("click", creatorSignOut);
const grantVipBtn = $("#creator-grant-vip");
if (grantVipBtn) grantVipBtn.addEventListener("click", () => creatorSetVip(true));
const removeVipBtn = $("#creator-remove-vip");
if (removeVipBtn) removeVipBtn.addEventListener("click", () => creatorSetVip(false));

const debugClose = $("#debug-close");
if (debugClose) debugClose.addEventListener("click", closeDebugPanel);

function forceCloseDebug() {
  closeDebugPanel();
  const panel = document.getElementById("debug-panel");
  if (panel) {
    panel.hidden = true;
    panel.style.display = "none";
  }
}
document.addEventListener("click", e => {
  const btn = e.target.closest("#debug-close, .debug-close");
  if (btn) { e.preventDefault(); e.stopImmediatePropagation(); forceCloseDebug(); }
}, true);
const debugToggle = $("#debug-toggle");
  if (debugToggle) debugToggle.textContent = state.debug ? "On" : "Off";

  document.body.className =
    `theme-${state.theme} ${state.reduceMotion ? "reduce-motion" : ""}`;

  document.documentElement.classList.toggle(
    "compact-mode",
    state.compact
  );
}

function setTheme(theme) {
  state.theme = theme;
  localStorage.setItem("ron_theme", theme);
  hydrateControls();
  toast(`Theme switched to ${theme}.`);
}

function cycleTheme() {
  const themes = ["neon", "midnight", "ice", "sunset", "mono"];
  const next =
    themes[(themes.indexOf(state.theme) + 1) % themes.length];

  setTheme(next);
}

function fillFilters() {
  const heroes = [...new Set(scriptData.map(s => String(s.hero ?? "Unknown")))]
    .sort((a, b) => a.localeCompare(b));

  const heroFilter = $("#hero-filter");
  if (heroFilter) {
    heroFilter.innerHTML =
      '<option value="all">All heroes</option>' +
      heroes
        .map(h => `<option value="${escapeHTML(h)}">${escapeHTML(h)}</option>`)
        .join("");
  }

  const types = [...new Set(scriptData.map(s => String(s.type ?? "Custom")))]
    .sort((a, b) => a.localeCompare(b));

  const typeFilter = $("#type-filter");
  if (typeFilter) {
    typeFilter.innerHTML =
      '<option value="all">All types</option>' +
      types
        .map(t => `<option value="${escapeHTML(t)}">${escapeHTML(t)}</option>`)
        .join("");
  }

  const statTypes = $("#stat-types");
  if (statTypes) statTypes.textContent = String(types.length);
}

function mergedData() {
  return scriptData.map(s => ({
    ...s,
    ...(cache[s.id] || {})
  }));
}

function filteredData() {
  const q = state.query.trim().toLowerCase();

  let data = mergedData().filter(s => {
    const hay = [
      s.title,
      s.hero,
      s.type,
      ...(s.tags || [])
    ]
      .join(" ")
      .toLowerCase();

    return (
      (!q || hay.includes(q)) &&
      (state.hero === "all" || s.hero === state.hero) &&
      (state.type === "all" || s.type === state.type) &&
      (!state.favoritesOnly || isFavorite(s.id))
    );
  });

  if (state.sort === "az") {
    data.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (state.sort === "za") {
    data.sort((a, b) => b.title.localeCompare(a.title));
  }

  if (state.sort === "hero") {
    data.sort(
      (a, b) =>
        a.hero.localeCompare(b.hero) ||
        a.title.localeCompare(b.title)
    );
  }

  if (state.sort === "newest") {
    data.reverse();
  }

  return data;
}

function getAccessMessage(s) {
  return (
    s.accessMessage ||
    "Access required. Please contact the creator for permission to download."
  );
}

function setupAccessButton(button, s) {
  if (!button || !s?.accessOnly) return;

  button.removeAttribute("href");
  button.innerHTML = '<i class="fa-solid fa-lock"></i> VIP Access';
  button.title = "VIP membership required";

  button.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    openVipDownload(s);
  });
}


function getApprovalKey(s){ return `${getVipId()}::${s.id}`; }
function getApprovalStatus(s){ return state.approvals?.[getApprovalKey(s)] || "none"; }

// Never show an old local approval result as if it were a fresh approval.
const APPROVAL_SCHEMA = "2";
if (localStorage.getItem("ron_approval_schema") !== APPROVAL_SCHEMA) {
  state.approvals = {};
  localStorage.setItem("ron_approvals", "{}");
  localStorage.setItem("ron_approval_schema", APPROVAL_SCHEMA);
}
function setApprovalStatus(s,status){ state.approvals[getApprovalKey(s)]=status; localStorage.setItem("ron_approvals",JSON.stringify(state.approvals)); }

function approvalQuestionsFor(s){
  const hard = s.approvalLevel === "hard";
  if (hard) return [
    {q:"What are you going to do with the script?",a:["I use it for content","I use it for gameplay"],w:[1,1]},
    {q:"Do you really need Hidan V3.5?",a:["Yes, I really need it","Maybe","No"],w:[1,.35,0]},
    {q:"Will you keep the file private?",a:["Yes","Maybe","No"],w:[1,.35,0]},
    {q:"Will you re-upload or sell the file?",a:["No","Maybe","Yes"],w:[1,.2,0]},
    {q:"Do you understand this is a premium script?",a:["Yes, I understand","No"],w:[1,0]},
    {q:"Do you really want it?",a:["Yes because I really want it","Yes I really want it for my gameplay or content","No I don't want it","Decline the approval questions"],w:[1,1,0,0]}
  ];
  return [
    {q:"What are you going to do with the script?",a:["I use it for content","I use it for gameplay"],w:[1,1]},
    {q:"Do you want it for something?",a:["Yes","No","Maybe","Probably"],w:[1,0,.5,.5]},
    {q:"Do you really want it?",a:["Yes because I really want it","Yes I really want it for my gameplay or content","No I don't want it","Decline the approval questions"],w:[1,1,0,0]}
  ];
}

function resetApprovalModalState(){
  const form=$("#approval-form"), result=$("#approval-result"), questions=$("#approval-questions");
  if(!form||!result||!questions)return;
  form.hidden=false; result.hidden=true; form.dataset.step="0"; form.dataset.answers="[]";
}

function renderApprovalStep(){
  const form=$("#approval-form"), questions=$("#approval-questions"), next=$("#approval-next"), back=$("#approval-back"), progress=$("#approval-progress"), title=$("#approval-title"), level=$("#approval-level");
  if(!form||!questions)return;
  const skin=scriptData.find(x=>x.id===form.dataset.skinId); if(!skin)return;
  const q=JSON.parse(form.dataset.questions||"[]");
  const step=Math.max(0,Math.min(Number(form.dataset.step||0),q.length-1));
  const item=q[step];
  questions.innerHTML=`<section class="approval-question-card step-active"><div class="approval-q-number">QUESTION ${String(step+1).padStart(2,"0")} / ${String(q.length).padStart(2,"0")}</div><h3>${escapeHTML(item.q)}</h3><div class="approval-options">${item.a.map((a,j)=>`<label class="approval-option"><input type="radio" name="approval_current" value="${j}" data-weight="${item.w[j]}"><span class="approval-radio"></span><span>${escapeHTML(a)}</span></label>`).join("")}</div></section>`;
  if(progress)progress.style.width=`${((step+1)/q.length)*100}%`;
  if(next)next.innerHTML=step===q.length-1?'<i class="fa-solid fa-paper-plane"></i> Send approval request':'<i class="fa-solid fa-arrow-right"></i> Next';
  if(back)back.hidden=step===0;
  if(level)level.textContent=skin.approvalLevel==="hard"?"HARD PREMIUM APPROVAL":(skin.accessOnly?"VIP APPROVAL":"APPROVAL");
}

function openApprovalModal(s){
  const modal=$("#approval-modal"), title=$("#approval-title"), level=$("#approval-level"), form=$("#approval-form"), result=$("#approval-result");
  if(!modal||!title||!level||!form||!result)return;
  title.textContent=s.title;
  form.dataset.skinId=s.id;
  form.dataset.questions=JSON.stringify(approvalQuestionsFor(s));
  form.dataset.step="0";
  form.dataset.answers="[]";
  form.hidden=false; result.hidden=true;
  renderApprovalStep();
  modal.showModal();
}

async function submitApprovalStep(){
  const form=$("#approval-form"); if(!form)return;
  const s=scriptData.find(x=>x.id===form.dataset.skinId); if(!s)return;
  const q=JSON.parse(form.dataset.questions||"[]");
  const step=Number(form.dataset.step||0);
  const selected=form.querySelector('input[name="approval_current"]:checked');
  if(!selected)return toast("Choose one answer first.");
  const answers=JSON.parse(form.dataset.answers||"[]");
  const item=q[step], idx=Number(selected.value), weight=Number(selected.dataset.weight||0);
  answers[step]={question:item.q,answer:item.a[idx],weight};
  form.dataset.answers=JSON.stringify(answers);
  if(step<q.length-1){form.dataset.step=String(step+1);renderApprovalStep();return;}

  const score=answers.reduce((n,a)=>n+Number(a?.weight||0),0);
  const max=q.reduce((n,item)=>n+Math.max(...item.w),0);
  const ratio=max?score/max:0;
  const passed=ratio>=0.9;
  const status = s.accessOnly ? (passed?"pending_creator":"declined") : (passed?"pending_creator":ratio>=0.6?"review":"declined");
  setApprovalStatus(s,status);

  if(firestoreReady()){
    const collection=s.accessOnly?"vipRequests":"premiumRequests";
    const key=`${getVipId()}_${s.id}`;
    try{
      await setDoc(doc(db,collection,key),{
        memberId:getVipId(),skinId:s.id,skinTitle:s.title,answers,score,maxScore:max,ratio,status,
        requestedAt:new Date().toISOString(),updatedAt:new Date().toISOString(),appVersion:APP_META.version,build:APP_META.build
      },{merge:true});
      watchApprovalRequest(s);
    }catch(e){console.warn("Approval save failed",e);}
  }

  form.hidden=true;
  const result=$("#approval-result"); result.hidden=false;
  const icon=$("#approval-result-icon"), ttl=$("#approval-result-title"), msg=$("#approval-result-message"), st=$("#approval-result-status");
  const approvedForCreator=passed;
  icon.className=`fa-solid ${approvedForCreator?"fa-circle-check":"fa-circle-xmark"}`;
  ttl.textContent=approvedForCreator?"You've been approved":"Approval declined";
  msg.textContent=approvedForCreator?"You passed the approval questions. Screenshot this and send it to the creator. The protected script stays locked until the creator approves you.":"The answers did not pass this approval.";
  st.textContent=`Status: ${status.replaceAll("_"," ").toUpperCase()}`;
}

function watchApprovalRequest(s){
  if(!firestoreReady())return;
  try{
    if(approvalUnsub)approvalUnsub();
    const collection=s.accessOnly?"vipRequests":"premiumRequests";
    approvalUnsub=onSnapshot(doc(db,collection,`${getVipId()}_${s.id}`),snap=>{
      if(!snap.exists())return;
      const status=snap.data()?.status;
      if(!status)return;
      if(status==="approved"){
        setApprovalStatus(s,"approved");
        renderScripts();
        toast(`${s.title} approved.`);
      }else if(status==="declined"){
        setApprovalStatus(s,"declined");
        renderScripts();
      }
    });
  }catch(e){console.warn("Approval realtime watcher failed",e);}
}

function openPremiumDownload(s){
  if(getApprovalStatus(s)==="approved"){window.open(s.url,"_blank","noopener,noreferrer");}
  else openApprovalModal(s);
}

function openVipDownload(s){
  refreshVipStatus().then(active=>{
    if(active){window.open(s.url,"_blank","noopener,noreferrer");}
    else openApprovalModal(s);
  });
}

function cardTemplate(s){
  const t=$("#skin-card-template").content.cloneNode(true),card=$(".script-card",t); if(!card)throw new Error("Skin card template is missing .script-card");
  const premium=!!s.premiumApprovalOnly,vip=!!s.accessOnly;
  card.dataset.id=s.id;card.classList.toggle("is-vip",vip);card.classList.toggle("is-premium",premium);card.classList.toggle("is-custom",!!s.customOnly);card.dataset.preserveDefault=s.preserveDefault?"true":"false";
  $(".skin-badge",card).textContent=(s.type||"Custom").toUpperCase();$(".hero-letter",card).textContent=initials(s.hero);$(".skin-title",card).textContent=s.title;$(".hero-name",card).textContent=s.hero;$(".skin-description",card).textContent=shortDescription(s);
  $(".card-status",card).textContent=vip?"VIP":premium?"PREMIUM":(s.customOnly?"LAB • SAFE SLOT":"FREE");$(".card-type-dot",card).className=`card-type-dot ${vip?"vip":premium?"premium":s.customOnly?"custom":"ready"}`;
  $(".tag-row",card).innerHTML=(s.tags||[]).slice(0,4).map(tag=>`<span class="tag">#${escapeHTML(tag)}</span>`).join("");$(".likes",card).textContent=s.likes||0;$(".views",card).textContent=s.views||0;
  const fav=$(".favorite-btn",card);fav.classList.toggle("active",isFavorite(s.id));fav.innerHTML=isFavorite(s.id)?'<i class="fa-solid fa-star"></i>':'<i class="fa-regular fa-star"></i>';
  fav.addEventListener("click",e=>{e.stopPropagation();const on=!isFavorite(s.id);setFavorite(s.id,on);fav.classList.toggle("active",on);fav.innerHTML=on?'<i class="fa-solid fa-star"></i>':'<i class="fa-regular fa-star"></i>';updateCounters();if(state.favoritesOnly)renderScripts();});
  const action=$(".download-btn",card),approvedPremium=premium&&getApprovalStatus(s)==="approved",approvedVip=vip&&(state.vipActive||getApprovalStatus(s)==="approved");
  if(vip&&state.vipActive&&s.url){action.href=s.url;action.innerHTML='<i class="fa-solid fa-download"></i> Download';}
  else if(vip)setupAccessButton(action,s);
  else if(premium&&approvedPremium&&s.url){action.href=s.url;action.innerHTML='<i class="fa-solid fa-download"></i> Download';}
  else if(premium){action.removeAttribute("href");action.innerHTML='<i class="fa-solid fa-lock"></i> Approval';action.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();openPremiumDownload(s);});}
  else if(s.customOnly){action.removeAttribute("href");action.innerHTML='<i class="fa-solid fa-eye"></i> Preview';action.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();openDetails(s.id);});}
  else if(s.url){action.removeAttribute("href");action.innerHTML='<i class="fa-solid fa-download"></i> Download';action.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();window.open(s.url,"_blank","noopener,noreferrer");});}
  $(".details-btn",card).addEventListener("click",()=>openDetails(s.id)); return t;
}

function renderFeatured() {
  const wrap = $("#featured-grid");
  if (!wrap) return;
  const picks = filteredData().filter(s => !s.customOnly).slice(0, 4);
  wrap.innerHTML = picks.map(s => `
    <button class="featured-card" data-featured-id="${escapeHTML(s.id)}">
      <span class="featured-badge">${escapeHTML((s.type || "SKIN").toUpperCase())}</span>
      <strong>${escapeHTML(s.title)}</strong>
      <small>${escapeHTML(s.hero)}</small>
    </button>
  `).join("");
  $$(".featured-card", wrap).forEach(btn => btn.addEventListener("click", () => openDetails(btn.dataset.featuredId)));
}

function renderCustomLab() {
  const grid = $("#custom-grid");
  if (!grid) return;
  grid.innerHTML = "";
  customScriptSkins.forEach(s => grid.appendChild(cardTemplate(s)));
  const badge = $("#custom-badge");
  if (badge) badge.textContent = customScriptSkins.length;
}

function renderScripts() {
  const grid = $("#scripts-grid");
  if (!grid) return;
  grid.classList.toggle("compact", state.view === "compact");
  grid.innerHTML = "";

  let data = [];
  try { data = filteredData(); } catch (e) { console.error("Filter error:", e); }

  data.forEach(s => {
    try { grid.appendChild(cardTemplate(s)); }
    catch (error) { console.error("Card error:", s?.id, error); }
  });

  state.lastRender = new Date().toLocaleTimeString();
  const summary = $("#result-summary");
  if (summary) summary.textContent = `Showing ${data.length} of ${scriptData.length} skin scripts`;
  const emptyState = $("#empty-state");
  if (emptyState) emptyState.hidden = !!data.length;

  const gridView = $('.view-btn[data-view="grid"]');
  const compactView = $('.view-btn[data-view="compact"]');
  if (gridView) gridView.classList.toggle("active", state.view === "grid");
  if (compactView) compactView.classList.toggle("active", state.view === "compact");

  const favGrid = $("#favorites-grid");
  if (favGrid) {
    favGrid.innerHTML = "";
    getFavorites().forEach(s => {
      try { favGrid.appendChild(cardTemplate({ ...s, ...(cache[s.id] || {}) })); }
      catch (error) { console.error("Favorite card error:", s?.id, error); }
    });
  }

  const empty = $("#favorites-empty");
  if (empty) empty.style.display = getFavorites().length ? "none" : "block";
  try { renderFeatured(); } catch (e) { console.warn("Featured render failed", e); }
  try { updateDebugPanel("renderScripts"); } catch {}
}

// EARLY LIBRARY PAINT
// Render the library before optional Firebase/settings code runs.
try {
  renderScripts();
} catch (error) {
  console.error("Early library render failed:", error);
}

function renderHeroes() {
  const grid = $("#heroes-grid");
  if (!grid) return;

  const byHero = {};
  scriptData.forEach(s => {
    const hero = String(s.hero ?? "Unknown");
    (byHero[hero] ??= []).push(s);
  });

  const heroes = Array.isArray(heroVault) ? heroVault : [];

  grid.innerHTML = heroes.map(h => {
    const name = String(h ?? "Unknown");
    const ready = !!byHero[name]?.length;
    return `
      <article class="hero-card glass ${ready ? "ready" : ""}" data-hero="${escapeHTML(name)}">
        <div class="hero-orb">${initials(name)}</div>
        <h3>${escapeHTML(name)}</h3>
        <p>${ready ? `${byHero[name].length} skin script${byHero[name].length === 1 ? "" : "s"}` : "New hero slot • coming soon"}</p>
        <span class="request">${ready ? "View skins →" : "Request a skin →"}</span>
      </article>`;
  }).join("");

  $$(".hero-card", grid).forEach(card => card.addEventListener("click", () => {
    const h = card.dataset.hero;
    if (byHero[h]?.length) switchHero(h);
    else toast(`${h} is a ready-to-fill hero slot.`);
  }));
}

function switchHero(hero) {
  state.hero = hero;
  state.favoritesOnly = false;

  const skinsTab = $('[data-tab="skins"]');
  if (skinsTab) skinsTab.click();

  $("#hero-filter").value = hero;

  renderScripts();

  $("#tab-skins").scrollIntoView({
    behavior: state.reduceMotion ? "auto" : "smooth",
    block: "start"
  });
}

function updateCounters() {
  const fav = getFavorites().length;
  const heroCount = new Set(scriptData.map(s => String(s.hero ?? "Unknown"))).size;

  const setText = (selector, value) => {
    const el = $(selector);
    if (el) el.textContent = String(value);
  };

  setText("#stat-skins", scriptData.length);
  setText("#stat-heroes", heroCount);
  setText("#stat-favorites", fav);
  setText("#fav-badge", fav);
  setText("#hero-count", `${scriptData.length} skins`);
  setText("#hero-heroes", `${heroCount} heroes`);
  setText("#custom-badge", customScriptSkins.length);

  try { updateVipUI(); } catch (e) { console.warn("VIP UI update failed", e); }
}


function openDetails(id){
  const base=scriptData.find(x=>x.id===id)||customScriptSkins.find(x=>x.id===id);if(!base)return;const s={...base,...(cache[id]||{})};
  const rating=Array.isArray(s.ratings)&&s.ratings.length?(s.ratings.reduce((a,b)=>a+b,0)/s.ratings.length).toFixed(1):"0.0";let action="";
  if(s.accessOnly&&state.vipActive&&s.url)action=`<a class="primary-btn" href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-download"></i> Download</a>`;
  else if(s.accessOnly)action=`<button class="primary-btn" id="details-access"><i class="fa-solid fa-lock"></i> VIP Access</button>`;
  else if(s.premiumApprovalOnly&&getApprovalStatus(s)==="approved"&&s.url)action=`<a class="primary-btn" href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-download"></i> Download</a>`;
  else if(s.premiumApprovalOnly)action=`<button class="primary-btn" id="details-premium"><i class="fa-solid fa-lock"></i> Approval</button>`;
  else if(s.customOnly)action=`<button class="primary-btn" id="details-custom"><i class="fa-solid fa-wand-magic-sparkles"></i> Custom Concept</button>`;
  else action=`<a class="primary-btn" href="${escapeHTML(s.url||"#")}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-download"></i> Download</a>`;
  const notice=s.accessOnly?`<div class="access-notice"><strong><i class="fa-solid fa-crown"></i> VIP Access Required</strong><p>${escapeHTML(getAccessMessage(s))}</p></div>`:s.premiumApprovalOnly?`<div class="access-notice premium-notice"><strong><i class="fa-solid fa-gem"></i> Premium Approval</strong><p>Answer the approval questions. Your result is saved in real time.</p></div>`:s.customOnly?`<div class="access-notice custom-notice"><strong><i class="fa-solid fa-flask"></i> Custom Lab Entry</strong><p>${escapeHTML(shortDescription(s))}</p></div>`:"";
  $("#modal-body").innerHTML=`<div class="details-hero"><div class="details-orb">${initials(s.hero)}</div><div><span class="eyebrow">${escapeHTML((s.type||"SKIN").toUpperCase())}</span><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.hero)}</p><div class="details-tags">${(s.tags||[]).map(t=>`<span class="tag">#${escapeHTML(t)}</span>`).join("")}</div></div></div><div class="details-grid"><div class="detail-stat"><b>${s.likes||0}</b><span>Likes</span></div><div class="detail-stat"><b>${s.views||0}</b><span>Views</span></div><div class="detail-stat"><b>${rating}</b><span>Rating</span></div></div><div class="details-description"><p>${escapeHTML(shortDescription(s))}</p></div>${notice}<div class="details-actions">${action}<button class="ghost-btn" id="details-copy"><i class="fa-solid fa-link"></i> Copy ID</button></div>`;
  if(s.accessOnly)$("#details-access")?.addEventListener("click",e=>{e.preventDefault();openVipDownload(s);});if(s.premiumApprovalOnly)$("#details-premium")?.addEventListener("click",e=>{e.preventDefault();openPremiumDownload(s);});if(s.customOnly)$("#details-custom")?.addEventListener("click",()=>toast("Custom concept only."));
  $("#details-copy")?.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(s.id);toast("Skin ID copied.");}catch{toast(s.id);}});$("#details-modal").showModal();
}

function wireRealtime() {
  unsubscribers.forEach(fn => fn && fn());
  unsubscribers = [];

  // Performance guard: only keep a small live set of cards subscribed.
  // The rest stay fully usable but avoid hundreds of Firestore listeners.
  const liveIds = filteredData().slice(0, 12).map(s => s.id);

  liveIds.forEach(id => {
    const s = scriptData.find(x => x.id === id);
    if (!s) return;

    ensureDoc(id);

    try {
      const unsub = onSnapshot(
        doc(db, "scripts", id),
        snap => {
          if (snap.exists()) {
            cache[id] = snap.data();
            renderScripts();
          }
        }
      );

      unsubscribers.push(unsub);
    } catch (e) {
      console.warn("Realtime listener failed", e);
    }
  });
}

// =========================================================
// NAVIGATION
// =========================================================

$$("[data-tab]").forEach(btn =>
  btn.addEventListener("click", () => {
    $$(".nav-btn").forEach(b =>
      b.classList.remove("active")
    );

    btn.classList.add("active");

    $$(".tab-panel").forEach(p =>
      p.classList.remove("active")
    );

    $(`#tab-${btn.dataset.tab}`)
      .classList.add("active");
  })
);

// =========================================================
// SEARCH / FILTERS
// =========================================================

$("#search-input").addEventListener(
  "input",
  e => {
    state.query = e.target.value;
    renderScripts();
  }
);

$("#hero-filter").addEventListener(
  "change",
  e => {
    state.hero = e.target.value;
    renderScripts();
  }
);

$("#type-filter").addEventListener(
  "change",
  e => {
    state.type = e.target.value;
    renderScripts();
  }
);

$("#sort-filter").addEventListener(
  "change",
  e => {
    state.sort = e.target.value;
    renderScripts();
  }
);

$("#favorites-only").addEventListener(
  "click",
  e => {
    state.favoritesOnly =
      !state.favoritesOnly;

    e.currentTarget.classList.toggle(
      "active",
      state.favoritesOnly
    );

    renderScripts();
  }
);

$("#clear-filters").addEventListener(
  "click",
  () => {
    state.query = "";
    state.hero = "all";
    state.type = "all";
    state.sort = "featured";
    state.favoritesOnly = false;

    $("#search-input").value = "";
    $("#hero-filter").value = "all";
    $("#type-filter").value = "all";
    $("#sort-filter").value = "featured";

    $("#favorites-only")
      .classList.remove("active");

    renderScripts();
  }
);

const emptyReset = $("#empty-reset");

if (emptyReset) {
  emptyReset.addEventListener(
    "click",
    () => $("#clear-filters").click()
  );
}

// =========================================================
// VIEW
// =========================================================

$$(".view-btn").forEach(b =>
  b.addEventListener("click", () => {
    state.view = b.dataset.view;

    localStorage.setItem(
      "ron_view",
      state.view
    );

    renderScripts();
  })
);

// =========================================================
// BUTTONS
// =========================================================

$("#explore-btn").addEventListener(
  "click",
  () =>
    $("#tab-skins").scrollIntoView({
      behavior: state.reduceMotion
        ? "auto"
        : "smooth"
    })
);

$("#focus-search").addEventListener(
  "click",
  () => {
    $("#tab-skins").scrollIntoView({
      behavior: "smooth"
    });

    setTimeout(
      () => $("#search-input").focus(),
      250
    );
  }
);

$("#shuffle-btn").addEventListener(
  "click",
  () => {
    const s =
      scriptData[
        Math.floor(
          Math.random() *
            scriptData.length
        )
      ];

    openDetails(s.id);
  }
);

$("#command-explore")?.addEventListener("click",()=>$("#tab-skins")?.scrollIntoView({behavior:state.reduceMotion?"auto":"smooth"}));
$("#command-heroes")?.addEventListener("click",()=>{$('[data-tab="heroes"]')?.click();$("#tab-heroes")?.scrollIntoView({behavior:state.reduceMotion?"auto":"smooth"})});
$("#command-vip")?.addEventListener("click",()=>openVipCenter());
$("#command-settings")?.addEventListener("click",()=>$("#settings-modal")?.showModal());

// =========================================================
// V3.3 SETTINGS • UI STYLE • FULL SCREEN • LANGUAGE
// =========================================================
const UPDATE_FEATURES_V12 = ["RON Console dashboard", "Compact command deck", "Mobile command grid", "Desktop command bar", "Two-task creator gate", "30-second return check", "Quest mistake counter", "Quest lockout after repeated mistakes", "Persistent quest state", "Simple English gate copy", "No manual completion buttons", "Quest state recovery", "VIP approval flow", "Premium approval flow", "One-question approval", "Approval progress", "Creator approval sync", "Member ID persistence", "Protected download refresh", "Debug close control", "Debug error capture", "Build version sync", "100 micro-update matrix", "50+ functional UI themes", "New RON Console theme", "Searchable language picker", "Fullscreen control", "Motion control", "Compact cards", "Favorite persistence", "Hero Vault expansion", "70+ new Custom Lab concepts", "Default-skin safety labels", "Tier badges", "Fast filters", "Fast search", "Hero sorting", "Newest sorting", "Spotlight strip", "Quick actions", "Command shortcuts", "Touch-friendly controls", "Safe-area padding", "Responsive modals", "Responsive settings", "Reduced blur", "Reduced shadow work", "GPU-friendly transforms", "Firebase lazy boot", "Firebase offline fallback", "Local cache guard", "Stale build detection", "Script count sync", "Hero count sync", "Category count sync", "Runtime diagnostics", "Performance counters", "Release diagnostics", "Error toasts", "Stable dialogs", "Modal escape handling", "Fast tab switching", "Search focus shortcut", "Surprise script action", "Hero request slots", "Custom Lab tags", "Tier filtering", "VIP request logging", "Premium request logging", "Approval watcher", "Creator role guard", "Member-to-VIP action", "Remove-VIP action", "Access-state redraw", "Download-state redraw", "Safer external links", "Empty state improvements", "Accessible focus rings", "Keyboard navigation", "Mobile navigation", "Desktop navigation", "Theme persistence", "Language persistence", "Fullscreen persistence", "Settings persistence", "Debug persistence", "Library health view", "Gate health view", "Firebase health view", "UI health view", "100-link release milestone", "Versioned cache busting", "Cleaner release log", "New update cards", "Faster card paint", "Less startup work", "Deferred metrics", "Stable render order", "Consistent spacing", "Cleaner typography", "Reduced marketing copy", "New command cards", "Better hero panel", "Better stats cards", "Better quick bar", "Better mobile header", "Better mobile tabs", "Better script cards", "Better access cards", "Better VIP center", "Better creator panel", "Better tester panel"];
const REAL_LINK_TARGET = 100;
const REAL_LINK_CATALOG = (typeof scriptData !== "undefined" ? scriptData : [])
  .filter(s => /^https?:\/\/(?:sfile\.co|sfile\.mobi|www\.mediafire\.com|mediafire\.com)\//i.test(s?.url || ""))
  .slice(0, REAL_LINK_TARGET);

function renderUpdateFeatures(){
  const grid=$("#updates-grid");
  if(!grid)return;
  const linkCards=REAL_LINK_CATALOG.map((s,i)=>`<article class="update-card glass feature-v10"><span class="update-tag">LINK</span><h3>${String(i+1).padStart(3,"0")} • ${escapeHTML(s.title || "Script")}</h3><p>${escapeHTML(s.hero || "Script")} • ${escapeHTML(s.type || "Free")}</p><a class="primary-btn" href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open link</a></article>`).join("");
  grid.innerHTML=`<article class="update-card glass feature-v12 featured"><span class="update-tag">100</span><h3>100 real hosted links</h3><p>${REAL_LINK_CATALOG.length} real external script links are cataloged from the current library without removing your existing entries.</p></article>`+UPDATE_FEATURES_V12.filter(x=>!String(x).includes("micro-update")&&!String(x).includes("1M release")).map((x,i)=>`<article class="update-card glass feature-v10"><span class="update-tag">${String(i+1).padStart(3,"0")}</span><h3>${escapeHTML(x)}</h3><p>Included in RON SCRIPTS v12.1.0.</p></article>`).join("")+linkCards;
}

const UI_STYLES = [
  { id:"workbench",title:"Workbench",text:"Clean app-style layout",icon:"fa-solid fa-table-columns" },
  { id:"prism",title:"Prism OS",text:"New RON main interface",icon:"fa-solid fa-diamond" },
  { id:"hypernova",title:"Hypernova",text:"New RON main style",icon:"fa-solid fa-atom" },
  { id:"aurora",title:"Aurora Glass",text:"Soft glow + glass",icon:"fa-solid fa-wand-magic-sparkles" },
  { id:"cyber",title:"Cyber Grid",text:"Sharp grid + tech",icon:"fa-solid fa-microchip" },
  { id:"midnight",title:"Midnight",text:"Dark + calm",icon:"fa-solid fa-moon" },
  { id:"arcade",title:"Arcade",text:"Bright + playful",icon:"fa-solid fa-gamepad" },
  { id:"minimal",title:"Minimal",text:"Clean + quiet",icon:"fa-solid fa-circle-half-stroke" },
  { id:"nebula",title:"Nebula",text:"Deep space glow",icon:"fa-solid fa-star" },
  { id:"ocean",title:"Ocean Pulse",text:"Cool wave lights",icon:"fa-solid fa-water" },
  { id:"ember",title:"Ember Core",text:"Warm fire energy",icon:"fa-solid fa-fire" },
  { id:"matrix",title:"Matrix",text:"Terminal green",icon:"fa-solid fa-terminal" },
  { id:"violet",title:"Violet Ray",text:"Purple focus",icon:"fa-solid fa-gem" },
  { id:"crimson",title:"Crimson",text:"Red battle UI",icon:"fa-solid fa-bolt" },
  { id:"mint",title:"Mint Wave",text:"Fresh aqua",icon:"fa-solid fa-leaf" },
  { id:"solar",title:"Solar",text:"Bright gold",icon:"fa-solid fa-sun" },
  { id:"frost",title:"Frost",text:"Ice glass",icon:"fa-solid fa-snowflake" },
  { id:"royal",title:"Royal",text:"Premium blue",icon:"fa-solid fa-crown" },
  { id:"graphite",title:"Graphite",text:"Dark steel",icon:"fa-solid fa-layer-group" },
  { id:"plasma",title:"Plasma",text:"Electric color",icon:"fa-solid fa-burst" },
  { id:"hologram",title:"Hologram",text:"Glass spectrum",icon:"fa-solid fa-cube" },
  { id:"tokyo",title:"Tokyo",text:"Night city",icon:"fa-solid fa-city" },
  { id:"ghost",title:"Ghost",text:"Pale stealth",icon:"fa-solid fa-ghost" },
  { id:"toxic",title:"Toxic",text:"Acid neon",icon:"fa-solid fa-skull-crossbones" },
  { id:"sandstorm",title:"Sandstorm",text:"Dust + amber",icon:"fa-solid fa-wind" },
  { id:"deepsea",title:"Deep Sea",text:"Dark blue depth",icon:"fa-solid fa-fish" },
  { id:"sakura",title:"Sakura",text:"Soft pink night",icon:"fa-solid fa-seedling" },
  { id:"monochrome",title:"Monochrome",text:"Pure black + white",icon:"fa-solid fa-circle-half-stroke" }
];


const V12_UI_STYLES = [{"id": "ronconsole", "title": "RON Console", "text": "Compact creator dashboard", "icon": "fa-solid fa-terminal"}, {"id": "slate", "title": "Slate", "text": "Calm steel panels", "icon": "fa-solid fa-square"}, {"id": "paperdark", "title": "Paper Dark", "text": "Flat editorial layout", "icon": "fa-solid fa-file-lines"}, {"id": "signal", "title": "Signal", "text": "Status-first interface", "icon": "fa-solid fa-signal"}, {"id": "studio", "title": "Studio", "text": "Creator workspace", "icon": "fa-solid fa-pen-ruler"}, {"id": "terminal", "title": "Terminal", "text": "Dense tool layout", "icon": "fa-solid fa-terminal"}, {"id": "carbon", "title": "Carbon", "text": "Dark industrial", "icon": "fa-solid fa-cube"}, {"id": "skyline", "title": "Skyline", "text": "Cool city accent", "icon": "fa-solid fa-building"}, {"id": "mariner", "title": "Mariner", "text": "Deep blue utility", "icon": "fa-solid fa-anchor"}, {"id": "mintglass", "title": "Mint Glass", "text": "Fresh glass panels", "icon": "fa-solid fa-leaf"}, {"id": "copper", "title": "Copper", "text": "Warm metal accent", "icon": "fa-solid fa-gem"}, {"id": "royalnight", "title": "Royal Night", "text": "Dark premium blue", "icon": "fa-solid fa-crown"}, {"id": "lavender", "title": "Lavender", "text": "Soft violet app", "icon": "fa-solid fa-seedling"}, {"id": "iceblue", "title": "Ice Blue", "text": "Cool clean panels", "icon": "fa-solid fa-snowflake"}, {"id": "moss", "title": "Moss", "text": "Natural dark green", "icon": "fa-solid fa-tree"}, {"id": "amber", "title": "Amber", "text": "Warm alert accent", "icon": "fa-solid fa-triangle-exclamation"}, {"id": "ruby", "title": "Ruby", "text": "Dark red utility", "icon": "fa-solid fa-gem"}, {"id": "pearl", "title": "Pearl", "text": "Soft bright surfaces", "icon": "fa-solid fa-circle"}, {"id": "indigo", "title": "Indigo", "text": "Deep blue-violet", "icon": "fa-solid fa-droplet"}, {"id": "teal", "title": "Teal", "text": "Balanced aqua", "icon": "fa-solid fa-water"}, {"id": "lime", "title": "Lime", "text": "Sharp green accent", "icon": "fa-solid fa-bolt"}, {"id": "coral", "title": "Coral", "text": "Warm modern accent", "icon": "fa-solid fa-heart"}, {"id": "steel", "title": "Steel", "text": "Hard clean edges", "icon": "fa-solid fa-shield"}, {"id": "ink", "title": "Ink", "text": "Very dark minimal", "icon": "fa-solid fa-pen"}, {"id": "cobalt", "title": "Cobalt", "text": "Strong blue accent", "icon": "fa-solid fa-bolt"}, {"id": "orchid", "title": "Orchid", "text": "Purple clean UI", "icon": "fa-solid fa-flower"}, {"id": "sand", "title": "Sand", "text": "Warm neutral UI", "icon": "fa-solid fa-sun"}, {"id": "forest", "title": "Forest", "text": "Deep green UI", "icon": "fa-solid fa-tree"}, {"id": "nightshift", "title": "Night Shift", "text": "Low-light tool UI", "icon": "fa-solid fa-moon"}, {"id": "paper", "title": "Paper", "text": "Flat bright workspace", "icon": "fa-solid fa-note-sticky"}];
UI_STYLES.push(...V12_UI_STYLES);
const LANGUAGES = [
  ["en","English","English"],["fil","Filipino","Filipino"],["es","Español","Spanish"],["pt","Português","Portuguese"],
  ["id","Bahasa Indonesia","Indonesian"],["ms","Bahasa Melayu","Malay"],["vi","Tiếng Việt","Vietnamese"],["th","ไทย","Thai"],
  ["ja","日本語","Japanese"],["ko","한국어","Korean"],["zh","简体中文","Chinese"],["fr","Français","French"],
  ["de","Deutsch","German"],["it","Italiano","Italian"],["tr","Türkçe","Turkish"]
];

const TRANSLATIONS = {
  en: { settingsTitle:"Settings", settingsSubtitle:"Make RON SCRIPTS feel like your own.", display:"DISPLAY", displayTitle:"Look & feel", controls:"CONTROLS", controlsTitle:"Quick controls", fullscreen:"Full screen", fullscreenOff:"Off", fullscreenOn:"On", language:"Language", motion:"Motion", compact:"Compact cards", tools:"TOOLS", toolsTitle:"Creator tools", debug:"Tester / Debug", vipCenter:"VIP Center", vipCenterSub:"Membership & access", clearData:"Clear local settings", chooseLanguage:"Choose a language", languageSubtitle:"Search and pick a language.", searchLanguage:"Search language…" },
  fil: { settingsTitle:"Mga Setting", settingsSubtitle:"Ayusin ang RON SCRIPTS para sa iyo.", display:"DISPLAY", displayTitle:"Itsura", controls:"CONTROLS", controlsTitle:"Mabilis na kontrol", fullscreen:"Full screen", fullscreenOff:"Patay", fullscreenOn:"Bukas", language:"Wika", motion:"Galaw", compact:"Compact na cards", tools:"TOOLS", toolsTitle:"Creator tools", debug:"Tester / Debug", vipCenter:"VIP Center", vipCenterSub:"Membership at access", clearData:"Burahin ang local settings", chooseLanguage:"Pumili ng wika", languageSubtitle:"Maghanap at pumili ng wika.", searchLanguage:"Maghanap ng wika…" },
  es: { settingsTitle:"Ajustes", settingsSubtitle:"Haz que RON SCRIPTS sea tuyo.", display:"PANTALLA", displayTitle:"Aspecto", controls:"CONTROLES", controlsTitle:"Controles rápidos", fullscreen:"Pantalla completa", fullscreenOff:"Apagado", fullscreenOn:"Encendido", language:"Idioma", motion:"Movimiento", compact:"Tarjetas compactas", tools:"HERRAMIENTAS", toolsTitle:"Herramientas del creador", debug:"Prueba / Depuración", vipCenter:"Centro VIP", vipCenterSub:"Membresía y acceso", clearData:"Borrar ajustes locales", chooseLanguage:"Elegir idioma", languageSubtitle:"Busca y elige un idioma.", searchLanguage:"Buscar idioma…" },
  pt: { settingsTitle:"Configurações", settingsSubtitle:"Deixe o RON SCRIPTS do seu jeito.", display:"TELA", displayTitle:"Aparência", controls:"CONTROLES", controlsTitle:"Controles rápidos", fullscreen:"Tela cheia", fullscreenOff:"Desligado", fullscreenOn:"Ligado", language:"Idioma", motion:"Movimento", compact:"Cards compactos", tools:"FERRAMENTAS", toolsTitle:"Ferramentas do criador", debug:"Teste / Debug", vipCenter:"Central VIP", vipCenterSub:"Membro e acesso", clearData:"Limpar configurações locais", chooseLanguage:"Escolha um idioma", languageSubtitle:"Pesquise e escolha um idioma.", searchLanguage:"Pesquisar idioma…" },
  id: { settingsTitle:"Pengaturan", settingsSubtitle:"Atur RON SCRIPTS sesuai gayamu.", display:"TAMPILAN", displayTitle:"Gaya", controls:"KONTROL", controlsTitle:"Kontrol cepat", fullscreen:"Layar penuh", fullscreenOff:"Mati", fullscreenOn:"Nyala", language:"Bahasa", motion:"Gerakan", compact:"Kartu ringkas", tools:"ALAT", toolsTitle:"Alat kreator", debug:"Tester / Debug", vipCenter:"Pusat VIP", vipCenterSub:"Keanggotaan & akses", clearData:"Hapus pengaturan lokal", chooseLanguage:"Pilih bahasa", languageSubtitle:"Cari dan pilih bahasa.", searchLanguage:"Cari bahasa…" },
  ms: { settingsTitle:"Tetapan", settingsSubtitle:"Jadikan RON SCRIPTS ikut citarasa anda.", display:"PAPARAN", displayTitle:"Gaya", controls:"KAWALAN", controlsTitle:"Kawalan pantas", fullscreen:"Skrin penuh", fullscreenOff:"Tutup", fullscreenOn:"Buka", language:"Bahasa", motion:"Gerakan", compact:"Kad padat", tools:"ALAT", toolsTitle:"Alat pencipta", debug:"Ujian / Debug", vipCenter:"Pusat VIP", vipCenterSub:"Keahlian & akses", clearData:"Padam tetapan tempatan", chooseLanguage:"Pilih bahasa", languageSubtitle:"Cari dan pilih bahasa.", searchLanguage:"Cari bahasa…" },
  vi: { settingsTitle:"Cài đặt", settingsSubtitle:"Tùy chỉnh RON SCRIPTS theo ý bạn.", display:"HIỂN THỊ", displayTitle:"Giao diện", controls:"ĐIỀU KHIỂN", controlsTitle:"Điều khiển nhanh", fullscreen:"Toàn màn hình", fullscreenOff:"Tắt", fullscreenOn:"Bật", language:"Ngôn ngữ", motion:"Chuyển động", compact:"Thẻ gọn", tools:"CÔNG CỤ", toolsTitle:"Công cụ creator", debug:"Tester / Debug", vipCenter:"Trung tâm VIP", vipCenterSub:"Thành viên & quyền truy cập", clearData:"Xóa cài đặt cục bộ", chooseLanguage:"Chọn ngôn ngữ", languageSubtitle:"Tìm và chọn ngôn ngữ.", searchLanguage:"Tìm ngôn ngữ…" },
  th: { settingsTitle:"การตั้งค่า", settingsSubtitle:"ปรับ RON SCRIPTS ให้เป็นแบบของคุณ", display:"หน้าจอ", displayTitle:"รูปลักษณ์", controls:"การควบคุม", controlsTitle:"การควบคุมด่วน", fullscreen:"เต็มหน้าจอ", fullscreenOff:"ปิด", fullscreenOn:"เปิด", language:"ภาษา", motion:"การเคลื่อนไหว", compact:"การ์ดขนาดเล็ก", tools:"เครื่องมือ", toolsTitle:"เครื่องมือผู้สร้าง", debug:"ทดสอบ / ดีบัก", vipCenter:"ศูนย์ VIP", vipCenterSub:"สมาชิกและการเข้าถึง", clearData:"ล้างการตั้งค่า", chooseLanguage:"เลือกภาษา", languageSubtitle:"ค้นหาและเลือกภาษา", searchLanguage:"ค้นหาภาษา…" },
  ja: { settingsTitle:"設定", settingsSubtitle:"RON SCRIPTSを自分好みに変更します。", display:"表示", displayTitle:"見た目", controls:"操作", controlsTitle:"クイック操作", fullscreen:"全画面", fullscreenOff:"オフ", fullscreenOn:"オン", language:"言語", motion:"モーション", compact:"コンパクトカード", tools:"ツール", toolsTitle:"クリエイターツール", debug:"テスター / デバッグ", vipCenter:"VIPセンター", vipCenterSub:"メンバーシップとアクセス", clearData:"ローカル設定を削除", chooseLanguage:"言語を選択", languageSubtitle:"言語を検索して選択します。", searchLanguage:"言語を検索…" },
  ko: { settingsTitle:"설정", settingsSubtitle:"RON SCRIPTS를 원하는 방식으로 바꿉니다.", display:"화면", displayTitle:"스타일", controls:"제어", controlsTitle:"빠른 설정", fullscreen:"전체 화면", fullscreenOff:"끔", fullscreenOn:"켬", language:"언어", motion:"모션", compact:"컴팩트 카드", tools:"도구", toolsTitle:"크리에이터 도구", debug:"테스터 / 디버그", vipCenter:"VIP 센터", vipCenterSub:"멤버십 및 접근", clearData:"로컬 설정 삭제", chooseLanguage:"언어 선택", languageSubtitle:"언어를 검색하고 선택하세요.", searchLanguage:"언어 검색…" },
  zh: { settingsTitle:"设置", settingsSubtitle:"让 RON SCRIPTS 更适合你。", display:"显示", displayTitle:"外观", controls:"控制", controlsTitle:"快速控制", fullscreen:"全屏", fullscreenOff:"关闭", fullscreenOn:"开启", language:"语言", motion:"动效", compact:"紧凑卡片", tools:"工具", toolsTitle:"创作者工具", debug:"测试 / 调试", vipCenter:"VIP 中心", vipCenterSub:"会员与访问", clearData:"清除本地设置", chooseLanguage:"选择语言", languageSubtitle:"搜索并选择语言。", searchLanguage:"搜索语言…" },
  fr: { settingsTitle:"Réglages", settingsSubtitle:"Personnalisez RON SCRIPTS.", display:"AFFICHAGE", displayTitle:"Style", controls:"CONTRÔLES", controlsTitle:"Contrôles rapides", fullscreen:"Plein écran", fullscreenOff:"Désactivé", fullscreenOn:"Activé", language:"Langue", motion:"Mouvement", compact:"Cartes compactes", tools:"OUTILS", toolsTitle:"Outils du créateur", debug:"Test / Debug", vipCenter:"Centre VIP", vipCenterSub:"Membre et accès", clearData:"Effacer les réglages locaux", chooseLanguage:"Choisir une langue", languageSubtitle:"Recherchez et choisissez une langue.", searchLanguage:"Rechercher une langue…" },
  de: { settingsTitle:"Einstellungen", settingsSubtitle:"Passe RON SCRIPTS an dich an.", display:"ANZEIGE", displayTitle:"Design", controls:"STEUERUNG", controlsTitle:"Schnelle Optionen", fullscreen:"Vollbild", fullscreenOff:"Aus", fullscreenOn:"An", language:"Sprache", motion:"Bewegung", compact:"Kompakte Karten", tools:"WERKZEUGE", toolsTitle:"Creator-Tools", debug:"Tester / Debug", vipCenter:"VIP-Center", vipCenterSub:"Mitgliedschaft & Zugriff", clearData:"Lokale Einstellungen löschen", chooseLanguage:"Sprache wählen", languageSubtitle:"Sprache suchen und wählen.", searchLanguage:"Sprache suchen…" },
  it: { settingsTitle:"Impostazioni", settingsSubtitle:"Personalizza RON SCRIPTS.", display:"SCHERMO", displayTitle:"Stile", controls:"CONTROLLI", controlsTitle:"Controlli rapidi", fullscreen:"Schermo intero", fullscreenOff:"Spento", fullscreenOn:"Acceso", language:"Lingua", motion:"Movimento", compact:"Schede compatte", tools:"STRUMENTI", toolsTitle:"Strumenti creator", debug:"Tester / Debug", vipCenter:"Centro VIP", vipCenterSub:"Membro e accesso", clearData:"Cancella impostazioni locali", chooseLanguage:"Scegli lingua", languageSubtitle:"Cerca e scegli una lingua.", searchLanguage:"Cerca lingua…" },
  tr: { settingsTitle:"Ayarlar", settingsSubtitle:"RON SCRIPTS'i kendine göre ayarla.", display:"GÖRÜNÜM", displayTitle:"Stil", controls:"KONTROLLER", controlsTitle:"Hızlı kontroller", fullscreen:"Tam ekran", fullscreenOff:"Kapalı", fullscreenOn:"Açık", language:"Dil", motion:"Hareket", compact:"Kompakt kartlar", tools:"ARAÇLAR", toolsTitle:"Yaratıcı araçları", debug:"Tester / Debug", vipCenter:"VIP Merkezi", vipCenterSub:"Üyelik ve erişim", clearData:"Yerel ayarları temizle", chooseLanguage:"Dil seç", languageSubtitle:"Bir dil ara ve seç.", searchLanguage:"Dil ara…" }
};

function getLangPack() { return TRANSLATIONS[state.language] || TRANSLATIONS.en; }
function applyTranslations() {
  const pack = getLangPack();
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (pack[key]) el.textContent = pack[key];
  });
  $$('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (pack[key]) el.placeholder = pack[key];
  });
  const current = LANGUAGES.find(x => x[0] === state.language);
  const label = current ? current[1] : "English";
  const currentEl = $("#language-current");
  if (currentEl) currentEl.textContent = label;
  document.documentElement.lang = state.language;
}

const UI_STYLE_VARS={ronconsole:{bg:"#0d1117",panel:"#151b23",panel2:"#1b2330",line:"#2b3644",accent:"#72a7ff",accent2:"#a7c7ff",text:"#eef4fb",muted:"#8e9aaa"},slate:{bg:"#11151a",panel:"#1b222b",panel2:"#222b35",line:"#36414d",accent:"#9db2c8",accent2:"#d3dde7",text:"#f3f6f8",muted:"#9da8b4"},signal:{bg:"#0d1114",panel:"#13191e",panel2:"#192229",line:"#26353f",accent:"#46d98a",accent2:"#8ef0b9",text:"#eef9f3",muted:"#8ba19a"},studio:{bg:"#101216",panel:"#181b22",panel2:"#20242c",line:"#303642",accent:"#ff7a66",accent2:"#ffb3a7",text:"#f7f4f2",muted:"#a39d99"},terminal:{bg:"#07110b",panel:"#0d180f",panel2:"#112115",line:"#1d3a22",accent:"#62ef86",accent2:"#b0ffbf",text:"#e8ffe9",muted:"#7ca485"},carbon:{bg:"#0c0d0f",panel:"#17191c",panel2:"#1f2226",line:"#34383e",accent:"#d7dde4",accent2:"#ffffff",text:"#f4f6f8",muted:"#9099a3"},copper:{bg:"#120f0d",panel:"#1d1714",panel2:"#271e19",line:"#4a352a",accent:"#e39a5c",accent2:"#f3c49d",text:"#fff6ee",muted:"#a99485"},royalnight:{bg:"#0b0e16",panel:"#141a29",panel2:"#1b2336",line:"#303b57",accent:"#7d9cff",accent2:"#c2d0ff",text:"#eef2ff",muted:"#8f9bb6"},moss:{bg:"#0d120e",panel:"#151d16",panel2:"#1d281f",line:"#324336",accent:"#79b783",accent2:"#b4e6b8",text:"#eff8f0",muted:"#91a493"},ink:{bg:"#08090b",panel:"#111316",panel2:"#17191c",line:"#24282d",accent:"#e6eaf0",accent2:"#ffffff",text:"#f5f7fa",muted:"#858c95"}};
function applyUIStyle(styleId){const style=UI_STYLES.some(x=>x.id===styleId)?styleId:"ronconsole";state.uiStyle=style;localStorage.setItem("ron_ui_style",style);document.documentElement.dataset.uiStyle=style;document.body.classList.remove(...UI_STYLES.map(x=>`ui-${x.id}`));document.body.classList.add(`ui-${style}`);let v=UI_STYLE_VARS[style];if(!v){const i=Math.max(0,UI_STYLES.findIndex(x=>x.id===style));const hue=(i*47)%360;v={bg:`hsl(${hue} 20% 7%)`,panel:`hsl(${hue} 18% 11%)`,panel2:`hsl(${hue} 20% 15%)`,line:`hsl(${hue} 18% 24%)`,accent:`hsl(${hue} 85% 68%)`,accent2:`hsl(${(hue+25)%360} 85% 78%)`,text:"#f2f5f8",muted:"#95a0ad"};}Object.entries(v).forEach(([k,val])=>document.documentElement.style.setProperty(`--ron-${k}`,val));$$('.ui-style-card').forEach(card=>card.classList.toggle('active',card.dataset.style===style));}

function updateReleaseMeta(){$("#quick-build")?.replaceChildren(document.createTextNode(APP_META.version));$("#release-update-count")?.replaceChildren(document.createTextNode(MICRO_UPDATE_COUNT.toLocaleString()));}

function renderUIStyles() {
  const grid = $("#ui-style-grid");
  if (!grid) return;
  const swatches={prism:["#5eead4","#f472b6"],hypernova:["#60a5fa","#a78bfa"],aurora:["#22d3ee","#a78bfa"],cyber:["#00e5ff","#7c3aed"],midnight:["#8b5cf6","#ec4899"],arcade:["#f97316","#eab308"],minimal:["#dbeafe","#94a3b8"],nebula:["#c084fc","#60a5fa"],ocean:["#38bdf8","#2dd4bf"],ember:["#fb923c","#ef4444"],matrix:["#22c55e","#86efac"],violet:["#a78bfa","#f0abfc"],crimson:["#f43f5e","#fb7185"],mint:["#2dd4bf","#67e8f9"],solar:["#facc15","#fb923c"],frost:["#bae6fd","#93c5fd"],royal:["#60a5fa","#fbbf24"],graphite:["#94a3b8","#e2e8f0"],plasma:["#f472b6","#22d3ee"],hologram:["#67e8f9","#f0abfc"],tokyo:["#fb7185","#38bdf8"],ghost:["#e2e8f0","#cbd5e1"],toxic:["#a3e635","#22c55e"],sandstorm:["#fbbf24","#f97316"],deepsea:["#38bdf8","#1d4ed8"],sakura:["#f9a8d4","#c084fc"],monochrome:["#fff","#aaa"]};
  grid.innerHTML=UI_STYLES.map(style=>{const c=swatches[style.id]||["#60a5fa","#a78bfa"];return `<button type="button" class="ui-style-card ${state.uiStyle===style.id?"active":""}" data-style="${style.id}"><span class="ui-style-preview" style="background:linear-gradient(135deg,${c[0]},#07111d 52%,${c[1]});"><i class="${style.icon}"></i><b>RON</b><span style="background:${c[0]}"></span></span><span class="ui-style-copy"><b>${escapeHTML(style.title)}</b><small>${escapeHTML(style.text)}</small></span><span class="ui-style-check"><i class="fa-solid fa-check"></i></span></button>`;}).join("");
  $$(".ui-style-card", grid).forEach(card => card.addEventListener("click", () => applyUIStyle(card.dataset.style)));
}

function updateFullscreenStatus() {
  const status = $("#fullscreen-status");
  if (!status) return;
  status.textContent = document.fullscreenElement ? getLangPack().fullscreenOn : getLangPack().fullscreenOff;
}

async function toggleFullscreen() {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      toast("Full screen on.");
    } else {
      await document.exitFullscreen();
      toast("Full screen off.");
    }
  } catch (e) {
    toast("Full screen is not available in this browser.");
  }
  updateFullscreenStatus();
}

document.addEventListener("fullscreenchange", updateFullscreenStatus);

function renderLanguagePicker(filter = "") {
  const grid = $("#language-grid");
  if (!grid) return;
  const q = filter.trim().toLowerCase();
  const list = LANGUAGES.filter(lang => lang.join(" ").toLowerCase().includes(q));
  grid.innerHTML = list.map(([id,native,english]) => `
    <button class="language-card-v33 ${state.language === id ? "active" : ""}" type="button" data-language="${id}">
      <span class="lang-icon"><i class="fa-solid fa-language"></i></span>
      <span><b>${escapeHTML(native)}</b><small>${escapeHTML(english)}</small></span>
      <span class="lang-check"><i class="fa-solid fa-check"></i></span>
    </button>
  `).join("") || `<div class="language-empty"><i class="fa-solid fa-magnifying-glass"></i><b>No language found</b></div>`;
  $$(".language-card-v33", grid).forEach(card => card.addEventListener("click", () => {
    state.language = card.dataset.language;
    localStorage.setItem("ron_language", state.language);
    applyTranslations();
    updateFullscreenStatus();
    renderLanguagePicker($("#language-search")?.value || "");
    toast(`Language: ${LANGUAGES.find(x=>x[0]===state.language)?.[1] || "English"}`);
  }));
}

// =========================================================
// SETTINGS / THEME
// =========================================================

renderUpdateFeatures();
renderUIStyles();
applyUIStyle(state.uiStyle);
applyTranslations();
updateFullscreenStatus();

$("#theme-cycle")?.addEventListener("click", cycleTheme);
$("#open-settings")?.addEventListener("click", () => {
  renderUIStyles();
  applyTranslations();
  $("#settings-modal")?.showModal();
});
$("#fullscreen-toggle")?.addEventListener("click", toggleFullscreen);
$("#open-language-picker")?.addEventListener("click", () => {
  $("#language-modal")?.showModal();
  renderLanguagePicker();
  setTimeout(() => $("#language-search")?.focus(), 80);
});
$("#language-search")?.addEventListener("input", e => renderLanguagePicker(e.target.value));

$("#motion-toggle")?.addEventListener("click", () => {
  state.reduceMotion = !state.reduceMotion;
  localStorage.setItem("ron_motion", state.reduceMotion ? "off" : "on");
  const el = $("#motion-status");
  if (el) el.textContent = state.reduceMotion ? "Off" : "On";
  document.documentElement.classList.toggle("reduce-motion", state.reduceMotion);
});

$("#compact-toggle")?.addEventListener("click", () => {
  state.compact = !state.compact;
  localStorage.setItem("ron_compact", state.compact ? "on" : "off");
  const el = $("#compact-status");
  if (el) el.textContent = state.compact ? "On" : "Off";
  document.documentElement.classList.toggle("compact-mode", state.compact);
  renderScripts();
});

$("#debug-toggle")?.addEventListener("click", () => {
  state.debug = !state.debug;
  localStorage.setItem("ron_debug", state.debug ? "1" : "0");
  const el = $("#debug-status");
  if (el) el.textContent = state.debug ? "On" : "Off";
  if (typeof updateDebugPanel === "function") updateDebugPanel("debug toggled");
});

$("#clear-local")?.addEventListener("click", () => {
  const keep = new Set(["ron_vip_id", "ron_vip_active", "ron_gate_complete_v3_3"]);
  Object.keys(localStorage).filter(k => k.startsWith("ron_") && !keep.has(k)).forEach(k => localStorage.removeItem(k));
  toast("Local settings cleared. Reloading…");
  setTimeout(() => location.reload(), 450);
});

// =========================================================
// PREMIUM APPROVAL
// =========================================================
$("#approval-next")?.addEventListener("click",submitApprovalStep);
$("#approval-back")?.addEventListener("click",()=>{const f=$("#approval-form");if(!f)return;f.dataset.step=String(Math.max(0,Number(f.dataset.step||0)-1));renderApprovalStep();});
$("#approval-retry")?.addEventListener("click",()=>{const id=$("#approval-form")?.dataset.skinId;const s=scriptData.find(x=>x.id===id);if(s)openApprovalModal(s);});

// =========================================================
// CLOSE MODALS
// =========================================================

$$("[data-close]").forEach(btn =>
  btn.addEventListener(
    "click",
    () =>
      $(`#${btn.dataset.close}`).close()
  )
);

// =========================================================
// PREMIUM UI / QUICK FILTERS
// =========================================================
function setQuickFilter(value) {
  $$(".quick-chip").forEach(btn => btn.classList.toggle("active", btn.dataset.quick === value));
  if (value === "all") { state.type = "all"; } else if (["VIP","Crossover","Premium","Custom"].includes(value)) { state.type = value === "VIP" ? "Access" : value; }
  if ($("#type-filter")) $("#type-filter").value = state.type;
  renderScripts();
}

$$(".quick-chip").forEach(btn => btn.addEventListener("click", () => setQuickFilter(btn.dataset.quick)));

const customLabBtn = $("#custom-lab-btn");
if (customLabBtn) customLabBtn.addEventListener("click", () => {
  const tab = $("[data-tab=custom]");
  if (tab) tab.click();
  $("#tab-custom")?.scrollIntoView({ behavior: state.reduceMotion ? "auto" : "smooth" });
});

setInterval(() => {
  const el = $("#live-clock");
  if (el) el.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}, 1000);

// =========================================================
// VIP + DEBUG CONTROL ROOM
// =========================================================
const vipNavBtn = $(`[data-tab="vip"]`);
if (vipNavBtn) vipNavBtn.addEventListener("click", () => updateVipUI());
const vipOpenBtn = $("#open-vip-center");
if (vipOpenBtn) vipOpenBtn.addEventListener("click", () => openVipCenter());
const vipCopyBtn = $("#vip-copy-id");
if (vipCopyBtn) vipCopyBtn.addEventListener("click", async () => { try { await navigator.clipboard.writeText(getVipId()); toast("VIP Member ID copied."); } catch { toast(getVipId()); } });
const vipRequestBtn = $("#vip-request-btn");
if (vipRequestBtn) vipRequestBtn.addEventListener("click", requestVip);
const vipRefreshBtn = $("#vip-refresh-btn");
if (vipRefreshBtn) vipRefreshBtn.addEventListener("click", async () => { await refreshVipStatus(); toast(state.vipActive ? "VIP access is active." : "VIP access is not active yet."); });
const vipCopyBtn2 = $("#vip-copy-id");
if (vipCopyBtn2) vipCopyBtn2.addEventListener("click", async () => { try { await navigator.clipboard.writeText(getVipId()); toast("VIP Member ID copied."); } catch { toast(getVipId()); } });
const vipRequestBtn2 = $("#vip-request-btn-2");
if (vipRequestBtn2) vipRequestBtn2.addEventListener("click", requestVip);
const vipRefreshBtn2 = $("#vip-refresh-btn-2");
if (vipRefreshBtn2) vipRefreshBtn2.addEventListener("click", async () => { await refreshVipStatus(); updateVipModalUI(); toast(state.vipActive ? "VIP access is active." : "VIP access is not active yet."); });
const creatorLogin = $("#creator-login");
if (creatorLogin) creatorLogin.addEventListener("click", creatorSignIn);
const creatorLogout = $("#creator-logout");
if (creatorLogout) creatorLogout.addEventListener("click", creatorSignOut);
const grantVipBtn = $("#creator-grant-vip");
if (grantVipBtn) grantVipBtn.addEventListener("click", () => creatorSetVip(true));
const removeVipBtn = $("#creator-remove-vip");
if (removeVipBtn) removeVipBtn.addEventListener("click", () => creatorSetVip(false));

const debugClose = $("#debug-close");
if (debugClose) debugClose.addEventListener("click", closeDebugPanel);

function forceCloseDebug() {
  closeDebugPanel();
  const panel = document.getElementById("debug-panel");
  if (panel) {
    panel.hidden = true;
    panel.style.display = "none";
  }
}
document.addEventListener("click", e => {
  const btn = e.target.closest("#debug-close, .debug-close");
  if (btn) { e.preventDefault(); e.stopImmediatePropagation(); forceCloseDebug(); }
}, true);
const debugToggle = $("#debug-toggle");
if (debugToggle) debugToggle.addEventListener("click", () => { state.debug = !state.debug; localStorage.setItem("ron_debug", state.debug ? "1" : "0"); debugToggle.textContent = state.debug ? "On" : "Off"; updateDebugPanel("toggle"); });
const debugNavBtn = $(`[data-tab="debug"]`);
if (debugNavBtn) debugNavBtn.addEventListener("click", () => { state.debug = true; localStorage.setItem("ron_debug", "1"); updateDebugPanel("debug tab"); });

// =========================================================
// INIT
// =========================================================


// =========================================================
// RANDOM REAL-TIME QUEST GATE (no CAPTCHA)
// =========================================================
const GATE_STORAGE_KEY = "ron_gate_complete_v12";
const QUEST_MIN_SECONDS = 30;
const QUEST_COUNT = 2;
const QUEST_MISTAKE_LIMIT = 3;
const QUEST_LOCKOUT_SECONDS = 60;

const QUEST_POOL = [
  { id: "yt_sub", platform: "YouTube", title: "Subscribe on YouTube", subtitle: "@NCRONNMLBB", icon: "fa-brands fa-youtube", url: "https://www.youtube.com/@NCRONNMLBB?sub_confirmation=1" },
  { id: "tt_follow", platform: "TikTok", title: "Follow on TikTok", subtitle: "@ranzee.ron", icon: "fa-brands fa-tiktok", url: "https://www.tiktok.com/@ranzee.ron" }
];

const questState = {
  tasks: [],
  completed: new Set(),
  openStarted: new Map(),
  returnSeen: new Set(),
  currentTask: null,
  timers: new Map()
};

function gateComplete() {
  return localStorage.getItem(GATE_STORAGE_KEY) === "1";
}

function shuffle(items) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickQuestTasks() {
  return shuffle(QUEST_POOL).slice(0, QUEST_COUNT);
}

function renderQuest() {
  const list = $("#quest-list");
  if (!list) return;
  list.innerHTML = questState.tasks.map(task => `
    <article class="quest-item" data-quest-id="${task.id}">
      <div class="quest-item-icon"><i class="${task.icon}"></i></div>
      <div class="quest-item-main">
        <strong>${escapeHTML(task.title)}</strong>
        <span>${escapeHTML(task.subtitle)}</span>
        <small class="quest-item-state" data-state="${task.id}">Open task</small>
      </div>
      <button class="quest-open quest-open-v33" data-quest-open="${task.id}" type="button" aria-label="Open quest">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </article>
  `).join("");

  $$('[data-quest-open]', list).forEach(button => {
    button.addEventListener("click", () => openQuestTask(button.dataset.questOpen));
  });
}

function questProgress() {
  const done = questState.completed.size;
  const percent = Math.round((done / QUEST_COUNT) * 100);
  const fill = $("#quest-progress-fill");
  const text = $("#quest-progress-text");
  const intro = $("#quest-intro");
  const next = $("#gate-next-1");
  if (fill) fill.style.width = `${percent}%`;
  if (text) text.textContent = `${done} / ${QUEST_COUNT}`;
  if (intro) intro.textContent = done === QUEST_COUNT ? "All 3 tasks are done. You can enter." : "Open each task, then come back.";
  if (next) next.disabled = done !== QUEST_COUNT;
}

function setQuestStateText(id, text, stateClass = "") {
  const stateEl = $(`[data-state="${id}"]`);
  const item = $(`[data-quest-id="${id}"]`);
  if (stateEl) stateEl.textContent = text;
  if (item) item.classList.toggle("checking", stateClass === "checking");
  if (item) item.classList.toggle("complete", stateClass === "complete");
}

function setQuestButton(id, mode, seconds = 0) {
  const button = $(`[data-quest-open="${id}"]`);
  if (!button) return;
  button.className = `quest-open quest-open-v33 ${mode}`;
  button.disabled = mode === "complete";
  if (mode === "complete") {
    button.innerHTML = '<i class="fa-solid fa-check"></i>';
    button.title = "Done";
  } else if (mode === "timer") {
    button.innerHTML = `<span class="quest-countdown">${seconds}</span>`;
    button.title = `${seconds}s check`;
  } else {
    button.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
    button.title = "Open";
  }
}

function stopQuestTimer(id) {
  const timer = questState.timers.get(id);
  if (timer) clearInterval(timer);
  questState.timers.delete(id);
}

function completeTask(id) {
  if (questState.completed.has(id)) return;
  stopQuestTimer(id);
  questState.completed.add(id);
  setQuestStateText(id, "Done", "complete");
  setQuestButton(id, "complete");
  const timerText = $("#quest-timer-text");
  if (timerText) timerText.textContent = "Done";
  questProgress();
}

function startReturnTimer(id) {
  const started = questState.openStarted.get(id) || Date.now();
  const deadline = started + QUEST_MIN_SECONDS * 1000;
  questState.returnSeen.add(id);
  stopQuestTimer(id);

  const tick = () => {
    const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    if (remaining <= 0) {
      completeTask(id);
      return;
    }
    setQuestButton(id, "timer", remaining);
    setQuestStateText(id, `Checking • ${remaining}s left`, "checking");
    const timerText = $("#quest-timer-text");
    if (timerText) timerText.textContent = `Checking: ${remaining}s`;
  };

  tick();
  questState.timers.set(id, setInterval(tick, 250));
}

function onQuestReturn() {
  const id = questState.currentTask;
  if (!id || questState.completed.has(id)) return;
  if (!questState.returnSeen.has(id)) {
    // The first focus/visibility return starts the 30 second check.
    startReturnTimer(id);
  }
}

function openQuestTask(id) {
  const task = questState.tasks.find(t => t.id === id);
  if (!task || questState.completed.has(id)) return;

  questState.currentTask = id;
  const now = Date.now();
  questState.openStarted.set(id, now);
  questState.returnSeen.delete(id);
  stopQuestTimer(id);
  setQuestStateText(id, "Return here when you are done", "checking");
  setQuestButton(id, "timer", 30);
  const timerText = $("#quest-timer-text");
  if (timerText) timerText.textContent = "Waiting for you to return";

  window.open(task.url, "_blank", "noopener,noreferrer");
}

function initGateListeners() {
  window.addEventListener("focus", onQuestReturn);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) onQuestReturn();
  });
}

function setGateStep(step) {
  $$(".gate-step").forEach(card => {
    const n = Number(card.dataset.stepCard);
    card.classList.toggle("active", n === step);
    card.classList.toggle("done", n < step);
  });
}

window.addEventListener("ron:gatecomplete", () => { try { bootMainUI(); } catch(e) { console.warn("Main UI boot failed", e); } });

function bootMainUI() {
  const steps = [
    ["filters", fillFilters],
    ["controls", hydrateControls],
    ["counters", updateCounters],
    ["scripts", renderScripts],
    ["heroes", renderHeroes],
    ["featured", () => { if (typeof renderFeatured === "function") renderFeatured(); }],
    ["custom lab", () => { if (typeof renderCustomLab === "function") renderCustomLab(); }],
    ["translations", applyTranslations],
    ["style", () => applyUIStyle(state.uiStyle)],
    ["fullscreen", updateFullscreenStatus]
  ];

  for (const [name, fn] of steps) {
    try { fn(); } catch (e) {
      console.error(`Boot step failed: ${name}`, e);
      state.lastError = e?.stack || String(e);
    }
  }

  const summary = $("#result-summary");
  if (summary && summary.textContent === "Loading your library…") {
    summary.textContent = `Showing ${scriptData.length} skin scripts`;
  }
}

function unlockGate() {
  if (questState.completed.size !== QUEST_COUNT) return;
  localStorage.setItem(GATE_STORAGE_KEY, "1");
  document.body.classList.remove("gate-locked");
  document.body.classList.add("gate-open");
  const gate = $("#access-gate");
  if (gate) gate.remove();
  bootMainUI();
}

function bootGate() {
  const next = $("#gate-next-1");
  const reset = $("#gate-reset");

  questState.tasks = pickQuestTasks();
  questState.completed.clear();
  questState.openStarted.clear();
  questState.returnSeen.clear();
  questState.currentTask = null;
  questState.timers.forEach(t => clearInterval(t));
  questState.timers.clear();

  renderQuest();
  questProgress();
  initGateListeners();

  next?.addEventListener("click", unlockGate);
  reset?.addEventListener("click", () => {
    localStorage.removeItem(GATE_STORAGE_KEY);
    location.reload();
  });
}


function ensureGatePainted() {
  const list = document.querySelector("#quest-list");
  if (!list || list.children.length > 0) return;
  try {
    questState.tasks = pickQuestTasks();
    renderQuest();
    questProgress();
  } catch (error) {
    console.warn("Quest fallback failed", error);
  }
}

// v12.2: quest gate disabled. Main UI opens directly.

function bootUI() {
  // v12.2: direct entry. No quest gate.
  try { bootMainUI(); } catch (e) { console.warn("Main UI boot failed", e); }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootUI, { once: true });
} else {
  bootUI();
}

// Direct-entry build: main UI loads immediately. Firebase is optional and lazy.
// Load Firebase after the UI is already visible. The site works in local mode
// even when the Firebase CDN is unavailable.
bootFirebase().then(async ok => {
  if (!ok) {
    toast("Offline mode: library loaded without cloud sync.");
    return;
  }

  if (auth && getRedirectResult) {
    try { await getRedirectResult(auth); } catch (e) { console.warn("Google redirect result failed", e); }
  }
  wireCreatorAuth();
  await refreshVipStatus();
  wireRealtime();
});

function wireCreatorAuth() {
  if (!auth || !onAuthStateChanged) return;
  onAuthStateChanged(auth, async user => {
    state.user = user || null;
    await checkCreatorAccess();
    await refreshVipStatus();
    updateCreatorUI();
    try { updateDebugPanel("auth updated"); } catch {}
  });
}


window.addEventListener("error", event => {
  state.lastError = event?.error?.stack || event?.message || "Unknown error";
  updateDebugPanel("runtime error");
});

window.addEventListener("unhandledrejection", event => {
  state.lastError = String(event?.reason?.stack || event?.reason || "Unhandled promise rejection");
  updateDebugPanel("promise error");
});

// v10.0 bulletproof debug close handler
document.addEventListener("click", e => {
  const closeBtn = e.target.closest("#debug-close");
  if (!closeBtn) return;
  e.preventDefault();
  e.stopPropagation();
  state.debug = false;
  localStorage.setItem("ron_debug", "0");
  const panel = document.getElementById("debug-panel");
  if (panel) panel.hidden = true;
  const toggle = document.getElementById("debug-toggle");
  if (toggle) toggle.textContent = "Off";
  document.body.classList.remove("debug-open");
});
