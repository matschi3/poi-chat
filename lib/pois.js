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
      locationAccessible: false,
      devicesAccessible: [""],
      communityHint: "", // service-number of the corresponding city's service for sport locations
    },
    activities: {
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
    },
    assets: {
      mainImage: "",
      images: [],
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
  {
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
      locationAccessible: true,
      devicesAccessible: [""],
      communityHint: "", // service-number of the corresponding city's service for sport locations
    },
    activities: {
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
];

export const dummyPois = [
  {
    _id: "65c400c2528e39a84a926371",
    uuid: "d08df59a-c984-4c82-95f3-1d5f4a641288",
    categories: [
      {
        _id: "65ae55b74c0d081d41d101af",
        uuid: "8dfee3ae-f3b6-4996-b6c4-2099b8c5a208",
        name: "Sportplatz",
        description: "regulärer Sportplatz mit allerlei Möglichkeiten",
        assets: [
          {
            _id: "65ae49169ab028aa9e2d11c1",
            uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
            mainImage:
              "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
            images: [
              [
                "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
              ],
              [
                "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
              ],
            ],
          },
        ],
      },
    ],
    location: [
      {
        _id: "65c400c2528e39a84a92636b",
        uuid: "8f8b13ca-a65d-40f0-9985-8ad36c80095b",
        geometry: [
          {
            _id: "65c400c2528e39a84a926367",
            uuid: "5215170e-7d52-413e-b9e7-5303b7e20557",
            type: "point",
            coordinates: [[7.10394875504899], [50.7423876030921]],
            __v: 0,
          },
        ],
        adress: [
          {
            _id: "65c400c2528e39a84a926369",
            uuid: "0cfce974-4aee-47bc-b8dd-4a96b84f344f",
            street: "Teststr",
            housenumber: "14",
            postcode: "13057",
            city: "Ratteldorf",
            __v: 0,
          },
        ],
        hint: "testhinweis",
        __v: 0,
      },
    ],
    properties: [
      {
        _id: "65c400c2528e39a84a92636d",
        uuid: "42252018-e8d6-4e77-8325-2e75ab61f241",
        name: "[dummy] Sportplatz am Berg",
        description: "schöner sauberer Platz",
        seating: 6,
        seatingBackrest: 3,
        garbagecan: 2,
        locationAccessible: true,
        devicesAccessible: [],
        communityHint:
          "Servicenummer der Stadt x für Spiel und Sportplätze: +49 228 000 000",
        __v: 0,
      },
    ],
    activities: [
      {
        _id: "65c400c2528e39a84a92636f",
        uuid: "ae4f861d-ce3c-4d52-80ef-957a3bfd62ea",
        devices: [
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
        ],
        sports: [
          {
            _id: "65ae515f4c0d081d41d1019d",
            uuid: "f2e6337f-4c98-429c-b489-8fb29a68b7b1",
            name: "ExampleSports",
            description: "SportsDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae515f4c0d081d41d1019d",
            uuid: "f2e6337f-4c98-429c-b489-8fb29a68b7b1",
            name: "ExampleSports",
            description: "SportsDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae515f4c0d081d41d1019d",
            uuid: "f2e6337f-4c98-429c-b489-8fb29a68b7b1",
            name: "ExampleSports",
            description: "SportsDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
        ],
        __v: 0,
      },
    ],
    assets: [],
    events: [],
    __v: 0,
  },
  {
    _id: "65c4012e528e39a84a9263a1",
    uuid: "5c09fb8e-1555-41fb-8296-e32ef54e7dd7",
    categories: [
      {
        _id: "65ae55b74c0d081d41d101af",
        uuid: "8dfee3ae-f3b6-4996-b6c4-2099b8c5a208",
        name: "Sportplatz",
        description: "regulärer Sportplatz mit allerlei Möglichkeiten",
        assets: [
          {
            _id: "65ae49169ab028aa9e2d11c1",
            uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
            mainImage:
              "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
            images: [
              [
                "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
              ],
              [
                "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
              ],
            ],
          },
        ],
      },
    ],
    location: [
      {
        _id: "65c4012e528e39a84a92639b",
        uuid: "50e9082f-dbb8-4ec3-a5bd-51421888aac0",
        geometry: [
          {
            _id: "65c4012e528e39a84a926397",
            uuid: "31f3489c-8a4f-422c-a7ea-b54e5eac40ad",
            type: "point",
            coordinates: [[7.10393456739546], [50.7424050478925]],
            __v: 0,
          },
        ],
        adress: [
          {
            _id: "65c4012e528e39a84a926399",
            uuid: "2ab40600-429f-4f3e-9e7b-af36a13b9aa7",
            street: "Testweg",
            housenumber: "20",
            postcode: "20552",
            city: "Musterstedt",
            __v: 0,
          },
        ],
        hint: "Datenbankhinweis",
        __v: 0,
      },
    ],
    properties: [
      {
        _id: "65c4012e528e39a84a92639d",
        uuid: "277169b2-1e5b-449f-bb70-a6192b89ff68",
        name: "[dummy] Spielplatz Testweg",
        description: "unter Bäumen",
        seating: 20,
        seatingBackrest: 10,
        garbagecan: 1,
        locationAccessible: false,
        devicesAccessible: [],
        communityHint:
          "Servicenummer der Stadt x für Spiel und Sportplätze: +49 228 000 000",
        __v: 0,
      },
    ],
    activities: [
      {
        _id: "65c4012e528e39a84a92639f",
        uuid: "4c5f97b7-bf5d-4abe-ae42-ac8761ddaa30",
        devices: [
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
        ],
        sports: [
          {
            _id: "65ae515f4c0d081d41d1019d",
            uuid: "f2e6337f-4c98-429c-b489-8fb29a68b7b1",
            name: "ExampleSports",
            description: "SportsDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae515f4c0d081d41d1019d",
            uuid: "f2e6337f-4c98-429c-b489-8fb29a68b7b1",
            name: "ExampleSports",
            description: "SportsDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
        ],
        __v: 0,
      },
    ],
    assets: [],
    events: [],
    __v: 0,
  },
  {
    _id: "65c7fdcae861f6b4f5880600",
    uuid: "9e591c2e-69df-4263-857a-f0ce7ecec618",
    categories: [
      {
        _id: "65ae55b74c0d081d41d101af",
        uuid: "8dfee3ae-f3b6-4996-b6c4-2099b8c5a208",
        name: "Sportplatz",
        description: "regulärer Sportplatz mit allerlei Möglichkeiten",
        assets: [
          {
            _id: "65ae49169ab028aa9e2d11c1",
            uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
            mainImage:
              "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
            images: [
              [
                "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
              ],
              [
                "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
              ],
            ],
          },
        ],
      },
    ],
    location: [
      {
        _id: "65c7fdcae861f6b4f58805fa",
        uuid: "9c4179b2-3ce2-4d20-bb64-a1f8da7d5212",
        geometry: [
          {
            _id: "65c7fdcae861f6b4f58805f6",
            uuid: "7f1e0e9d-4baa-42c5-9cf7-6c9459bbd0f2",
            type: "n/a",
            coordinates: [],
            __v: 0,
          },
        ],
        adress: [
          {
            _id: "65c7fdcae861f6b4f58805f8",
            uuid: "4bbd05df-1c07-44ad-adf1-e873c0a8284a",
            street: "Rosenstraße",
            housenumber: "30",
            postcode: "53111",
            city: "Bonn",
            __v: 0,
          },
        ],
        hint: "testhinweis",
        __v: 0,
      },
    ],
    properties: [
      {
        _id: "65c7fdcae861f6b4f58805fc",
        uuid: "a7173d94-7089-4859-96dd-7fe0424ffd1e",
        name: "[dummy] DatenbankLocationNam",
        description: "The most stunning fish you will ever see",
        seating: 12,
        seatingBackrest: 11,
        garbagecan: 2,
        locationAccessible: false,
        devicesAccessible: [],
        communityHint:
          "Servicenummer der Stadt x für Spiel und Sportplätze: +49 228 000 000",
        __v: 0,
      },
    ],
    activities: [
      {
        _id: "65c7fdcae861f6b4f58805fe",
        uuid: "1281a9b9-3298-4a85-93d3-5729536a674f",
        devices: [
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
        ],
        sports: [
          {
            _id: "65ae515f4c0d081d41d1019d",
            uuid: "f2e6337f-4c98-429c-b489-8fb29a68b7b1",
            name: "ExampleSports",
            description: "SportsDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae515f4c0d081d41d1019d",
            uuid: "f2e6337f-4c98-429c-b489-8fb29a68b7b1",
            name: "ExampleSports",
            description: "SportsDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae515f4c0d081d41d1019d",
            uuid: "f2e6337f-4c98-429c-b489-8fb29a68b7b1",
            name: "ExampleSports",
            description: "SportsDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
        ],
        __v: 0,
      },
    ],
    assets: [],
    events: [],
    __v: 0,
  },
  {
    _id: "65cfeb2bc481625b6f941de7",
    uuid: "0ecc3bd1-fcb4-4efd-a255-6c92476ae5b1",
    categories: [
      {
        _id: "65b0eba6cf21379f90cffa0f",
        uuid: "bba1e952-3d89-4de0-8427-81d490922cab",
        name: "Spielplatz",
        description: "Spielplatz mit verschiedenen Geräten",
        assets: [
          {
            _id: "65ae49169ab028aa9e2d11c1",
            uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
            mainImage:
              "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
            images: [
              [
                "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
              ],
              [
                "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
              ],
            ],
          },
        ],
      },
    ],
    location: [
      {
        _id: "65cfeb2bc481625b6f941de1",
        uuid: "c5291f56-1a00-4729-ae58-194299d41423",
        geometry: [
          {
            _id: "65cfeb2bc481625b6f941ddd",
            uuid: "dd20be5e-574a-4341-a572-cf5cfd2e9a17",
            type: "point",
            coordinates: [[7.10400838693305], [50.7424092741217]],
            __v: 0,
          },
        ],
        adress: [
          {
            _id: "65cfeb2bc481625b6f941ddf",
            uuid: "452e18d2-04f3-491b-a5dc-fda60e2cecca",
            street: "Wartweg",
            housenumber: "11",
            postcode: "35390",
            city: "Gießen",
            __v: 0,
          },
        ],
        hint: "Hinweis",
        __v: 0,
      },
    ],
    properties: [
      {
        _id: "65cfeb2bc481625b6f941de3",
        uuid: "6b0c4fb8-c44c-44e3-9cbc-6daae862c91f",
        name: "[dummy] Bolzplatz Wartweg",
        description: "Beschreibung",
        seating: 12,
        seatingBackrest: 11,
        garbagecan: 2,
        locationAccessible: true,
        devicesAccessible: [],
        communityHint:
          "Servicenummer der Stadt x für Spiel und Sportplätze: +49 228 000 000",
        __v: 0,
      },
    ],
    activities: [
      {
        _id: "65cfeb2bc481625b6f941de5",
        uuid: "3ab1e9bb-1945-4ca2-a83a-ef731c2387bf",
        devices: [
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
        ],
        sports: [
          {
            _id: "65ae515f4c0d081d41d1019d",
            uuid: "f2e6337f-4c98-429c-b489-8fb29a68b7b1",
            name: "ExampleSports",
            description: "SportsDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae515f4c0d081d41d1019d",
            uuid: "f2e6337f-4c98-429c-b489-8fb29a68b7b1",
            name: "ExampleSports",
            description: "SportsDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae515f4c0d081d41d1019d",
            uuid: "f2e6337f-4c98-429c-b489-8fb29a68b7b1",
            name: "ExampleSports",
            description: "SportsDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
        ],
        __v: 0,
      },
    ],
    assets: [],
    events: [],
    __v: 0,
  },
  {
    _id: "65e651b60d5960bec7edcd30",
    uuid: "68d091b3-2a2a-4c14-9a9f-c3e9c27988aa",
    categories: [
      {
        _id: "65b0eba6cf21379f90cffa0f",
        uuid: "bba1e952-3d89-4de0-8427-81d490922cab",
        name: "Spielplatz",
        description: "Spielplatz mit verschiedenen Geräten",
        assets: [
          {
            _id: "65ae49169ab028aa9e2d11c1",
            uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
            mainImage:
              "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
            images: [
              [
                "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
              ],
              [
                "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
              ],
            ],
          },
        ],
      },
    ],
    location: [
      {
        _id: "65e651b60d5960bec7edcd2a",
        uuid: "db2f53c3-4cfc-45f3-aca7-26b4f41ee4c4",
        geometry: [
          {
            _id: "65e651b60d5960bec7edcd26",
            uuid: "8efe03ec-5f84-4bf8-8975-554a9c65b883",
            type: "point",
            coordinates: [[7.10395578272035], [50.7424033231615]],
            __v: 0,
          },
        ],
        adress: [
          {
            _id: "65e651b60d5960bec7edcd28",
            uuid: "197efdf7-b044-479d-8006-89cdad9dca66",
            street: "Testweg",
            housenumber: "35",
            postcode: "18057",
            city: "Rostock",
            __v: 0,
          },
        ],
        hint: "testhinweis",
        __v: 0,
      },
    ],
    properties: [
      {
        _id: "65e651b60d5960bec7edcd2c",
        uuid: "af13c39c-b15e-440e-adc0-ed6ac440a000",
        name: "[dummy] Spieli am Rathaus",
        description: "The most stunning fish you will ever see",
        seating: 12,
        seatingBackrest: 7,
        garbagecan: 0,
        locationAccessible: false,
        devicesAccessible: [],
        communityHint:
          "Servicenummer der Stadt x für Spiel und Sportplätze: +49 228 000 000",
        __v: 0,
      },
    ],
    activities: [
      {
        _id: "65e651b60d5960bec7edcd2e",
        uuid: "0d6ecbd5-b00b-411b-a722-bc2276a0c968",
        devices: [
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
        ],
        sports: [
          {
            _id: "65ae515f4c0d081d41d1019d",
            uuid: "f2e6337f-4c98-429c-b489-8fb29a68b7b1",
            name: "ExampleSports",
            description: "SportsDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae515f4c0d081d41d1019d",
            uuid: "f2e6337f-4c98-429c-b489-8fb29a68b7b1",
            name: "ExampleSports",
            description: "SportsDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
        ],
        __v: 0,
      },
    ],
    assets: [],
    events: [],
    __v: 0,
  },
  {
    _id: "65e65331225dbbd6640957ae",
    uuid: "7ba59115-7a15-4263-aa63-b0a48b7d49d7",
    categories: [
      {
        _id: "65b0eba6cf21379f90cffa0f",
        uuid: "bba1e952-3d89-4de0-8427-81d490922cab",
        name: "Spielplatz",
        description: "Spielplatz mit verschiedenen Geräten",
        assets: [
          {
            _id: "65ae49169ab028aa9e2d11c1",
            uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
            mainImage:
              "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
            images: [
              [
                "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
              ],
              [
                "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
              ],
            ],
          },
        ],
      },
    ],
    location: [
      {
        _id: "65e65331225dbbd6640957a8",
        uuid: "c0fc10ae-485d-4b27-b8b2-27caf7a34578",
        geometry: [
          {
            _id: "65e65331225dbbd6640957a4",
            uuid: "616e77da-e823-4e22-a9ba-97cb5e6428aa",
            type: "n/a",
            coordinates: [],
            __v: 0,
          },
        ],
        adress: [
          {
            _id: "65e65331225dbbd6640957a6",
            uuid: "b0628935-543e-476a-8514-2b25610c810c",
            street: "testweg",
            housenumber: "23",
            postcode: "18443",
            city: "Kölle",
            __v: 0,
          },
        ],
        hint: "testhinweis",
        __v: 0,
      },
    ],
    properties: [
      {
        _id: "65e65331225dbbd6640957aa",
        uuid: "71888326-25ad-4449-b14b-578ce70c51cb",
        name: "[dummy] test-name",
        description: "The most stunning fish you will ever see",
        seating: 12,
        seatingBackrest: 1,
        garbagecan: 0,
        locationAccessible: false,
        devicesAccessible: [],
        communityHint:
          "Servicenummer der Stadt x für Spiel und Sportplätze: +49 228 000 000",
        __v: 0,
      },
    ],
    activities: [
      {
        _id: "65e65331225dbbd6640957ac",
        uuid: "94542a22-bf41-4004-b3d1-51d4ba4bc455",
        devices: [
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae506f4c0d081d41d10197",
            uuid: "2b626326-9448-4931-8036-0fd195e74b3f",
            name: "ExampleDevice",
            description: "DeviceDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
        ],
        sports: [
          {
            _id: "65ae515f4c0d081d41d1019d",
            uuid: "f2e6337f-4c98-429c-b489-8fb29a68b7b1",
            name: "ExampleSports",
            description: "SportsDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
          {
            _id: "65ae515f4c0d081d41d1019d",
            uuid: "f2e6337f-4c98-429c-b489-8fb29a68b7b1",
            name: "ExampleSports",
            description: "SportsDescription",
            assets: [
              {
                _id: "65ae49169ab028aa9e2d11c1",
                uuid: "66033759-c5c5-44a0-9849-77bf3a662b42",
                mainImage:
                  "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                images: [
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                  [
                    "https://res.cloudinary.com/dn4pswuzt/image/upload/v1689263603/0e2f1d94b07d3ab7a7edced00.jpg",
                  ],
                ],
              },
            ],
          },
        ],
        __v: 0,
      },
    ],
    assets: [],
    events: [],
    createdAt: "2024-03-04T23:03:13.479Z",
    updatedAt: "2024-03-04T23:03:13.479Z",
    __v: 0,
  },
];
