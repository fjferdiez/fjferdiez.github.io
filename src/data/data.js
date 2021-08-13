const media = {
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    wideScreen: 1920
  }
}

const welcome = {
    title: 'I sing. I code. I deploy.',
    name: 'Francisco Fernandez Diez',
    intro: 'I believe that any engineer is an artist and that an artist is an engineer of beauty',
}

const biography = {
    musicianTitle: 'As Musician...',
    musicianParagraphs: [
        'Francisco studied with recognized teachers from his native country such as: Amelia Salazar and Mariana Ortiz. Finally concluding his vocal training with the Spanish-Venezuelan tenor Alain Damas.',
        'He received masterclass of important figures of his native country and abroad, such as: Nicola Pisaniello (Italy), Isabel Palacios, Luigi Sciamanna, Francisco Salazar, Giovanni Reali and Carlos Sánchez Torrealba. Being always praised for his expressiveness and musicianship as well for his careful review of the score.',
        'He made his debut on the year 2011, and from then on, highlights of his musical career have been: Mass in G Major by Schubert, Magnificat in B flat by Francesco Durante, Choral Fantasy by Beethoven, Caracas’ Baroque Opera Festival of 2014 with Monteverdi’s Orfeo, Kaffeekantate by J.S, Bach, MarkusPassion by Reinhard Keiser & Requiem by Mozart. On distinguished theaters and auditoriums of Venezuela.',
        'During his stay in China he has recorded several tracks for performances on the UESTC and participated on the program “The Foreigner’s Sing Sichuan Opera” (2017), where he made a solo at the 锦江剧场. Currently he is a member of the Chengdu Philharmonic Choir (成都爱乐合唱团).'
    ],
    coderTitle: 'As Software Engineer...',
    coderParagraphs: [
        'Francisco graduated as first of his class for his Bachelor Degree in Computer Science from the School of Cience and Technology of Carabobo University (Venezuela).',
        'Ex sunt nulla excepteur duis Lorem ut esse proident id quis. Cupidatat duis quis commodo eiusmod sit exercitation officia. Nisi ut et incididunt nisi duis dolore culpa aute aliquip aliquip.',
        'Lorem laboris anim esse id cillum nulla. Sunt amet velit consequat est do magna enim qui pariatur commodo velit consequat. Proident occaecat anim quis quis excepteur. Officia tempor voluptate exercitation dolor excepteur ipsum cupidatat.'
    ]
}

const techSkills = {
  languages: [
    {
      id: 1,
      title: 'JavaScript',
      percentage: 80,
      color: 'blue'
    },
    {
      id: 2,
      title: 'C/C++',
      percentage: 60,
      color: 'blue'
    },
    {
      id: 3,
      title: 'Python',
      percentage: 70,
      color: 'blue'
    }
  ],
  toolsFrameworks: [
    {
      id: 1,
      title: 'React',
      percentage: 80,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Azure Cloud',
      percentage: 90,
      color: 'blue'
    },
    {
      id: 3,
      title: 'Gitlab CI/CD',
      percentage: 75,
      color: 'blue'
    }
  ],
  education: [
    {
      id: 1,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Universidad_de_Carabobo.svg/183px-Universidad_de_Carabobo.svg.png',
      title: 'Universidad de Carabobo'
    },
    {
      id: 2,
      src: 'https://upload.wikimedia.org/wikipedia/en/6/6c/UESTC_xiaohui.png',
      title: 'University of Electronic Science and Technology of China'
    }
  ],
  certifications:[
    {
      id: 1,
      src: 'https://images.credly.com/size/680x680/images/649069f9-27f1-4d2b-92bc-c674bc67bd02/azure-solutions-architect-expert-600x600.png',
      title: 'Azure Solutions Architect Expert'
    },
    {
      id: 2,
      src: 'https://images.credly.com/size/680x680/images/a6ea4416-4f34-4a85-bc24-eb3fe32fd241/MCT-Microsoft_Certified_Trainer-600x600.png',
      title: 'Microsoft Certified Trainer'
    }
  ]
}

