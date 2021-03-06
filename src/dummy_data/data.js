// @flow

export type TicketType = {
  id: number,
  tour: string,
  artists: Array<string>,
  date: Date,
  venue: string,
  city: string,
  state: string,
  src: string,
  setlist: ?string,
  notes: string,
};

/* $FlowIgnore[signature-verification-failure] webpack require context method */
export const importImages = (requireImage) => {
  const imagePaths = {};
  requireImage
    .keys()
    .forEach(
      (fileInfo) =>
        (imagePaths[fileInfo.replace("./", "")] = requireImage(fileInfo))
    );
  return imagePaths;
};

/* $FlowIgnore[prop-missing] webpack require context method */
const stubImages = importImages(require.context("../images", false, /\.png/));

export const dummyData: Array<TicketType> = [
  {
    id: 1,
    tour: "in a different light",
    artists: ["bangles", "hoodoo gurus"],
    date: new Date("1986-04-13T19:30:00-05:00"),
    venue: "broome-kirk gym",
    city: "boone",
    state: "nc",
    src: stubImages["1986.04.13_bangles_hooDooGurus.png"].default,
    setlist: null,
    notes:
      'my first concert. i went because a high school friend had tickets. i remember the lead singer from hoodoo gurus drinking beers on stage and being pretty drunk. they were good though. google "susanna hoffs eyes" to see what i remember about the bangles show. broome-kirk gym has since been demolished. this was my first exposure to appalachian state, my alma mater.',
  },
  {
    id: 2,
    tour: "listen like thieves",
    artists: ["inxs", "the del fuegos"],
    date: new Date("1986-07-16T20:00:00-05:00"),
    venue: "grady cole center",
    city: "charlotte",
    state: "nc",
    src: stubImages["1986.07.16_inxs.png"].default,
    setlist: null,
    notes:
      "this was a great show from start to finish...for inxs. the del fuegos sucked. it was so hot in the venue, people passed out and we were drenched with sweat. this ticket was in my pocket the whole time and pretty much looked like this after the show.",
  },
  {
    id: 3,
    tour: "world violation",
    artists: ["depeche mode", "nitzer ebb"],
    date: new Date("1990-06-04T20:00:00-05:00"),
    venue: "lakewood amphitheater",
    city: "atlanta",
    state: "ga",
    src: stubImages["1990.06.04_depecheMode_nitzerEbb.png"].default,
    setlist:
      "https://www.setlist.fm/setlist/depeche-mode/1990/lakewood-amphitheatre-atlanta-ga-5bd60f6c.html",
    notes:
      "nitzer ebb had a problem with their sequencer during the set. not the best venue for them, as they are much better in a club. depeche mode was awesome, however. the whole show was great and set to very cool visuals from anton corbijn. dave sang route 66 for an encore. this was the best depeche mode concert i can remember.",
  },
  {
    id: 4,
    tour: "lollapalooza 1991",
    artists: [
      "henry rollins",
      "butthole surfers",
      "ice-t",
      "body count",
      "fishbone",
      "violent femmes",
      "nine inch nails",
      "living colour",
      "siouxsie and the banshees",
      "janes addiction",
    ],
    date: new Date("1991-08-17T14:00:00-05:00"),
    venue: "walnut creek amphitheater",
    city: "raleigh",
    state: "nc",
    src: stubImages[
      "1991.08.17_lollapalooza1991_nineInchNails_janesAddiction_iceT.png"
    ].default,
    setlist:
      "https://www.setlist.fm/setlist/nine-inch-nails/1991/hardees-walnut-creek-amphitheatre-raleigh-nc-4bd7c332.html",
    notes:
      "i went for nine inch nails and ice-t. i knew henry rollins from black flag, and it was trippy to see him perform. he told a crazy story about a friend of his shot by cops. the butthole surfers shot blanks from a gun toward the audience. ice-t and body count was really good. there was a huge mosh pit for body count and a friend got a black eye from it. nine inch nails was amazing. i rememeber wishing they performed at night. siouxsie and the banshees had a pornographic backdrop. perry farrell ranted about jesse helms. the rest of the show was not memorable.",
  },
  {
    id: 5,
    tour: "boss drum",
    artists: ["the shamen", "moby"],
    date: new Date("1992-02-04T21:00:00-05:00"),
    venue: "heaven, the masquerade club",
    city: "atlanta",
    state: "ga",
    src: stubImages["1992.02.04_shamen_moby.png"].default,
    setlist: null,
    notes:
      'at this time, nobody knew who moby was. his first album wasn\'t even released. he played "go" and it blew me away. he had a simple keyboard and drum machine setup and the most energy of anyone i had seen before. the shamen were in support of boss drum, which had not been released in the us yet. colin had a guitar that had a digital marquee on it that displayed different messages during different songs. mr. c did unique raps for some of the songs. overall, a great show.',
  },
  {
    id: 6,
    tour: "ebbhead",
    artists: ["nitzer ebb", "local act"],
    date: new Date("1992-02-06T22:00:00-05:00"),
    venue: "heaven, the masquerade club",
    city: "atlanta",
    state: "ga",
    src: stubImages["1992.02.06_nitzerEbb.png"].default,
    setlist:
      "https://www.setlist.fm/setlist/nitzer-ebb/1992/university-of-leicester-leicester-england-5b944bc4.html",
    notes:
      "note the setlist points to another date, but this list is the same as i remember. the sound quality of this show was amazing. i don't remember the name of the opening act, but they were local to atlanta and really weird. it was more like an art performance than a musical one. nitzer ebb was awesome. the floor moved to people jumping and the bass rolling out so much that i worried it might collapse. we meet douglas before the show and he signed our tickets.",
  },
  {
    id: 7,
    tour: "ebbhead",
    artists: ["nitzer ebb", "local act"],
    date: new Date("1992-02-07T22:00:00-05:00"),
    venue: "13-13 club",
    city: "charlotte",
    state: "nc",
    src: stubImages["1992.02.07_nitzerEbb.png"].default,
    setlist:
      "https://www.setlist.fm/setlist/nitzer-ebb/1992/university-of-leicester-leicester-england-5b944bc4.html",
    notes:
      "same set list as the previous night, but a different local act, that i also don't remember. not as good sound at this venue, but a great place to see a show. they rememebered us from the previous night.",
  },
  {
    id: 8,
    tour: "zoo tv",
    artists: ["u2", "the pixies"],
    date: new Date("1992-03-03T19:30:00-05:00"),
    venue: "charlotte coliseum",
    city: "charlotte",
    state: "nc",
    src: stubImages["1992.03.03_u2_pixies.png"].default,
    setlist:
      "https://www.setlist.fm/setlist/u2/1992/charlotte-coliseum-charlotte-nc-2bd6f832.html",
    notes:
      "my roommates wanted to see this show, so i went. i liked the pixies, but they had a very minimal show, especially compared to u2. i remember enjoying u2's song \"zoo station.\" other than that, the sound quality was terrible and we had very bad seats. i don't really like u2.",
  },
  {
    id: 9,
    tour: "the wish",
    artists: ["the cure", "the cranes"],
    date: new Date("1992-05-28T20:00:00-05:00"),
    venue: "dean e. smith center",
    city: "chapel hill",
    state: "nc",
    src: stubImages["1992.05.28_theCure_cranes.png"].default,
    setlist:
      "https://www.setlist.fm/setlist/the-cure/1992/dean-e-smith-student-activities-center-chapel-hill-nc-33d7ec79.html",
    notes:
      'the cranes were boring. the sound quality was not good at this show. the cure was good, but i have seen better. i remember the keyboard rhythm for "from the edge of the deep green sea" was out of sync with the band.',
  },
  {
    id: 10,
    tour: "satyricon",
    artists: ["meat beat manifesto", "orbital", "ultramarine"],
    date: new Date("1992-11-29T22:00:00-05:00"),
    venue: "heaven, the masquerade club",
    city: "atlanta",
    state: "ga",
    src: stubImages["1992.11.29_meatBeatManifesto_orbital.png"].default,
    setlist: "not available",
    notes:
      "ultramarine was pretty good live. we could see nothing of orbital expect for their lighted eye glasses cutting through all the dry ice. overall, a great show. the sound quality was spectacular for meat beat. jack had lots of enegry and he tweaked their samples a lot with this vintage roland sampler.",
  },
  {
    id: 11,
    tour: "devotional",
    artists: ["depeche mode", "the the"],
    date: new Date("1993-09-29T19:30:00-05:00"),
    venue: "the omni",
    city: "atlanta",
    state: "ga",
    src: stubImages["1993.09.29_depecheMode_theThe.png"].default,
    setlist:
      "https://www.setlist.fm/setlist/depeche-mode/1993/the-omni-atlanta-ga-4bd7f38a.html",
    notes:
      'we missed "the the" perform. the sound quality was typical arena sound...bad. the visuals for this show were amazing, but it\'s probably the worst depeche mode concert i have seen.',
  },
  {
    id: 12,
    tour: "counterparts",
    artists: ["rush", "candlebox"],
    date: new Date("1994-02-25T20:00:00-05:00"),
    venue: "charlotte coliseum",
    city: "charlotte",
    state: "nc",
    src: stubImages["1994.02.25_rush.png"].default,
    setlist:
      "https://www.setlist.fm/setlist/rush/1994/charlotte-coliseum-charlotte-nc-2bd610ce.html",
    notes:
      'candlebox was just starting to get noticed...but i did not like them at all. it was basically 30 minutes of the same annoying song. rush, however, never disappoints. they were great live and i enjoyed the show very much. "roll the bones" had a cool visual accompaniment. i was not let down and happy to hear "the trees" and "xanadu" back to back, like on "...exit stage left."',
  },
  {
    id: 13,
    tour: "exotic, summer 1994",
    artists: ["depeche mode", "primal scream"],
    date: new Date("1994-06-08T19:30:00-05:00"),
    venue: "carowinds paladium",
    city: "charlotte",
    state: "nc",
    src: stubImages["1994.06.08_depecheMode_primalScream.png"].default,
    setlist:
      "https://www.setlist.fm/setlist/depeche-mode/1994/carowinds-paladium-charlotte-nc-73d7f2dd.html",
    notes:
      'this was a really weird place to see a show like this. primal scream did a great version of "don\'t fight it, feel it." they were better than i expected. depeche mode was in great form at this show with a minimal set that focussed on the music, as opposed to the visuals of the previous devotional tour. andy fletcher was not at this concert and alan was on drums. "a question of time" was the best song of the night.',
  },
  {
    id: 14,
    tour: "lollapalooza 1994",
    artists: [
      "smashing pumpkins",
      "beastie boys",
      "george clinton & the p-funk allstars",
      "breeders",
      "a tribe called quest",
      "nick cave and the bad seeds",
      "L7",
      "green day",
    ],
    date: new Date("1994-08-11T14:00:00-05:00"),
    venue: "blockbuster pavilion",
    city: "charlotte",
    state: "nc",
    src: stubImages[
      "1994.08.11_lollapalooza1994_beastieBoys_smashingPumpkins.png"
    ].default,
    setlist:
      "https://www.setlist.fm/setlist/the-smashing-pumpkins/1994/blockbuster-pavilion-charlotte-nc-63d7cecb.html",
    notes:
      'i got to the show as george clinton took the stage. i only cared about seeing him, and the rest of the show. i would end up seeing green day and l7 later, by circumstance, in washington state. i remember a ton on freaky looking people on stage for p-funk, including a guy wearing a diaper. the beastie boys were great, and the smashing pumpkins sounded really good at this show. "geek usa" was my favorite.',
  },
  {
    id: 15,
    tour: "further down the spiral",
    artists: ["nine inch nails", "marilyn manson", "jim rose circus"],
    date: new Date("1994-11-23T20:00:00-05:00"),
    venue: "ljvm coliseum",
    city: "winston salem",
    state: "nc",
    src: stubImages["1994.11.23_nineInchNails_marilynManson.png"].default,
    setlist:
      "https://www.setlist.fm/setlist/nine-inch-nails/1994/lawrence-joel-veterans-memorial-coliseum-winston-salem-nc-3bd6d8c8.html",
    notes:
      'jim rose circus was really weird. i just remember feeling like they were trying to hard. this was my first time seeing marilyn manson. he was not very well known at that time, but this concert tour kinda changed that. in typical shock fashion, he cut himself with a light bulb during a song. nine inch nails was at the top of their game here. they were great a lollapalooza, but here they had much better sound and visuals this tour. "wish" was awesome. they also played "dead souls," after apologizing to joy division(?!).',
  },
  {
    id: 16,
    tour: "further down the spiral",
    artists: ["nine inch nails", "pop will eat itself", "jim rose circus"],
    date: new Date("1995-01-25T19:30:00-05:00"),
    venue: "carolina coliseum",
    city: "columbia",
    state: "sc",
    src: stubImages["1995.01.25_nineInchNails_PWEI.png"].default,
    setlist:
      "https://www.setlist.fm/setlist/nine-inch-nails/1995/carolina-coliseum-columbia-sc-5bd7c308.html",
    notes:
      "i was really into going to columbia around this time. so, why not see nine inch nails again? i skipped jim rose, as i was not impressed before. i liked pop will eat itself for a few years now, but was really disapointed with their show. the sound was way to tinny...it actually was hurting my ears. not the most memorable nin show.",
  },
  {
    id: 17,
    tour: "hit & run holiday",
    artists: ["my life with the thrill kill kult", "traci lords"],
    date: new Date("1994-08-11T20:00:00-08:00"),
    venue: "dv8",
    city: "seattle",
    state: "wa",
    src: stubImages["1995.10.31_myLifeWithTheThrillKillKult_traciLords.png"]
      .default,
    setlist: null,
    notes:
      "traci lords with tkk on halloween...should have been amazing, right? not exactly. traci lords is not a good dj. but, it was great to see her in person. tkk was in their heavy disco phase and was not anywhere near as good as when i saw them perform at the pterodactyl club in charlotte a year before. i lost that ticket.",
  },
  {
    id: 18,
    tour: "swing",
    artists: ["the cure"],
    date: new Date("1996-08-03T19:00:00-08:00"),
    venue: "the gorge",
    city: "george",
    state: "wa",
    src: stubImages["1996.08.03_theCure.png"].default,
    setlist:
      "https://www.setlist.fm/setlist/the-cure/1996/the-gorge-amphitheatre-george-wa-7bd7eac8.html",
    notes:
      'this was an epic show. first of all, the gorge is a spectacular setting. second, the sound there is perfect. it was still daylight when the show started. there was no opening act...just the cure for 3 hours. it was really like three cure shows in one. during the opening number "want," robert\'s mic was not working. so, they played an extended intro while a roadie replaced the mic. robert delivered a great opening number after that, but was visibly pissed off. his mic had to be replaced couple times after that until they finally got it right. robert commented it was too bright and he could see everyone\'s faces, which was making him nervous. as the night progressed, they just kept getting better and better, reaching a rousing performance in their second encore that worked the crowd in a fenzy. in a third encore, they ended with "faith", which had not been played live since the faith tour, and "a forest." one of the best concerts ever.',
  },
  {
    id: 19,
    tour: "furnace",
    artists: ["download", "twilight circus dub sound system"],
    date: new Date("1996-08-31T22:00:00-08:00"),
    venue: "the fenix underground",
    city: "seattle",
    state: "wa",
    src: stubImages["1996.08.31_download.png"].default,
    setlist: null,
    notes:
      "i was not expecting twilight circus. super chill; not the type of music i was expecting to hear at this show. in sharp contrast, download was like someone grabbed your head by the base of your skull and head-banged it for you. intense.",
  },
];
