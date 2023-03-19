import React from 'react'
import AnimateDesc from '../../components/AnimateDesc'
import AnimateImage from '../../components/AnimateImage'
import AnimateText from '../../components/AnimateText'
import EcoBox from '../../templates/EcoBox'
import { motion } from 'framer-motion'
import { deathmatch, levels, rewardList, whyList } from '../../utils/List'
import DropDown from '../../components/DropDown'
import { RiTeamFill } from 'react-icons/ri'
import { FaPeopleCarry } from 'react-icons/fa'

const EcoContent = () => {
    return (
        <section className="w-full min-h-screen h-auto py-20 bg-[#F3F7F6] overflow-hidden">
            <div className="px-9">
                <div className="flex flex-col gap-y-20">
                    {/* WEBSITE CREATOR */}
                    <EcoBox>
                        <div className="w-full h-full mt-10 flex relative">
                            <div className="relative z-10 text-center lg:text-left w-fit mx-auto lg:mx-0">
                                <AnimateText>
                                    <h3 className=' font-medium text-pongkan'>CREATE</h3>
                                    <h1 className='font-asap font-bold text-4xl text-myblack'>WEBSITE CREATOR</h1>
                                </AnimateText>

                                <AnimateDesc>
                                    <p className="max-w-[35rem] mt-7">
                                        Using AI to build websites has many advantages over traditional coding. For example, an AI-based website is capable of providing more personalized experiences for website visitors. Traditional coding requires manual effort and knowledge on coding languages, whereas using AI to create a website makes it easier to develop, customize and deploy a website in much less time with minimal effort and design decisions. Additionally, by utilizing AI models, businesses can use machine learning to modify their websites in order to deliver better suited content or products, as well as gain insights into visitor preferences and behavior patterns. Finally, AI technology can be used to automate web analysis tasks such as creating predictive user profiles or detecting anomalies in real-time data streams. This type of automation allows businesses to be agile and quickly adjust their strategy according to current market conditions or user needs.
                                    </p>
                                </AnimateDesc>

                            </div>

                            <AnimateImage src="ecosystem/creator" className="absolute top-0 right-0 lg:block hidden w-[27rem]" />

                        </div>

                    </EcoBox>

                    {/* STAKING */}
                    <EcoBox>
                        <div className="w-full h-full mt-10 flex relative ">

                            <AnimateImage src="ecosystem/staking" className="absolute top-0 left-0 lg:block hidden w-[22rem]" />

                            <div className="relative z-10 text-center lg:text-right w-fit mx-auto lg:mr-0">
                                <AnimateText>
                                    <h3 className='font-medium text-pongkan uppercase'>stake</h3>
                                    <h1 className='font-asap font-bold text-4xl text-myblack uppercase'>webai staking</h1>
                                </AnimateText>

                                <AnimateDesc>
                                    <p className="max-w-[35rem] mt-7 ml-auto opacity-70">
                                        Using AI to build websites has many advantages over traditional coding. For example, an AI-based website is capable of providing more personalized experiences for website visitors. Traditional coding requires manual effort and knowledge on coding languages, whereas using AI to create a website makes it easier to develop, customize and deploy a website in much less time with minimal effort and design decisions. Additionally, by utilizing AI models, businesses can use machine learning to modify their websites in order to deliver better suited content or products, as well as gain insights into visitor preferences and behavior patterns. Finally, AI technology can be used to automate web analysis tasks such as creating predictive user profiles or detecting anomalies in real-time data streams. This type of automation allows businesses to be agile and quickly adjust their strategy according to current market conditions or user needs.
                                    </p>
                                </AnimateDesc>

                                <AnimateDesc>
                                    <h3 className=' font-medium text-pongkan mt-10'>STAKING POOLS</h3>

                                    <div className=" mt-3 flex flex-col gap-y-5 opacity-70">
                                        <p className="">
                                            Tier 1 - 150% APY, lock period 30 days. Deposit fee 0%
                                        </p>

                                        <p className="">
                                            Tier 2 - 100% APY, lock period 20 days. Deposit fee 3%
                                        </p>

                                        <p className="">
                                            Tier 3 - 50% APY, lock period 10 days, Deposit fee 5%
                                        </p>

                                        <p className="font-semibold">
                                            ALL TIERS HAVE EARLY WITHDRAWAL FEE OF 5%! Taxes go back to filling staking pools.
                                        </p>
                                    </div>
                                </AnimateDesc>


                            </div>
                        </div>

                    </EcoBox>

                    {/* ESSAY WRITER */}
                    <EcoBox>
                        <div className="w-full h-full mt-10 flex relative">
                            <div className="relative z-10 text-center lg:text-left w-fit mx-auto lg:mx-0">
                                <AnimateText>
                                    <h3 className=' font-medium text-pongkan'>WRITE</h3>
                                    <h1 className='font-asap font-bold text-4xl text-myblack'>ESSAY WRITER</h1>
                                </AnimateText>

                                <AnimateDesc>
                                    <div className="max-w-[35rem] mt-7 flex flex-col gap-y-5 opacity-70">
                                        <p className="">
                                            Web AI essay writer is a powerful tool designed to help business professionals and entrepreneurs quickly create engaging essays. It allows you to customize your essay in various ways such as choosing from a rich library of professionally-designed templates, editing the text content, and adding images and videos to make it visually appealing.
                                        </p>

                                        <p className="">
                                            With Web AI's easy-to-use editor and intuitive interface, you can produce professional-looking essays in little to no time. Additionally, its built-in analytics help you track how many people have viewed your document as well as other basic metrics for evaluating its performance. Whether for launching a new product or expanding an existing one, Web AI's essay writer lets you quickly communicate key information about your business in an attractive format that will get noticed.
                                        </p>
                                    </div>
                                </AnimateDesc>


                            </div>
                            <AnimateImage src="ecosystem/writer" className="absolute -top-10 -right-10 lg:block hidden w-[30rem]" />
                        </div>

                    </EcoBox>

                    {/* WEBAI NFTS */}
                    <EcoBox>
                        <div className="w-full h-full mt-10 flex relative ">
                            <AnimateImage src="ecosystem/samurai" className="absolute -bottom-20 -left-20 lg:block hidden w-[27rem]" />

                            <div className="relative z-10 text-center lg:text-right w-fit mx-auto lg:mr-0">
                                <AnimateText>
                                    <h3 className='font-medium text-pongkan uppercase'>nft</h3>
                                    <h1 className='font-asap font-bold text-4xl text-myblack '>WEBAI NFTs</h1>
                                </AnimateText>

                                <AnimateDesc>
                                    <div className="max-w-[35rem] mt-7 flex flex-col gap-y-5 ml-auto  opacity-70">
                                        <p className="max-w-[35rem] ml-auto">
                                            Web AI NFT collection is a group of digital assets made available in the form of non-fungible tokens &#40;NFTs&#41;. The collection consists of digital works by artificial intelligence &#40;AI&#41; entities, such as art generated through neural networks or self-generated datasets. These items aim to provide access to technological advancement resulting from the application of deep learning technologies, allowing investors and enthusiasts to experience, share, and ultimately monetize unique pieces that represent a part of the constantly evolving global web AI scene.
                                        </p>

                                        <p className="">
                                            Web AI NFTs are possible to use for its upcoming new staking system. Every NFT holder has the possibility to stake all of their tokens with improved APYs. Previous staking pool will end and staking will become exclusive ONLY for NFT holders. Further details about new staking pools will be announced.
                                        </p>

                                        <p className="">
                                            Web AI NFT will be minted through using Web AI own minting DAPP.
                                        </p>
                                    </div>
                                </AnimateDesc>

                                <AnimateDesc>
                                    <div className="mt-12 max-w-[35rem] opacity-70">
                                        <ul className='flex flex-col gap-y-5'>
                                            <li>NFTs from 1-50 base price is 0.1 ETH</li>
                                            <li>NFTs from 51-150 base price is 0.2 ETH</li>
                                            <li>NFTs from 151-250 base price is 0.3 ETH</li>
                                            <li>There will not be any more NFTs, 250 is lifetime supply.</li>
                                            <li>All NFTs will be integrated to Web AI Play 2 Earn game once it is fully functional and live for the public.</li>
                                        </ul>
                                    </div>
                                </AnimateDesc>
                            </div>
                        </div>

                    </EcoBox>
                </div>

                <div className="bg-[#ECECEC] w-full max-w-[1200px] mx-auto py-10 h-auto relative z-10 mt-8 md:px-20 px-9  pb-16">
                    <AnimateImage src="ecosystem/cube" className="absolute top-10 bottom-0 my-auto right-20 w-[20rem] lg:block hidden" />
                    <div className="relative z-10 lg:text-left text-center mx-auto lg:mx-0">
                        <div className="text-center w-fit mx-auto">
                            <AnimateText>
                                <h3 className='font-medium text-pongkan uppercase'>STAKE</h3>
                                <h1 className='font-asap font-bold text-4xl text-myblack '>NFTs STAKING</h1>
                            </AnimateText>

                        </div>

                        <AnimateDesc>
                            <div className="max-w-[35rem] mt-12 flex flex-col gap-y-5 opacity-70">
                                <h3 className='font-medium text-pongkan uppercase'>NFTs STAKING POOL</h3>

                                <p className="mt-3">
                                    NFTs Staking Pool will be the only staking pool for Web Ai ecosystem once our NFTs minting has started. Regular staking pools will be removed!
                                </p>

                                <ul className='flex flex-col gap-y-5'>
                                    <li className="">Deposit your NFT into our staking pool and you are able to stake all of your tokens!</li>
                                    <li className="">Every EXTRA NFT deposited increases your APY by 10%!</li>
                                    <li className="">For example: You deposit 5 NFTs. You get 40% EXTRA APY!</li>
                                    <li className="">Staking APY will be 200%. NO LOCKS. NO DEPOSIT FEE. Withdraw fee is 5%.</li>
                                </ul>
                            </div>
                        </AnimateDesc>
                    </div>

                </div>

                <div className="flex flex-col gap-y-20 mt-20">
                    {/* SWAP */}
                    <EcoBox>
                        <div className="w-full h-full mt-10 flex relative ">
                            <AnimateImage src="ecosystem/swap" className="absolute top-0 left-0 lg:block hidden w-[22rem]" />

                            <div className="relative z-10 text-center lg:text-right w-fit mx-auto lg:mr-0">
                                <AnimateText>
                                    <h3 className='font-medium text-pongkan uppercase'>SWAP</h3>
                                    <h1 className='font-asap font-bold text-4xl text-myblack uppercase'>webai swap</h1>
                                </AnimateText>


                                <AnimateDesc>
                                    <div className="flex flex-col gap-y-5 max-w-[35rem] mt-7 ml-auto opacity-70 text-sm">
                                        <p className="">
                                            WebAI SWAP is a revolutionary new platform that allows users to convert their WebAI tokens, the native cryptocurrency of $WEBAI, into other popular cryptocurrencies such as Ethereum, Binance Coin and Bitcoin. The tool works by converting the user's WebAI tokens using smart contracts on the blockchain, which are then exchanged for one or more chosen cryptocurrencies. It's easy to use and can be accessed via mobile or desktop.
                                        </p>

                                        <p className="">
                                            WebAI SWAP offers users the opportunity to diversify their holdings with minimal effort and cost. With its advanced features such as automatic conversion between webai and other currencies, real-time price tracking, and the ability to earn transaction fee discounts when trading within WebAI SWAP – it makes exchanging tokens seamless and stress-free.
                                        </p>

                                        <p className="">
                                            The user experience of WebAI SWAP is designed for simplicity - making it easy for users of all levels of technical knowledge to interact with the platform from wherever they are across the world. Additionally, security measures like two-factor authentication help keep data safe in an increasingly turbulent digital landscape.
                                        </p>

                                        <p className="">
                                            WebAI SWAP has been touted as a game changer for people interested in investing in cryptocurrencies but who may be apprehensive about embracing them wholeheartedly because of high minimum trading fees and volatile market conditions. Utilizing this platform affords users affordable access to various cryptocurrencies with just a few clicks – leading some hard-core traders to switch over entirely!
                                        </p>
                                    </div>
                                </AnimateDesc>
                            </div>
                        </div>

                    </EcoBox>

                    <EcoBox>
                        <div className="w-full pt-14 h-full">
                            <div className="w-full h-full flex relative">
                                <div className="relative z-10 text-center lg:text-left w-fit mx-auto lg:mx-0">
                                    <AnimateText>
                                        <h3 className=' font-medium text-pongkan'>GAME</h3>
                                        <h1 className='font-asap font-bold text-4xl text-myblack'>WEBAI GAME WAPE</h1>
                                    </AnimateText>

                                    <AnimateDesc>
                                        <div className="max-w-[35rem] mt-7 flex flex-col gap-y-5 opacity-70">
                                            <p className="">
                                                WAPE is a blockchain based 3D play to earn game combining aspects of DeFi with NFTs and virtual-real world interactions using AR technology. A sustainable revenue generating game built for all player types.
                                            </p>
                                        </div>
                                    </AnimateDesc>

                                </div>
                                <AnimateImage src="ecosystem/game" className="absolute -top-16 -right-10 lg:block hidden w-[23rem]" />
                            </div>

                            <div className="mt-24 flex flex-col gap-y-4">
                                <DropDown title="Why are we creating a game?">
                                    <p className="opacity-70">
                                        The gaming industry is reported to generate more than $91 billion in global revenue in 2017 and is expected to surpass the mark set by the movie and music industries combined. This figure could grow to an estimated $118 billion by 2020, driven largely by mobile and online gaming. The potential for growth in this market segment alone continues to remain strong given that mobile gaming on smartphones or tablets is much less costly, and therefore more accessible, than console gaming. Additionally, other emerging technologies such as augmented reality &#40;AR&#41; and virtual reality &#40;VR&#41; are predicted to have an even greater impact on the industry in the years ahead, meaning producing even higher revenue totals.
                                    </p>

                                    <h3 className='mt-5'>Reasons why we are integrating a play 2 earn game to Web AI ecosystem are the following:</h3>

                                    <ol className='mt-5 flex flex-col gap-y-5 opacity-70'>
                                        {whyList.map((items, i) => {
                                            return (
                                                <li key={i}>{i + 1}.&#41;  {items}</li>
                                            )
                                        })}
                                    </ol>
                                </DropDown>

                                <DropDown title="Why WAPE is worth it?">
                                    <div className="flex flex-col gap-y-5 mt-5 opacity-70">
                                        Blockchain games have been failing due to a lack of understanding in regards to the market, poor game design, slow transactions on the blockchain and a decrease in interest from players and game developers. These obstacles are primarily due to the fact that blockchain games have never been viable outside of speculation, with no proof that they can be made profitable while maintaining user growth and engagement.

                                        <p className="">
                                            Web AI Play 2 Earn Game is better because it is based around artificial intelligence &#40;AI&#41;, allowing players to more seamlessly interact with their environment and each other, making it more engaging than traditional blockchain-based games. It also allows for faster transaction times without sacrificing security or integrity, supporting cryptocurrencies as well as existing payment systems such as Apple Pay or PayPal. The system also supports advanced analytics that can help improve player experience based on data like popular trends and playstyles, bringing a new level of insight into how players engage with games. Moreover, Web AI Play 2 Earn Game models itself after established gaming platforms like Steam or Xbox Live instead of existing blockchain ecosystems, simplifying the learning curve for developers when compared to building an entirely new platform from scratch.

                                        </p>

                                        <p className="">
                                            Web AI Play 2 Earn is a platform that enables users to access and benefit from blockchain games without the requirement of owning any cryptocurrency or virtual assets. This platform allows users to connect their accounts with web-based games and then use AI-powered algorithms to make predictions on the performance of those games. These predictions help users to assess accuracy in order to increase their chances of earning rewards as they play.
                                        </p>

                                        <p className="">
                                            When users confidently make correct predictions, they earn rewards and benefits such as tokens, coins, or in-game items. Web AI Play 2 Earn also allows users to earn rewards by predicting other blockchain games; these options include popular skill-based and luck-based blockchain games like Dream Team Fantasy Football, Casino Chaos, and Crypto Colony. By leveraging Web AI Play 2 Earn, game developers can also create unique gaming experiences for their players using tokenized and decentralized gamification features—whereby players can gain more rewards during gameplay.
                                        </p>
                                    </div>

                                </DropDown>

                                <DropDown title="WAPE Gamemodes">
                                    <div className="flex flex-col mt-5 gap-y-9">
                                        <div className="">
                                            <div className="flex items-center gap-x-2">
                                                <RiTeamFill />

                                                <h3 className='font-asap font-bold text-md'>TEAM DEATHMATCH</h3>

                                            </div>

                                            <p className="opacity-70 mt-3">
                                                Team Deathmatch &#40;TDM&#41; is a popular competitive game mode in the online shooter game, WAPE. Players join one of two teams, each with their own unique objectives. The aim is to eliminate all opponents from the other team within the allotted time limit and gain points for each kill. To win a match, team must reach a set point total before the opposing team does so. With intense firefights, tactical decisions and nerves of steel, TDM provides an especially satisfying experience for WAPE players.
                                            </p>
                                        </div>

                                        <div className="">
                                            <div className="flex items-center gap-x-2">
                                                <FaPeopleCarry />

                                                <h3 className="font-asap font-bold text-md">BATTLE ROYALE</h3>
                                            </div>
                                            <p className="opacity-70 mt-3">
                                                Battle Royale is a popular game mode in WAPE , first-person shooter set in a hostile environment where players must survive against the other pilots in order to win. Battle Royale pits you against up to 250 other heroes, all but one of whom has the same goal: Survival. As the match progresses, the map shrinks due to an ever-approaching circle of death known as "The Storm". Whoever remains inside the Storm area when it closes is eliminated from the game. In addition to eliminating opponents, players must also scavenge for weapons and resources scattered throughout the Battle Royale map in order to survive. The last pilot standing wins!
                                            </p>
                                        </div>

                                    </div>
                                </DropDown>

                                <DropDown title="WAPE Revenue Model">
                                    <div className="mt-5 opacity-70 flex flex-col gap-y-5">
                                        <p className="">
                                            WAPE, a popular online collectible card game, is looking to increase revenues with an innovative NFT integration and breeding model. In this model, WAPE combines non-fungible tokens &#40;NFTs&#41; with traditional card game mechanics, allowing players to own rare cards associated with their collection which can be used to create unique breeding or gameplay combinations.
                                        </p>

                                        <p className="">
                                            NFTs allow gamers to acquire a digital asset that is solely owned by them and stored securely on the blockchain. This asset is then recorded and stored in the network’s public ledger for all players to view. By including NFTs as part of the game mechanics, WAPE allows players to use these assets as part of their gaming experience, paying for cards with real world money or through trading on the open market.
                                        </p>

                                        <p className="">
                                            Players can also breed their cards in WAPE; creating new combinations from existing cards by spending a set Breeding Fee. These newly created cards will have special attributes that no other card has, giving them uniqueness and value that can appreciated in-game or exchanged outside of it. Players may then redeem the cards themselves using the Breeding Fee they paid initially or sell them on an online marketplace like OpenSea or one of the top CEXs. These sales result in profits earned when each transaction is completed successfully.
                                        </p>

                                        <p className="">
                                            The combination of NFT integration and breeding gives WAPE unprecedented opportunities for monetization compared to more traditional card games. By purchasing rare NFTs within the game and adding player-generated content from breeding, it creates a marketable product that can easily be traded off platform for further economic opportunity for its users. With millions of people playing digitally today, attracting solid revenue streams through this type of model could not only make WAPE an industry leader but also provide users with an engaging way to earn some money while playing!
                                        </p>
                                    </div>
                                </DropDown>

                                <DropDown title="WAPE Battle Royal Reward System">
                                    <div className="mt-5 flex flex-col gap-y-6">
                                        {rewardList.map((items, i) => {
                                            return (
                                                <div key={i}>
                                                    <div className="flex items-center gap-x-2">
                                                        <div className={`w-2 h-[8px] shadow-md rounded-full`} style={{ backgroundColor: `${items.color}`, boxShadow: `0px 0px 20px 1px ${items.color}` }}></div>

                                                        <h1 className={`uppercase font-semibold text-md`}>{items.tier} Tier</h1>
                                                    </div>
                                                    <p className='mt-2 opacity-70 ml-4'>{items.desc}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </DropDown>

                                <DropDown title="WAPE Team Deathmatch Reward System">
                                    <div className="mt-5 flex flex-col gap-y-7">
                                        {deathmatch.map((items, i) => {
                                            return (
                                                <div key={i}>
                                                    <div className="flex items-center gap-x-2">
                                                        {items.icon}
                                                        <h1 className="text-md font-semibold ">
                                                            {items.reward}
                                                        </h1>
                                                    </div>

                                                    <p className="ml-[22px]">
                                                        Points: <span className='opacity-70'>{items.points}</span>
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </DropDown>

                                <DropDown title="WAPE NFT Levels">
                                    <div className="mt-5">
                                        <div className="w-full flex p-3 border-[1px] border-black/10 font-semibold">
                                            <h3 className="w-full">NFT Level</h3>
                                            <h3 className="w-full">Number of NFTs</h3>
                                            <h3 className="w-full">Sum of NFTs</h3>
                                        </div>
                                        {levels.map((items, i) => {
                                            return (
                                                <div className='flex w-full' key={i}>
                                                    <h3 className="w-full border-[1px] border-black/10 p-3">{items.level}</h3>
                                                    <h3 className="w-full border-[1px] border-black/10 p-3">{items.number}</h3>
                                                    <h3 className="w-full border-[1px] border-black/10 p-3">{items.sum}</h3>

                                                </div>
                                            )
                                        })}
                                    </div>
                                </DropDown>

                            </div>
                        </div>

                    </EcoBox>
                </div>
            </div>
        </section>
    )
}

export default EcoContent