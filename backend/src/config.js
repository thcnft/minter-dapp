require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "TreasureHuntingClub";
const description = "The first NFT collection by collecting which you can become the owner of huge treasures";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

const layerConfigurations = [
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "Background" },
      { name: "Cloak" },
      { name: "Left arm" },
      { name: "Tail" },
      { name: "Left leg" },
      { name: "Right leg" },
      { name: "Body" },
      { name: "Knight's armor gold" },
      { name: "Knight's armor silver" },
      { name: "Duck swims" },
      { name: "Right arm" },
      { name: "Head" },
      { name: "Eye" },
      { name: "Glasses" },
      { name: "Beak" },
      { name: "Accessories" },
      { name: "Hats 2" },
    ],
  },
  {
    growEditionSizeTo: 2000,
    layersOrder: [
      { name: "Background" },
      { name: "Cloak" },
      { name: "Pirate hat" },
      { name: "Left arm" },
      { name: "Tail" },
      { name: "Left leg" },
      { name: "Right leg" },
      { name: "Body" },
      { name: "Knight's armor gold" },
      { name: "Knight's armor silver" },
      { name: "Duck swims" },
      { name: "Right arm" },
      { name: "Head" },
      { name: "Eye" },
      { name: "Glasses" },
      { name: "Beak" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 2500,
    layersOrder: [
      { name: "Background" },
      { name: "Cloak" },
      { name: "Left arm" },
      { name: "Left pauldron gold" },
      { name: "Tail" },
      { name: "Left leg" },
      { name: "Right leg" },
      { name: "Body" },
      { name: "Knight's armor gold" },
      { name: "Duck swims" },
      { name: "Right arm" },
      { name: "Right pauldron gold" },
      { name: "Head" },
      { name: "Eye" },
      { name: "Glasses" },
      { name: "Beak" },
      { name: "Accessories" },
      { name: "Hats 2" },
    ],
  },
  {
    growEditionSizeTo: 3000,
    layersOrder: [
      { name: "Background" },
      { name: "Cloak" },
      { name: "Left arm" },
      { name: "Left pauldron silver" },
      { name: "Tail" },
      { name: "Left leg" },
      { name: "Right leg" },
      { name: "Body" },
      { name: "Knight's armor silver" },
      { name: "Duck swims" },
      { name: "Right arm" },
      { name: "Right pauldron silver" },
      { name: "Head" },
      { name: "Eye" },
      { name: "Glasses" },
      { name: "Beak" },
      { name: "Accessories" },
      { name: "Hats 2" },
    ],
  },
  {
    growEditionSizeTo: 4000,
    layersOrder: [
      { name: "Background" },
      { name: "Cloak" },
      { name: "Left arm" },
      { name: "Tail" },
      { name: "Left leg" },
      { name: "Right leg" },
      { name: "Body" },
      { name: "Knight's armor gold" },
      { name: "Knight's armor silver" },
      { name: "Duck swims" },
      { name: "Right arm" },
      { name: "Head" },
      { name: "Eye" },
      { name: "Glasses" },
      { name: "Hats 1" },
      { name: "Beak" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 4500,
    layersOrder: [
      { name: "Background" },
      { name: "Cloak" },
      { name: "Tail" },
      { name: "Left leg" },
      { name: "Right leg" },
      { name: "Body" },
      { name: "Knight's armor gold" },
      { name: "Knight's armor silver" },
      { name: "Duck swims" },
      { name: "Arms folded" },
      { name: "Head" },
      { name: "Eye" },
      { name: "Glasses" },
      { name: "Beak" },
      { name: "Accessories" },
      { name: "Hats 2" },
    ],
  },
  {
    growEditionSizeTo: 5500,
    layersOrder: [
      { name: "Background" },
      { name: "Cloak" },
      { name: "Pirate hat" },
      { name: "Left arm" },
      { name: "Left pauldron gold" },
      { name: "Tail" },
      { name: "Left leg" },
      { name: "Right leg" },
      { name: "Body" },
      { name: "Knight's armor gold" },
      { name: "Duck swims" },
      { name: "Right arm" },
      { name: "Right pauldron gold" },
      { name: "Head" },
      { name: "Eye" },
      { name: "Glasses" },
      { name: "Beak" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 6500,
    layersOrder: [
      { name: "Background" },
      { name: "Cloak" },
      { name: "Pirate hat" },
      { name: "Left arm" },
      { name: "Left pauldron silver" },
      { name: "Tail" },
      { name: "Left leg" },
      { name: "Right leg" },
      { name: "Body" },
      { name: "Knight's armor silver" },
      { name: "Duck swims" },
      { name: "Right arm" },
      { name: "Right pauldron silver" },
      { name: "Head" },
      { name: "Eye" },
      { name: "Glasses" },
      { name: "Beak" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 7000,
    layersOrder: [
      { name: "Background" },
      { name: "Cloak" },
      { name: "Pirate hat" },
      { name: "Tail" },
      { name: "Left leg" },
      { name: "Right leg" },
      { name: "Body" },
      { name: "Knight's armor gold" },
      { name: "Knight's armor silver" },
      { name: "Duck swims" },
      { name: "Arms folded" },
      { name: "Head" },
      { name: "Eye" },
      { name: "Glasses" },
      { name: "Beak" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 7500,
    layersOrder: [
      { name: "Background" },
      { name: "Cloak" },
      { name: "Left arm" },
      { name: "Left pauldron gold" },
      { name: "Tail" },
      { name: "Left leg" },
      { name: "Right leg" },
      { name: "Body" },
      { name: "Knight's armor gold" },
      { name: "Duck swims" },
      { name: "Right arm" },
      { name: "Right pauldron gold" },
      { name: "Head" },
      { name: "Eye" },
      { name: "Glasses" },
      { name: "Hats 1" },
      { name: "Beak" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 8000,
    layersOrder: [
      { name: "Background" },
      { name: "Cloak" },
      { name: "Left arm" },
      { name: "Left pauldron silver" },
      { name: "Tail" },
      { name: "Left leg" },
      { name: "Right leg" },
      { name: "Body" },
      { name: "Knight's armor silver" },
      { name: "Duck swims" },
      { name: "Right arm" },
      { name: "Right pauldron silver" },
      { name: "Head" },
      { name: "Eye" },
      { name: "Glasses" },
      { name: "Hats 1" },
      { name: "Beak" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 8500,
    layersOrder: [
      { name: "Background" },
      { name: "Cloak" },
      { name: "Left pauldron gold" },
      { name: "Tail" },
      { name: "Left leg" },
      { name: "Right leg" },
      { name: "Body" },
      { name: "Knight's armor gold" },
      { name: "Duck swims" },
      { name: "Arms folded" },
      { name: "Right pauldron gold" },
      { name: "Head" },
      { name: "Eye" },
      { name: "Glasses" },
      { name: "Beak" },
      { name: "Accessories" },
      { name: "Hats 2" },
    ],
  },
  {
    growEditionSizeTo: 9000,
    layersOrder: [
      { name: "Background" },
      { name: "Cloak" },
      { name: "Left pauldron silver" },
      { name: "Tail" },
      { name: "Left leg" },
      { name: "Right leg" },
      { name: "Body" },
      { name: "Knight's armor silver" },
      { name: "Duck swims" },
      { name: "Arms folded" },
      { name: "Right pauldron silver" },
      { name: "Head" },
      { name: "Eye" },
      { name: "Glasses" },
      { name: "Beak" },
      { name: "Accessories" },
      { name: "Hats 2" },
    ],
  },
  {
    growEditionSizeTo: 10000,
    layersOrder: [
      { name: "Background" },
      { name: "Cloak" },
      { name: "Tail" },
      { name: "Left leg" },
      { name: "Right leg" },
      { name: "Body" },
      { name: "Knight's armor gold" },
      { name: "Knight's armor silver" },
      { name: "Duck swims" },
      { name: "Arms folded" },
      { name: "Head" },
      { name: "Eye" },
      { name: "Glasses" },
      { name: "Hats 1" },
      { name: "Beak" },
      { name: "Accessories" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 553,
  height: 553,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://treasurehuntingclub.io", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby, polygon, or ethereum

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'treasurehuntingclub';
const CONTRACT_SYMBOL = 'THC';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x2Bd273adA8388d35936DCc28d11082a60806993C';
const TREASURY_ADDRESS = '0x2Bd273adA8388d35936DCc28d11082a60806993C';
const MAX_SUPPLY = 10000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.001; // Minting price per NFT. Rinkeby = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-06-10T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "null"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x2Bd273adA8388d35936DCc28d11082a60806993C"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0x2Bd273adA8388d35936DCc28d11082a60806993C"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "REPLACE THIS"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeiabxkpcyxqk2rdwjda73zqabotuqlynqc2z7it4ogcvafzddtuytu"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK") {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
