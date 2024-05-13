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
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/tranmautritamAvatar.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedBy: {
        user: "astronaut",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
  },
  {
    id: "de98bccc-4586-5476-bc0b-30e053274e80",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/tranmautritamAvatar.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedBy: {
        user: "astronaut",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
  },
  {
    id: "c7e2444c-b833-593f-9f0c-41d22f0e6309",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/tranmautritamAvatar.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedBy: {
        user: "astronaut",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
  },
  {
    id: "3a20b98d-3168-5783-8bef-f40eb8561f3e",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/tranmautritamAvatar.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedBy: {
        user: "astronaut",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
  },
  {
    id: "64357974-bbb2-506c-9b5b-d210b7c8977d",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/tranmautritamAvatar.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedBy: {
        user: "astronaut",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
  },
  {
    id: "03e07ba9-a6c0-5b01-9265-1a8308717dbd",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/tranmautritamAvatar.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedBy: {
        user: "astronaut",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
  },
  {
    id: "09b8e948-e537-5fbe-820e-e8c9f8582bf9",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/tranmautritamAvatar.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedBy: {
        user: "astronaut",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
  },
  {
    id: "f76c9f87-c9a9-59f8-80e6-614e5d9b1a5c",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Bunny",
    nftImg: "/images/item-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/tranmautritamAvatar.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedBy: {
        user: "astronaut",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
  },
  {
    id: "270c15c8-e303-5770-ae64-adf9184c8ef9",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/tranmautritamAvatar.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedBy: {
        user: "astronaut",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
  },
  {
    id: "7461d19f-b0df-586b-8e5a-14a019395de4",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/tranmautritamAvatar.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedBy: {
        user: "astronaut",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
  },
  {
    id: "832cb042-98ec-5ece-8be7-c89d1a8dcd13",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/tranmautritamAvatar.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedBy: {
        user: "astronaut",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
  },
  {
    id: "a5ee4263-3ec8-58cf-bdd9-e36a29a61a35",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/tranmautritamAvatar.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedBy: {
        user: "astronaut",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
  },
  {
    id: "59cadd83-104f-5895-8839-8277c6ff862a",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/tranmautritamAvatar.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedBy: {
        user: "astronaut",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
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
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/tranmautritamAvatar.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedBy: {
        user: "astronaut",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
  },
  {
    id: "ae22c974-54b4-54a1-a1fa-081697e6cfca",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/tranmautritamAvatar.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedBy: {
        user: "astronaut",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
  },
  {
    id: "e54b93c5-846f-53a9-b874-34dcd5aa4a9b",
    nftType: "items",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Gunny",
    nftImg: "/images/item-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    history: [
      {
        user: "@tranmautritam",
        date: "26.03.2022",
        time: "10:15am",
        userAvatar: "/images/tranmautritamAvatar.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedBy: {
        user: "astronaut",
        planet: "Earth",
      },
      created: "08.03.2022",
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
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

  const filteredItems = items.filter(
    (character) => character.id === passedCharacterId
  );

  if (filteredItems.length === 0) {
    res.status(400).send({ msg: "This character was not found" });
  }

  res.status(200).send(filteredItems);
});

export default router;
