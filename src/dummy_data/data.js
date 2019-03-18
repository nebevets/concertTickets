const ticketData = [
    {
        id: 1,
        tour: 'in a different light',
        artists: [
            'bangles',
            'hoodoo gurus'
        ],
        date: new Date('1986-04-13T19:30:00-05:00'),
        venue: 'broome-kirk gym',
        city: 'boone',
        state: 'nc',
        stub: '1986.04.13_bangles_hooDooGurus.png',
        setlist: 'not available',
        notes: 'my first concert. i went because a high school friend had tickets. i remember the lead singer from hoodoo gurus drinking beers on stage and being pretty drunk. they were good though. google "susanna hoffs eyes" to see what i remember about the bangles show. broome-kirk gym has since been demolished. this was my first exposure to appalachian state, my alma mater.'
    },
    {
        id: 2,
        tour: 'listen like thieves',
        artists: [
            'inxs',
            'the del fuegos'
        ],
        date: new Date('1986-07-16T20:00:00-05:00'),
        venue: 'grady cole center',
        city: 'charlotte',
        state: 'nc',
        stub: '1986.07.16_inxs.png',
        setlist: 'not available',
        notes: 'this was a great show from start to finish...for inxs. the del fuegos sucked. it was so hot in the venue, people passed out and we were drenched with sweat. this ticket was in my pocket the whole time and pretty much looked like this after the show.'
    },
    {
        id: 3,
        tour: 'world violation',
        artists: [
            'depeche mode',
            'nitzer ebb'
        ],
        date: new Date('1990-06-04T20:00:00-05:00'),
        venue: 'lakewood amphitheater',
        city: 'atlanta',
        state: 'ga',
        stub: '1990.06.04_depecheMode_nitzerEbb.png',
        setlist: 'https://www.setlist.fm/setlist/depeche-mode/1990/lakewood-amphitheatre-atlanta-ga-5bd60f6c.html',
        notes: 'nitzer ebb had a problem with their sequencer during the set. dave sang route 66. this was the best depeche mode concert i can remember.'
    },
    {
        id: 4,
        tour: 'lollapalooza 1991',
        artists: [
            'henry rollins',
            'butthole surfers',
            'ice-t',
            'body count',
            'fishbone',
            'violent femmes',
            'nine inch nails',
            'living colour',
            'siouxsie and the banshees',
            'janes addiction'
        ],
        date: new Date('1991-08-17T14:00:00-05:00'),
        venue: 'walnut creek amphitheater',
        city: 'raleigh',
        state: 'nc',
        stub: '1991.08.17_lollapalooza1991_nineInchNails_janesAddiction_iceT.png',
        setlist: 'https://www.setlist.fm/setlist/nine-inch-nails/1991/hardees-walnut-creek-amphitheatre-raleigh-nc-4bd7c332.html',
        notes: 'henry rollins told a crazy story about a friend of his shot by cops. the butthole surfers shot blanks from a gun toward the audience. ice-t and body count was really good. there was a huge mosh pit for body count and a friend got a black eye from it. nine inch nails was amazing. i rememeber wishing they performed at night. siouxsie and the banshees had a pornographic backdrop. perry farrell ranted about jesse helms. the rest of the show was no memorable.'
    },
    {
        id: 5,
        tour: 'boss drum',
        artists: [
            'the shamen',
            'moby'
        ],
        date: new Date('1992-02-04T21:00:00-05:00'),
        venue: 'heaven, the masquerade club',
        city: 'atlanta',
        state: 'ga',
        stub: '1992.02.04_shamen_moby.png',
        setlist: 'not available',
        notes: 'at this time, nobody knew who moby was. his first album wasn\'t even released. he played "go" and it blew me away. he had a simple keyboard and drum machine setup and the most energy of anyone i had seen before. the shamen were in support of boss drum, which had not been release in the us yet. colin had a guitar that had a digital marquee on it that displayed different messages during different songs. mr. c did unique raps for some of the songs. overall, a great show.'
    },
    {
        id: 6,
        tour: 'ebbhead',
        artists: [
            'nitzer ebb',
            'local act'
        ],
        date: new Date('1992-02-06T22:00:00-05:00'),
        venue: 'heaven, the masquerade club',
        city: 'atlanta',
        state: 'ga',
        stub: '1992.02.06_nitzerEbb.png',
        setlist: 'https://www.setlist.fm/setlist/nitzer-ebb/1992/university-of-leicester-leicester-england-5b944bc4.html',
        notes: 'note the setlist points to another date, but this list is the same as i remember. the sound quality of this show was amazing. i don\'t remember the name of the opening act, but they were local to atlanta and really weird. it was more like an art performance than a musical one. nitzer ebb was awesome. the floor moved to people jumping and the bass rolling out so much that i worried it might collapse. we meet douglas before the show and he signed our tickets.' 
    },
    {
        id: 7,
        tour: 'ebbhead',
        artists: [
            'nitzer ebb',
            'local act'
        ],
        date: new Date('1992-02-07T22:00:00-05:00'),
        venue: '13-13 club',
        city: 'charlotte',
        state: 'nc',
        stub: '1992.02.07_nitzerEbb.png',
        setlist: 'https://www.setlist.fm/setlist/nitzer-ebb/1992/university-of-leicester-leicester-england-5b944bc4.html',
        notes: 'same set list as the previous night, but a different local act, that i also don\'t remember. not as good sound at this venue, but a great place to see a show. they rememeber us from the previous night.' 
    },
    {
        id: 8,
        tour: 'zoo tv',
        artists: [
            'u2',
            'the pixies'
        ],
        date: new Date('1992-03-03T19:30:00-05:00'),
        venue: 'charlotte coliseum',
        city: 'charlotte',
        state: 'nc',
        stub: '1992.03.03_u2_pixies.png',
        setlist: 'https://www.setlist.fm/setlist/u2/1992/charlotte-coliseum-charlotte-nc-2bd6f832.html',
        notes: 'my roommates wanted to see this show, so i went. i liked the pixies, but they had a very minimal show, especially compared to u2. i remember enjoying the song "zoo station." other than that, the sound quality was terrible and we had very bad seats. i don\'t really like u2.' 
    },
    {
        id: 9,
        tour: 'the wish',
        artists: [
            'the cure',
            'the cranes'
        ],
        date: new Date('1992-05-28T20:00:00-05:00'),
        venue: 'dean e. smith center',
        city: 'chapel hill',
        state: 'nc',
        stub: '1992.05.28_theCure_cranes.png',
        setlist: 'https://www.setlist.fm/setlist/the-cure/1992/dean-e-smith-student-activities-center-chapel-hill-nc-33d7ec79.html',
        notes: 'the cranes were boring. the sound quality was not good at this show. the cure was ok, but i have seen better.' 
    },
    {
        id: 10,
        tour: 'satyricon',
        artists: [
            'meat beat manifesto',
            'orbital'
        ],
        date: new Date('1992-11-29T22:00:00-05:00'),
        venue: 'heaven, the masquerade club',
        city: 'atlanta',
        state: 'ga',
        stub: '1992.11.29_meatBeatManifesto_orbital.png',
        setlist: 'not available',
        notes: 'jack used a vintage sampler. we could see nothing of orbital expect for their lighted eye glasses. overall, a great show. the sound quality was spectacular.' 
    },
    {
        id: 11,
        tour: 'devotional',
        artists: [
            'depeche mode',
            'the the'
        ],
        date: new Date('1993-09-29T19:30:00-05:00'),
        venue: 'the omni',
        city: 'atlanta',
        state: 'ga',
        stub: '1993.09.29_depecheMode_theThe.png',
        setlist: 'https://www.setlist.fm/setlist/depeche-mode/1993/the-omni-atlanta-ga-4bd7f38a.html',
        notes: 'we missed the the perform. the sound quality was typical arena sound...bad. the visuals for this show were amazing. probably the worst depeche mode concert i have seen' 
    },
    {
        id: 12,
        tour: 'counterparts',
        artists: [
            'rush',
            'candlebox'
        ],
        date: new Date('1994-02-25T20:00:00-05:00'),
        venue: 'charlotte coliseum',
        city: 'charlotte',
        state: 'nc',
        stub: '1994.02.25_rush.png',
        setlist: 'https://www.setlist.fm/setlist/rush/1994/charlotte-coliseum-charlotte-nc-2bd610ce.html',
        notes: 'candlebox was just starting to get noticed...but i did not like them at all. rush, however, never disappoints. they were great live and i enjoyed the show very much. "roll the bones" had a cool visual accompaniment' 
    },
    {
        id: 13,
        tour: 'exotic, summer 1994',
        artists: [
            'depeche mode',
            'primal scream'
        ],
        date: new Date('1994-06-08T19:30:00-05:00'),
        venue: 'carowinds paladium',
        city: 'charlotte',
        state: 'nc',
        stub: '1994.06.08_depecheMode_primalScream.png',
        setlist: 'https://www.setlist.fm/setlist/depeche-mode/1994/carowinds-paladium-charlotte-nc-73d7f2dd.html',
        notes: 'this was a really weird place to see a show like this. primal scream did a great version of "don\'t fight it, feel it." they were better than i expected. depeche mode was in great form at this show with a minimal set that focussed on the music, as opposed to the visuals of the previous devotional tour. andy fletcher was not at this concert and alan was on drums. "a question of time" was the best song of the night.'
    },
];

export default ticketData;