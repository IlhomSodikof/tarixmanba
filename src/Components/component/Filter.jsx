import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

export default function Filter() {
  const [showHide, setShowHide] = useState({ key: '', value: false })
  // { key: '', value: false }
  return (
    <div className="sidebar-filter">{/* // map shuni ichida ishlidi */}

      <h1 className='sidebar-title'>Archialogiya yodgorliklari</h1>

      {[1, 3, 4, 5].map((e) =>
        <div className='filter-box' key={e}>
          {/* setVal({ ...val, key: e, value: !val.value }) */}
          <h3>Davirbo'yicha <span onClick={() => setShowHide({ ...showHide, key: e, value: !showHide.value })}>{showHide ? <FaPlus /> : <FaMinus />}</span></h3>
          <ul className={showHide.key == e ? showHide.value ? 'show-list' : "" : ""}>
            <li className="list-item-show">1-100<input type="checkbox" /></li>
            <li className="list-item-show">100-200<input type="checkbox" /></li>
            <li className="list-item-show">200-300<input type="checkbox" /></li>
            <li className="list-item-show">400-500<input type="checkbox" /></li>
            <li className="list-item-show">600-800<input type="checkbox" /></li>
          </ul>
        </div>
      )}


      {/* <div className='filter-box'>
        <h3>Davirbo'yicha <span onClick={() => setShowHide(!showHide)}>{showHide ? <FaPlus /> : <FaMinus />}</span></h3>
        <ul className={showHide ? 'show-list' : ""}>
          <li className="list-item-show"><span>Toshkent vil</span> <input type="checkbox" /></li>
          <li className="list-item-show">Andijon <input type="checkbox" /></li>
          <li className="list-item-show">Farg'ona <input type="checkbox" /></li>
          <li className="list-item-show">Namangan <input type="checkbox" /></li>
          <li className="list-item-show">Olti ariq <input type="checkbox" /></li>
        </ul>
      </div> */}

    </div>
  )

}
