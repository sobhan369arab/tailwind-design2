import HeaderDown from "./HeaderDown"
import HeaderTop from "./HeaderTop"

const Header = () => {
  return (
    <div className="h-[430px] all">
        <div className="container">
            <HeaderTop/>
            <HeaderDown/>
        </div>
    </div>
  )
}

export default Header