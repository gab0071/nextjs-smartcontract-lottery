import { ConnectButton } from "web3uikit"
import { CryptoLogos } from "web3uikit"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row">
            <CryptoLogos chain="ethereum" onClick={function noRefCheck() {}} size="48px" />
            <h1 className="py-4 px-4 font-bold text-3xl"> Our First Web3 Lottery!</h1>
            <div className="ml-auto py-2 px-10">
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
