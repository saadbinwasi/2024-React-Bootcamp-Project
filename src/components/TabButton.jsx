


function TabButton({OnSelect,children,isSelected}) {
  return (
   <li><button className={isSelected ? 'active' : ''} onClick={OnSelect}>{children}</button></li>
  )
}

export default TabButton
