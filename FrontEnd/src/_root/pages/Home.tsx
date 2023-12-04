import { Link } from "react-router-dom"
import { homeOptions } from "../../constants"

const Home = () => {
    return (
        <div className="text-black">
            <div className="flex p-8 ml-4">
                <h2 className="h2-bold">
                    Selecione seu perfil
                </h2>

            </div>
            <div className="flex p-8 ml-4">
                <div className="flex-between gap-8">
                    {homeOptions.map((option) => (
                        <div key={option.label} className="flex gap-3 p-20 ml-20 hover:bg-primary cursor-pointer rounded-lg">
                            <Link
                                to={option.route}
                                className="flex-center flex-col gap-5"
                            >
                                <img
                                    src={option.imgUrl}
                                    alt={option.label}
                                    width={30}
                                    height={30}
                                />
                                {option.label}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home