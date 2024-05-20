import { Router } from "express";
import { query, validationResult } from "express-validator";

const router = Router();

const bundles = [
  {
    id: "c33fd051-a842-5ba8-b7c6-2bffaf956090",
    nftType: "bundles",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Combo",
    nftImg: "/images/combo-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedFor: ["/images/lumburr.png", "/images/astronaut.png"],
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
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
  },
  {
    id: "881befdd-d53c-501f-aaa7-5b324ab71d33",
    nftType: "bundles",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Combo",
    nftImg: "/images/combo-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedFor: ["/images/lumburr.png", "/images/astronaut.png"],
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
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
  },
  {
    id: "645020a9-b5d7-59e3-97fe-7ba0125b1d1f",
    nftType: "bundles",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Combo",
    nftImg: "/images/combo-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedFor: ["/images/lumburr.png", "/images/astronaut.png"],
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
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
  },
  {
    id: "3b06a358-585a-5a85-aa51-390d1c8e7e39",
    nftType: "bundles",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Combo",
    nftImg: "/images/combo-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedFor: ["/images/lumburr.png", "/images/astronaut.png"],
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
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
  },
  {
    id: "5fcd20bf-c6b6-56bb-bcc9-74e3ff9da77e",
    nftType: "bundles",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Combo",
    nftImg: "/images/combo-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedFor: ["/images/lumburr.png", "/images/astronaut.png"],
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
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
  },
  {
    id: "ead45871-9382-5e32-a8ab-7e25fab71661",
    nftType: "bundles",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Combo",
    nftImg: "/images/combo-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedFor: ["/images/lumburr.png", "/images/astronaut.png"],
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
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
  },
  {
    id: "2bc681a5-8591-57a8-8c26-7d7825bc0013",
    nftType: "bundles",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Combo",
    nftImg: "/images/combo-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedFor: ["/images/lumburr.png", "/images/astronaut.png"],
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
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
  },
  {
    id: "2a239060-032a-5381-bc2f-00ef77253efa",
    nftType: "bundles",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Combo",
    nftImg: "/images/combo-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedFor: ["/images/lumburr.png", "/images/astronaut.png"],
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
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
  },
  {
    id: "5836e7e6-bac0-58c1-8a28-5a95b6500ffb",
    nftType: "bundles",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Combo",
    nftImg: "/images/combo-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedFor: ["/images/lumburr.png", "/images/astronaut.png"],
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
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
  },
  {
    id: "f6dba365-0cb5-5d57-a46e-f7c830c79e51",
    nftType: "bundles",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Combo",
    nftImg: "/images/combo-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedFor: ["/images/lumburr.png", "/images/astronaut.png"],
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
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
  },
  {
    id: "86825d51-599b-5cc6-95b2-580deb6e8cd7",
    nftType: "bundles",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Combo",
    nftImg: "/images/combo-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedFor: ["/images/lumburr.png", "/images/astronaut.png"],
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
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
  },
  {
    id: "3e161865-a787-5cf6-a1d8-fd525fa87e66",
    nftType: "bundles",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Combo",
    nftImg: "/images/combo-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedFor: ["/images/lumburr.png", "/images/astronaut.png"],
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
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
  },
  {
    id: "4f7ec7ba-9d10-5b4b-8968-fa19a562b190",
    nftType: "bundles",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Combo",
    nftImg: "/images/combo-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedFor: ["/images/lumburr.png", "/images/astronaut.png"],
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
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
  },
  {
    id: "35e3805a-f3e5-56b6-99e0-be838e85cb87",
    nftType: "bundles",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Combo",
    nftImg: "/images/combo-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedFor: ["/images/lumburr.png", "/images/astronaut.png"],
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
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
  },
  {
    id: "892673e2-ddda-56c7-9c95-262b609e8760",
    nftType: "bundles",
    nftId: "078928",
    nftEthPrice: 0.1,
    nftName: "Combo",
    nftImg: "/images/combo-1.png",
    nftTrait: "new",
    nftLevelRequirement: 5,
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      usedFor: ["/images/lumburr.png", "/images/astronaut.png"],
      specification: {
        ammo: 200,
        speed: "1km/s",
        firingRange: "3km",
        reuse: "no",
        waterproof: "yes",
        fireResistant: "unknown",
      },
    },
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
  },
];

router.get("/api/bundles", (req, res) => {
  if (req.query.search) {
    const limit = 5;

    const nextSearchIndex = req.query.nextSearchIndex;

    const query = req.query.search;

    let lastIndex = req.query.page;

    let bundlesWithQuery = [];

    for (let i = nextSearchIndex; i < bundles.length; i++) {
      if (bundlesWithQuery.length === 5) break;

      if (
        bundles[i].nftName.toLowerCase().includes(query.toLowerCase()) &&
        bundlesWithQuery.length <= limit - 1
      ) {
        bundlesWithQuery.push(bundles[i]);
        lastIndex = i;
      }
    }

    return res.json({
      nfts: bundlesWithQuery,
      nextSearchIndex: lastIndex + 1,
    });
  }

  const limit = 5;

  const page = req.query.page - 1;

  return res.json(
    bundles.filter(
      (_, index) => index >= page * limit && index <= page * limit + limit - 1
    )
  );
});

router.get("/api/bundles/:id", (req, res) => {
  const passedCharacterId = req.params.id;

  const filteredBundles = bundles.find(
    (character) => character.id === passedCharacterId
  );

  if (filteredBundles.length === 0) {
    res.status(400).send({ msg: "This character was not found" });
  }

  res.status(200).send(filteredBundles);
});

export default router;