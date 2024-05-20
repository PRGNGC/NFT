import { Router } from "express";
import { query, validationResult } from "express-validator";

const router = Router();

const planets = [
  {
    id: "81331d1a-8ce9-52cc-a51e-076d2b30ecd3",
    nftType: "planets",
    nftId: "078928",
    nftEthPrice: 3.54,
    nftName: "Mars",
    nftCoordinates: "Solar system: -15, +09, +89",
    nftImg: "/images/planet-1.png",
    nftTrait: "new",
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
        owner: "UI8 Team",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      found: "08.03.2022",
      specification: {
        residents: 10000,
        soldiers: 22,
        wood: 600,
        gold: 100,
        iron: 200,
        stone: "fire",
      },
    },
  },
  {
    id: "27285132-7508-5495-a672-26b47efd6671",
    nftType: "planets",
    nftId: "078928",
    nftEthPrice: 3.54,
    nftName: "Mars",
    nftCoordinates: "Solar system: -15, +09, +89",
    nftImg: "/images/planet-1.png",
    nftTrait: "new",
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
      found: "08.03.2022",
      specification: {
        residents: 10000,
        soldiers: 22,
        wood: 600,
        gold: 100,
        iron: 200,
        stone: "fire",
      },
    },
  },
  {
    id: "c803d661-877a-5012-8eed-ac8d815c07ea",
    nftType: "planets",
    nftId: "078928",
    nftEthPrice: 3.54,
    nftName: "Bars",
    nftCoordinates: "Solar system: -15, +09, +89",
    nftImg: "/images/planet-1.png",
    nftTrait: "new",
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
      found: "08.03.2022",
      specification: {
        residents: 10000,
        soldiers: 22,
        wood: 600,
        gold: 100,
        iron: 200,
        stone: "fire",
      },
    },
  },
  {
    id: "a1776410-b21d-5265-a0eb-2d1b8d064fd1",
    nftType: "planets",
    nftId: "078928",
    nftEthPrice: 3.54,
    nftName: "Mars",
    nftCoordinates: "Solar system: -15, +09, +89",
    nftImg: "/images/planet-1.png",
    nftTrait: "new",
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
      found: "08.03.2022",
      specification: {
        residents: 10000,
        soldiers: 22,
        wood: 600,
        gold: 100,
        iron: 200,
        stone: "fire",
      },
    },
  },
  {
    id: "5e7a8836-60b9-5ad6-931e-f746545c41cc",
    nftType: "planets",
    nftId: "078928",
    nftEthPrice: 3.54,
    nftName: "Mars",
    nftCoordinates: "Solar system: -15, +09, +89",
    nftImg: "/images/planet-1.png",
    nftTrait: "new",
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
      found: "08.03.2022",
      specification: {
        residents: 10000,
        soldiers: 22,
        wood: 600,
        gold: 100,
        iron: 200,
        stone: "fire",
      },
    },
  },
  {
    id: "e1517165-ed51-5aa1-ac6e-a5c599ee1f11",
    nftType: "planets",
    nftId: "078928",
    nftEthPrice: 3.54,
    nftName: "Mars",
    nftCoordinates: "Solar system: -15, +09, +89",
    nftImg: "/images/planet-1.png",
    nftTrait: "new",
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
      found: "08.03.2022",
      specification: {
        residents: 10000,
        soldiers: 22,
        wood: 600,
        gold: 100,
        iron: 200,
        stone: "fire",
      },
    },
  },
  {
    id: "9220a845-2c49-5b6d-aa7e-30ada95bfc64",
    nftType: "planets",
    nftId: "078928",
    nftEthPrice: 3.54,
    nftName: "Mars",
    nftCoordinates: "Solar system: -15, +09, +89",
    nftImg: "/images/planet-1.png",
    nftTrait: "new",
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
      found: "08.03.2022",
      specification: {
        residents: 10000,
        soldiers: 22,
        wood: 600,
        gold: 100,
        iron: 200,
        stone: "fire",
      },
    },
  },
  {
    id: "3b13e6b4-b714-5c33-b169-5a304f5df0c0",
    nftType: "planets",
    nftId: "078928",
    nftEthPrice: 3.54,
    nftName: "Mars",
    nftCoordinates: "Solar system: -15, +09, +89",
    nftImg: "/images/planet-1.png",
    nftTrait: "new",
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
      found: "08.03.2022",
      specification: {
        residents: 10000,
        soldiers: 22,
        wood: 600,
        gold: 100,
        iron: 200,
        stone: "fire",
      },
    },
  },
  {
    id: "523ac485-7024-5514-ae09-3f798b3a06e8",
    nftType: "planets",
    nftId: "078928",
    nftEthPrice: 3.54,
    nftName: "Mars",
    nftCoordinates: "Solar system: -15, +09, +89",
    nftImg: "/images/planet-1.png",
    nftTrait: "new",
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
      found: "08.03.2022",
      specification: {
        residents: 10000,
        soldiers: 22,
        wood: 600,
        gold: 100,
        iron: 200,
        stone: "fire",
      },
    },
  },
  {
    id: "bfa5343b-4ba8-59e1-87d2-b749888446ea",
    nftType: "planets",
    nftId: "078928",
    nftEthPrice: 3.54,
    nftName: "Mars",
    nftCoordinates: "Solar system: -15, +09, +89",
    nftImg: "/images/planet-1.png",
    nftTrait: "new",
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
      found: "08.03.2022",
      specification: {
        residents: 10000,
        soldiers: 22,
        wood: 600,
        gold: 100,
        iron: 200,
        stone: "fire",
      },
    },
  },
  {
    id: "f6d6d5ec-fe1b-5b7c-8db2-a48f365efbbe",
    nftType: "planets",
    nftId: "078928",
    nftEthPrice: 3.54,
    nftName: "Mars",
    nftCoordinates: "Solar system: -15, +09, +89",
    nftImg: "/images/planet-1.png",
    nftTrait: "new",
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
      found: "08.03.2022",
      specification: {
        residents: 10000,
        soldiers: 22,
        wood: 600,
        gold: 100,
        iron: 200,
        stone: "fire",
      },
    },
  },
  {
    id: "b6d05806-847f-5c53-b1f2-732d224b6004",
    nftType: "planets",
    nftId: "078928",
    nftEthPrice: 3.54,
    nftName: "Mars",
    nftCoordinates: "Solar system: -15, +09, +89",
    nftImg: "/images/planet-1.png",
    nftTrait: "new",
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
      found: "08.03.2022",
      specification: {
        residents: 10000,
        soldiers: 22,
        wood: 600,
        gold: 100,
        iron: 200,
        stone: "fire",
      },
    },
  },
  {
    id: "9fe097d4-d984-5b02-8330-da137a295f8f",
    nftType: "planets",
    nftId: "078928",
    nftEthPrice: 3.54,
    nftName: "Mars",
    nftCoordinates: "Solar system: -15, +09, +89",
    nftImg: "/images/planet-1.png",
    nftTrait: "new",
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
      found: "08.03.2022",
      specification: {
        residents: 10000,
        soldiers: 22,
        wood: 600,
        gold: 100,
        iron: 200,
        stone: "fire",
      },
    },
  },
  {
    id: "f43f7954-40b7-5738-8ff3-94b3c738d64c",
    nftType: "planets",
    nftId: "078928",
    nftEthPrice: 3.54,
    nftName: "Mars",
    nftCoordinates: "Solar system: -15, +09, +89",
    nftImg: "/images/planet-1.png",
    nftTrait: "new",
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
      found: "08.03.2022",
      specification: {
        residents: 10000,
        soldiers: 22,
        wood: 600,
        gold: 100,
        iron: 200,
        stone: "fire",
      },
    },
  },
  {
    id: "9ad96aee-5abd-5994-9ab4-c949de4022cb",
    nftType: "planets",
    nftId: "078928",
    nftEthPrice: 3.54,
    nftName: "Mars",
    nftCoordinates: "Solar system: -15, +09, +89",
    nftImg: "/images/planet-1.png",
    nftTrait: "new",
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
      found: "08.03.2022",
      specification: {
        residents: 10000,
        soldiers: 22,
        wood: 600,
        gold: 100,
        iron: 200,
        stone: "fire",
      },
    },
  },
];

