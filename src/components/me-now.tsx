import SectionTitle from "./ui/section-title";

const MeNow = () => {
    return (
        <div>
            <SectionTitle text="Me Now" />
            <h5>Currently reading</h5>
            <div className="flex items-center gap-10 my-2">
                <img className="w-[8rem] shadow-xl" src="https://images.cdn2.buscalibre.com/fit-in/360x360/ca/21/ca2172fc190516f831ee04d26910626a.jpg" />
                <div>
                    <h6 className="m-0 font-semibold">Frank Herbert's Dune</h6>
                    <p className="m-0">I enjoy sci-fi... and star wars... and game of thrones. You get the idea.</p>
                </div>
            </div>

            <div className="flex items-center gap-10 my-2">
                <img className="w-[8rem] shadow-xl" src="https://m.media-amazon.com/images/I/81+oMD7Lm7L._AC_UF1000,1000_QL80_.jpg" />
                <div>
                    <h6 className="m-0 font-semibold">Joe Reis & Matt Housley' Fundamentals of Data Engineering</h6>
                    <p className="m-0">Yeah this is a spoiler of my career shift in a few years. I just hope it keeps being such a nice engineering field.</p>
                </div>
            </div>
        </div>
    );
};

export default MeNow;
