import React from 'react'
import { useNavigate } from 'react-router-dom'

import CustomButton from './CustomButton'
import Styles from '../Styles/Index'
import { player01, player02 } from '../Assets/Index'
import { useGlobalContext } from '../Context/Index'

const GameLoad = () => {
  const { walletAddress } = useGlobalContext()
  const navigate = useNavigate()

  return (
    <div className={`${Styles.flexBetween} ${Styles.gameLoadContainer}`}>
      <div className={Styles.gameLoadBtnBox}>
        <CustomButton
          title="Choose Battleground"
          handleClick={() => navigate('/Battleground')}
          restStyles="mt-6"
        />
      </div>

      <div className={`flex-1 ${Styles.flexCenter} flex-col`}>
        <h1 className={`${Styles.headText} text-center`}>
          Waiting for a <br /> worthy opponent...
        </h1>
        <p className={Styles.gameLoadText}>
          Protip: while you're waiting, choose your preferred battleground
        </p>

        <div className={Styles.gameLoadPlayersBox}>
          <div className={`${Styles.flexCenter} flex-col`}>
            <img src={player01} className={Styles.gameLoadPlayerImg} />
            <p className={Styles.gameLoadPlayerText}>
              {walletAddress.slice(0, 30)}
            </p>
          </div>

          <h2 className={Styles.gameLoadVS}>Vs</h2>

          <div className={`${Styles.flexCenter} flex-col`}>
            <img src={player02} className={Styles.gameLoadPlayerImg} />
            <p className={Styles.gameLoadPlayerText}>??????????</p>
          </div>
        </div>

        <div className="mt-10">
          <p className={`${Styles.infoText} text-center mb-5`}>OR</p>

          <CustomButton
            title="Join other battles"
            handleClick={() => navigate('/JoinBattle')}
          />
        </div>
      </div>
    </div>
  )
}

export default GameLoad