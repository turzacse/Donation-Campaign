import { Link } from "react-router-dom";

const Donation = (donation) => {

    const data = donation.donation;
    console.log(data);
    const {id,Picture, Category, Title,Category_bg,Card_bg,Text_button_bg} = data;
    const cardStyle = {
        background: Card_bg,
    };
    const textStyle ={
        color: Text_button_bg,
    }
    const btnStyle ={
        background: Category_bg,
        color: Text_button_bg
    }
    return (
        <Link to={`/donation/${id}`}>
            <div className="mt-24 card h-[400px] shadow-xl" style={cardStyle}>
                <figure><img src={Picture} alt="donation" className=" h-48" /></figure>
                <div className="card-body">
                    <button className="text-left p-3 w-36 rounded-xl font-medium" style={btnStyle}>{Category}</button>
                    <h2 className="text-xl font-semibold" style={textStyle}>{Title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Donation;