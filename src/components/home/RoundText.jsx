const RoundText = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlLang="en"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 500"
            width={300}
            height={300}
            className="circular-text"
        >
            <defs>
                <path
                    id="textcircle"
                    d="M250,400
                       a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                    transform="rotate(12,250,250)"
                />
            </defs>
            <g className="textcircle">
                <text textLength="940">
                    <textPath
                        xlinkHref="#textcircle"
                        aria-label="CSS & SVG are awesome"
                        textLength="940"
                    >
                        PORTFOLIO &#8226; PORTFOLIO &#8226; PORTFOLIO &#8226;
                        PORTFOLIO &#8226; PORTFOLIO&nbsp;&#8226;&nbsp;
                    </textPath>
                </text>
            </g>
        </svg>
    );
};

export default RoundText;