const artisticSkills = {
    title: 'Artistic Portfolio',
    galleryTitle: 'Photos',
    gallery: [
        {
          src: "https://scontent.fhkg3-1.fna.fbcdn.net/v/t1.18169-9/10541993_10152710284649894_7964100443084162009_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=174925&_nc_ohc=AZJH16qwnooAX8MHmtL&_nc_ht=scontent.fhkg3-1.fna&oh=1b48a836b252d701c78973695fe5c3b9&oe=61316A89",
          width: 4,
          height: 3.5
        },
        {
          src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
          width: 1,
          height: 1
        },
        {
          src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/PpOHJezOalU/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
          width: 4,
          height: 3
        }
    ],      
    videosTitle: 'Videos',
    videos: [
      {
        id: 'Dj-ZrkNqlrE',
        source: 'youtube'
      },
      {
        id: 'DwL5L-ze3i4',
        source: 'youtube'
      },
      {
        id: 'wTYFidXOGjQ',
        source: 'youtube'
      },
      {
        id: 'vSp4uVXey7w',
        source: 'youtube'
      }
    ],
    repertoireTitle: 'Repertoire',
    repertoire: [
        {
          id: 1,
          composer: 'Johann Sebastian Bach',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Johann_Sebastian_Bach.png/462px-Johann_Sebastian_Bach.png',
          works: [
            'Weinen, Klagen, Sorgen, Zagen, BWV 12',
            'Laß, Fürstin, laß noch einen Strahl, BWV 198',
            'Schweigt stille, plaudert nicht (Kaffeekantate), BWV 211',
            'Matthäus-Passion, BWV 244 (Arias, Evangelist)',
            'Johannes-Passion​, BWV 245 (Arias, Evangelist)'
          ]
        },
        {
          id: 2,
          composer: 'George Frideric Handel',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/George_Frideric_Handel_by_Balthasar_Denner.jpg/496px-George_Frideric_Handel_by_Balthasar_Denner.jpg',
          works: [
            'Giulio Cesare in Egitto, HWV 17 (Sesto)',
            'Tamerlano, HWV 18 (Bajazet)',
            'Rodelinda, regina de\' Longobardi, HWV 19 (Grimoaldo)',
            'Partenope, HWV 27 (Emilio)',
            'Ariodante, HWV 33 (Lurcanio)',
            'Il trionfo del Tempo e del Disinganno, HWV 46a (Tempo)',
            'La Resurrezione, HWV 47 (San Giovanni)',
            'Messiah, HWV 56'
          ]
        },
        {
          id: 3,
          composer: 'Wolfgang Amadeus Mozart',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Wolfgang-amadeus-mozart_1.jpg/468px-Wolfgang-amadeus-mozart_1.jpg',
          works: [
            'Mitridate, re di Ponto (Mitridate/Marzio)',
            'Ascanio in Alba (Aceste)',
            'Lucio Silla (Lucio Silla/Aufidio)',
            'Il Re Pastore (Alessandro)',
            'Il Sogno di Scipione (Publio)',
            'Idomeneo (Arbace, Idamante)',
            'Don Giovanni (Don Ottavio)',
            'Così fan tutte (Ferrando)',
            'Mass in C Minor',
            'Requiem in D Minor'
          ]
        },
        {
          id: 4,
          composer: 'Claudio Monteverdi',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Claudio_Monteverdi.jpg/495px-Claudio_Monteverdi.jpg',
          works: [
            'L\'Orfeo (Orfeo, Pastore)',
            'L\'Incoronazione di Poppea (Nerone)',
            'Il Combattimento di Tancredi e Clorinda (Testo)',
            'Madrigali'
          ]
        },
        {
          id: 5,
          composer: 'Christoph Willibald Gluck',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Joseph_Siffred_Duplessis_-_Christoph_Willibald_Gluck_-_Google_Art_Project.jpg/483px-Joseph_Siffred_Duplessis_-_Christoph_Willibald_Gluck_-_Google_Art_Project.jpg',
          works: [
            'Le Cinesi (Silango)',
            'Orphée et Eurydice (Orphée)'
          ]
        },
        {
          id: 6,
          composer: 'Various',
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Michael_Kelly_by_Adele_Romany.jpg',
          works: [
            'Antonio Salieri: La Passione di Gesù Cristo (Pietro)',
            'Reinhard Keiser: Markuspassion (Evangelist)',
            'Franz Schubert: Lieder',
            'Gabriel Fauré: Chansons',
            'Maurice Ravel: Chansons',
            'Francesco Paolo Tosti: Canzoni',
            'Francesco Durante: Magnificat'
          ]
        }
    ],
}



const data = {
    media: media,
    welcome: welcome,
    biography: biography,
    techSkills: techSkills,
    artisticSkills: artisticSkills
}

export default data