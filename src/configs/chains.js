import { reposAva, commitsAva, reposAvaTest, commitsAvaTest } from './ava';
import { commitsPoly, reposPoly } from './poly';
import { commitsEth, reposEth } from './eth';
import { commitsBn, reposBn } from './bn';

export const avalanche = {
  repos: reposAva,
  commits: commitsAva,
  reposTest: reposAvaTest,
  commitsTest: commitsAvaTest,
  title: 'Avalanche',
  description: 'Avalanche is a decentralized, open-source platform for launching decentralized finance (DeFi) applications and enterprise blockchain deployments in one interoperable, highly scalable ecosystem.',
  explorerUrl: 'https://cchain.explorer.avax.network/',
  explorerName: 'Snowtrace.io',
  chainId: '43114',
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18,
  },
  rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
  blockExplorerUrls: ['https://cchain.explorer.avax.network/'],
  iconUrls: ['https://assets.coingecko.com/coins/images/12571/large/coin-round-red.png?1604027291'],
};

export const binance = {
  repos: reposBn,
  commit: commitsBn,
  reposTest: {},
  commitsTest: {},
  title: 'Binance Smart Chain',
  description: 'Binance Smart Chain is a high-performance, low-cost, and developer-friendly smart contract platform that is compatible with the Ethereum Virtual Machine (EVM).',
  explorerUrl: 'https://bscscan.com/',
  explorerName: 'BscScan',
  chainId: '56',
  nativeCurrency: {
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: ['https://bsc-dataseed.binance.org/'],
  blockExplorerUrls: ['https://bscscan.com/'],
  iconUrls: ['https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615'],
};

export const eth = {
  repos: reposEth,
  commit: commitsEth,
  reposTest: {},
  commitsTest: {},
  title: 'Ethereum',
  description: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform.',
  explorerUrl: 'https://etherscan.io/',
  explorerName: 'Etherscan',
  chainId: '1',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://mainnet.infura.io/v3/1b3b4a0b3c1d4c5e8f9d0a2b3c4d5e6f'],
  blockExplorerUrls: ['https://etherscan.io/'],
  iconUrls: ['https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880'],
};

export const poly = {
  repos: reposPoly,
  commit: commitsPoly,
  reposTest: {},
  commitsTest: {},
  title: 'Polygon',
  description: 'Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. It is a scaling solution for Ethereum.',
  explorerUrl: 'https://polygonscan.com/',
  explorerName: 'PolygonScan',
  chainId: '137',
  nativeCurrency: {
    name: 'Matic',
    symbol: 'MATIC',
    decimals: 18,
  },
  rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
  blockExplorerUrls: ['https://polygonscan.com/'],
  iconUrls: ['https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1548386115'],
};

export const sol = {
  repos: {},
  commit: {},
  reposTest: {},
  commitsTest: {},
  title: 'Solana',
  description: 'Solana is a high-performance blockchain that enables developers to build decentralized applications that run at the speed of the internet.',
  explorerUrl: 'https://explorer.solana.com/',
  explorerName: 'Solana Explorer',
  chainId: '101',
  nativeCurrency: {
    name: 'Solana',
    symbol: 'SOL',
    decimals: 9,
  },
  rpcUrls: ['https://api.mainnet-beta.solana.com'],
  blockExplorerUrls: ['https://explorer.solana.com/'],
  iconUrls: ['https://assets.coingecko.com/coins/images/4128/large/coinmarketcap-solana-200.png?1616489452'],
};
