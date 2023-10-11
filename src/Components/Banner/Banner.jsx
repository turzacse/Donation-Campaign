import { useState } from "react";

const Banner = ({ onCategoryChange }) => {

    const [inputCategory, setInputCategory] = useState("");
    const handleCategory = (e)=>{
      setInputCategory(e.target.value);
    }

    const btnClick = () =>{
        onCategoryChange(inputCategory);
    }

    return (
        <div >
            <div class="flex h-screen justify-center items-center flex-col">
                <div
                    class="w-full h-[600px] bg-[url('https://i.ibb.co/LdnWYp3/bg.jpg')] bg-cover bg-center">
                    
                    <div class="w-full h-full  backdrop-brightness-[.2]">
                        
                     <div className="">
                        <h2 className="text-4xl font-bold text-center flex justify-center items-center w-full  text-white pt-40 mb-6">I Grow By Helping People In Need</h2>
                        <div className="flex  justify-center items-center w-full ">
                            <input type="text" placeholder="Search here....." className="p-3 rounded-sm border-none " 
                            onChange={handleCategory}
                            />
                            <button className="btn bg-[#FF444A] border-none text-white capitalize"
                            onClick={btnClick}
                            >Search</button>
                        </div>
                      </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;