router.get("/api/planets", (req, res) => {
  if (req.query.search) {
    const limit = 5;

    const nextSearchIndex = req.query.nextSearchIndex;
    console.log("router.get ~ nextSearchIndex:", nextSearchIndex);

    const query = req.query.search;
    console.log("router.get ~ query:", query);

    let lastIndex = req.query.page;

    let planetsWithQuery = [];

    for (let i = nextSearchIndex; i < planets.length; i++) {
      if (planetsWithQuery.length === 5) break;
      console.log("here");

      if (
        planets[i].nftName.toLowerCase().includes(query.toLowerCase()) &&
        planetsWithQuery.length <= limit - 1
      ) {
        console.log("in");
        planetsWithQuery.push(planets[i]);
        lastIndex = i;
      }
    }

    return res.json({
      nfts: planetsWithQuery,
      nextSearchIndex: lastIndex + 1,
    });
  }

  const limit = 5;

  const page = req.query.page - 1;

  return res.json(
    planets.filter(
      (_, index) => index >= page * limit && index <= page * limit + limit - 1
    )
  );
});

router.get("/api/planets/:id", (req, res) => {
  const passedCharacterId = req.params.id;

  const filteredPlanets = planets.find(
    (character) => character.id === passedCharacterId
  );

  if (filteredPlanets.length === 0) {
    res.status(400).send({ msg: "This character was not found" });
  }

  res.status(200).send(filteredPlanets);
});

export default router;