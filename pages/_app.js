import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import { CryptoLogos } from "web3uikit"

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <CryptoLogos>
                    <Component {...pageProps} />
                </CryptoLogos>
            </NotificationProvider>
        </MoralisProvider>
    )
}

export default MyApp
