import { Link } from "react-router-dom";

const DonatedCard = (donated) => {
    const {id, Picture,Category,Title,Price,Category_bg,Card_bg,Text_button_bg} = donated.donated;
    console.log(Picture);

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
    const viewDetails ={
        background: Text_button_bg,
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl h-[240px]" style={cardStyle}>
            <figure><img src={Picture} alt="img" className="h-full w-[240px] rounded-xl"/></figure>
            <div className="card-body">
                <div className="card-actions">
                   <button className="btn text-left capitalize" style={btnStyle}>{Category}</button>
                </div>
                <h2 className="card-title">{Title}</h2>
                <h2 style={textStyle}>{Price}</h2>
                <div className="card-actions">
                    <Link to={`/donation/${id}`} className="btn btn-primary border-none text-white capitalize" 
                    style={viewDetails}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default DonatedCard;