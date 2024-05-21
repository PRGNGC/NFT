export interface INft {
  id: string;
  nftImg: string;
  nftId: string;
  nftEthPrice: number;
  nftName: string;
  nftDescription: string;
  nftCategory: string;
  nftType: string;
  nftTraits?: string[];
  history: {
    user: string;
    date: string;
    time: string;
    userAvatar: string;
    actionType: string;
    priceETH: string;
  }[];
}

export interface ICharacterNft extends INft {
  nftDetails: {
    ownedBy: {
      owner: string;
      id: string;
      ownerImg: string;
    };
    location: {
      planet: string;
      city: string;
      planetImg: string;
    };
    created: string;
    specification: {
      level: { field: string; value: number };
      health: { field: string; value: number };
      strength: { field: string; value: number };
      morale: { field: string; value: number };
      mana: { field: string; value: number };
      gene: { field: string; value: string };
    };
    property: {
      emotion: { field: string; value: string };
      ears: { field: string; value: string };
      antennas: { field: string; value: string };
      tail: { field: string; value: string };
      color: { field: string; value: string };
      texture: { field: string; value: string };
    };
  };
}

export interface IPlanetNft extends INft {
  nftSystem: string;
  nftCoordinates: string;
  nftDetails: {
    ownedBy: {
      owner: string;
      id: string;
      ownerImg: string;
    };
    found: string;
    specification: {
      residents: { field: string; value: number };
      soldiers: { field: string; value: number };
      wood: { field: string; value: number };
      gold: { field: string; value: number };
      iron: { field: string; value: number };
      stone: { field: string; value: number };
    };
  };
}

export interface IItemNft extends INft {
  nftLevelRequirement: number;
  nftDetails: {
    ownedBy: {
      owner: string;
      id: string;
      ownerImg: string;
    };
    usedBy: {
      user: string;
      planet: string;
      userImg: string;
    };
    created: string;
    specification: {
      ammo: { field: string; value: number };
      speed: { field: string; value: string };
      firingRange: { field: string; value: string };
      reuse: { field: string; value: string };
      waterproof: { field: string; value: string };
      fireResistant: { field: string; value: string };
    };
  };
}

export interface IBundleNft extends INft {
  nftLevelRequirement: number;
  itemsInBundle: string[];
  nftDetails: {
    ownedBy: {
      owner: string;
      id: string;
      ownerImg: string;
    };
    usedFor: string[];
    specification: {
      ammo: { field: string; value: number };
      speed: { field: string; value: string };
      firingRange: { field: string; value: string };
      reuse: { field: string; value: string };
      waterproof: { field: string; value: string };
      fireResistant: { field: string; value: string };
    };
  };
}
