/**
 * EXECUTIVE PANELS DATA
 * =====================
 * To add a new panel year, simply add a new object to the PANELS array.
 * Images go in a folder named after the `folder` field (e.g. "panel26/").
 * Image files should be named exactly as the `position` field + .jpg or .png.
 *
 * Field reference:
 *   label    — Button text shown in the tab bar (e.g. "2025-2026")
 *   folder   — Folder containing this panel's images (relative to site root)
 *   members  — Array of executive members for this panel
 *
 * Member field reference:
 *   name       — Full name (shown on card and modal)
 *   position   — Role title (shown on card and modal; also used as image filename)
 *   department — Sub-department label (optional, shown smaller below position)
 *   bio        — Short description shown in the modal
 *   image      — Image filename override (optional; defaults to "<position>.jpg")
 *   social     — Object with optional keys: facebook, instagram, telegram, linkedin
 */

window.PANELS = [
  //--2025-2026────────────────────────────────────────────────────────────
    {
    "label": "2025-2026",
    "folder": "images/panel-26",
    "members": [
      {
        "name": "Fahim Faisal Arnob",
        "position": "General Secretary",
        "department": "",
        "bio": "Dedicated leader of the club.",
        "image": "gs.jpg",
        "social": {whatsapp:"https://wa.me/8801568171970", facebook:"https://www.facebook.com/thebrandisArnob", email:"mailto:arnob@ndscbd.net"}
      },
      {
        "name": "Md. Ridwanul alam Bhuiyan",
        "position": "Associate General Secretary",
        "department": "",
        "bio": "Dedicated leader of the club.",
        "image": "Ridwan.jpg",
        "social": {whatsapp:"https://wa.me/8801770439038"}
      },
      {
        "name": "Sheikh Musfikur Rahman",
        "position": "President",
        "department": "Administration",
        "bio": "Dedicated leader of the club.",
        "image": "sk_mushfik.png",
        "social": {
          facebook:"https://www.facebook.com/skmusfik.rahman?mibextid=ZbWKwL",
          whatsapp:"https://wa.me/8801752745685"
        }
      },
      {
        "name": "F.M.Tamim Hasan",
        "position": "President",
        "department": "Publication",
        "bio": "Dedicated leader of the club.",
        "image": "Tamim_Hasan.jpg",
        "social": {whatsapp:"https://wa.me/8801932521712"}
      },
      {
        "name": "Md. Nafisur Rahman",
        "position": "President",
        "department": "Project",
        "bio": "Dedicated leader of the club.",
        "image": "Nafisur_Rahman_Sohail.jpg",
        "social": {whatsapp:"https://wa.me/8801307276585"}
        },
      
      {
        "name": "Sadit Hossain Safa",
        "position": "President",
        "department": "LWS",
        "bio": "Dedicated leader of the club.",
        "image": "Sadit_Hossain_Safa.jpg",
        "social": {whatsapp:"https://wa.me/8801310136826"}
      },
      {
        "name": "Arafa Al Nuhash",
        "position": "President",
        "department": "ICT",
        "bio": "Dedicated leader of the club.",
        "image": "Nuhash.jpg",
        "social": {whatsapp:"https://wa.me/8801919625644"}
      },
      {
        "name": "Raik Sadik",
        "position": "President",
        "department": "Quiz",
        "bio": "Dedicated leader of the club.",
        "image": "raik_sadik.jpeg",
        "social": {whatsapp:"https://wa.me/8801841075575"}
      },
      {
        "name": "Sameul Momenine",
        "position": "Senior Vice President",
        "department": "",
        "bio": "Dedicated leader of the club.",
        "image": "sameul_momenine.jpeg",
        "social": {whatsapp:"https://wa.me/8801739622448"}
      },
      {
        "name": "Aminul Islam Shanto",
        "position": "Vice President",
        "department": "Project",
        "bio": "Dedicated leader of the club.",
        "image": "Aminul_Islam_Shanto.jpg",
        "social": {whatsapp:"https://wa.me/8801798309973"}
      },
      {
        "name": "Jaber Al Hasan",
        "position": "Vice President",
        "department": "LWS",
        "bio": "Dedicated leader of the club.",
        "image": "Jaber_Al_Hasan.jpg",
        "social": {whatsapp:"https://wa.me/8801844216547"}
      },
      {
        "name": "Md. Fuad Hassan",
        "position": "Vice President",
        "department": "Publication",
        "bio": "Dedicated leader of the club.",
        "image": "fuad.jpeg",
        "social": {whatsapp:"https://wa.me/8801759361704"}
      },
      {
        "name": "Akhier Ahmed Joy",
        "position": "Vice President",
        "department": "ICT",
        "bio": "Dedicated leader of the club.",
        "image": "Akhier_Ahmed_Joy_.jpeg",
        "social": {whatsapp:"https://wa.me/8801532519568"}
      },
      {
        "name": "B.M. Abidul Momanin",
        "position": "Vice President",
        "department": "Quiz",
        "bio": "Dedicated leader of the club.",
        "image": "GS.png",
        "social": {whatsapp:"https://wa.me/8801622001562"}
      },
      {
        "name": "Abdullah Al Mahmud",
        "position": "Assistant General Secretary",
        "department": "R&D",
        "bio": "Dedicated leader of the club.",
        "image": "Abdullah_Al_Mahmud_Emon.jpg",
        "social": {whatsapp:"https://wa.me/8801971313169"}
      },
      {
        "name": "Muhtasim Muhib",
        "position": "Assistant General Secretary",
        "department": "R&D",
        "bio": "Dedicated leader of the club.",
        "image": "Muhib.jpg",
        "social": {whatsapp:"https://wa.me/8801890262333"}
      },
      {
        "name": "Zulfik Amin Zarif",
        "position": "Assistant General Secretary",
        "department": "R&D",
        "bio": "Dedicated leader of the club.",
        "image": "Zulfik_Amin_Zarif_.jpeg",
        "social": {whatsapp:"https://wa.me/8801849415131"}
      },
      {
        "name": "Md.Yeamin Hossain",
        "position": "Organizing Secretary",
        "department": "",
        "bio": "Dedicated leader of the club.",
        "image": "Yeamin.jpg",
        "social": {whatsapp:"https://wa.me/8801536207663"}
      },
      {
        "name": "Tanvir Hasan",
        "position": "Project Secretary",
        "department": "",
        "bio": "Dedicated leader of the club.",
        "image": "tanvir.jpeg",
        "social": {whatsapp:"https://wa.me/8801922508147"}
      },
      {
        "name": "Iftakhar Mahmud",
        "position": "Project Secretary",
        "department": "",
        "bio": "Dedicated leader of the club.",
        "image": "Iftekhar_Mahmud_Ornob.jpg",
        "social": {whatsapp:"https://wa.me/8801703767055"}
      },
      {
        "name": "Hasib sikder",
        "position": "Project Secretary",
        "department": "",
        "bio": "Dedicated leader of the club.",
        "image": "Hasib.jpg",
        "social": {whatsapp:"https://wa.me/8801954535403"}
      },
      {
        "name": "Md. Julkar Nayeem",
        "position": "ICT Secretary",
        "department": "",
        "bio": "Dedicated leader of the club.",
        "image": "Md_Julkar_Nayeem.png",
        "social": {whatsapp:"https://wa.me/8801712249456"}
      },
      {
        "name": "Shahriar Momin",
        "position": "Office Secretary",
        "department": "",
        "bio": "Dedicated leader of the club.",
        "image": "shahriar.jpeg",
        "social": {whatsapp:"https://wa.me/8801848677213"}
      },
      {
        "name": "Md. Najib Mahmud",
        "position": "Library Secretary",
        "department": "",
        "bio": "Dedicated leader of the club.",
        "image": "Najib_Mahmud_Nabil.jpg",
        "social": {whatsapp:"https://wa.me/8801918470995"}
      },
      {
        "name": "Samiul Al Abir",
        "position": "Workshop Secretary",
        "department": "",
        "bio": "Dedicated leader of the club.",
        "image": "Samiul_Al_Abir.jpg",
        "social": {whatsapp:"https://wa.me/8801540524763"}
      },
      {
        "name": "Alamin Kawser Abeg",
        "position": "Seminar Secretary",
        "department": "",
        "bio": "Dedicated leader of the club.",
        "image": "Abeg.jpg",
        "social": {whatsapp:"https://wa.me/8801826002285"}
      },
      {
        "name": "Sadnan Samiun Rupom",
        "position": "Tour & Communication Secretary",
        "department": "",
        "bio": "Dedicated leader of the club.",
        "image": "sadman_samiun_rupom.jpeg",
        "social": {whatsapp:"https://wa.me/8801976742577"}
      },
      {
        "name": "Mahbubur Rahman Lin",
        "position": "Entertainment secretary",
        "department": "",
        "bio": "Dedicated leader of the club.",
        "image": "Mahbubur_Rahman_Lin.jpeg",
        "social": {whatsapp:"https://wa.me/88"}
      }
    ]
  },
  // ── 2024-2025 ─────────────────────────────────────────────────────────────
  {
    label: "2024-2025",
    folder: "images/panel-25",
    members: [
      {
        name: "Sreejoy Roy Ankon",
        position: "General Secretary",
        bio: "Dedicated leader of the club.",
        image: "gs.jpg",
        social: {
          facebook: "https://www.facebook.com/sreejoy.roy.ankon",
          instagram: "https://www.instagram.com/__.sreejoy.__13?igsh=MXNzemNxNzE4eG9nOA==",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Aditta Shahriar Khan",
        position: "Associate General Secretary",
        department: "Administration",
        bio: "Dedicated leader of the club.",
        image: "panel25/ags.jpg",
        social: {
          facebook: "https://www.facebook.com/share/1C9W3E7qVW/",
          instagram: "https://www.instagram.com/_.adi.tta._?igsh=OG15enR1MWJwNDhj",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "MD. Afnan Mustafa",
        position: "President",
        department: "Administration",
        bio: "Dedicated leader of the club.",
        image: "p_adm.jpg",
        social: {
          facebook: "https://www.facebook.com/share/1DzBDhNQYz/",
          instagram: "https://www.instagram.com/afnan_6575?igsh=MWZjZHd4bmpqYWhsdQ==",
          telegram: "https://t.me",
          linkedin: "https://www.linkedin.com/in/md-afnan-mustafa-309042325"
        }
      },
      {
        name: "Ashraful Islam",
        position: "President",
        department: "Publication",
        bio: "Dedicated leader of the club.",
        image: "p_pub.jpg",
        social: {
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Saqlain Mustak Borshon",
        position: "President",
        department: "Project",
        bio: "Dedicated leader of the club.",
        image: "p_prj.jpg",
        social: {
          facebook: "https://www.facebook.com/saqlain.mustak.borshon",
          instagram: "https://www.instagram.com/p/DUifQTaEzbnPF26h1PifjSsHyEvEy617IpqQd40/",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Muhammad Fateen Zaman",
        position: "President",
        department: "L.W.S.",
        bio: "Dedicated leader of the club.",
        image: "p_lws.jpg",
        social: {
          facebook: "https://www.facebook.com/share/1HhmPxhzS2/",
          instagram: "https://www.instagram.com/fateen__zaman?igsh=MW1zeTl4M3h3ODd0Zg==",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Shantanu Paul",
        position: "President",
        department: "ICT",
        bio: "Dedicated leader of the club.",
        image: "p_ict.jpg",
        social: {
          facebook: "https://www.facebook.com/shantanu.paul.33449138",
          instagram: "https://instagram.com",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Omar Bin Arif",
        position: "President",
        department: "QUIZ",
        bio: "Dedicated leader of the club.",
        image: "p_quiz.jpg",
        social: {
          facebook: "https://www.facebook.com/shantanu.paul.33449138",
          instagram: "https://instagram.com",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Md. Mehedi Hasan Sweet",
        position: "Senior Vice President",
        bio: "Dedicated leader of the club.",
        image: "svp.jpg",
        social: {
          facebook: "https://www.facebook.com/mehedi.hasan.190907",
          instagram: "https://www.instagram.com/mehedii.hsn05/",
          telegram: "https://t.me",
          linkedin: "https://www.linkedin.com/in/md-mehedi-hasan-sweet-070a50372/"
        }
      },
      {
        name: "Surmoy Sen",
        position: "Vice President",
        department: "Project",
        bio: "Dedicated leader of the club.",
        image: "vp_prj.jpg",
        social: {
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Kyaw Mun Zaw Jimi",
        position: "Vice President",
        department: "L.W.S.",
        bio: "Dedicated leader of the club.",
        image: "VP-LWS.png",
        social: {
          facebook: "https://www.facebook.com/share/1ZaCqu8Jj4/",
          instagram: "https://www.instagram.com/kmzjimi?igsh=MXQ0cjhvOWxhbmU5OA==",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Nowshad Rhythm Mazumder",
        position: "Vice President",
        department: "Publication",
        bio: "Dedicated leader of the club.",
        image: "VP-PUBLICAITON.png",
        social: {
          facebook: "https://www.facebook.com/share/17WdPLezMm/",
          instagram: "https://www.instagram.com/rhythm_syirex_02?igsh=MXhia2V6cWVxbzQ3",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Sheikh Shadab Noor",
        position: "Vice President",
        department: "ICT",
        bio: "Dedicated leader of the club.",
        image: "panel25/vp_ict.jpg",
        social: {
          facebook: "https://www.facebook.com/sheikhshadab.noor.9",
          instagram: "https://www.instagram.com/sheikhshadabnoor?igsh=NHRhOGw2eWtldmlq",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Niloy Paul",
        position: "Assistant General Secretary",
        department: "R&D",
        bio: "Dedicated leader of the club.",
        image: "panel25/ags_rd.jpg",
        social: {
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Abhishek Chowdhury Argho",
        position: "Secretary",
        department: "Project",
        bio: "Dedicated leader of the club.",
        image: "panel25/sec_prj.jpg",
        social: {
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Aritra Chakraborty Argha",
        position: "Organizing Secretary",
        bio: "Dedicated professional.",
        image: "panel25/s_org.jpg",
        social: {
          facebook: "https://www.facebook.com/aritra.chakraborty.731135",
          instagram: "https://www.instagram.com/_.aritra._un/",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Aninda Bhowmik",
        position: "Library Secretary",
        bio: "Dedicated professional.",
        image: "LIBRARY.png",
        social: {
          facebook: "https://www.facebook.com/share/1AkraURW1L/",
          instagram: "https://www.instagram.com/_aninda_bhowmik?igsh=MTQ0aTV2aHNucmM4Zg==",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Jony Chandra",
        position: "Workshop Secretary",
        bio: "Dedicated leader of the club.",
        image: "WORKSHOP-SEC.png",
        social: {
          facebook: "https://www.facebook.com/share/1DB5spD29E/",
          instagram: "https://instagram.com",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Md. Muballig Rahman Sarkar",
        position: "Seminar Secretary",
        bio: "Dedicated leader of the club.",
        image: "panel25/s_semi.jpg",
        social: {
          facebook: "https://www.facebook.com/muballig.rahman.sarkar",
          instagram: "https://instagram.com",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "MD. Amin Bashar Abir",
        position: "Secretary",
        department: "ICT",
        bio: "Dedicated leader of the club.",
        image: "ICT-SEC.png",
        social: {
          facebook: "https://www.facebook.com/share/1Dfou6FwhE/",
          instagram: "https://instagram.com",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Aditya Sahariar Upal",
        position: "Secretary",
        department: "Quiz",
        bio: "Dedicated leader of the club.",
        image: "QUIZ-SC.png",
        social: {
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
          telegram: "https://t.me",
          linkedin: "https://linkedin.com"
        }
      }
    ]
  },

  // ── 2023-2024 ─────────────────────────────────────────────────────────────
  {
  label: "2023-2024",
  folder: "images/panel-24",
  members: [
    { name: "Gazi Akram Hossain Ayon",        image:"gs-24.jpg", position: "General Secretary",                         social: { facebook: "https://www.facebook.com/ayon.hossain.5811?mibextid=ZbWKwL", instagram: "https://www.instagram.com/_.akram_ayon._/", telegram: "https://wa.me/+8801602056796", linkedin: "https://www.linkedin.com/in/akram-hossain-560538276/" } },
    { name: "Md. Siam Nowshad",         image:"pr(admin)-24.jpg", position: "President", department: "Administration",   social: { instagram: "https://www.instagram.com/snow7hd", telegram: "https://wa.me/+8801931807305", linkedin: "https://www.linkedin.com/in/siamthenowshad" } },
    { name: "Mahmudul Hasan Mridul",       image:"pr(pub)-24.jpg", position: "President", department: "Publication",      social: { facebook: "http://fb.com/mahmudulhasan.mridul01", instagram: "https://www.instagram.com/mustard_slevalion/", telegram: "https://wa.me/+8801521757204", linkedin: "https://www.linkedin.com/in/mahmudul-hasan-mridul1/" } },
    { name: "Md. Ashfakur Rahman Mahim",      image:"pr(project)-24.jpg", position: "President", department: "Project",          social: {} },
    { name: "Sinan Bin Alam",       image:"pr(lws)-24.jpg", position: "President", department: "LWS",              social: { facebook: "https://www.facebook.com/alam.sinan", instagram: "https://www.instagram.com/philanderer_73?igsh=ajdmeWZ0b2V1NXNs", telegram: "https://wa.me/qr/QNN4FYEOBPLOJ1" } },
    { name: "Pramit Baidya",        image:"pr(ict)-24.jpg", position: "President", department: "ICT",              social: { facebook: "https://www.facebook.com/profile.php?id=100090461289433", instagram: "https://www.instagram.com/pramit_prashad_baidya?igsh=YzljYTk1ODg3Zg==", telegram: "https://wa.me/+8801621933080" } },
    { name: "Abrar Mahir",          image:"pr(quiz)-24.jpg", position: "President", department: "Quiz",             social: { facebook: "https://www.facebook.com/jawadbin.jahangir.3?mibextid=LQQJ4d", instagram: "https://www.instagram.com/jawadbelayinots/profilecard/?igsh=MWE4YjBhcDg3ZWVnNw==", telegram: "https://wa.me/+8801832173857" } },
    { name: "Min-al Ferdaus",       image:"ags-24.jpg", position: "Associate General Secretary",               social: {} },
    { name: "Jawad Bin Jahangir",   image:"svp-24.jpg", position: "Senior Vice President",                     social: { facebook: "https://www.facebook.com/jawadbin.jahangir.3?mibextid=LQQJ4d", instagram: "https://www.instagram.com/jawadbelayinots/profilecard/?igsh=MWE4YjBhcDg3ZWVnNw==", telegram: "https://wa.me/+8801832173857" } },
    { name: "Ashfaq Sadiq",         image:"vp(project)-24.jpg", position: "Vice President", department: "Project",     social: { facebook: "https://facebook.com/shifat.the.tiger", instagram: "https://www.instagram.com/Shifu___bhaia", telegram: "https://wa.me/+8801521731390", linkedin: "https://www.linkedin.com/in/ashfaq-sadiq-shifat-bb535a338" } },
    { name: "Hamim Iqbal",          image:"vp(pub)-24.jpg", position: "Vice President", department: "Publication", social: { facebook: "https://www.facebook.com/profile.php?id=100088582827812&mibextid=ZbWKwL", instagram: "https://www.instagram.com/hamim6365/profilecard/?igsh=MW5reWpsaTdhbjczYQ==", telegram: "https://wa.me/message/F2YSTXTPBCMWF1", linkedin: "https://www.linkedin.com/in/hamim-iqbal-shamim-497433283" } },
    { name: "Souhardya Tanchangya", image:"vp(lws)-24.jpg", position: "Vice President", department: "LWS",        social: {} },
    { name: "Mahatab Hossain",      image:"vp(ict)-24.jpg", position: "Vice President", department: "ICT",         social: { facebook: "https://www.facebook.com/share/1BxZriwPaK/", instagram: "https://www.instagram.com/mahatab.h_02/profilecard/?igsh=MTBudmp3cWc1dTQzeg==", telegram: "https://wa.me/+8801324932290" } },
    { name: "Sindeed Alam",         image:"ags(r&d)-24.jpg", position: "Assistant General Secretary", department: "R&D", social: { instagram: "https://www.instagram.com/___s.i.n.d.e.e.d.___/profilecard/?igsh=djV4bHo0Z2lueXE1", telegram: "https://wa.me/+8801850431626", linkedin: "https://www.linkedin.com/in/sindeed-alam-a7695226b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } },
    { name: "Shajedul Islam",       image:"sec(quiz)-24.jpg", position: "Quiz Secretary",                            social: {} },
    { name: "Sakibul Sahon",        image:"sec(project)-24.jpg", position: "Project Secretary",                         social: { facebook: "https://www.facebook.com/sakibul.sahon", instagram: "https://www.instagram.com/sakibul_sahon_/profilecard/?igsh=ZmlvMDBzcTlldGkw", telegram: "https://wa.me/+8801939484569", linkedin: "https://www.linkedin.com/in/md-sakibul-sahon-b54315304" } },
    { name: "Baizid Al Mahmud",     image:"sec(project2)-24.jpg", position: "Project Secretary",                         social: {} },
    { name: "Meherab Hasin",        image:"sec(project3)-24.jpg", position: "Project Secretary",                         social: { facebook: "https://www.facebook.com/profile.php?id=100086828167112&mibextid=LQQJ4d", instagram: "https://www.instagram.com/an_ik_k/profilecard/?igsh=MTZua2tuOTBqbDFpcw==", telegram: "https://wa.me/+8801840158878" } },
    { name: "Nazmul Hasan",         image:"sec(ict)-24.jpg", position: "ICT Secretary",                             social: { facebook: "https://www.facebook.com/nazmulhossainzisan.zisan?mibextid=ZbWKwL", instagram: "https://www.instagram.com/_zhn_nhz_?igsh=MXFieThuc2dsNW1ncw==", telegram: "https://wa.me/+8801521748885" } },
    { name: "Muntasir Mahmud",      image:"og-24.jpg", position: "Organizing Secretary",                      social: {} },
    { name: "Tanvirul Huda",        image:"sec(seminar)-24.jpg", position: "Seminar Secretary",                         social: { facebook: "https://www.facebook.com/profile.php?id=100037377161401&mibextid=ZbWKwL", instagram: "https://www.instagram.com/itz_aash_/", telegram: "https://wa.me/qr/263TK2RID3R3A1", linkedin: "https://www.linkedin.com/in/tan-vir-380177308" } },
    { name: "Al-Mojadidur", position: "Publication Secretary",                     social: { instagram: "https://www.instagram.com/a.m.r.lajim_?igsh=MXA0cWgzNzkxYTU3ZQ==", telegram: "https://wa.me/+8801575733830" } },
    { name: "Bikramjit Sarkar",     image:"sec(office)-24.jpg", position: "Office Secretary",                          social: {} },
    { name: "Sadat Zaman",          image:"sec(library)-24.jpg", position: "Library Secretary",                         social: {} },
    { name: "Timothy Niloy",        image:"sec(tour)-24.jpg", position: "Tour Secretary",                            social: { facebook: "https://www.facebook.com/profile.php?id=100086838667859&mibextid=ZbWKwL", instagram: "https://www.instagram.com/invites/contact/?igsh=1du0qopqpndpd&utm_content=rqdrcnn", telegram: "https://wa.me/qr/VAXFULCW4HXGD1" } },
    { name: "Abdullah Al Siam",     image:"sec(workshop)-24.jpg", position: "Workshop Secretary",                        social: { facebook: "https://www.facebook.com/aa.siam.19", instagram: "https://www.instagram.com/aasiam19", telegram: "https://wa.me/qr/Y7PAYGAAQ2M4N1" } },
    { name: "David Lushai",         image:"sec(entertainment)-24.jpg", position: "Entertainment Secretary",                   social: {} }
  ]
},

  // ── 2022-2023 ─────────────────────────────────────────────────────────────
  {
    label: "2022-2023",
    folder: "images/panel-23",
    members: [
      { name: "Abu Dhorr",         image: "gs-23.jpg",  position: "General Secretary",                        social: {} },
      { name: "Mahi Khan",           position: "President", department: "Administration", image:"pr(admin)-23.jpg", social: {} },
      { name: "Yeamin Aman",         position: "President", department: "Project",         image:"pr(project)-23.jpg", social: {} },
      { name: "Utshav Saha",         position: "President", department: "Publication",     image:"pr(pub)-23.jpg", social: {} },
      { name: "Abrar Faiyaz",        position: "President", department: "LWS",             image:"pr(lws)-23.jpg", social: {} },
      { name: "Hasibul Alam",        position: "President", department: "ICT",             image:"pr(ict)-23.jpg", social: { telegram: "https://wa.me/+8801552494638", linkedin: "https://www.linkedin.com/in/hasibul-alam-prionto-1083aa254" } },
      { name: "Rokon Yeamony",       position: "Associate General Secretary",               image: "ags-23.jpg",       social: {} },
      { name: "Noor Alam Rohan",           position: "Senior Vice President",                    image:"svp-23.jpg", social: {} },
      { name: "Sadman Al Jami",      position: "Vice President", department: "Project",    image:"vp-project-23.jpg", social: {} },
      { name: "Fahmid Alam",         position: "Vice President", department: "Publication", image:"vp(pub)-23.jpg", social: {} },
      { name: "Sadman Shahriar",     position: "Vice President", department: "LWS",        image:"vp(lws)-23.jpg", social: {} },
      { name: "Sudad Hasanat Salim",        position: "Vice President", department: "ICT",        image:"vp(ict)-23.jpg", social: {} },
      { name: "Mashrafi Al Farazi",        position: "Library Secretary", department: "Library",        image:"sec(library)-23.jpg", social: {} }
    ]
  },

  // ── 2021-2022 ─────────────────────────────────────────────────────────────
  {
    label: "2021-2022",
    folder: "images/panel-22",
    members: [
      { name: "Abrar Mahmuh Hasan",   position: "General Secretary",           image:"gs-22.jpg"  ,             social: {} },
      { name: "Raihan Mehedi",            position: "President", department: "Administration",  image:"pr(admin)-22.jpg",  social: {} },
      { name: "Mohammad Rafidul Islam",          position: "President", department: "Project",  image:"pr(project)-22.jpg"    ,     social: {} },
      { name: "Noor Alam Rohan",          position: "President", department: "Publication",  image:"pr(pub)-22.jpg",       social: {} },
      { name: "Mahadi Mohammad Bhuiyan",         position: "President", department: "LWS",      image:"pr(lws)-22.jpg",         social: {} },
      { name: "Taosif Al Afnan",         position: "President", department: "ICT",               social: { whatsapp: "https://wa.me/+8801552494638", linkedin: "https://www.linkedin.com/in/hasibul-alam-prionto-1083aa254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" } },
      { name: "Md. Jubayer Islam",    position: "Associate General Secretary",                social: {} },
      { name: "Noor Alam Rohan",            position: "Senior Vice President",                      social: {} },
      { name: "Sadman Al Jami",       position: "Vice President", department: "Project",      image:"vp(project)-22.jpg",  social: {} },
      { name: "Fahmid Alam",          position: "Vice President", department: "Publication",  image:"vp(pub)-22.jpg",  social: {} },
      { name: "Sadman Shahriar",      position: "Vice President", department: "LWS",          image:"vp(lws)-22.jpg",  social: {} },
      { name: "Sudad Hasanat Salim",         position: "Vice President", department: "ICT",          image:"vp(ict)-22.jpg",  social: {} }
    ]
  },

  // ── 2020-2021 ─────────────────────────────────────────────────────────────
  {
    label: "2020-2021",
    folder: "panel-21",
    members: [
      { name: "Shahil Mahmud Roktim",   position: "General Secretary",                        social: {} },
      { name: "Sotirtho Saha Protya",   position: "President", department: "Administration",  social: {} },
      { name: "Mohammad Rafidul Islam",   position: "President", department: "Project",     image:"pr(project)-21.jpg",   social: {} },
      { name: "Partho Protim",           position: "President", department: "LWS",            social: {} },
      { name: "Md. Shahriar Hamim",        position: "President", department: "Publication",     image:"pr(pub)-21.jpg",     social: {} },
      { name: "Md. Adnan Rahman",        position: "President", department: "ICT",             image:"pr(ict)-21.jpg",             social: {} },
      { name: "A.H.M Nafisuzzaman",     position: "Associate General Secretary",              social: {} },
      { name: "Shahriar Evan",           position: "Senior Vice President",                    social: {} },
      { name: "",         position: "Vice President", department: "Project",    social: {} },
      { name: "Nirupam Debnath",           position: "Vice President", department: "LWS",        social: {} },
      { name: "Gazi Amanul Hoque",       position: "Vice President", department: "Publication",image:"vp(pub)-21.jpg", social: {} },
      { name: "Md. Samiul Islam Rifat",  position: "Vice President", department: "ICT",        social: {} }
    ]
  },

  // ── 2019-2020 ─────────────────────────────────────────────────────────────
  {
    label: "2019-2020",
    folder: "panel20",
    members: [
      { name: "Abrar Hafiz Rabbani",      position: "General Secretary",                        social: {} },
      { name: "Naimul Hasan Ifti",        position: "President", department: "Administration",  social: {} },
      { name: "Md Imran Sarkar",          position: "President", department: "Project",         social: {} },
      { name: "M. Abu Rafi",              position: "President", department: "LWS",             social: {} },
      { name: "Abdullah Al Abu Sabik",    position: "President", department: "Publication",     social: {} },
      { name: "Md Nazmus Saiba",          position: "President", department: "ICT",             social: {} },
      { name: "Sakib Hossain Rony",       position: "Associate General Secretary",              social: {} },
      { name: "Moynul Islam Saykat",      position: "Senior Vice President",                    social: {} },
      { name: "Refath Hossain",           position: "Vice President", department: "Project",    social: {} },
      { name: "Md Sanaul Haque Joy",      position: "Vice President", department: "LWS",        social: {} },
      { name: "Md Osman Goni",            position: "Vice President", department: "Publication", social: {} },
      { name: "Bibswan Dev Biswas Nir",   position: "Vice President", department: "ICT",        social: {} }
    ]
  },

  // ── 2018-2019 ─────────────────────────────────────────────────────────────
  {
    label: "2018-2019",
    folder: "panel19",
    members: [
      { name: "Nafiz Alam",               position: "General Secretary",                        social: {} },
      { name: "Anan Barua",               position: "President", department: "Administration",  social: {} },
      { name: "Ridwan Mahmud Wasi",       position: "President", department: "Project",         social: {} },
      { name: "Chinmoy De",               position: "President", department: "LWS",             social: {} },
      { name: "Towsif Eram",              position: "President", department: "Publication",     social: {} },
      { name: "Md. Iftikhar Alam Omar",   position: "President", department: "ICT",             social: {} },
      { name: "Adnan Rahman Eshan",       position: "Associate General Secretary",              social: {} },
      { name: "Md. Tanjim Islam Khan",    position: "Senior Vice President",                    social: {} },
      { name: "Jahin Hasan Zisan",        position: "Vice President", department: "Project",    social: {} },
      { name: "Rishadul Islam",           position: "Vice President", department: "LWS",        social: {} },
      { name: "Tashdid Alam",             position: "Vice President", department: "Publication", social: {} },
      { name: "Abu Bakar Siddique",       position: "Vice President", department: "ICT",        social: {} }
    ]
  },

  // ── 2017-2018 ─────────────────────────────────────────────────────────────
  {
    label: "2017-2018",
    folder: "panel18",
    members: [
      { name: "Ridwan Kabir Saad",        position: "General Secretary",                        social: {} },
      { name: "Fardin Alam Rafi",         position: "President", department: "Administration",  social: {} },
      { name: "Mohammad Iqbal Hossain",   position: "President", department: "Project",         social: {} },
      { name: "Shakhawat Hossain Shakib", position: "President", department: "LWS",             social: {} },
      { name: "Rawhatur Rabbi Rafin",     position: "President", department: "Publication",     social: {} },
      { name: "Ashakul Arefin Saif",      position: "President", department: "ICT",             social: {} },
      { name: "Md. Mehedi Hasan",         position: "Associate General Secretary",              social: {} },
      { name: "Sheikh Raihanuzzaman",     position: "Senior Vice President",                    social: {} },
      { name: "Mahir Mohtasim Tahmid",    position: "Vice President", department: "Project",    social: {} },
      { name: "Md. Tamimul Ehsan",        position: "Vice President", department: "LWS",        social: {} },
      { name: "Md. Rafi Khan",            position: "Vice President", department: "Publication", social: {} },
      { name: "Md. Tafsirul Islam Rohan", position: "Vice President", department: "ICT",        social: {} }
    ]
  },

  // ── 2016-2017 ─────────────────────────────────────────────────────────────
  {
    label: "2016-2017",
    folder: "panel17",
    members: [
      { name: "Dewan Fahim Foysal",       position: "General Secretary",                        social: {} },
      { name: "Aditya Chowdhury",         position: "President", department: "Administration",  social: {} },
      { name: "Eftykhar Rahman Raufu",    position: "President", department: "Project",         social: {} },
      { name: "Md. Shihabuzzaman",        position: "President", department: "LWS",             social: {} },
      { name: "Md. Sakif Uddin Khan",     position: "President", department: "Publication",     social: {} },
      { name: "Mukarra-Bin Haque Nibir",  position: "President", department: "ICT",             social: {} },
      { name: "Shaikh Nahian",            position: "Associate General Secretary",              social: {} },
      { name: "Ujayer Ahmed Siddique",    position: "Senior Vice President",                    social: {} },
      { name: "Mahadi Abser Turza",       position: "Vice President", department: "Project",    social: {} },
      { name: "Md. Al Farabe",            position: "Vice President", department: "LWS",        social: {} },
      { name: "Shahriar Ahmad Fahim",     position: "Vice President", department: "Publication", social: {} },
      { name: "Sarowar Jahan Saurav",     position: "Vice President", department: "ICT",        social: {} }
    ]
  },
  // ── 2015-2016 ─────────────────────────────────────────────────────────────
  
  // ── 2014-2015 ─────────────────────────────────────────────────────────────
  {
    label: "2014-2015",
    folder: "panel15",
    members: [
      { name: "Md. Labib Sharar",         position: "General Secretary",                        social: {} },
      { name: "Taoseef Ishtiak",          position: "President", department: "Administration",  social: {} },
      { name: "Farhan Tanvir Kawshik",    position: "President", department: "Project",         social: {} },
      { name: "Md Alif Biswas",           position: "President", department: "Publication",     social: {} },
      { name: "Nabil Ahmed Durjoy",       position: "President", department: "LWS",             social: {} },
      { name: "Shah Jamil Bhuiyan Niloy", position: "President", department: "ICT",             social: {} },
      { name: "B.M. Muftadin Pranto",     position: "Associate General Secretary",              social: {} },
      { name: "Kazi Saminur Rahman",      position: "Senior Vice President",                    social: {} },
      { name: "Saad Ul Islam Ninad",      position: "Vice President", department: "Project",    social: {} },
      { name: "Arif Mahtab Kabir",        position: "Vice President", department: "Publication", social: {} },
      { name: "Ahmed Adib",               position: "Vice President", department: "LWS",        social: {} },
      { name: "Shammyo Sikder",           position: "Vice President", department: "ICT",        social: {} }
    ]
  },

  // ── 2013-2014 ─────────────────────────────────────────────────────────────
  // Note: PDF panel session "2013-2014" = college session, panel label = 2014-2015
  {
    label: "2013-2014",
    folder: "panel14",
    members: [
      { name: "Md. Sayem Sarker",         position: "General Secretary",                        social: {} },
      { name: "Sinan Arefeen",            position: "President", department: "Administration",  social: {} },
      { name: "Imran Kabir",              position: "President", department: "Project",         social: {} },
      { name: "Adham Ibrahim Rahman",     position: "President", department: "Publication",     social: {} },
      { name: "Sushmit Hossain",          position: "President", department: "LWS",             social: {} },
      { name: "Hasin Rayhan Dewan Dhruboo", position: "President", department: "ICT",           social: {} },
      { name: "Anthony Sumit Baidya",     position: "Associate General Secretary",              social: {} },
      { name: "Syed Ibn Mohsin (Tamzid)", position: "Senior Vice President",                    social: {} },
      { name: "Abdulah Al Rafi Fahim",    position: "Vice President", department: "Project",    social: {} },
      { name: "Naveed Mahmud",            position: "Vice President", department: "Publication", social: {} },
      { name: "Shihab Noor Alam",         position: "Vice President", department: "LWS",        social: {} },
      { name: "Nafis Mustakin Niloy",     position: "Vice President", department: "ICT",        social: {} }
    ]
  },

  // ── 2012-2013 ─────────────────────────────────────────────────────────────
  {
    label: "2012-2013",
    folder: "panel13",
    members: [
      { name: "Farhanul Huda",            position: "General Secretary",                        social: {} },
      { name: "Hironmoy Ahmed Anan",      position: "President", department: "Administration",  social: {} },
      { name: "Hameed Hasan Alvee",       position: "President", department: "ICT",             social: {} },
      { name: "Ashraf Ibn Rahman Dip",    position: "Associate General Secretary",              social: {} },
      { name: "Ehsanul Kabir Amit",       position: "Vice President", department: "Project",    social: {} },
      { name: "Shafi Arefin Chowdhury",   position: "Vice President", department: "LWS",       social: {} },
      { name: "Mohammad Chanchal Chowdhury", position: "Vice President", department: "ICT",    social: {} },
      { name: "Ashraf Ibn Rahman Dip",    position: "Associate General Secretary",              social: {} }
    ]
  },

  // ── 2011-2012 ─────────────────────────────────────────────────────────────
  {
    label: "2011-2012",
    folder: "panel12",
    members: [
      { name: "Mustakim Ahmed Sunny",     position: "General Secretary",                        social: {} },
      { name: "Aaqib Sadeq",              position: "President", department: "Administration",  social: {} },
      { name: "Saumik Barua Santu",       position: "President", department: "Publication",     social: {} },
      { name: "S.M. Nayeem Arefin",       position: "President", department: "LWS",             social: {} },
      { name: "Niloy Eric Costa",         position: "President", department: "ICT",             social: {} },
      { name: "Rafid Kader Rivu",         position: "Associate General Secretary",              social: {} },
      { name: "Muhammad Muhyminul Islam (Mahi)", position: "Senior Vice President",             social: {} },
      { name: "Partha Pratim Sharma",     position: "Vice President", department: "Project",    social: {} },
      { name: "Abdullah al Rafi",         position: "Vice President", department: "Publication", social: {} },
      { name: "Md. Arif Istiaque Khan (Anik)", position: "Vice President", department: "LWS",  social: {} },
      { name: "Sajid Hossain Sanju",      position: "Vice President", department: "ICT",        social: {} }
    ]
  },

  // ── 2010-2011 ─────────────────────────────────────────────────────────────
  {
    label: "2010-2011",
    folder: "panel11",
    members: [
      { name: "S M Arif Faisal (Ani)",    position: "General Secretary",                        social: {} },
      { name: "Shazzadur Rahman",         position: "President", department: "Administration",  social: {} },
      { name: "Pankaj Das",               position: "President", department: "Project",         social: {} },
      { name: "Maruf Raihan",             position: "President", department: "Publication",     social: {} },
      { name: "Zaki Anan",                position: "President", department: "LWS",             social: {} },
      { name: "Ibrahim Redwan",           position: "President", department: "ICT",             social: {} },
      { name: "Mostafiz Emtiaz",          position: "Associate General Secretary",              social: {} },
      { name: "Nafiul Hasan Nabil",       position: "Senior Vice President",                    social: {} },
      { name: "MD. Wasif Anjum",          position: "Vice President", department: "Project",    social: {} },
      { name: "Abdullah al Rafi",         position: "Vice President", department: "Publication", social: {} },
      { name: "Md. Arif Istiaque Khan (Anik)", position: "Vice President", department: "LWS",  social: {} },
      { name: "Sajid Hossain Sanju",      position: "Vice President", department: "ICT",        social: {} }
    ]
  },

  // ── 2009-2010 ─────────────────────────────────────────────────────────────
  {
    label: "2009-2010",
    folder: "panel10",
    members: [
      { name: "Ridwan Ahmed Ami",         position: "General Secretary",                        social: {} },
      { name: "Abir Shaqran Mahmood",     position: "President", department: "Administration",  social: {} },
      { name: "Md. MuizTahsinTouki",      position: "President", department: "Publication",     social: {} },
      { name: "MD Moinul Hossain Rahat",  position: "President", department: "LWS",             social: {} },
      { name: "Anitam Das Nirjhar",       position: "President", department: "ICT",             social: {} },
      { name: "Manoj Ghosh",              position: "Associate General Secretary",              social: {} },
      { name: "Md Shams E Tabriz (Tonmoy)", position: "Senior Vice President",                 social: {} },
      { name: "Nafis Bin Masud (Shovon)", position: "Vice President", department: "Project",    social: {} },
      { name: "Sunviraj Islam Rifat",     position: "Vice President", department: "Publication", social: {} },
      { name: "Anindya Shams",            position: "Vice President", department: "LWS",        social: {} },
      { name: "Md Sadat Anowar Sunny",    position: "Vice President", department: "ICT",        social: {} }
    ]
  },


  // ── 2008-2009 ─────────────────────────────────────────────────────────────
  {
    label: "2008-2009",
    folder: "panel09",
    members: [
      { name: "K M Murshed Al Maroof",    position: "General Secretary",                        social: {} },
      { name: "Abir Rahman Chowdhury Utsha", position: "President", department: "Administration", social: {} },
      { name: "Md. Rafael",               position: "President", department: "ICT",             social: {} },
      { name: "S.M. Ziad Mahmud Tomal",   position: "President", department: "Publication",     social: {} },
      { name: "MD TARIFUL ISLAM SATU",    position: "President", department: "LWS",             social: {} },
      { name: "Mostofa Jamil (Radif)",    position: "Associate General Secretary",              social: {} },
      { name: "Md Shams E Tabriz (Tonmoy)", position: "Senior Vice President",                 social: {} },
      { name: "Nafis Bin Masud (Shovon)", position: "Vice President", department: "Project",    social: {} },
      { name: "Sunviraj Islam Rifat",     position: "Vice President", department: "Publication", social: {} },
      { name: "Anindya Shams",            position: "Vice President", department: "LWS",        social: {} }
    ]
  },

  // ── 2007-2008 ─────────────────────────────────────────────────────────────
  {
    label: "2007-2008",
    folder: "panel08",
    members: [
      { name: "Sharjil Rahman",           position: "General Secretary",                        social: {} },
      { name: "Sharif Mustaque",          position: "President", department: "Administration",  social: {} },
      { name: "Kazi Alam Chaion",         position: "President", department: "Project",         social: {} },
      { name: "Arefin Masud Emon",        position: "President", department: "Publication",     social: {} },
      { name: "Zeeshan Yasir",            position: "President", department: "LWS",             social: {} },
      { name: "Amitav Chowdhury Amit",    position: "President", department: "LWS",             social: {} },
      { name: "Tonmoy Barua",             position: "President", department: "ICT",             social: {} },
      { name: "MD. Muhie Menul Haque (Pronoy)", position: "Senior Vice President",             social: {} },
      { name: "Sharif Hossain Khan Sagor", position: "Vice President", department: "Project",  social: {} },
      { name: "Ariful Islam",             position: "Vice President", department: "Publication", social: {} },
      { name: "Enam Rabbi Adnan",         position: "Vice President", department: "LWS",        social: {} },
      { name: "Shafiqul Islam",           position: "Vice President", department: "ICT",        social: {} },
      { name: "Tanjim Ferdous",           position: "President", department: "Web & Communication", social: {} }
    ]
  },

  // ── 2006-2007 ─────────────────────────────────────────────────────────────
  {
    label: "2006-2007",
    folder: "panel07",
    members: [
      { name: "Nasbir Islam Emon",        position: "General Secretary",                        social: {} },
      { name: "Mashfiq Sarkar Protik",    position: "President", department: "Administration",  social: {} },
      { name: "Asif Ahmed Victor",        position: "President", department: "Project",         social: {} },
      { name: "MD. Faisal Kabir Rayhan",  position: "President", department: "Publication",     social: {} },
      { name: "Md. Rokan Uddin Bhuiyan",  position: "President", department: "LWS",             social: {} },
      { name: "Tonmoy Barua",             position: "President", department: "ICT",             social: {} }
    ]
  },

  // ── 2005-2006 ─────────────────────────────────────────────────────────────
  {
    label: "2005-2006",
    folder: "panel06",
    members: [
      { name: "Md Imran Khan",            position: "General Secretary",                        social: {} },
      { name: "Mashat Sarkar Shakkhar",   position: "President", department: "Administration",  social: {} },
      { name: "G.K.M Sadiqul Amin Ananda", position: "President", department: "Project",       social: {} },
      { name: "Md. Shahrukh Adnan Khan",  position: "President", department: "Publication",     social: {} },
      { name: "Ranabir Saha",             position: "President", department: "LWS",             social: {} },
      { name: "Md. Nazrul Islam Azad",    position: "President", department: "ICT",             social: {} },
      { name: "Md. Shahriar Shamim (Pappu)", position: "President", department: "Administration", social: {} }
    ]
  },

  // ── 2004-2005 ─────────────────────────────────────────────────────────────
  {
    label: "2004-2005",
    folder: "panel05",
    members: [
      { name: "Habib Abu Imam",           position: "General Secretary",                        social: {} },
      { name: "Md. Shahriar Shamim (Pappu)", position: "President", department: "Administration", social: {} }
    ]
  },

  // ── 2003-2004 ─────────────────────────────────────────────────────────────
  {
    label: "2003-2004",
    folder: "panel04",
    members: [
      { name: "Asif Iqbal",               position: "General Secretary",                        social: {} },
      { name: "Md Ariful islam Bhuiyan",  position: "President", department: "Administration",  social: {} },
      { name: "Fauzul Azim Kibria",       position: "President", department: "Project",         social: {} },
      { name: "Sadlee Islam Ruhdan",      position: "President", department: "Publication",     social: {} },
      { name: "Rubaiayt Raihan",          position: "President", department: "LWS",             social: {} },
      { name: "Ovinu Kibria Islam",        position: "Associate General Secretary",              social: {} },
      { name: "Md Mydul Islam",           position: "Senior Vice President",                    social: {} },
      { name: "Fabian Khan",              position: "Vice President",                           social: {} },
      { name: "Abdullah An-nur",          position: "Vice President",                           social: {} }
    ]
  },

  // ── 2002-2003 ─────────────────────────────────────────────────────────────
  {
    label: "2002-2003",
    folder: "panel03",
    members: [
      { name: "Nashid Shahriar",          position: "General Secretary",                        social: {} },
      { name: "Imran Hossain Khan",       position: "President", department: "Administration",  social: {} },
      { name: "Saad Muntazim",            position: "President", department: "Project",         social: {} },
      { name: "Mehedi Hassan",            position: "President", department: "Publication",     social: {} },
      { name: "Sharrief Chowdhury",       position: "Associate General Secretary",              social: {} },
      { name: "Saekh Hasan Shetu",        position: "Vice President",                           social: {} },
      { name: "Arnab Paul",               position: "Vice President",                           social: {} },
      { name: "Sharrief Chowdhury",       position: "Associate General Secretary",              social: {} },
      { name: "Md. Nazmul Azim Beg (Rezwan)", position: "Senior Vice President",               social: {} }
    ]
  },

  // ── 2001-2002 ─────────────────────────────────────────────────────────────
  {
    label: "2001-2002",
    folder: "panel02",
    members: [
      { name: "Numair Muhhammad Fadlullah", position: "General Secretary",                      social: {} },
      { name: "Dipan Chowdhury Barua (Amit)", position: "President", department: "Administration", social: {} },
      { name: "Hasibul Haque",            position: "Associate General Secretary",              social: {} },
      { name: "Kallol Banik",             position: "Senior Vice President",                    social: {} },
      { name: "Ovinu Kibria Islam",       position: "Vice President",                           social: {} }
    ]
  },

  // ── 2000-2001 ─────────────────────────────────────────────────────────────
  {
    label: "2000-2001",
    folder: "panel01",
    members: [
      { name: "K. Ashequl Haque",         position: "General Secretary",                        social: {} },
      { name: "Mohammad Manzurul Islam",  position: "President", department: "Administration",  social: {} },
      { name: "Iftakharul Islam Rusho",   position: "President", department: "Project",         social: {} },
      { name: "Mohammad Hasnat Jamil (Dipu)", position: "President", department: "Publication", social: {} },
      { name: "Mohammad Rifat Haider",    position: "President", department: "LWS",             social: {} }
    ]
  },

  // ── 1999-2000 ─────────────────────────────────────────────────────────────
  {
    label: "1999-2000",
    folder: "panel00",
    members: [
      { name: "Gazi Maruf Azmal",         position: "General Secretary",                        social: {} },
      { name: "M Abu Hasib Ron",          position: "President", department: "Project",         social: {} },
      { name: "M Ataul Haq Qasem",        position: "President", department: "Publication",     social: {} },
      { name: "Shaibal Chowdhury",        position: "President", department: "LWS",             social: {} }
    ]
  },

  // ── 1998-1999 ─────────────────────────────────────────────────────────────
  {
    label: "1998-1999",
    folder: "panel99",
    members: [
      { name: "Kashefur Rahman",          position: "General Secretary",                        social: {} },
      { name: "Razib Iqbal",              position: "President", department: "Administration",  social: {} },
      { name: "Ikhtiar Saeed Akhunji (Riman)", position: "President", department: "Project",   social: {} },
      { name: "Md Iftekhar Hossain Pavel", position: "President", department: "Publication",    social: {} },
      { name: "Rifat Tanveer",            position: "President", department: "LWS",             social: {} }
    ]
  },

  // ── 1997-1998 ─────────────────────────────────────────────────────────────
  {
    label: "1997-1998",
    folder: "panel98",
    members: [
      { name: "Md. Murad Hossain Nipun",  position: "General Secretary",                        social: {} },
      { name: "Raihan Amin Adnan",        position: "President", department: "Administration",  social: {} },
      { name: "Md. Shafiur Rahman Bappi", position: "President", department: "Project",         social: {} },
      { name: "Sourav Ranjan Saha",       position: "President", department: "Publication",     social: {} },
      { name: "Mahmudul Hasan Chowdhury", position: "President", department: "LWS",             social: {} }
    ]
  },

  // ── 1996-1997 ─────────────────────────────────────────────────────────────
  {
    label: "1996-1997",
    folder: "panel97",
    members: [
      { name: "Zarir Muhammad Fadlullah", position: "General Secretary",                        social: {} },
      { name: "Saef Mahmud",              position: "President", department: "Administration",  social: {} },
      { name: "Rajib Ahmed Sultan",       position: "President", department: "Project",         social: {} },
      { name: "Nouroz Imtiaz",            position: "President", department: "Publication",     social: {} },
      { name: "Moinul Hasan Chowdhury",   position: "President", department: "LWS",             social: {} }
    ]
  },

  // ── 1995-1996 ─────────────────────────────────────────────────────────────
  {
    label: "1995-1996",
    folder: "panel96",
    members: [
      { name: "Shamim Kaiser",            position: "General Secretary",                        social: {} },
      { name: "Maruf Ahmed",              position: "President", department: "Administration",  social: {} },
      { name: "Sheikh Khaled Selim Ayon", position: "President", department: "Project",         social: {} },
      { name: "Fahim Hossain",            position: "President", department: "Publication",     social: {} },
      { name: "Mahbub Hassan Raziun",     position: "President", department: "LWS",             social: {} }
    ]
  },

  // ── 1994-1995 ─────────────────────────────────────────────────────────────
  {
    label: "1994-1995",
    folder: "panel95",
    members: [
      { name: "Rajib Ibne Islam",         position: "General Secretary",                        social: {} },
      { name: "Musfik Ahmed",             position: "President", department: "Administration",  social: {} },
      { name: "Ziaur Rahman Galib",       position: "President", department: "Project",         social: {} },
      { name: "Al-Farok",                 position: "President", department: "Publication",     social: {} },
      { name: "Nafis Aminur Kabir",       position: "President", department: "LWS",             social: {} },
      { name: "Munawar Hafeez",           position: "Vice President",                           social: {} },
      { name: "Tauheed Ahmed Rupak",      position: "Vice President", department: "Publication", social: {} },
      { name: "Nafees Anamul Kabir",      position: "Vice President", department: "LWS",        social: {} }
    ]
  },

  // ── 1993-1994 ─────────────────────────────────────────────────────────────
  {
    label: "1993-1994",
    folder: "panel94",
    members: [
      { name: "Harunur Rashid Khan Rakib", position: "General Secretary",                       social: {} },
      { name: "Mumtajul Karim Nasim",     position: "President", department: "Administration",  social: {} },
      { name: "Kazi Arefin Kabir",        position: "President", department: "Project",         social: {} },
      { name: "Rashed Ahmed Chowdhury",   position: "President", department: "Publication",     social: {} },
      { name: "M.M Rashedul Hasan",       position: "President", department: "LWS",             social: {} },
      { name: "Tanvir Ahmed Alo",         position: "President", department: "LWS",             social: {} },
      { name: "Atiq Rahman",              position: "Organizing Secretary",                     social: {} }
    ]
  },

  // ── 1992-1993 ─────────────────────────────────────────────────────────────
  {
    label: "1992-1993",
    folder: "panel93",
    members: [
      { name: "Ali Irteza Khan Tulu",     position: "General Secretary",                        social: {} },
      { name: "Mesbauddin Numan",         position: "President", department: "Administration",  social: {} },
      { name: "Arifur Rahman",            position: "President", department: "Project",         social: {} },
      { name: "Fakhruddin Ahmed Junnon",  position: "President", department: "Publication",     social: {} }
    ]
  },

  // ── 1991-1992 ─────────────────────────────────────────────────────────────
  {
    label: "1991-1992",
    folder: "panel92",
    members: [
      { name: "Md. Zami Hossain",         position: "General Secretary",                        social: {} },
      { name: "Faisal Habib Khan",        position: "President", department: "Administration",  social: {} },
      { name: "Sheikh Tarekh Selim",      position: "President", department: "Project",         social: {} },
      { name: "Debasish Dhar",            position: "President", department: "Publication",     social: {} }
    ]
  },

  // ── 1990-1991 ─────────────────────────────────────────────────────────────
  {
    label: "1990-1991",
    folder: "panel91",
    members: [
      { name: "Arun Mousum Samaddar",     position: "General Secretary",                        social: {} },
      { name: "Jahirul Islam Kachi",      position: "President", department: "Administration",  social: {} },
      { name: "Md. Samiul Alam",          position: "President", department: "Project",         social: {} },
      { name: "Kayes Khan",               position: "President", department: "Publication",     social: {} },
      { name: "Aman Ashraf Faiz",         position: "Vice President",                           social: {} }
    ]
  },

  // ── 1989-1990 ─────────────────────────────────────────────────────────────
  {
    label: "1989-1990",
    folder: "panel90",
    members: [
      { name: "Khaled Hossain Chowdhury", position: "General Secretary",                        social: {} },
      { name: "Imrad Zulkarnain",         position: "President", department: "Administration",  social: {} },
      { name: "Khurshed Alam",            position: "President", department: "Project",         social: {} },
      { name: "Rupom Reza Faroki",        position: "President", department: "Publication",     social: {} }
    ]
  },

  // ── 1988-1989 ─────────────────────────────────────────────────────────────
  {
    label: "1988-1989",
    folder: "panel89",
    members: [
      { name: "Sayed Shamsul Wadud",      position: "General Secretary",                        social: {} },
      { name: "A.S.M Ehtesanul Haque",    position: "President", department: "Administration",  social: {} },
      { name: "Sharif-Al-Kashem",         position: "President", department: "Project",         social: {} },
      { name: "Adib Newaj Khan",          position: "President", department: "Publication",     social: {} },
      { name: "Ashraf Islam",             position: "Senior Vice President",                    social: {} },
      { name: "Mohammed Khorshed Alam",   position: "President", department: "Project",         social: {} }
    ]
  },

  // ── 1987-1988 ─────────────────────────────────────────────────────────────
  {
    label: "1987-1988",
    folder: "panel88",
    members: [
      { name: "Shahed Ahmed Chowdhury",   position: "General Secretary",                        social: {} },
      { name: "Sheikh Nasirul Islam Chowdhury", position: "President", department: "Administration", social: {} },
      { name: "Joyodip Das",              position: "President", department: "Project",         social: {} }
    ]
  },

  // ── 1986-1987 ─────────────────────────────────────────────────────────────
  {
    label: "1986-1987",
    folder: "panel87",
    members: [
      { name: "MD. Ziaul Islam",          position: "General Secretary",                        social: {} },
      { name: "Ahkam Ullah",              position: "President", department: "Administration",  social: {} },
      { name: "Ainul Islam Khan",         position: "President", department: "Project",         social: {} }
    ]
  },

  // ── 1985-1986 ─────────────────────────────────────────────────────────────
  {
    label: "1985-1986",
    folder: "panel86",
    members: [
      { name: "Khalid Aziz",              position: "General Secretary",                        social: {} },
      { name: "Sinha Abu Khalid",         position: "President", department: "Administration",  social: {} },
      { name: "Asis Aminul Islam",        position: "President", department: "Project",         social: {} }
    ]
  },

  // ── 1984-1985 ─────────────────────────────────────────────────────────────
  {
    label: "1984-1985",
    folder: "panel85",
    members: [
      { name: "Ashraf-uz-Zaman Chowdhury", position: "General Secretary",                      social: {} },
      { name: "A.K.M Murshed",            position: "President", department: "Administration",  social: {} },
      { name: "Dilip Kumar Mondol",       position: "President", department: "Project",         social: {} }
    ]
  },

  // ── 1983-1984 ─────────────────────────────────────────────────────────────
  {
    label: "1983-1984",
    folder: "panel84",
    members: [
      { name: "Nahidul Haque",            position: "President", department: "Administration",  social: {} }
    ]
  },

  // ── 1982-1983 ─────────────────────────────────────────────────────────────
  {
    label: "1982-1983",
    folder: "panel83",
    members: [
      { name: "Dr. Ghulam Shawkat Hossain", position: "General Secretary",                     social: {} },
      { name: "Habib Numan",              position: "President", department: "Administration",  social: {} },
      { name: "S.M. Shahrukh",            position: "President", department: "Project",         social: {} },
      { name: "Monirul Islam",            position: "Associate General Secretary",              social: {} },
      { name: "Syed Rezaul Huq",          position: "Vice President",                           social: {} },
      { name: "Hasan Sayeedur Rahman",    position: "Treasurer",                                social: {} }
    ]
  },

  // ── 1981-1982 ─────────────────────────────────────────────────────────────
  {
    label: "1981-1982",
    folder: "panel82",
    members: [
      { name: "Mohammed Zia",             position: "General Secretary",                        social: {} },
      { name: "Shamsuddin Alamgir Cyrus", position: "President", department: "Administration",  social: {} }
    ]
  },

  // ── 1980-1981 ─────────────────────────────────────────────────────────────
  {
    label: "1980-1981",
    folder: "panel81",
    members: [
      { name: "Ejaj Ahmed",               position: "General Secretary",                        social: {} },
      { name: "Sayed Hasan Nurunnabi",    position: "President", department: "Administration",  social: {} },
      { name: "M.A Mukit",                position: "President", department: "Project",         social: {} }
    ]
  },

  // ── 1979-1980 ─────────────────────────────────────────────────────────────
  {
    label: "1979-1980",
    folder: "panel80",
    members: [
      { name: "Ashrafujjaman",            position: "General Secretary",                        social: {} },
      { name: "Sayed Riazur Rahman",      position: "President", department: "Administration",  social: {} }
    ]
  },

  // ── 1978-1979 ─────────────────────────────────────────────────────────────
  {
    label: "1978-1979",
    folder: "panel79",
    members: [
      { name: "Atosh Kumer Das",          position: "General Secretary",                        social: {} },
      { name: "Riad Ahmed",               position: "President", department: "Administration",  social: {} }
    ]
  },


  // ── ADD NEW PANEL HERE ────────────────────────────────────────────────────
  // Copy the block below, increment the year, set folder, and fill in members.
  //
  // ,{
  //   label: "2025-2026",
  //   folder: "panel26",
  //   members: [
  //     { name: "Full Name", position: "General Secretary", department: "Administration",
  //       bio: "Short bio.", image: "GS.jpg",
  //       social: { facebook: "", instagram: "", telegram: "", linkedin: "" } },
  //     ...
  //   ]
  // }

];
