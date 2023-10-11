import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation } from '../../Utility/LocalStorage';


const DonationDetails = () => {

    const donation = useLoaderData();

    const { id } = useParams();
    const [data, setData] = useState([donation[id - 1]])
    console.log(data);

    const { Title, Picture, Description, Price, Text_button_bg } = data[0];
    console.log(data[0].Picture);
    const btnColor ={
        background: Text_button_bg,
    }
    const idInt = parseInt(id);

    const handleClick = () =>{
        saveDonation(idInt);
        toast('You have Successfully Donatated')
    }
    return (
        <div>
            <div>
                <img src={Picture} alt="" className="rounded-xl w-full h-[600px] relative"/>
                
                <div className="relative h-32 bg-[#0B0B0B80] opacity-80 bottom-32">
                </div>
                <div className="relative bottom-52">
                    <button 
                    onClick={handleClick}
                    className="btn ml-20 border-none text-white font-medium capitalize"
                    style={btnColor}>
                    Donation: {Price}
                    </button>
                </div>
                
            </div>
            <div className="relative bottom-32">
                <h2 className="text-4xl font-bold mt-5">{Title}</h2>
                <p>{Description}</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DonationDetails;