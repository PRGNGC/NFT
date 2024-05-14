import { Router } from "express";
import { query, validationResult } from "express-validator";

const router = Router();

const characters = [
  {
    id: "123",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Pumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new", "old"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "123",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Aumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "123",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Pumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "123",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Aumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "123",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Aumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "123",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Pumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "237b2463-0dc4-5016-aa7d-f06d108e0bed",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Bumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "17c5f1eb-cbe0-5cef-ba2e-088fb14f2930",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Cumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "123",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Pumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "6a0bd200-274e-5184-b12b-abd34f09d0cc",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Dumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "4e03079f-14db-542f-9f2e-471c76f4b10b",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Eumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "c9a3199b-782b-57ef-b15b-08600225fbea",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Fumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "123",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Pumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "b2fb9d1f-4f5f-5b24-8a30-ca7bbf55a2b2",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Gumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "1f2dde47-348f-5a5f-b5c7-63bde6fbf5e9",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Humburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "86e43803-7c5e-5e1a-87f7-83be3c7907cc",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Iumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "b05fc2ce-2d68-5877-8287-c62647ddbf56",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Jumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "f81ca2fe-af18-5b43-80a0-f2783f6eb853",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Kumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "f81ca2fe-af18-5b43-80a0-f2783f6eb853",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Kumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "f81ca2fe-af18-5b43-80a0-f2783f6eb853",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Kumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "f81ca2fe-af18-5b43-80a0-f2783f6eb853",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Kumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "f81ca2fe-af18-5b43-80a0-f2783f6eb853",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Kumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "a7557f4c-cf3b-5c87-8477-46480ba001a5",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Lumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "f31bed91-7f42-58ca-a56c-78d4e99f56e4",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Mumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "3f7b3dad-7eb2-5e79-ac77-534b55a0b2ec",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Numburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "b80005e7-0be6-573e-a981-a46d2e554d93",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Oumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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
    id: "b80005e7-0be6-573e-a981-a46d2e554d93",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Pumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "123",
        ownerImg: "/images/keithAvatar.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/miniMars.png",
      },
      created: "17.03.2022",
      specification: {
        level: 10,
        health: 101,
        strength: 800,
        morale: 100,
        mana: 200,
        gene: "fire",
      },
      property: {
        emotion: "happy",
        ears: "short",
        antennas: "normal",
        tail: "short",
        color: "purple",
        texture: "abstract",
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

router.get("/api/characters", (req, res) => {
  if (req.query.search) {
    const limit = 5;

    const nextSearchIndex = req.query.nextSearchIndex;

    const query = req.query.search;

    let lastIndex = req.query.page;

    let charactersWithQuery = [];

    for (let i = nextSearchIndex; i < characters.length; i++) {
      if (charactersWithQuery.length === 5) break;

      if (
        characters[i].nftName.toLowerCase().includes(query.toLowerCase()) &&
        charactersWithQuery.length <= limit - 1
      ) {
        charactersWithQuery.push(characters[i]);
        lastIndex = i;
      }
    }

    return res.json({
      nfts: charactersWithQuery,
      nextSearchIndex: lastIndex + 1,
    });
  }

  const limit = 5;

  const page = req.query.page - 1;

  return res.json(
    characters.filter(
      (_, index) => index >= page * limit && index <= page * limit + limit - 1
    )
  );
});

router.get("/api/characters/:id", (req, res) => {
  const passedCharacterId = req.params.id;

  const filteredCharacters = characters.find(
    (character) => character.id === passedCharacterId
  );

  if (filteredCharacters.length === 0) {
    return res.status(400).send({ msg: "This character was not found" });
  }

  return res.status(200).send(filteredCharacters);
});

export default router;
