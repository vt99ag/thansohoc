import React from 'react'
import Item from './Item'
import ItemRepeat from './ItemRepeapt'
const List = ({ obj, title }) => {
  return (
    <div className='list'>
      <h1 className='title_list'> {title}</h1>
      <ul className='list-item'>
        {
          Object.keys(obj).map((key, index) => {
            if (key === "soLap") {
              return <ItemRepeat  key={index}  name="Số lặp" soLap={obj[key]} />
            } else { 
              return <Item name={key} index={index} key={index} value={obj[key]} />
            }
          })
        }
        {/* <Item name='Số nội cảm'/>
          <Item fill={true} name='Số nội tâm'/>
          <Item name='Tương tác'/>
          <Item fill={true} name='Thái độ'/>
          <Item name='Nội tâm và tương tác'/>
          <Item fill={true} name='Số Lặp'/>
          <Item name='Số trưởng thành'/> */}
      </ul>
    </div>
  )
}

export default List