/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Cursor for paging through collections */
  ConnectionCursor: { input: any; output: any; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AddBundleNftsToCatgirlNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddNftsToBundleNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddNftsToSaleNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddSaleNftsToCatgirlNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BundleNft = {
  __typename?: 'BundleNft';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  expired?: Maybe<Scalars['Boolean']['output']>;
  expiredAt?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nfts?: Maybe<Array<CatgirlNft>>;
  numberOfNft: Scalars['Float']['output'];
  numberOfOffer?: Maybe<Scalars['Int']['output']>;
  ownerAddress: Scalars['String']['output'];
  saleNft?: Maybe<SaleNft>;
  systemProcessing?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  usdPrice?: Maybe<Scalars['Int']['output']>;
};


export type BundleNftNftsArgs = {
  filter?: InputMaybe<CatgirlNftFilter>;
  sorting?: InputMaybe<Array<CatgirlNftSort>>;
};

export type BundleNftConnection = {
  __typename?: 'BundleNftConnection';
  /** Array of edges. */
  edges: Array<BundleNftEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type BundleNftEdge = {
  __typename?: 'BundleNftEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the BundleNft */
  node: BundleNft;
};

export type BundleNftFilter = {
  and?: InputMaybe<Array<BundleNftFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  expired?: InputMaybe<BooleanFieldComparison>;
  expiredAt?: InputMaybe<IntFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  nfts?: InputMaybe<BundleNftFilterCatgirlNftFilter>;
  numberOfNft?: InputMaybe<NumberFieldComparison>;
  numberOfOffer?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<BundleNftFilter>>;
  ownerAddress?: InputMaybe<StringFieldComparison>;
  saleNft?: InputMaybe<BundleNftFilterSaleNftFilter>;
  systemProcessing?: InputMaybe<BooleanFieldComparison>;
  updated_at?: InputMaybe<DateFieldComparison>;
  usdPrice?: InputMaybe<IntFieldComparison>;
};

export type BundleNftFilterCatgirlNftFilter = {
  and?: InputMaybe<Array<BundleNftFilterCatgirlNftFilter>>;
  bornAt?: InputMaybe<IntFieldComparison>;
  characterId?: InputMaybe<IntFieldComparison>;
  isListing?: InputMaybe<BooleanFieldComparison>;
  isSleeping?: InputMaybe<BooleanFieldComparison>;
  numberOfOffer?: InputMaybe<IntFieldComparison>;
  nyaScore?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<BundleNftFilterCatgirlNftFilter>>;
  ownerAddress?: InputMaybe<StringFieldComparison>;
  rarity?: InputMaybe<IntFieldComparison>;
  season?: InputMaybe<IntFieldComparison>;
  systemProcessing?: InputMaybe<BooleanFieldComparison>;
  tokenId?: InputMaybe<IdFilterComparison>;
};

export type BundleNftFilterSaleNftFilter = {
  action?: InputMaybe<IntFieldComparison>;
  and?: InputMaybe<Array<BundleNftFilterSaleNftFilter>>;
  block?: InputMaybe<IntFieldComparison>;
  bornAtNft?: InputMaybe<IntFieldComparison>;
  created_at?: InputMaybe<DateFieldComparison>;
  expired?: InputMaybe<BooleanFieldComparison>;
  expiredAt?: InputMaybe<DateFieldComparison>;
  fromUser?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isBundle?: InputMaybe<BooleanFieldComparison>;
  minPrice?: InputMaybe<NumberFieldComparison>;
  minUsdPrice?: InputMaybe<NumberFieldComparison>;
  numberOfNftBundle?: InputMaybe<IntFieldComparison>;
  numberOfOfferBundle?: InputMaybe<IntFieldComparison>;
  numberOfOfferNft?: InputMaybe<IntFieldComparison>;
  nyaScoreNft?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<BundleNftFilterSaleNftFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  rarityNft?: InputMaybe<IntFieldComparison>;
  season?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<IntFieldComparison>;
  toUser?: InputMaybe<StringFieldComparison>;
  tokenIdNft?: InputMaybe<IntFieldComparison>;
  tokenType?: InputMaybe<IntFieldComparison>;
  txCancel?: InputMaybe<StringFieldComparison>;
  txId?: InputMaybe<StringFieldComparison>;
  updated_at?: InputMaybe<DateFieldComparison>;
  usdPrice?: InputMaybe<NumberFieldComparison>;
};

export type BundleNftSort = {
  direction: SortDirection;
  field: BundleNftSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BundleNftSortFields {
  CreatedAt = 'created_at',
  Expired = 'expired',
  ExpiredAt = 'expiredAt',
  Id = 'id',
  Name = 'name',
  NumberOfNft = 'numberOfNft',
  NumberOfOffer = 'numberOfOffer',
  OwnerAddress = 'ownerAddress',
  SystemProcessing = 'systemProcessing',
  UpdatedAt = 'updated_at',
  UsdPrice = 'usdPrice'
}

export type CatgirlNft = {
  __typename?: 'CatgirlNFT';
  bornAt?: Maybe<Scalars['Int']['output']>;
  bundleNfts?: Maybe<Array<BundleNft>>;
  characterId?: Maybe<Scalars['Int']['output']>;
  isListing: Scalars['Boolean']['output'];
  isSleeping?: Maybe<Scalars['Boolean']['output']>;
  numberOfOffer?: Maybe<Scalars['Int']['output']>;
  nyaScore?: Maybe<Scalars['Int']['output']>;
  ownerAddress: Scalars['String']['output'];
  rarity?: Maybe<Scalars['Int']['output']>;
  saleNfts?: Maybe<Array<SaleNft>>;
  season?: Maybe<Scalars['Int']['output']>;
  systemProcessing?: Maybe<Scalars['Boolean']['output']>;
  tokenId: Scalars['ID']['output'];
};


export type CatgirlNftBundleNftsArgs = {
  filter?: InputMaybe<BundleNftFilter>;
  sorting?: InputMaybe<Array<BundleNftSort>>;
};


export type CatgirlNftSaleNftsArgs = {
  filter?: InputMaybe<SaleNftFilter>;
  sorting?: InputMaybe<Array<SaleNftSort>>;
};

export type CatgirlNftAggregateFilter = {
  and?: InputMaybe<Array<CatgirlNftAggregateFilter>>;
  bornAt?: InputMaybe<IntFieldComparison>;
  characterId?: InputMaybe<IntFieldComparison>;
  isListing?: InputMaybe<BooleanFieldComparison>;
  isSleeping?: InputMaybe<BooleanFieldComparison>;
  numberOfOffer?: InputMaybe<IntFieldComparison>;
  nyaScore?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<CatgirlNftAggregateFilter>>;
  ownerAddress?: InputMaybe<StringFieldComparison>;
  rarity?: InputMaybe<IntFieldComparison>;
  season?: InputMaybe<IntFieldComparison>;
  systemProcessing?: InputMaybe<BooleanFieldComparison>;
  tokenId?: InputMaybe<IdFilterComparison>;
};

export type CatgirlNftConnection = {
  __typename?: 'CatgirlNFTConnection';
  /** Array of nodes. */
  nodes: Array<CatgirlNft>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CatgirlNftFilter = {
  and?: InputMaybe<Array<CatgirlNftFilter>>;
  bornAt?: InputMaybe<IntFieldComparison>;
  bundleNfts?: InputMaybe<CatgirlNftFilterBundleNftFilter>;
  characterId?: InputMaybe<IntFieldComparison>;
  isListing?: InputMaybe<BooleanFieldComparison>;
  isSleeping?: InputMaybe<BooleanFieldComparison>;
  numberOfOffer?: InputMaybe<IntFieldComparison>;
  nyaScore?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<CatgirlNftFilter>>;
  ownerAddress?: InputMaybe<StringFieldComparison>;
  rarity?: InputMaybe<IntFieldComparison>;
  saleNfts?: InputMaybe<CatgirlNftFilterSaleNftFilter>;
  season?: InputMaybe<IntFieldComparison>;
  systemProcessing?: InputMaybe<BooleanFieldComparison>;
  tokenId?: InputMaybe<IdFilterComparison>;
};

export type CatgirlNftFilterBundleNftFilter = {
  and?: InputMaybe<Array<CatgirlNftFilterBundleNftFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  expired?: InputMaybe<BooleanFieldComparison>;
  expiredAt?: InputMaybe<IntFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  numberOfNft?: InputMaybe<NumberFieldComparison>;
  numberOfOffer?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<CatgirlNftFilterBundleNftFilter>>;
  ownerAddress?: InputMaybe<StringFieldComparison>;
  systemProcessing?: InputMaybe<BooleanFieldComparison>;
  updated_at?: InputMaybe<DateFieldComparison>;
  usdPrice?: InputMaybe<IntFieldComparison>;
};

export type CatgirlNftFilterSaleNftFilter = {
  action?: InputMaybe<IntFieldComparison>;
  and?: InputMaybe<Array<CatgirlNftFilterSaleNftFilter>>;
  block?: InputMaybe<IntFieldComparison>;
  bornAtNft?: InputMaybe<IntFieldComparison>;
  created_at?: InputMaybe<DateFieldComparison>;
  expired?: InputMaybe<BooleanFieldComparison>;
  expiredAt?: InputMaybe<DateFieldComparison>;
  fromUser?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isBundle?: InputMaybe<BooleanFieldComparison>;
  minPrice?: InputMaybe<NumberFieldComparison>;
  minUsdPrice?: InputMaybe<NumberFieldComparison>;
  numberOfNftBundle?: InputMaybe<IntFieldComparison>;
  numberOfOfferBundle?: InputMaybe<IntFieldComparison>;
  numberOfOfferNft?: InputMaybe<IntFieldComparison>;
  nyaScoreNft?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<CatgirlNftFilterSaleNftFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  rarityNft?: InputMaybe<IntFieldComparison>;
  season?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<IntFieldComparison>;
  toUser?: InputMaybe<StringFieldComparison>;
  tokenIdNft?: InputMaybe<IntFieldComparison>;
  tokenType?: InputMaybe<IntFieldComparison>;
  txCancel?: InputMaybe<StringFieldComparison>;
  txId?: InputMaybe<StringFieldComparison>;
  updated_at?: InputMaybe<DateFieldComparison>;
  usdPrice?: InputMaybe<NumberFieldComparison>;
};

export type CatgirlNftSort = {
  direction: SortDirection;
  field: CatgirlNftSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CatgirlNftSortFields {
  BornAt = 'bornAt',
  CharacterId = 'characterId',
  IsListing = 'isListing',
  IsSleeping = 'isSleeping',
  NumberOfOffer = 'numberOfOffer',
  NyaScore = 'nyaScore',
  OwnerAddress = 'ownerAddress',
  Rarity = 'rarity',
  Season = 'season',
  SystemProcessing = 'systemProcessing',
  TokenId = 'tokenId'
}

export type Character = {
  __typename?: 'Character';
  characterId?: Maybe<Scalars['Int']['output']>;
  dbId: Scalars['ID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  hobby?: Maybe<Scalars['String']['output']>;
  isExclusive: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  rarity?: Maybe<Scalars['Int']['output']>;
  season?: Maybe<Scalars['Int']['output']>;
};

export type CharacterConnection = {
  __typename?: 'CharacterConnection';
  /** Array of edges. */
  edges: Array<CharacterEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CharacterCount = {
  __typename?: 'CharacterCount';
  characterId?: Maybe<Scalars['Int']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  dbId: Scalars['ID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  hobby?: Maybe<Scalars['String']['output']>;
  isExclusive: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  ownerAddress: Scalars['String']['output'];
  rarity?: Maybe<Scalars['Int']['output']>;
  season?: Maybe<Scalars['Int']['output']>;
};

export type CharacterCountConnection = {
  __typename?: 'CharacterCountConnection';
  /** Array of edges. */
  edges: Array<CharacterCountEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CharacterCountEdge = {
  __typename?: 'CharacterCountEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the CharacterCount */
  node: CharacterCount;
};

export type CharacterCountFilter = {
  and?: InputMaybe<Array<CharacterCountFilter>>;
  characterId?: InputMaybe<IntFieldComparison>;
  count?: InputMaybe<IntFieldComparison>;
  dbId?: InputMaybe<IdFilterComparison>;
  isExclusive?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CharacterCountFilter>>;
  ownerAddress?: InputMaybe<StringFieldComparison>;
  rarity?: InputMaybe<IntFieldComparison>;
  season?: InputMaybe<IntFieldComparison>;
};

export type CharacterCountSort = {
  direction: SortDirection;
  field: CharacterCountSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CharacterCountSortFields {
  CharacterId = 'characterId',
  Count = 'count',
  DbId = 'dbId',
  IsExclusive = 'isExclusive',
  Name = 'name',
  OwnerAddress = 'ownerAddress',
  Rarity = 'rarity',
  Season = 'season'
}

export type CharacterEdge = {
  __typename?: 'CharacterEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the Character */
  node: Character;
};

export type CharacterFilter = {
  and?: InputMaybe<Array<CharacterFilter>>;
  characterId?: InputMaybe<IntFieldComparison>;
  dbId?: InputMaybe<IdFilterComparison>;
  isExclusive?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CharacterFilter>>;
  rarity?: InputMaybe<IntFieldComparison>;
  season?: InputMaybe<IntFieldComparison>;
};

export type CharacterSort = {
  direction: SortDirection;
  field: CharacterSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CharacterSortFields {
  CharacterId = 'characterId',
  DbId = 'dbId',
  IsExclusive = 'isExclusive',
  Name = 'name',
  Rarity = 'rarity',
  Season = 'season'
}

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  /** Paginate first */
  first?: InputMaybe<Scalars['Int']['input']>;
  /** Paginate last */
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime']['input'];
  upper: Scalars['DateTime']['input'];
};

export type FloatFieldComparison = {
  between?: InputMaybe<FloatFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  notBetween?: InputMaybe<FloatFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatFieldComparisonBetween = {
  lower: Scalars['Float']['input'];
  upper: Scalars['Float']['input'];
};

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  iLike?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  neq?: InputMaybe<Scalars['ID']['input']>;
  notILike?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  notLike?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFieldComparison = {
  between?: InputMaybe<IntFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  notBetween?: InputMaybe<IntFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntFieldComparisonBetween = {
  lower: Scalars['Int']['input'];
  upper: Scalars['Int']['input'];
};

export type LikeNft = {
  __typename?: 'LikeNft';
  bundle?: Maybe<BundleNft>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  expired?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  nft?: Maybe<CatgirlNft>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type LikeNftConnection = {
  __typename?: 'LikeNftConnection';
  /** Array of nodes. */
  nodes: Array<LikeNft>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type LikeNftFilter = {
  and?: InputMaybe<Array<LikeNftFilter>>;
  bundle?: InputMaybe<LikeNftFilterBundleNftFilter>;
  created_at?: InputMaybe<DateFieldComparison>;
  expired?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  nft?: InputMaybe<LikeNftFilterCatgirlNftFilter>;
  or?: InputMaybe<Array<LikeNftFilter>>;
  updated_at?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<LikeNftFilterUserFilter>;
};

export type LikeNftFilterBundleNftFilter = {
  and?: InputMaybe<Array<LikeNftFilterBundleNftFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  expired?: InputMaybe<BooleanFieldComparison>;
  expiredAt?: InputMaybe<IntFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  numberOfNft?: InputMaybe<NumberFieldComparison>;
  numberOfOffer?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<LikeNftFilterBundleNftFilter>>;
  ownerAddress?: InputMaybe<StringFieldComparison>;
  systemProcessing?: InputMaybe<BooleanFieldComparison>;
  updated_at?: InputMaybe<DateFieldComparison>;
  usdPrice?: InputMaybe<IntFieldComparison>;
};

export type LikeNftFilterCatgirlNftFilter = {
  and?: InputMaybe<Array<LikeNftFilterCatgirlNftFilter>>;
  bornAt?: InputMaybe<IntFieldComparison>;
  characterId?: InputMaybe<IntFieldComparison>;
  isListing?: InputMaybe<BooleanFieldComparison>;
  isSleeping?: InputMaybe<BooleanFieldComparison>;
  numberOfOffer?: InputMaybe<IntFieldComparison>;
  nyaScore?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<LikeNftFilterCatgirlNftFilter>>;
  ownerAddress?: InputMaybe<StringFieldComparison>;
  rarity?: InputMaybe<IntFieldComparison>;
  season?: InputMaybe<IntFieldComparison>;
  systemProcessing?: InputMaybe<BooleanFieldComparison>;
  tokenId?: InputMaybe<IdFilterComparison>;
};

export type LikeNftFilterUserFilter = {
  address?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<LikeNftFilterUserFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  or?: InputMaybe<Array<LikeNftFilterUserFilter>>;
  updated_at?: InputMaybe<DateFieldComparison>;
};

export type LikeNftSort = {
  direction: SortDirection;
  field: LikeNftSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum LikeNftSortFields {
  CreatedAt = 'created_at',
  Expired = 'expired',
  Id = 'id',
  UpdatedAt = 'updated_at'
}

export type Mutation = {
  __typename?: 'Mutation';
  addBundleNftsToCatgirlNFT: CatgirlNft;
  addNftsToBundleNft: BundleNft;
  addNftsToSaleNft: SaleNft;
  addSaleNftsToCatgirlNFT: CatgirlNft;
  setBundleNftsOnCatgirlNFT: CatgirlNft;
  setBundleOnLikeNft: LikeNft;
  setBundleOnOfferNft: OfferNft;
  setBundleOnSaleNft: SaleNft;
  setNftOnLikeNft: LikeNft;
  setNftOnOfferNft: OfferNft;
  setNftsOnBundleNft: BundleNft;
  setNftsOnSaleNft: SaleNft;
  setOfferNftOnSaleMetaDataNft: SaleMetaDataNft;
  setSaleNftOnBundleNft: BundleNft;
  setSaleNftOnSaleMetaDataNft: SaleMetaDataNft;
  setSaleNftsOnCatgirlNFT: CatgirlNft;
  setUserOnLikeNft: LikeNft;
};


export type MutationAddBundleNftsToCatgirlNftArgs = {
  input: AddBundleNftsToCatgirlNftInput;
};


export type MutationAddNftsToBundleNftArgs = {
  input: AddNftsToBundleNftInput;
};


export type MutationAddNftsToSaleNftArgs = {
  input: AddNftsToSaleNftInput;
};


export type MutationAddSaleNftsToCatgirlNftArgs = {
  input: AddSaleNftsToCatgirlNftInput;
};


export type MutationSetBundleNftsOnCatgirlNftArgs = {
  input: SetBundleNftsOnCatgirlNftInput;
};


export type MutationSetBundleOnLikeNftArgs = {
  input: SetBundleOnLikeNftInput;
};


export type MutationSetBundleOnOfferNftArgs = {
  input: SetBundleOnOfferNftInput;
};


export type MutationSetBundleOnSaleNftArgs = {
  input: SetBundleOnSaleNftInput;
};


export type MutationSetNftOnLikeNftArgs = {
  input: SetNftOnLikeNftInput;
};


export type MutationSetNftOnOfferNftArgs = {
  input: SetNftOnOfferNftInput;
};


export type MutationSetNftsOnBundleNftArgs = {
  input: SetNftsOnBundleNftInput;
};


export type MutationSetNftsOnSaleNftArgs = {
  input: SetNftsOnSaleNftInput;
};


export type MutationSetOfferNftOnSaleMetaDataNftArgs = {
  input: SetOfferNftOnSaleMetaDataNftInput;
};


export type MutationSetSaleNftOnBundleNftArgs = {
  input: SetSaleNftOnBundleNftInput;
};


export type MutationSetSaleNftOnSaleMetaDataNftArgs = {
  input: SetSaleNftOnSaleMetaDataNftInput;
};


export type MutationSetSaleNftsOnCatgirlNftArgs = {
  input: SetSaleNftsOnCatgirlNftInput;
};


export type MutationSetUserOnLikeNftArgs = {
  input: SetUserOnLikeNftInput;
};

export type NovelAct = {
  __typename?: 'NovelAct';
  epilogue?: Maybe<NovelEpilogue>;
  id: Scalars['ID']['output'];
  prologue?: Maybe<NovelPrologue>;
  title: Scalars['String']['output'];
  volumes?: Maybe<Array<NovelVolume>>;
};

export type NovelChapter = {
  __typename?: 'NovelChapter';
  id: Scalars['ID']['output'];
  parts: Array<NovelPart>;
  title: Scalars['String']['output'];
  volume: NovelVolume;
  volumeId: Scalars['String']['output'];
};

export type NovelEpilogue = {
  __typename?: 'NovelEpilogue';
  act: NovelAct;
  actId: Scalars['String']['output'];
  contents: Array<PartContent>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type NovelPart = {
  __typename?: 'NovelPart';
  chapter: NovelChapter;
  chapterId: Scalars['String']['output'];
  contents?: Maybe<Array<PartContent>>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type NovelPrologue = {
  __typename?: 'NovelPrologue';
  act: NovelAct;
  actId: Scalars['String']['output'];
  contents: Array<PartContent>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type NovelVolume = {
  __typename?: 'NovelVolume';
  act: NovelAct;
  actId: Scalars['String']['output'];
  chapters: Array<NovelChapter>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float']['input'];
  upper: Scalars['Float']['input'];
};

export type OfferNft = {
  __typename?: 'OfferNft';
  bundle?: Maybe<BundleNft>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  expired?: Maybe<Scalars['Boolean']['output']>;
  expiredAt?: Maybe<Scalars['String']['output']>;
  fromUser?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  nft?: Maybe<CatgirlNft>;
  price?: Maybe<Scalars['Float']['output']>;
  systemProcessing?: Maybe<Scalars['Boolean']['output']>;
  tokenType?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  usdPrice?: Maybe<Scalars['Float']['output']>;
};

export type OfferNftConnection = {
  __typename?: 'OfferNftConnection';
  /** Array of nodes. */
  nodes: Array<OfferNft>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OfferNftFilter = {
  and?: InputMaybe<Array<OfferNftFilter>>;
  bundle?: InputMaybe<OfferNftFilterBundleNftFilter>;
  created_at?: InputMaybe<DateFieldComparison>;
  expired?: InputMaybe<BooleanFieldComparison>;
  expiredAt?: InputMaybe<StringFieldComparison>;
  fromUser?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  nft?: InputMaybe<OfferNftFilterCatgirlNftFilter>;
  or?: InputMaybe<Array<OfferNftFilter>>;
  price?: InputMaybe<FloatFieldComparison>;
  systemProcessing?: InputMaybe<BooleanFieldComparison>;
  tokenType?: InputMaybe<IntFieldComparison>;
  updated_at?: InputMaybe<DateFieldComparison>;
  usdPrice?: InputMaybe<FloatFieldComparison>;
};

export type OfferNftFilterBundleNftFilter = {
  and?: InputMaybe<Array<OfferNftFilterBundleNftFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  expired?: InputMaybe<BooleanFieldComparison>;
  expiredAt?: InputMaybe<IntFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  numberOfNft?: InputMaybe<NumberFieldComparison>;
  numberOfOffer?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<OfferNftFilterBundleNftFilter>>;
  ownerAddress?: InputMaybe<StringFieldComparison>;
  systemProcessing?: InputMaybe<BooleanFieldComparison>;
  updated_at?: InputMaybe<DateFieldComparison>;
  usdPrice?: InputMaybe<IntFieldComparison>;
};

export type OfferNftFilterCatgirlNftFilter = {
  and?: InputMaybe<Array<OfferNftFilterCatgirlNftFilter>>;
  bornAt?: InputMaybe<IntFieldComparison>;
  characterId?: InputMaybe<IntFieldComparison>;
  isListing?: InputMaybe<BooleanFieldComparison>;
  isSleeping?: InputMaybe<BooleanFieldComparison>;
  numberOfOffer?: InputMaybe<IntFieldComparison>;
  nyaScore?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<OfferNftFilterCatgirlNftFilter>>;
  ownerAddress?: InputMaybe<StringFieldComparison>;
  rarity?: InputMaybe<IntFieldComparison>;
  season?: InputMaybe<IntFieldComparison>;
  systemProcessing?: InputMaybe<BooleanFieldComparison>;
  tokenId?: InputMaybe<IdFilterComparison>;
};

export type OfferNftSort = {
  direction: SortDirection;
  field: OfferNftSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OfferNftSortFields {
  CreatedAt = 'created_at',
  Expired = 'expired',
  ExpiredAt = 'expiredAt',
  FromUser = 'fromUser',
  Id = 'id',
  Price = 'price',
  SystemProcessing = 'systemProcessing',
  TokenType = 'tokenType',
  UpdatedAt = 'updated_at',
  UsdPrice = 'usdPrice'
}

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
};

export type PartContent = {
  __typename?: 'PartContent';
  indented: Scalars['Boolean']['output'];
  text: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  acts: Array<NovelAct>;
  bundleNft: BundleNft;
  bundleNfts: BundleNftConnection;
  catgirlNFT: CatgirlNft;
  catgirlNFTS: CatgirlNftConnection;
  chapter?: Maybe<NovelChapter>;
  character: Character;
  characters: CharacterConnection;
  charactersWithCount: CharacterCountConnection;
  epilogue?: Maybe<NovelEpilogue>;
  likeNft: LikeNft;
  likeNfts: LikeNftConnection;
  offerNft: OfferNft;
  offerNfts: OfferNftConnection;
  part?: Maybe<NovelPart>;
  prologue?: Maybe<NovelPrologue>;
  saleMetaDataNft: SaleMetaDataNft;
  saleMetaDataNfts: Array<SaleMetaDataNft>;
  saleNft: SaleNft;
  saleNfts: SaleNftConnection;
  saleNftsCustom: SaleNftOffsetConnection;
  volume?: Maybe<NovelVolume>;
};


export type QueryBundleNftArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBundleNftsArgs = {
  filter?: InputMaybe<BundleNftFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<BundleNftSort>>;
};


export type QueryCatgirlNftArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCatgirlNftsArgs = {
  filter?: InputMaybe<CatgirlNftFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<CatgirlNftSort>>;
};


export type QueryChapterArgs = {
  id: Scalars['String']['input'];
};


export type QueryCharacterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCharactersArgs = {
  filter?: InputMaybe<CharacterFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<CharacterSort>>;
};


export type QueryCharactersWithCountArgs = {
  filter?: InputMaybe<CharacterCountFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<CharacterCountSort>>;
};


export type QueryEpilogueArgs = {
  id: Scalars['String']['input'];
};


export type QueryLikeNftArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLikeNftsArgs = {
  filter?: InputMaybe<LikeNftFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<LikeNftSort>>;
};


export type QueryOfferNftArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOfferNftsArgs = {
  filter?: InputMaybe<OfferNftFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<OfferNftSort>>;
};


export type QueryPartArgs = {
  id: Scalars['String']['input'];
};


export type QueryPrologueArgs = {
  id: Scalars['String']['input'];
};


export type QuerySaleMetaDataNftArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySaleMetaDataNftsArgs = {
  filter?: InputMaybe<SaleMetaDataNftFilter>;
  sorting?: InputMaybe<Array<SaleMetaDataNftSort>>;
};


export type QuerySaleNftArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySaleNftsArgs = {
  filter?: InputMaybe<SaleNftFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SaleNftSort>>;
};


export type QuerySaleNftsCustomArgs = {
  filter?: InputMaybe<SaleNftFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SaleNftSort>>;
};


export type QueryVolumeArgs = {
  id: Scalars['String']['input'];
};

export type SaleMetaDataNft = {
  __typename?: 'SaleMetaDataNft';
  basePrice?: Maybe<Scalars['String']['output']>;
  calldata?: Maybe<Scalars['String']['output']>;
  closeAt?: Maybe<Scalars['String']['output']>;
  exchange?: Maybe<Scalars['String']['output']>;
  expirationTime?: Maybe<Scalars['String']['output']>;
  feeRecipient?: Maybe<Scalars['String']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAuction?: Maybe<Scalars['Boolean']['output']>;
  listingTime?: Maybe<Scalars['String']['output']>;
  maker?: Maybe<Scalars['String']['output']>;
  offerNft?: Maybe<OfferNft>;
  pattern?: Maybe<Scalars['String']['output']>;
  paymentToken?: Maybe<Scalars['String']['output']>;
  r?: Maybe<Scalars['String']['output']>;
  s?: Maybe<Scalars['String']['output']>;
  saleNft?: Maybe<SaleNft>;
  salt?: Maybe<Scalars['String']['output']>;
  side?: Maybe<Scalars['Int']['output']>;
  taker?: Maybe<Scalars['String']['output']>;
  v?: Maybe<Scalars['String']['output']>;
};

export type SaleMetaDataNftFilter = {
  and?: InputMaybe<Array<SaleMetaDataNftFilter>>;
  basePrice?: InputMaybe<StringFieldComparison>;
  calldata?: InputMaybe<StringFieldComparison>;
  closeAt?: InputMaybe<StringFieldComparison>;
  exchange?: InputMaybe<StringFieldComparison>;
  expirationTime?: InputMaybe<StringFieldComparison>;
  feeRecipient?: InputMaybe<StringFieldComparison>;
  hash?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isAuction?: InputMaybe<BooleanFieldComparison>;
  listingTime?: InputMaybe<StringFieldComparison>;
  maker?: InputMaybe<StringFieldComparison>;
  offerNft?: InputMaybe<SaleMetaDataNftFilterOfferNftFilter>;
  or?: InputMaybe<Array<SaleMetaDataNftFilter>>;
  pattern?: InputMaybe<StringFieldComparison>;
  paymentToken?: InputMaybe<StringFieldComparison>;
  r?: InputMaybe<StringFieldComparison>;
  s?: InputMaybe<StringFieldComparison>;
  saleNft?: InputMaybe<SaleMetaDataNftFilterSaleNftFilter>;
  salt?: InputMaybe<StringFieldComparison>;
  side?: InputMaybe<IntFieldComparison>;
  taker?: InputMaybe<StringFieldComparison>;
  v?: InputMaybe<StringFieldComparison>;
};

export type SaleMetaDataNftFilterOfferNftFilter = {
  and?: InputMaybe<Array<SaleMetaDataNftFilterOfferNftFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  expired?: InputMaybe<BooleanFieldComparison>;
  expiredAt?: InputMaybe<StringFieldComparison>;
  fromUser?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SaleMetaDataNftFilterOfferNftFilter>>;
  price?: InputMaybe<FloatFieldComparison>;
  systemProcessing?: InputMaybe<BooleanFieldComparison>;
  tokenType?: InputMaybe<IntFieldComparison>;
  updated_at?: InputMaybe<DateFieldComparison>;
  usdPrice?: InputMaybe<FloatFieldComparison>;
};

export type SaleMetaDataNftFilterSaleNftFilter = {
  action?: InputMaybe<IntFieldComparison>;
  and?: InputMaybe<Array<SaleMetaDataNftFilterSaleNftFilter>>;
  block?: InputMaybe<IntFieldComparison>;
  bornAtNft?: InputMaybe<IntFieldComparison>;
  created_at?: InputMaybe<DateFieldComparison>;
  expired?: InputMaybe<BooleanFieldComparison>;
  expiredAt?: InputMaybe<DateFieldComparison>;
  fromUser?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isBundle?: InputMaybe<BooleanFieldComparison>;
  minPrice?: InputMaybe<NumberFieldComparison>;
  minUsdPrice?: InputMaybe<NumberFieldComparison>;
  numberOfNftBundle?: InputMaybe<IntFieldComparison>;
  numberOfOfferBundle?: InputMaybe<IntFieldComparison>;
  numberOfOfferNft?: InputMaybe<IntFieldComparison>;
  nyaScoreNft?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<SaleMetaDataNftFilterSaleNftFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  rarityNft?: InputMaybe<IntFieldComparison>;
  season?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<IntFieldComparison>;
  toUser?: InputMaybe<StringFieldComparison>;
  tokenIdNft?: InputMaybe<IntFieldComparison>;
  tokenType?: InputMaybe<IntFieldComparison>;
  txCancel?: InputMaybe<StringFieldComparison>;
  txId?: InputMaybe<StringFieldComparison>;
  updated_at?: InputMaybe<DateFieldComparison>;
  usdPrice?: InputMaybe<NumberFieldComparison>;
};

export type SaleMetaDataNftSort = {
  direction: SortDirection;
  field: SaleMetaDataNftSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SaleMetaDataNftSortFields {
  BasePrice = 'basePrice',
  Calldata = 'calldata',
  CloseAt = 'closeAt',
  Exchange = 'exchange',
  ExpirationTime = 'expirationTime',
  FeeRecipient = 'feeRecipient',
  Hash = 'hash',
  Id = 'id',
  IsAuction = 'isAuction',
  ListingTime = 'listingTime',
  Maker = 'maker',
  Pattern = 'pattern',
  PaymentToken = 'paymentToken',
  R = 'r',
  S = 's',
  Salt = 'salt',
  Side = 'side',
  Taker = 'taker',
  V = 'v'
}

export type SaleNft = {
  __typename?: 'SaleNft';
  action?: Maybe<Scalars['Int']['output']>;
  block?: Maybe<Scalars['Int']['output']>;
  bornAtNft?: Maybe<Scalars['Int']['output']>;
  bundle?: Maybe<BundleNft>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  expired?: Maybe<Scalars['Boolean']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  fromUser?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isBundle?: Maybe<Scalars['Boolean']['output']>;
  minPrice?: Maybe<Scalars['Float']['output']>;
  minUsdPrice?: Maybe<Scalars['Float']['output']>;
  nfts?: Maybe<Array<CatgirlNft>>;
  nftsAggregate: Array<SaleNftNftsAggregateResponse>;
  numberOfNftBundle?: Maybe<Scalars['Int']['output']>;
  numberOfOfferBundle?: Maybe<Scalars['Int']['output']>;
  numberOfOfferNft?: Maybe<Scalars['Int']['output']>;
  nyaScoreNft?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rarityNft?: Maybe<Scalars['Int']['output']>;
  season?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  toUser?: Maybe<Scalars['String']['output']>;
  tokenIdNft?: Maybe<Scalars['Int']['output']>;
  tokenType?: Maybe<Scalars['Int']['output']>;
  txCancel?: Maybe<Scalars['String']['output']>;
  txId?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  usdPrice?: Maybe<Scalars['Float']['output']>;
};


export type SaleNftNftsArgs = {
  filter?: InputMaybe<CatgirlNftFilter>;
  sorting?: InputMaybe<Array<CatgirlNftSort>>;
};


export type SaleNftNftsAggregateArgs = {
  filter?: InputMaybe<CatgirlNftAggregateFilter>;
};

export type SaleNftConnection = {
  __typename?: 'SaleNftConnection';
  /** Array of nodes. */
  nodes: Array<SaleNft>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SaleNftFilter = {
  action?: InputMaybe<IntFieldComparison>;
  and?: InputMaybe<Array<SaleNftFilter>>;
  block?: InputMaybe<IntFieldComparison>;
  bornAtNft?: InputMaybe<IntFieldComparison>;
  bundle?: InputMaybe<SaleNftFilterBundleNftFilter>;
  created_at?: InputMaybe<DateFieldComparison>;
  expired?: InputMaybe<BooleanFieldComparison>;
  expiredAt?: InputMaybe<DateFieldComparison>;
  fromUser?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  isBundle?: InputMaybe<BooleanFieldComparison>;
  minPrice?: InputMaybe<NumberFieldComparison>;
  minUsdPrice?: InputMaybe<NumberFieldComparison>;
  nfts?: InputMaybe<SaleNftFilterCatgirlNftFilter>;
  numberOfNftBundle?: InputMaybe<IntFieldComparison>;
  numberOfOfferBundle?: InputMaybe<IntFieldComparison>;
  numberOfOfferNft?: InputMaybe<IntFieldComparison>;
  nyaScoreNft?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<SaleNftFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  rarityNft?: InputMaybe<IntFieldComparison>;
  season?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<IntFieldComparison>;
  toUser?: InputMaybe<StringFieldComparison>;
  tokenIdNft?: InputMaybe<IntFieldComparison>;
  tokenType?: InputMaybe<IntFieldComparison>;
  txCancel?: InputMaybe<StringFieldComparison>;
  txId?: InputMaybe<StringFieldComparison>;
  updated_at?: InputMaybe<DateFieldComparison>;
  usdPrice?: InputMaybe<NumberFieldComparison>;
};

export type SaleNftFilterBundleNftFilter = {
  and?: InputMaybe<Array<SaleNftFilterBundleNftFilter>>;
  created_at?: InputMaybe<DateFieldComparison>;
  expired?: InputMaybe<BooleanFieldComparison>;
  expiredAt?: InputMaybe<IntFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  numberOfNft?: InputMaybe<NumberFieldComparison>;
  numberOfOffer?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<SaleNftFilterBundleNftFilter>>;
  ownerAddress?: InputMaybe<StringFieldComparison>;
  systemProcessing?: InputMaybe<BooleanFieldComparison>;
  updated_at?: InputMaybe<DateFieldComparison>;
  usdPrice?: InputMaybe<IntFieldComparison>;
};

export type SaleNftFilterCatgirlNftFilter = {
  and?: InputMaybe<Array<SaleNftFilterCatgirlNftFilter>>;
  bornAt?: InputMaybe<IntFieldComparison>;
  characterId?: InputMaybe<IntFieldComparison>;
  isListing?: InputMaybe<BooleanFieldComparison>;
  isSleeping?: InputMaybe<BooleanFieldComparison>;
  numberOfOffer?: InputMaybe<IntFieldComparison>;
  nyaScore?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<SaleNftFilterCatgirlNftFilter>>;
  ownerAddress?: InputMaybe<StringFieldComparison>;
  rarity?: InputMaybe<IntFieldComparison>;
  season?: InputMaybe<IntFieldComparison>;
  systemProcessing?: InputMaybe<BooleanFieldComparison>;
  tokenId?: InputMaybe<IdFilterComparison>;
};

export type SaleNftNftsAggregateGroupBy = {
  __typename?: 'SaleNftNftsAggregateGroupBy';
  bornAt?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  isListing?: Maybe<Scalars['Boolean']['output']>;
  isSleeping?: Maybe<Scalars['Boolean']['output']>;
  numberOfOffer?: Maybe<Scalars['Int']['output']>;
  nyaScore?: Maybe<Scalars['Int']['output']>;
  ownerAddress?: Maybe<Scalars['String']['output']>;
  rarity?: Maybe<Scalars['Int']['output']>;
  season?: Maybe<Scalars['Int']['output']>;
  systemProcessing?: Maybe<Scalars['Boolean']['output']>;
  tokenId?: Maybe<Scalars['ID']['output']>;
};

export type SaleNftNftsAggregateResponse = {
  __typename?: 'SaleNftNftsAggregateResponse';
  avg?: Maybe<SaleNftNftsAvgAggregate>;
  count?: Maybe<SaleNftNftsCountAggregate>;
  groupBy?: Maybe<SaleNftNftsAggregateGroupBy>;
  max?: Maybe<SaleNftNftsMaxAggregate>;
  min?: Maybe<SaleNftNftsMinAggregate>;
  sum?: Maybe<SaleNftNftsSumAggregate>;
};

export type SaleNftNftsAvgAggregate = {
  __typename?: 'SaleNftNftsAvgAggregate';
  bornAt?: Maybe<Scalars['Float']['output']>;
  characterId?: Maybe<Scalars['Float']['output']>;
  numberOfOffer?: Maybe<Scalars['Float']['output']>;
  nyaScore?: Maybe<Scalars['Float']['output']>;
  rarity?: Maybe<Scalars['Float']['output']>;
  season?: Maybe<Scalars['Float']['output']>;
  tokenId?: Maybe<Scalars['Float']['output']>;
};

export type SaleNftNftsCountAggregate = {
  __typename?: 'SaleNftNftsCountAggregate';
  bornAt?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  isListing?: Maybe<Scalars['Int']['output']>;
  isSleeping?: Maybe<Scalars['Int']['output']>;
  numberOfOffer?: Maybe<Scalars['Int']['output']>;
  nyaScore?: Maybe<Scalars['Int']['output']>;
  ownerAddress?: Maybe<Scalars['Int']['output']>;
  rarity?: Maybe<Scalars['Int']['output']>;
  season?: Maybe<Scalars['Int']['output']>;
  systemProcessing?: Maybe<Scalars['Int']['output']>;
  tokenId?: Maybe<Scalars['Int']['output']>;
};

export type SaleNftNftsMaxAggregate = {
  __typename?: 'SaleNftNftsMaxAggregate';
  bornAt?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  numberOfOffer?: Maybe<Scalars['Int']['output']>;
  nyaScore?: Maybe<Scalars['Int']['output']>;
  ownerAddress?: Maybe<Scalars['String']['output']>;
  rarity?: Maybe<Scalars['Int']['output']>;
  season?: Maybe<Scalars['Int']['output']>;
  tokenId?: Maybe<Scalars['ID']['output']>;
};

export type SaleNftNftsMinAggregate = {
  __typename?: 'SaleNftNftsMinAggregate';
  bornAt?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  numberOfOffer?: Maybe<Scalars['Int']['output']>;
  nyaScore?: Maybe<Scalars['Int']['output']>;
  ownerAddress?: Maybe<Scalars['String']['output']>;
  rarity?: Maybe<Scalars['Int']['output']>;
  season?: Maybe<Scalars['Int']['output']>;
  tokenId?: Maybe<Scalars['ID']['output']>;
};

export type SaleNftNftsSumAggregate = {
  __typename?: 'SaleNftNftsSumAggregate';
  bornAt?: Maybe<Scalars['Float']['output']>;
  characterId?: Maybe<Scalars['Float']['output']>;
  numberOfOffer?: Maybe<Scalars['Float']['output']>;
  nyaScore?: Maybe<Scalars['Float']['output']>;
  rarity?: Maybe<Scalars['Float']['output']>;
  season?: Maybe<Scalars['Float']['output']>;
  tokenId?: Maybe<Scalars['Float']['output']>;
};

export type SaleNftOffsetConnection = {
  __typename?: 'SaleNftOffsetConnection';
  /** Array of nodes. */
  nodes: Array<SaleNft>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SaleNftSort = {
  direction: SortDirection;
  field: SaleNftSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SaleNftSortFields {
  Action = 'action',
  Block = 'block',
  BornAtNft = 'bornAtNft',
  CreatedAt = 'created_at',
  Expired = 'expired',
  ExpiredAt = 'expiredAt',
  FromUser = 'fromUser',
  Id = 'id',
  IsBundle = 'isBundle',
  MinPrice = 'minPrice',
  MinUsdPrice = 'minUsdPrice',
  NumberOfNftBundle = 'numberOfNftBundle',
  NumberOfOfferBundle = 'numberOfOfferBundle',
  NumberOfOfferNft = 'numberOfOfferNft',
  NyaScoreNft = 'nyaScoreNft',
  Price = 'price',
  RarityNft = 'rarityNft',
  Season = 'season',
  Status = 'status',
  ToUser = 'toUser',
  TokenIdNft = 'tokenIdNft',
  TokenType = 'tokenType',
  TxCancel = 'txCancel',
  TxId = 'txId',
  UpdatedAt = 'updated_at',
  UsdPrice = 'usdPrice'
}

export type SetBundleNftsOnCatgirlNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetBundleOnLikeNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetBundleOnOfferNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetBundleOnSaleNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetNftOnLikeNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetNftOnOfferNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetNftsOnBundleNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetNftsOnSaleNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetOfferNftOnSaleMetaDataNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetSaleNftOnBundleNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetSaleNftOnSaleMetaDataNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetSaleNftsOnCatgirlNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetUserOnLikeNftInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iLike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notILike?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  address: Scalars['ID']['output'];
  created_at?: Maybe<Scalars['DateTime']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ActsssssssQueryVariables = Exact<{ [key: string]: never; }>;


export type ActsssssssQuery = { __typename?: 'Query', acts: Array<{ __typename?: 'NovelAct', id: string, title: string, prologue?: { __typename?: 'NovelPrologue', id: string } | null, volumes?: Array<{ __typename?: 'NovelVolume', id: string, title: string, chapters: Array<{ __typename?: 'NovelChapter', id: string, title: string }> }> | null, epilogue?: { __typename?: 'NovelEpilogue', id: string, title: string } | null }> };

export type ActsQueryVariables = Exact<{ [key: string]: never; }>;


export type ActsQuery = { __typename?: 'Query', acts: Array<{ __typename?: 'NovelAct', id: string, title: string, prologue?: { __typename?: 'NovelPrologue', id: string, title: string } | null, volumes?: Array<{ __typename?: 'NovelVolume', id: string, title: string, chapters: Array<{ __typename?: 'NovelChapter', id: string, title: string }> }> | null, epilogue?: { __typename?: 'NovelEpilogue', id: string, title: string } | null }> };


export const ActsssssssDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Actsssssss"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"prologue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"volumes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"chapters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"epilogue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<ActsssssssQuery, ActsssssssQueryVariables>;
export const ActsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Acts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"prologue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"volumes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"chapters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"epilogue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<ActsQuery, ActsQueryVariables>;