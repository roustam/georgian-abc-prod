import {Fragment} from "react";

const Letter = ({letter, letterName, letterDesc}) => {
  return (
    <div className={'letter-block'}>
      <div className={'letter'}>{ letter }</div>
      <div className={'desc-box'}>
        <div className={'letter-name'}>{ letterName }</div>
        <div className={'letter-desc'}>{ letterDesc }</div>
      </div>
    </div>
  )
}

export default Letter