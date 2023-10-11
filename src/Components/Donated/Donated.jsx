import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../Utility/LocalStorage";
import DonatedCard from "../DonatedCard/DonatedCard";
import { Link } from "react-router-dom";

const Donated = () => {
    const donations = useLoaderData();

    const [appliedDonate, setAppliedDonate] = useState([]);
    useEffect(() => {
        const storedDonationsIds = getStoredDonation();
        if (donations.length > 0) {

            const donated = [];
            for (const id of storedDonationsIds) {
                const donation = donations.find(donation => donation.id === id);
                if (donation) {
                    donated.push(donation);
                }
            }

            setAppliedDonate(donated);

        }

    }, [])

    const localData = appliedDonate.length;
    console.log(localData);

    const [showAll, setShowAll] = useState(false);

    const handleSeeAll = () => {
        //console.log('clicked');
        setShowAll(true);
    }




    return (
        <div>

            <div className="grid grid-cols-2 gap-8 mt-20">
                {
                    showAll ? (appliedDonate.map(donated => <DonatedCard key={donated.id} donated={donated}></DonatedCard>)) : (
                        appliedDonate.slice(0, 4).map(donated => <DonatedCard key={donated.id} donated={donated}></DonatedCard>)
                    )
                }
            </div>

            {
                showAll ? (
                    <div>
                    </div>
                )
                    : (
                        <div className={`flex justify-center items-center mb-40 mt-20 ${localData < 5 ? 'hidden' : ''}`}>
                            <button
                                onClick={handleSeeAll}
                                className="bg-[#009444] border-none capitalize hover:bg-green-500 text-white font-bold py-3 px-7 rounded-xl"
                            >
                                See All
                            </button>
                        </div>
                    )}
                    
            <div className={`flex justify-center items-center mb-40 mt-20 ${localData > 0 ? 'hidden' : ''}`}>
                <div className="card w-96 bg-purple-300 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Warning!!</h2>
                        <p>Donation is not occured yet!! <br /> plese go to home and donate first!!</p>
                        <Link className="btn btn-warning text-white text-2xl p-2 mt-4" to="/" >Go back to Home</Link>
                    </div>
                    <figure><img src="https://i.ibb.co/bP6DNzT/no-data.png" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default Donated;