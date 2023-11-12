export const pois = [
  {
    id: "b1761545-2b75-48d3-b555-22b01082616b", // replaced by db's _id later on
    type: "sports",
    location: {
      geometry: {
        type: "point",
        coordinates: [7.0973271268, 50.7203277288],
      },
      adress: {
        street: "Kaiserstraße",
        housenumber: "10",
        postcode: "52064",
        city: "Aachen",
      },
      hint: "Eingang über Hofdurchgang ecke Gartenstraße",
    },
    properties: {
      name: "Spiel und Sportplatz Innenstadt",
      description: "schöner Bolzplatz",
      devices: [
        "rutsche",
        "Klettergerüst",
        "pull-up Stange",
        "TrimmDichPfad",
        "Tennisfeld",
        "basketballplatz",
      ],
      sports: [
        "basketball",
        "tennis",
        "calisthenics",
        "endurance",
        "power",
        "mobility",
      ],
      locationAccessible: false,
      devicesAccessible: [""],
      communityHint: "", // service-number of the corresponding city's service for sport locations
    },
    events: {
      date: "August 19, 2023 13:15:30",
      dateEnd: "August 19, 2023 15:15:30",
      title: "Basketball",
      description:
        "Wir spielen Basketball. Sind zu dritt und suchen noch Mitspieler",
      createdBy: {
        name: "testuser",
        userId: "b1761545-2b75-48d3-b555-22b0108261803", // set by auth later on
      },
    },
  },
  /* {
    id: "b1761545-2b75-48d3-b555-22b01082618a", // replaced by db's _id later on
    type: "sports",
    location: {
      geometry: {
        type: "point",
        coordinates: [7.0973271268, 50.7203277288],
      },
      adress: {
        street: "Kaiserstraße",
        housenumber: "10",
        postcode: "52064",
        city: "Aachen",
      },
      hint: "Eingang über Hofdurchgang ecke Gartenstraße",
    },
    properties: {
      name: "Spiel und Sportplatz Zentrum",
      description: "tolle Rutsche",
      devices: [
        "rutsche",
        "Klettergerüst",
        "pull-up Stange",
        "TrimmDichPfad",
        "Tennisfeld",
        "basketballplatz",
      ],
      sports: [
        "basketball",
        "tennis",
        "calisthenics",
        "endurance",
        "power",
        "mobility",
      ],
      locationAccessible: true,
      devicesAccessible: [""],
      communityHint: "", // service-number of the corresponding city's service for sport locations
    },
    events: {
      date: "August 19, 2023 13:15:30",
      dateEnd: "August 19, 2023 15:15:30",
      title: "Basketball",
      description:
        "Wir spielen Basketball. Sind zu dritt und suchen noch Mitspieler",
      createdBy: {
        name: "testuser",
        userId: "b1761545-2b75-48d3-b555-22b0108261803", // set by auth later on
      },
    },
  }, */
];
