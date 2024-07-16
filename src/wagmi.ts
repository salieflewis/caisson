import { http, createConfig } from 'wagmi'
import { mainnet, optimism, arbitrum, sepolia } from 'wagmi/chains'
import { getDefaultConfig } from 'connectkit'

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY
const walletConnectID = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID

const connectors = getDefaultConfig({
  appName: 'Caisson',
  walletConnectProjectId: walletConnectID as string,
}).connectors

export const config = createConfig({
  chains: [mainnet, optimism, arbitrum, sepolia],
  connectors,
  transports: {
    [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2/${alchemyKey}`),
    [optimism.id]: http(`https://opt-mainnet.alchemyapi.io/v2/${alchemyKey}`),
    [arbitrum.id]: http(`https://arb-mainnet.g.alchemy.com/v2/${alchemyKey}`),
    [sepolia.id]: http(`https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}`),
  },
})
