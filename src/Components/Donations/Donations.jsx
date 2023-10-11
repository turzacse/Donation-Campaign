import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";

const Donations = ({ inputCategory }) => {
    const [donations, setDonations] = useState([]);

    const [searchedCategory, setSearchedCategory] = useState("");

    //console.log(inputCategory);
    useEffect(()=> {
        fetch('donation.json')
        .then(res => res.json())
        .then(data => setDonations(data))
    } ,[])



    const filteredDonations = inputCategory
        ? donations.filter(donation => donation.Category.toLowerCase().includes(inputCategory.toLowerCase()))
        : donations;


    useEffect(() => {
        setSearchedCategory(inputCategory);
        console.log("Searched Category:", inputCategory);
    }, [inputCategory]);
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mx-">
            {/* {
                donations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
            } */}
            {filteredDonations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)}
        </div>
    );
};

export default Donations;