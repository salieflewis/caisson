import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY
const walletConnectID = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
