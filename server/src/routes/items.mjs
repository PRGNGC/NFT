import { Router } from "express";
import { query, validationResult } from "express-validator";

const router = Router();

const items = [
  {
    id: "5d257678-ed0b-5c44-8def-225e31830716",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-1.png",
    nftTrait: "new",
    similarNfts: [
      "de98bccc-4586-5476-bc0b-30e053274e80",
      "c7e2444c-b833-593f-9f0c-41d22f0e6309",
      "3a20b98d-3168-5783-8bef-f40eb8561f3e",
      "64357974-bbb2-506c-9b5b-d210b7c8977d",
      "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    ],
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-2.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/avatar-7.png",
      },
      usedBy: {
        user: "Astronaut",
        userImg: "/images/character-3.png",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: { field: "Ammo", value: 200, img: "/images/stat-1.png" },
        speed: { field: "Speed", value: "1km/s", img: "/images/stat-6.png" },
        firingRange: {
          field: "Firing range",
          value: "3km",
          img: "/images/stat-6.png",
        },
        reuse: { field: "Reuse", value: "No", img: "/images/stat-5.png" },
        waterproof: {
          field: "Waterproof",
          value: "Yes",
          img: "/images/stat-3.png",
        },
        fireResistant: {
          field: "Fire resistant",
          value: "Unknown",
          img: "/images/stat-5.png",
        },
      },
    },
  },
  {
    id: "de98bccc-4586-5476-bc0b-30e053274e80",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-2.png",
    nftTrait: "new",
    similarNfts: [
      "de98bccc-4586-5476-bc0b-30e053274e80",
      "c7e2444c-b833-593f-9f0c-41d22f0e6309",
      "3a20b98d-3168-5783-8bef-f40eb8561f3e",
      "64357974-bbb2-506c-9b5b-d210b7c8977d",
      "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    ],
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-5.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/avatar-6.png",
      },
      usedBy: {
        user: "Aastronaut",
        userImg: "/images/character-8.png",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: { field: "Ammo", value: 200, img: "/images/stat-5.png" },
        speed: { field: "Speed", value: "1km/s", img: "/images/stat-2.png" },
        firingRange: {
          field: "Firing range",
          value: "3km",
          img: "/images/stat-1.png",
        },
        reuse: { field: "Reuse", value: "No", img: "/images/stat-6.png" },
        waterproof: {
          field: "Waterproof",
          value: "Yes",
          img: "/images/stat-6.png",
        },
        fireResistant: {
          field: "Fire resistant",
          value: "Unknown",
          img: "/images/stat-1.png",
        },
      },
    },
  },
  {
    id: "c7e2444c-b833-593f-9f0c-41d22f0e6309",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-3.png",
    nftTrait: "new",
    similarNfts: [
      "de98bccc-4586-5476-bc0b-30e053274e80",
      "c7e2444c-b833-593f-9f0c-41d22f0e6309",
      "3a20b98d-3168-5783-8bef-f40eb8561f3e",
      "64357974-bbb2-506c-9b5b-d210b7c8977d",
      "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    ],
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-8.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/avatar-8.png",
      },
      usedBy: {
        user: "Aastronaut",
        userImg: "/images/character-2.png",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: { field: "Ammo", value: 200, img: "/images/stat-4.png" },
        speed: { field: "Speed", value: "1km/s", img: "/images/stat-6.png" },
        firingRange: {
          field: "Firing range",
          value: "3km",
          img: "/images/stat-4.png",
        },
        reuse: { field: "Reuse", value: "No", img: "/images/stat-6.png" },
        waterproof: {
          field: "Waterproof",
          value: "Yes",
          img: "/images/stat-5.png",
        },
        fireResistant: {
          field: "Fire resistant",
          value: "Unknown",
          img: "/images/stat-5.png",
        },
      },
    },
  },
  {
    id: "3a20b98d-3168-5783-8bef-f40eb8561f3e",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-4.png",
    nftTrait: "new",
    similarNfts: [
      "de98bccc-4586-5476-bc0b-30e053274e80",
      "c7e2444c-b833-593f-9f0c-41d22f0e6309",
      "3a20b98d-3168-5783-8bef-f40eb8561f3e",
      "64357974-bbb2-506c-9b5b-d210b7c8977d",
      "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    ],
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-9.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/avatar-7.png",
      },
      usedBy: {
        user: "Aastronaut",
        userImg: "/images/character-6.png",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: { field: "Ammo", value: 200, img: "/images/stat-4.png" },
        speed: { field: "Speed", value: "1km/s", img: "/images/stat-2.png" },
        firingRange: {
          field: "Firing range",
          value: "3km",
          img: "/images/stat-3.png",
        },
        reuse: { field: "Reuse", value: "No", img: "/images/stat-6.png" },
        waterproof: {
          field: "Waterproof",
          value: "Yes",
          img: "/images/stat-5.png",
        },
        fireResistant: {
          field: "Fire resistant",
          value: "Unknown",
          img: "/images/stat-6.png",
        },
      },
    },
  },
  {
    id: "64357974-bbb2-506c-9b5b-d210b7c8977d",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-5.png",
    nftTrait: "new",
    similarNfts: [
      "de98bccc-4586-5476-bc0b-30e053274e80",
      "c7e2444c-b833-593f-9f0c-41d22f0e6309",
      "3a20b98d-3168-5783-8bef-f40eb8561f3e",
      "64357974-bbb2-506c-9b5b-d210b7c8977d",
      "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    ],
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-3.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/avatar-5.png",
      },
      usedBy: {
        user: "Aastronaut",
        userImg: "/images/character-1.png",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: { field: "Ammo", value: 200, img: "/images/stat-4.png" },
        speed: { field: "Speed", value: "1km/s", img: "/images/stat-6.png" },
        firingRange: {
          field: "Firing range",
          value: "3km",
          img: "/images/stat-4.png",
        },
        reuse: { field: "Reuse", value: "No", img: "/images/stat-2.png" },
        waterproof: {
          field: "Waterproof",
          value: "Yes",
          img: "/images/stat-6.png",
        },
        fireResistant: {
          field: "Fire resistant",
          value: "Unknown",
          img: "/images/stat-6.png",
        },
      },
    },
  },
  {
    id: "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-6.png",
    nftTrait: "new",
    similarNfts: [
      "de98bccc-4586-5476-bc0b-30e053274e80",
      "c7e2444c-b833-593f-9f0c-41d22f0e6309",
      "3a20b98d-3168-5783-8bef-f40eb8561f3e",
      "64357974-bbb2-506c-9b5b-d210b7c8977d",
      "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    ],
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-6.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/avatar-2.png",
      },
      usedBy: {
        user: "Aastronaut",
        userImg: "/images/character-6.png",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: { field: "Ammo", value: 200, img: "/images/stat-4.png" },
        speed: { field: "Speed", value: "1km/s", img: "/images/stat-3.png" },
        firingRange: {
          field: "Firing range",
          value: "3km",
          img: "/images/stat-4.png",
        },
        reuse: { field: "Reuse", value: "No", img: "/images/stat-1.png" },
        waterproof: {
          field: "Waterproof",
          value: "Yes",
          img: "/images/stat-1.png",
        },
        fireResistant: {
          field: "Fire resistant",
          value: "Unknown",
          img: "/images/stat-3.png",
        },
      },
    },
  },
  {
    id: "09b8e948-e537-5fbe-820e-e8c9f8582bf9",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-7.png",
    nftTrait: "new",
    similarNfts: [
      "de98bccc-4586-5476-bc0b-30e053274e80",
      "c7e2444c-b833-593f-9f0c-41d22f0e6309",
      "3a20b98d-3168-5783-8bef-f40eb8561f3e",
      "64357974-bbb2-506c-9b5b-d210b7c8977d",
      "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    ],
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-8.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/avatar-9.png",
      },
      usedBy: {
        user: "Aastronaut",
        userImg: "/images/character-6.png",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: { field: "Ammo", value: 200, img: "/images/stat-4.png" },
        speed: { field: "Speed", value: "1km/s", img: "/images/stat-6.png" },
        firingRange: {
          field: "Firing range",
          value: "3km",
          img: "/images/stat-5.png",
        },
        reuse: { field: "Reuse", value: "No", img: "/images/stat-6.png" },
        waterproof: {
          field: "Waterproof",
          value: "Yes",
          img: "/images/stat-2.png",
        },
        fireResistant: {
          field: "Fire resistant",
          value: "Unknown",
          img: "/images/stat-4.png",
        },
      },
    },
  },
  {
    id: "f76c9f87-c9a9-59f8-80e6-614e5d9b1a5c",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Bunny",
    nftImg: "/images/item-8.png",
    nftTrait: "new",
    similarNfts: [
      "de98bccc-4586-5476-bc0b-30e053274e80",
      "c7e2444c-b833-593f-9f0c-41d22f0e6309",
      "3a20b98d-3168-5783-8bef-f40eb8561f3e",
      "64357974-bbb2-506c-9b5b-d210b7c8977d",
      "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    ],
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-1.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/avatar-8.png",
      },
      usedBy: {
        user: "Aastronaut",
        userImg: "/images/character-2.png",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: { field: "Ammo", value: 200, img: "/images/stat-4.png" },
        speed: { field: "Speed", value: "1km/s", img: "/images/stat-4.png" },
        firingRange: {
          field: "Firing range",
          value: "3km",
          img: "/images/stat-3.png",
        },
        reuse: { field: "Reuse", value: "No", img: "/images/stat-6.png" },
        waterproof: {
          field: "Waterproof",
          value: "Yes",
          img: "/images/stat-5.png",
        },
        fireResistant: {
          field: "Fire resistant",
          value: "Unknown",
          img: "/images/stat-4.png",
        },
      },
    },
  },
  {
    id: "270c15c8-e303-5770-ae64-adf9184c8ef9",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-9.png",
    nftTrait: "new",
    similarNfts: [
      "de98bccc-4586-5476-bc0b-30e053274e80",
      "c7e2444c-b833-593f-9f0c-41d22f0e6309",
      "3a20b98d-3168-5783-8bef-f40eb8561f3e",
      "64357974-bbb2-506c-9b5b-d210b7c8977d",
      "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    ],
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-4.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/avatar-1.png",
      },
      usedBy: {
        user: "Aastronaut",
        userImg: "/images/character-9.png",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: { field: "Ammo", value: 200, img: "/images/stat-2.png" },
        speed: { field: "Speed", value: "1km/s", img: "/images/stat-1.png" },
        firingRange: {
          field: "Firing range",
          value: "3km",
          img: "/images/stat-1.png",
        },
        reuse: { field: "Reuse", value: "No", img: "/images/stat-5.png" },
        waterproof: {
          field: "Waterproof",
          value: "Yes",
          img: "/images/stat-6.png",
        },
        fireResistant: {
          field: "Fire resistant",
          value: "Unknown",
          img: "/images/stat-6.png",
        },
      },
    },
  },
  {
    id: "7461d19f-b0df-586b-8e5a-14a019395de4",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-10.png",
    nftTrait: "new",
    similarNfts: [
      "de98bccc-4586-5476-bc0b-30e053274e80",
      "c7e2444c-b833-593f-9f0c-41d22f0e6309",
      "3a20b98d-3168-5783-8bef-f40eb8561f3e",
      "64357974-bbb2-506c-9b5b-d210b7c8977d",
      "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    ],
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-6.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/avatar-9.png",
      },
      usedBy: {
        user: "Aastronaut",
        userImg: "/images/character-6.png",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: { field: "Ammo", value: 200, img: "/images/stat-4.png" },
        speed: { field: "Speed", value: "1km/s", img: "/images/stat-6.png" },
        firingRange: {
          field: "Firing range",
          value: "3km",
          img: "/images/stat-2.png",
        },
        reuse: { field: "Reuse", value: "No", img: "/images/stat-3.png" },
        waterproof: {
          field: "Waterproof",
          value: "Yes",
          img: "/images/stat-6.png",
        },
        fireResistant: {
          field: "Fire resistant",
          value: "Unknown",
          img: "/images/stat-1.png",
        },
      },
    },
  },
  {
    id: "832cb042-98ec-5ece-8be7-c89d1a8dcd13",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-11.png",
    nftTrait: "new",
    similarNfts: [
      "de98bccc-4586-5476-bc0b-30e053274e80",
      "c7e2444c-b833-593f-9f0c-41d22f0e6309",
      "3a20b98d-3168-5783-8bef-f40eb8561f3e",
      "64357974-bbb2-506c-9b5b-d210b7c8977d",
      "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    ],
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-8.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/avatar-1.png",
      },
      usedBy: {
        user: "Aastronaut",
        userImg: "/images/character-4.png",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: { field: "Ammo", value: 200, img: "/images/stat-6.png" },
        speed: { field: "Speed", value: "1km/s", img: "/images/stat-2.png" },
        firingRange: {
          field: "Firing range",
          value: "3km",
          img: "/images/stat-2.png",
        },
        reuse: { field: "Reuse", value: "No", img: "/images/stat-1.png" },
        waterproof: {
          field: "Waterproof",
          value: "Yes",
          img: "/images/stat-2.png",
        },
        fireResistant: {
          field: "Fire resistant",
          value: "Unknown",
          img: "/images/stat-6.png",
        },
      },
    },
  },
  {
    id: "a5ee4263-3ec8-58cf-bdd9-e36a29a61a35",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-12.png",
    nftTrait: "new",
    similarNfts: [
      "de98bccc-4586-5476-bc0b-30e053274e80",
      "c7e2444c-b833-593f-9f0c-41d22f0e6309",
      "3a20b98d-3168-5783-8bef-f40eb8561f3e",
      "64357974-bbb2-506c-9b5b-d210b7c8977d",
      "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    ],
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-7.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/avatar-9.png",
      },
      usedBy: {
        user: "Aastronaut",
        userImg: "/images/character-9.png",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: { field: "Ammo", value: 200, img: "/images/stat-3.png" },
        speed: { field: "Speed", value: "1km/s", img: "/images/stat-6.png" },
        firingRange: {
          field: "Firing range",
          value: "3km",
          img: "/images/stat-3.png",
        },
        reuse: { field: "Reuse", value: "No", img: "/images/stat-5.png" },
        waterproof: {
          field: "Waterproof",
          value: "Yes",
          img: "/images/stat-6.png",
        },
        fireResistant: {
          field: "Fire resistant",
          value: "Unknown",
          img: "/images/stat-3.png",
        },
      },
    },
  },
  {
    id: "59cadd83-104f-5895-8839-8277c6ff862a",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-13.png",
    nftTrait: "new",
    similarNfts: [
      "de98bccc-4586-5476-bc0b-30e053274e80",
      "c7e2444c-b833-593f-9f0c-41d22f0e6309",
      "3a20b98d-3168-5783-8bef-f40eb8561f3e",
      "64357974-bbb2-506c-9b5b-d210b7c8977d",
      "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    ],
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-8.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/avatar-8.png",
      },
      usedBy: {
        user: "Aastronaut",
        userImg: "/images/character-3.png",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: { field: "Ammo", value: 200, img: "/images/stat-3.png" },
        speed: { field: "Speed", value: "1km/s", img: "/images/stat-3.png" },
        firingRange: {
          field: "Firing range",
          value: "3km",
          img: "/images/stat-2.png",
        },
        reuse: { field: "Reuse", value: "No", img: "/images/stat-1.png" },
        waterproof: {
          field: "Waterproof",
          value: "Yes",
          img: "/images/stat-2.png",
        },
        fireResistant: {
          field: "Fire resistant",
          value: "Unknown",
          img: "/images/stat-2.png",
        },
      },
    },
  },
  {
    id: "a461ad06-7109-5dca-953e-f5ebeecf1c5b",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-1.png",
    nftTrait: "new",
    similarNfts: [
      "de98bccc-4586-5476-bc0b-30e053274e80",
      "c7e2444c-b833-593f-9f0c-41d22f0e6309",
      "3a20b98d-3168-5783-8bef-f40eb8561f3e",
      "64357974-bbb2-506c-9b5b-d210b7c8977d",
      "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    ],
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-9.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/avatar-6.png",
      },
      usedBy: {
        user: "Aastronaut",
        userImg: "/images/character-7.png",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: { field: "Ammo", value: 200, img: "/images/stat-1.png" },
        speed: { field: "Speed", value: "1km/s", img: "/images/stat-2.png" },
        firingRange: {
          field: "Firing range",
          value: "3km",
          img: "/images/stat-3.png",
        },
        reuse: { field: "Reuse", value: "No", img: "/images/stat-6.png" },
        waterproof: {
          field: "Waterproof",
          value: "Yes",
          img: "/images/stat-4.png",
        },
        fireResistant: {
          field: "Fire resistant",
          value: "Unknown",
          img: "/images/stat-1.png",
        },
      },
    },
  },
  {
    id: "ae22c974-54b4-54a1-a1fa-081697e6cfca",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-2.png",
    nftTrait: "new",
    similarNfts: [
      "de98bccc-4586-5476-bc0b-30e053274e80",
      "c7e2444c-b833-593f-9f0c-41d22f0e6309",
      "3a20b98d-3168-5783-8bef-f40eb8561f3e",
      "64357974-bbb2-506c-9b5b-d210b7c8977d",
      "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    ],
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-1.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/avatar-6.png",
      },
      usedBy: {
        user: "Aastronaut",
        userImg: "/images/character-4.png",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: { field: "Ammo", value: 200, img: "/images/stat-3.png" },
        speed: { field: "Speed", value: "1km/s", img: "/images/stat-5.png" },
        firingRange: {
          field: "Firing range",
          value: "3km",
          img: "/images/stat-1.png",
        },
        reuse: { field: "Reuse", value: "No", img: "/images/stat-5.png" },
        waterproof: {
          field: "Waterproof",
          value: "Yes",
          img: "/images/stat-2.png",
        },
        fireResistant: {
          field: "Fire resistant",
          value: "Unknown",
          img: "/images/stat-3.png",
        },
      },
    },
  },
  {
    id: "e54b93c5-846f-53a9-b874-34dcd5aa4a9b",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-3.png",
    nftTrait: "new",
    similarNfts: [
      "de98bccc-4586-5476-bc0b-30e053274e80",
      "c7e2444c-b833-593f-9f0c-41d22f0e6309",
      "3a20b98d-3168-5783-8bef-f40eb8561f3e",
      "64357974-bbb2-506c-9b5b-d210b7c8977d",
      "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    ],
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-5.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/avatar-3.png",
      },
      usedBy: {
        user: "Aastronaut",
        userImg: "/images/character-6.png",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: { field: "Ammo", value: 200, img: "/images/stat-6.png" },
        speed: { field: "Speed", value: "1km/s", img: "/images/stat-2.png" },
        firingRange: {
          field: "Firing range",
          value: "3km",
          img: "/images/stat-1.png",
        },
        reuse: { field: "Reuse", value: "No", img: "/images/stat-5.png" },
        waterproof: {
          field: "Waterproof",
          value: "Yes",
          img: "/images/stat-6.png",
        },
        fireResistant: {
          field: "Fire resistant",
          value: "Unknown",
          img: "/images/stat-5.png",
        },
      },
    },
  },
];

