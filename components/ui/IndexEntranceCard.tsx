import { DC_URL, GITHUB_URL, FAUCET_URL, ON_POLKADOT_URL } from "@/constants";
import { IndexEntranceType } from "@/types"
import Image from "next/image";
import Link from "next/link"

const IndexEntranceCard = ({ type }: IndexEntranceType) => {

    const primaryColor = (() => {
        switch (type) {
            case 'aigc':
                return "#A43737"
            case 'github':
                return "#3C3C3C"
            case 'discord':
                return "#374FA6"
            case 'testnet':
                return "#A45E37"
        }
    })();

    const borderSet = (() => {
        switch (type) {
            case 'aigc':
                return "shadow-entrance-aigc"
            case 'github':
                return "shadow-entrance-github"
            case 'discord':
                return "shadow-entrance-discord"
            case 'testnet':
                return "shadow-entrance-testnet"
        }
    })();

    const iconClipsTitle = ((): boolean => { return type === 'aigc' })();

    const title = (() => {
        switch (type) {
            case 'aigc':
                return "AI NFT Render Flow Demo"
            case 'github':
                return "Github"
            case 'discord':
                return "Discord"
            case 'testnet':
                return "Cybros on Polkadot.js"
        }
    })();

    const summary = (() => {
        switch (type) {
            case 'aigc':
                return "Generate ERC-721 NFTs with distributed AI compute power and share on both Web2 and Web3 social media."
            case 'github':
                return "Check us out on Github."
            case 'discord':
                return "Join our Discord server!"
            case 'testnet':
                return "Play directly with Cybros testnet."
        }
    })();

    const towordsLink = (() => {
        switch (type) {
            case 'aigc':
                return "/aigc"
            case 'github':
                return GITHUB_URL
            case 'discord':
                return DC_URL
            case 'testnet':
                return ON_POLKADOT_URL
        }
    })();

    const iconPath = ((): string => { return "/entran-" + type + '.svg' })();

    const TitleContext = (() => {
        if (iconClipsTitle) {
            return (
                <div className="flex flex-row justify-start items-start mt-[21px] mx-[18px] gap-3">
                    <Image src={iconPath} alt="icon" width={30} height={30} style={{ objectFit: 'contain' }} />
                    <p className="text-[18px] font-medium leading-21 mt-1">{title}</p>
                </div>
            )
        } else {
            return (
                <div className="flex flex-col justify-start items-start mt-[21px] mx-[18px] gap-[9px]">
                    <Image src={iconPath} alt="icon" width={30} height={30} style={{ objectFit: 'contain' }} />
                    <p className="text-[18px] font-medium leading-21">{title}</p>
                </div>
            )
        }
    });

    const ActionArea = (() => {
        return (
            <div className="flex flex-row justify-start text-white text-[16px] font-medium leading-21 mx-[15px] mb-[18px] gap-[9px] h-[45px]">
                <Link href={towordsLink} className="flex justify-center items-center rounded-15 w-[76px]" style={{ backgroundColor: primaryColor }}>
                    Go
                </Link>
                {type === 'testnet' && (
                    <Link href={FAUCET_URL}
                        className="flex flex-row justify-center items-center rounded-15 w-[101px] shadow-cb shadow-[#A45E37] bg-white text-[16px] font-medium leading-21"
                        style={{ color: primaryColor }}
                    >
                        Faucet
                    </Link>
                )}
            </div>

        )
    });

    return (
        <div className={`rounded-15 ${borderSet} shadow-cb flex flex-col justify-between bg-white h-[195px] ${type === 'aigc' ? "w-[646px]" : "w-[314px]"} `}
            style={{ color: primaryColor }}>
            <TitleContext />
            <div>
                <p className="mb-[15px] ml-[18px] mr-[55px] text-[14px]">{summary}</p>
                <ActionArea />
            </div>
        </div>
    )
}

export default IndexEntranceCard