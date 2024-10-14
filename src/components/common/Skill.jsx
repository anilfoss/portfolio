const Skill = ({ className, title }) => {
    // console.log("className =", className);
    // console.log("title =", title);

    return (
        <div
            className={`skill bg-white opacity-0 blur-2xl ${
                className ? className : ""
            }`}
        >
            <button className="bg-black uppercase px-14 pt-1 pb-2 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                {title}
            </button>
        </div>
    );
};

export default Skill;
