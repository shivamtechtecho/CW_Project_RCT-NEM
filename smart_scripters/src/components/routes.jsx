import LandingPage from "./LandingPage"
import { AboutUs } from "../RoutePages/Aboutus"

export const Routes = ()=>[
    {path: "/" ,  element: LandingPage },
    {path: "/aboutUs" ,  element: AboutUs },
    {path: "/himachalPradesh" ,  element: Himachal },
    {path: "/mandi" ,  element: Mandi },
    {path: "/kullu" ,  element: Kullu },
    {path: "/shimla" ,  element: Shimla},
    {path: "/spiti" ,  element: Spiti },
    {path: "/lahaul" ,  element: lahaul },
    {path: "/lahaulspiti" ,  element: LahaulSpiti },
    {path: "/jammukashmir" ,  element: Jammukashmir },
    {path: "/adventure" ,  element: Adventure },
    {path: "/trekking" ,  element: Trekking },
    {path: "/rafting" ,  element: Rafting },
    {path: "/Winterexpedition" ,  element: WinterExpedition },
    {path: "/videos" ,  element: Videos },
    {path: "/contact" ,  element: Contact },
    
]