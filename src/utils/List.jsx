import { RiKnifeFill } from 'react-icons/ri'
import { GiHealthNormal, GiUnlitBomb, GiSkullCrack } from 'react-icons/gi'
import { TbWindsock } from 'react-icons/tb'

export const whyList = [
    'Increases usage and familiarity of the cryptocurrency: Creating a play-to-earn game can help get people acquainted with your cryptocurrency. This could lead to more people getting involved in trading or investing in the token, increasing its popularity.',
    'Rewards users for interaction and engagement with the currency: Users will have an incentive to stay engaged with the token by playing the game and earning rewards. This keeps users from getting bored or disinterested and leads to increased user growth in the crypto space.',
    "Offers a way for creative expression: Games can act as an outlet for creative expression, allowing developers to create unique experiences with their tokens that don't exist anywhere else. This could help differentiate your cryptocurrency from other competing tokens.",
    'Potentially increase adoption of new technology: Games offer an accessible way for users to become acquainted with new technology such as blockchain platforms and other services related to cryptocurrencies. This could lead to new customers that may not otherwise be aware or interested in cryptocurrencies before experiencing a game created around them.'
]

export const rewardList = [
    {
        tier: 'bronze',
        desc: 'Players who finish in the bottom 25% of a match will receive the Bronze Tier reward. It includes 350 XP and a handful of coins.',
        color: '#CD7F32'
    },
    {
        tier: 'silver',
        desc: 'Players who finish in the top 25-50% of the match will get Silver Tier rewards. It includes 550 XP, more coins, and one gold bar for use in purchasing exclusive items.',
        color: '#C0C0C0'
    },
    {
        tier: 'gold',
        desc: 'Those who place in the top 50-75% will get Gold Tier rewards. That contains 750 XP, more coins, and two gold bars for purchasing exclusive items.',
        color: '#FFD700'
    },
    {
        tier: 'diamond',
        desc: 'The players who land in the top 75-95th percentile will have the Diamond tier reward which features 950 XP, even more coins, and three gold bars to use in buying exclusive items.',
        color: '#b9f2ff'
    },
    {
        tier: 'legendary',
        desc: 'The very top players—those that finish within 5% of first place—will receive Legendary tier rewards with 1,150XP and four gold bars to purchase exclusive products or services.',
        color: '#f86449'
    },

]

export const deathmatch = [
    {
        reward: 'Killing a player',
        points: '20 XP',
        icon: <>
            <RiKnifeFill />
        </>
    },
    {
        reward: 'Reviving a teammate',
        points: '10 XP',
        icon: <>
            <GiHealthNormal />
        </>
    },
    {
        reward: 'Placing a bomb',
        points: '50 XP',
        icon: <>
            <GiUnlitBomb />
        </>
    },
    {
        reward: 'Suicide',
        points: '-50 XP',
        icon: <>
            <GiSkullCrack />
        </>
    },
    {
        reward: 'Winning team',
        points: '100 XP',
        icon: <>
            <TbWindsock />
        </>
    },


]

export const levels = [
    {
        level: '0',
        number: '1',
        sum: '1',
    },
    {
        level: '1',
        number: '2',
        sum: '3',
    },
    {
        level: '2',
        number: '3',
        sum: '6',
    },
    {
        level: '3',
        number: '4',
        sum: '10',
    },
    {
        level: '4',
        number: '5',
        sum: '15',
    },
    {
        level: '5',
        number: '6',
        sum: '21',
    },

]

export const febList = [
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        done: true
    },
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        done: true
    },
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        done: true
    },
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        done: true
    },
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        done: true
    },
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        done: true
    },
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        done: true
    },
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        done: true
    },
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        done: true
    },
]

export const marchList = [
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        done: false
    },
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        done: false
    },
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        done: false
    },
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        done: false
    },
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        done: false
    },
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        done: false
    },
    {
        label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        done: false
    }

]