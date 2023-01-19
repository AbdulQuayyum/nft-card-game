import React from 'react'
import Tilt from 'react-parallax-tilt'

import Styles from '../Styles/Index'
import { allCards } from '../Assets/Index'

const generateRandomCardImage = () => allCards[Math.floor(Math.random() * (allCards.length - 1))]

const img1 = generateRandomCardImage()
const img2 = generateRandomCardImage()

const Card = ({ card, title, restStyles, cardRef, playerTwo }) => (
  <Tilt>
    <div ref={cardRef} className={`${Styles.cardContainer} ${restStyles}`}>
      <img src={playerTwo ? img2 : img1} alt="ace_card" className={Styles.cardImg} />

      <div className={`${Styles.cardPointContainer} sm:left-[21.2%] left-[22%] ${Styles.flexCenter}`}>
        <p className={`${Styles.cardPoint} text-yellow-400`}>{card.att}</p>
      </div>
      <div className={`${Styles.cardPointContainer} sm:right-[14.2%] right-[15%] ${Styles.flexCenter}`}>
        <p className={`${Styles.cardPoint} text-red-700`}>{card.def}</p>
      </div>

      <div className={`${Styles.cardTextContainer} ${Styles.flexCenter}`}>
        <p className={Styles.cardText}>{title}</p>
      </div>
    </div>
  </Tilt>
)

export default Card
