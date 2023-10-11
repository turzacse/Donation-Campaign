
const getStoredDonation = () =>{
    const storedDonation = localStorage.getItem('donation');

    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}

const saveDonation = id =>{
     const storedDonation = getStoredDonation();
     const exists = storedDonation.find(DonationId => DonationId === id);

     if(!exists){
        storedDonation.push(id);
        localStorage.setItem('donation', JSON.stringify(storedDonation))
     }
}

export {saveDonation, getStoredDonation}