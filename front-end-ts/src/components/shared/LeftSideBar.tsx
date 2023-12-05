import { NavLink, useNavigate } from "react-router-dom";
import { sidebarLinks } from "../../constants";
import { INavLink } from "../../types";
import Button from "../ui/Button";
import  {useOrganizer}  from "../../_root/context/OrganizerContext";

const LeftSideBar = () => {
    const { organizer, setOrganizer } =  useOrganizer();
    // --------------------------
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
        setOrganizer(null)
    }
    // ---------------------------
    // Usar a função acima para apontar para um endereço.
    // Colocar, no botão, a props onClick={handleClick}.

    return (
        <nav className="leftsidebar">
            <div>
                <div>
                    <img
                        src="/assets/images/logo.png"
                        alt="logo"
                        width={104}
                        height={24}
                        className="ml-[15px]"
                    />
                </div>
                <div className="flex-center mt-12 flex-col">
                    <img
                        src="/assets/icons/profile-placeholder.svg"
                        alt="profile-placeholder"
                        width={80}
                        height={40}
                    />
                    <h2 className="h3-bold text-black mt-3">
                        Clara Martins
                    </h2>
                </div>
                {organizer!==null && (
                        <ul className="flex flex-col mt-10 gap-1">
                        {sidebarLinks.map((link: INavLink) => {
                            return (
                                <li key={link.label} className="leftsidebar-link text-black">
                                    <NavLink
                                        to={organizer ? link.routeAdmin : link.routeVendor}
                                        className="flex gap-4 items-center p-4"
                                    >
                                        <img
                                            src={link.imgUrl}
                                            alt={link.label}
                                        />
                                        {organizer ? link.labelAdmin : link.label}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>


                )}
                
                <div className="flex px-6 py-10 flex-col justify-between mt-12">
                    <Button
                        type="button"
                        title="Sair"
                        onClick={handleClick}
                        variant="text-black font-semibold px-3 py-3 bg-[#FEAF00] rounded-lg"
                    />                
                </div>
            </div>
        </nav>
    )
}

export default LeftSideBar