router.get("/api/items", (req, res) => {
  if (req.query.search) {
    const limit = 5;

    const nextSearchIndex = req.query.nextSearchIndex;

    const query = req.query.search;

    let lastIndex = req.query.page;

    let itemsWithQuery = [];

    for (let i = nextSearchIndex; i < items.length; i++) {
      if (itemsWithQuery.length === 5) break;

      if (
        items[i].nftName.toLowerCase().includes(query.toLowerCase()) &&
        itemsWithQuery.length <= limit - 1
      ) {
        itemsWithQuery.push(items[i]);
        lastIndex = i;
      }
    }

    return res.json({
      nfts: itemsWithQuery,
      nextSearchIndex: lastIndex + 1,
    });
  }

  const limit = 5;

  const page = req.query.page - 1;

  return res.json(
    items.filter(
      (_, index) => index >= page * limit && index <= page * limit + limit - 1
    )
  );
});

router.get("/api/items/:id", (req, res) => {
  const passedCharacterId = req.params.id;

  const filteredItems = items.find(
    (character) => character.id === passedCharacterId
  );

  if (filteredItems.length === 0) {
    res.status(400).send({ msg: "This character was not found" });
  }

  res.status(200).send(filteredItems);
});

router.post("/api/items/slider", (req, res) => {
  const { nfts } = req.body;
  console.log(nfts);

  return res.json(items.filter((item) => nfts.includes(item.id)));
});

export default router;
