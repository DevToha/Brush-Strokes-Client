import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useLocation } from "react-router-dom";
import './AllArt.css'


const AllArtAndCraft = () => {

    const [items, setItems] = useState([])

    const { loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)


    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    if (loading) {
        return <div className="text-center mt-10 items-center justify-center">
            <div className="loader16">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    }

    return (
        <div>
            <h2 className="text-center font-bold text-4xl mb-8 mt-10">All Art And Craft item</h2>

            <div className="bg-[#fae8d3] mt-8 lg:w-[1350px] lg:ml-[88px] md:ml-0 rounded-lg lg:p-10 md:p-5 lg:pl-28">


                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Stock Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                items.map(item => <tr key={item._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.photoURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.itemName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>{item.stockStatus}</td>
                                    <th>
                                        <Link to={`/craftDetails/${item._id}`}>
                                            <button className="btn btn-ghost btn-xs">View Details</button>
                                        </Link>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllArtAndCraft;