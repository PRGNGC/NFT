import { Router } from "express";
import { query, validationResult } from "express-validator";

const router = Router();

const characters = [
  {
    id: "605d3484-f9c8-5508-ac1b-5a2976489a67",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Pumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new", "old"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "993b39f3-7943-56fc-8111-412050467257",
        ownerImg: "/images/avatar-6.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-8.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-3.png" },
        health: { field: "Health", value: 101, img: "/images/spec-1.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-4.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-5.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-1.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-5.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
    history: [
      {
        user: "@tranmautritam",
        date: "26.05.2022",
        time: "10:15am",
        userAvatar: "/images/avatar-6.png",
        actionType: "purchased",
        priceETH: "0.08",
      },
      {
        user: "@randomdash",
        date: "26.05.2022 ",
        time: "10:15am",
        userAvatar: "/images/avatar-5.png",
        actionType: "listed",
        priceETH: "0.08",
      },
    ],
  },
  {
    id: "d579bf66-c29d-58b7-9911-b94a0461ee1d",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Aumburr",
    nftImg: "/images/character-2.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "6dca908c-d1d3-54df-9807-b7c748ac1c3f",
        ownerImg: "/images/avatar-6.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-9.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-3.png" },
        health: { field: "Health", value: 101, img: "/images/spec-2.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-4.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-4.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-5.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-5.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Pumburr",
    nftImg: "/images/character-3.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "6e57e9e9-0889-5513-9a0d-1e728799cfff",
        ownerImg: "/images/avatar-1.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-9.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-1.png" },
        health: { field: "Health", value: 101, img: "/images/spec-6.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-4.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-1.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-3.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-6.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "4ea79d56-63da-51b6-b48d-29c36b9463fb",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Aumburr",
    nftImg: "/images/character-4.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "ce147fa9-a180-56d9-95fa-1eaaa130bcd9",
        ownerImg: "/images/avatar-4.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-8.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-1.png" },
        health: { field: "Health", value: 101, img: "/images/spec-3.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-6.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-6.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-4.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-2.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "c3aa586c-903b-5f36-b402-5fc323704589",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Aumburr",
    nftImg: "/images/character-5.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "0c1ca8c8-b412-5630-b36c-c76edc06c403",
        ownerImg: "/images/avatar-8.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-3.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-3.png" },
        health: { field: "Health", value: 101, img: "/images/spec-3.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-5.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-1.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-3.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-1.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Pumburr",
    nftImg: "/images/character-6.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "7df47ffd-d909-5341-8c6d-bf41bc639a51",
        ownerImg: "/images/avatar-1.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-6.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-4.png" },
        health: { field: "Health", value: 101, img: "/images/spec-3.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-6.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-6.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-3.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-3.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "89d3410a-1c38-571a-a4ea-b43dbba34e74",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Bumburr",
    nftImg: "/images/character-7.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "d14933c8-3ef1-598f-8f8c-a87711f02be1",
        ownerImg: "/images/avatar-1.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-7.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-4.png" },
        health: { field: "Health", value: 101, img: "/images/spec-3.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-1.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-2.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-3.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-5.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "0404866f-7f83-5450-8151-81ea0da1c79c",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Cumburr",
    nftImg: "/images/character-8.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "53964501-db91-59c1-900a-6bc0eaa1e58a",
        ownerImg: "/images/avatar-3.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-1.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-2.png" },
        health: { field: "Health", value: 101, img: "/images/spec-6.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-5.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-3.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-1.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-2.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "161e85a4-c242-5ddd-81ba-3d5103e566ff",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Pumburr",
    nftImg: "/images/character-9.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "5970c864-e8d0-5304-8c89-a1483d2fe645",
        ownerImg: "/images/avatar-6.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-5.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-3.png" },
        health: { field: "Health", value: 101, img: "/images/spec-4.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-6.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-2.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-6.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-5.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "a8ce50db-a924-5a62-95cb-5428fe82147e",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Dumburr",
    nftImg: "/images/character-10.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "5f6fb3dd-2f8a-50f6-bf01-df3b570088bb",
        ownerImg: "/images/avatar-8.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-3.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-6.png" },
        health: { field: "Health", value: 101, img: "/images/spec-3.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-4.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-5.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-4.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-1.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "6a98ee05-1831-5997-ba68-9d000e50cfc7",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Eumburr",
    nftImg: "/images/character-11.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "c481496e-14db-5b42-b315-02df2baf8c27",
        ownerImg: "/images/avatar-8.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-2.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-6.png" },
        health: { field: "Health", value: 101, img: "/images/spec-3.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-4.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-4.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-1.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-2.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "3ec5c39f-a5ff-5841-ae0a-ba0257322199",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Fumburr",
    nftImg: "/images/character-12.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "c06c23cf-d0f9-5a48-bd01-08dcf2d5ab7c",
        ownerImg: "/images/avatar-4.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-5.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-5.png" },
        health: { field: "Health", value: 101, img: "/images/spec-5.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-4.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-2.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-5.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-1.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "8dd61303-cc6a-5b12-9fdd-6c3773e559d6",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Pumburr",
    nftImg: "/images/character-13.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "95a16eaa-7e19-5472-8cb3-49d4a1ea0feb",
        ownerImg: "/images/avatar-9.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-5.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-2.png" },
        health: { field: "Health", value: 101, img: "/images/spec-3.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-6.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-2.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-5.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-2.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "6f2c31b8-3d52-5716-9b00-19df61d48602",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Gumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "fc0593bf-abb2-5280-92d0-5f2ca2da14e1",
        ownerImg: "/images/avatar-1.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-9.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-3.png" },
        health: { field: "Health", value: 101, img: "/images/spec-2.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-6.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-1.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-6.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-3.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "3367eef3-461e-511f-8c97-bafe42538f1f",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Humburr",
    nftImg: "/images/character-2.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "22c04f29-9a70-56f7-9f93-95e9143f71fe",
        ownerImg: "/images/avatar-6.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-9.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-1.png" },
        health: { field: "Health", value: 101, img: "/images/spec-6.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-3.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-4.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-2.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-5.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "6126a9ac-8af9-577a-9b88-5517f1eadf0b",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Iumburr",
    nftImg: "/images/character-3.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "54dd3ca3-b645-5ca3-945a-92e515f2d8cb",
        ownerImg: "/images/avatar-6.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-7.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-6.png" },
        health: { field: "Health", value: 101, img: "/images/spec-2.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-5.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-5.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-6.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-5.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "1597d723-bcdc-5d9f-a00a-35e4fd9fb89c",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Jumburr",
    nftImg: "/images/character-4.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "d97d4430-5329-5ca2-8ff9-a91aadf427c3",
        ownerImg: "/images/avatar-6.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-1.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-5.png" },
        health: { field: "Health", value: 101, img: "/images/spec-3.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-3.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-4.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-6.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-4.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "a2b5e1bb-3c3b-52c4-a01a-65f8a2a9cbf6",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Kumburr",
    nftImg: "/images/character-5.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "e4d78f37-75b9-537d-9df0-6441ffe62881",
        ownerImg: "/images/avatar-7.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-3.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-1.png" },
        health: { field: "Health", value: 101, img: "/images/spec-3.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-6.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-6.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-1.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-5.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "62cad027-f94b-55f9-be23-11ee31ec385b",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Kumburr",
    nftImg: "/images/character-6.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "4e0dc71b-add7-54a3-9be2-9716dcc3672e",
        ownerImg: "/images/avatar-6.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-1.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-3.png" },
        health: { field: "Health", value: 101, img: "/images/spec-4.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-5.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-3.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-6.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-5.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "3e8ab0e2-b150-5d78-92c4-8043566faa23",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Kumburr",
    nftImg: "/images/character-7.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "44b8606f-a268-5c0a-9602-7ff321f1cbb6",
        ownerImg: "/images/avatar-2.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-2.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-1.png" },
        health: { field: "Health", value: 101, img: "/images/spec-5.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-1.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-4.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-6.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-4.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "96531c49-6928-53f2-9dd3-125300f22e25",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Kumburr",
    nftImg: "/images/character-8.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "fbedd21f-4ea2-5af1-8024-8966dcb4b05b",
        ownerImg: "/images/avatar-1.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-9.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-3.png" },
        health: { field: "Health", value: 101, img: "/images/spec-2.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-4.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-5.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-5.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-6.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "97aff317-7aa3-596d-b39d-e02eaa3fb14e",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Kumburr",
    nftImg: "/images/character-9.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "abd8b8c9-6f03-53a8-bb04-24e1f1437105",
        ownerImg: "/images/avatar-3.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-8.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-3.png" },
        health: { field: "Health", value: 101, img: "/images/spec-4.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-5.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-5.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-2.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-1.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "ff81fc4b-f5a8-558e-99b1-cd28711a05ad",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Lumburr",
    nftImg: "/images/character-10.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "a4f501ff-2aab-55f2-b984-9ef21df76ef8",
        ownerImg: "/images/avatar-4.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-2.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-6.png" },
        health: { field: "Health", value: 101, img: "/images/spec-2.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-5.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-1.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-5.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-4.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "b684a2b3-586d-567c-9f04-29d77e7c986a",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Mumburr",
    nftImg: "/images/character-11.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "5ec8c902-d90f-56bb-91c2-e127ef7c1bca",
        ownerImg: "/images/avatar-3.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-5.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-5.png" },
        health: { field: "Health", value: 101, img: "/images/spec-4.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-3.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-4.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-5.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-4.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "2eab703d-c63b-56fc-8d3c-1f6a748f5086",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Numburr",
    nftImg: "/images/character-12.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "3c1953db-241d-50f8-960d-ff2272f816bd",
        ownerImg: "/images/avatar-6.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-7.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-5.png" },
        health: { field: "Health", value: 101, img: "/images/spec-3.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-6.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-3.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-2.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-1.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "53cd2f00-f5bb-5bf0-825e-cb5fe39e75c4",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Oumburr",
    nftImg: "/images/character-13.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "421afab1-20ed-5090-84ab-390f9a54196e",
        ownerImg: "/images/avatar-1.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-6.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-4.png" },
        health: { field: "Health", value: 101, img: "/images/spec-4.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-5.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-3.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-3.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-3.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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
  },
  {
    id: "c99c5c44-dbd6-5813-b4cd-4e07789d0e0e",
    nftType: "characters",
    nftId: "07892",
    nftEthPrice: 0.08,
    nftName: "Pumburr",
    nftImg: "/images/character-1.png",
    nftTraits: ["new"],
    similarNfts: [
      "605d3484-f9c8-5508-ac1b-5a2976489a67",
      "d579bf66-c29d-58b7-9911-b94a0461ee1d",
      "c6d7a7f1-6089-5aa5-a27e-675fec9ecdf7",
      "ec40ba0d-29ac-515c-98ee-bcbb2bd52853",
      "62cad027-f94b-55f9-be23-11ee31ec385b",
    ],
    nftDetails: {
      ownedBy: {
        owner: "Keith Hessel",
        id: "33e13cd4-cc3f-52ce-b19f-9fcab65d205d",
        ownerImg: "/images/avatar-5.png",
      },
      location: {
        planet: "Mars",
        city: "Aurora city",
        planetImg: "/images/planet-9.png",
      },
      created: "17.03.2022",
      specification: {
        level: { field: "Level", value: 10, img: "/images/spec-6.png" },
        health: { field: "Health", value: 101, img: "/images/spec-5.png" },
        strength: { field: "Strength", value: 800, img: "/images/spec-3.png" },
        morale: { field: "Morale", value: 100, img: "/images/spec-5.png" },
        mana: { field: "Mana", value: 200, img: "/images/spec-4.png" },
        gene: { field: "Gene", value: "Fire", img: "/images/spec-1.png" },
      },
      property: {
        emotion: { field: "Emotion", value: "Happy" },
        ears: { field: "Ears", value: "Short" },
        antennas: { field: "Antennas", value: "Normal" },
        tail: { field: "Tail", value: "Short" },
        color: { field: "Color", value: "Purple" },
        texture: { field: "Texture", value: "Abstract" },
      },
    },
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

router.post("/api/characters/slider", (req, res) => {
  const { nfts } = req.body;
  console.log(nfts);

  return res.json(
    characters.filter((character) => nfts.includes(character.id))
  );
});

export default router;
