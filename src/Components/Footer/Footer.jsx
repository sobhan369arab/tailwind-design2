import FooterDown from "./FooterDown"
import FooterTop from "./FooterTop"

export const Footer = () => {
  return (
    <div className=" all mt-16 bg-blue-100 dark:bg-zinc-700">
         <div className="container ">
            <FooterTop/>
            <FooterDown/>
         </div>
    </div>
  )
}
