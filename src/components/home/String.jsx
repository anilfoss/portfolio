import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useResize from "../../hooks/useResize";

const String = () => {
    const [width, setWidth] = useState("1200");
    const [height, setHeight] = useState("250");

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const stringRef = useRef(null);

    const screenWidth = useResize();

    const strokeWidth =
        screenWidth > 1921 ? (screenWidth * 0.003).toString() : 5;

    useEffect(() => {
        if (screenWidth > 1535) {
            setWidth("1200");
            setHeight("250");
        }
        if (screenWidth > 1921) {
            setWidth((screenWidth * 0.6).toString());
            setHeight((screenWidth * 0.1).toString());
        }
        if (screenWidth < 1536) {
            setWidth("1000");
            setHeight("200");
        }
        if (screenWidth < 1280) {
            setWidth("950");
            setHeight("180");
        }
        if (screenWidth < 1024) {
            setWidth("720");
            setHeight("160");
        }
        if (screenWidth < 768) {
            setWidth("580");
            setHeight("130");
        }
        if (screenWidth < 640) {
            setWidth("300");
            setHeight("100");
        }
    }, [screenWidth]);

    let initialPath = `M 10 ${height / 2} Q ${width / 2} ${height / 2} ${
        width - 10
    } ${height / 2}`;
    let finalPath = `M 10 ${height / 2} Q ${width / 2} ${height / 2} ${
        width - 10
    } ${height / 2}`;

    const handleMouseMove = (event) => {
        const rect = stringRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setCoords({ x, y });

        initialPath = `M 10 ${height / 2} Q ${coords.x} ${coords.y} ${
            width - 10
        } ${height / 2}`;
        gsap.to("#string svg path", {
            attr: {
                d: initialPath,
            },
            duration: 1.5,
            ease: "elastic.out(1,0.1)",
        });
    };

    const handleMouseLeave = () => {
        gsap.to("#string svg path", {
            attr: {
                d: finalPath,
            },
            duration: 1.5,
            ease: "elastic.out(1,0.1)",
        });
    };

    return (
        <div
            ref={stringRef}
            id="string"
            className={`mx-auto w-${width}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <svg className="" width={width} height={height}>
                <path
                    d={`M 10 ${height / 2} Q ${width / 2} ${height / 2} ${
                        width - 10
                    } ${height / 2}`}
                    stroke="#000"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />
            </svg>
        </div>
    );
};

export default String;

// ======== do not delete this to understand ===========

// import { useRef, useState } from "react";
// import gsap from "gsap";

// const String = () => {
//     const [coords, setCoords] = useState({ x: 0, y: 0 });
//     const stringRef = useRef(null);

//     let initialPath = "M 10 125 Q 600 125 1190 125";
//     let finalPath = "M 10 125 Q 600 125 1190 125";

//     const handleMouseMove = (event) => {
//         const rect = stringRef.current.getBoundingClientRect();
//         const x = event.clientX - rect.left;
//         const y = event.clientY - rect.top;
//         setCoords({ x, y });

//         initialPath = `M 10 125 Q ${coords.x} ${coords.y} 1190 125`;
//         gsap.to("#string svg path", {
//             attr: {
//                 d: initialPath,
//             },
//             duration: 1.5,
//             ease: "elastic.out(1,0.1)",
//         });
//     };

//     const handleMouseLeave = () => {
//         gsap.to("#string svg path", {
//             attr: {
//                 d: finalPath,
//             },
//             duration: 1.5,
//             ease: "elastic.out(1,0.1)",
//         });
//     };

//     return (
//         <div
//             ref={stringRef}
//             id="string"
//             className="mx-auto w-full max-w-[1200px]"
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//         >
//             <svg className="" width="1200" height="250">
//                 <path
//                     d="M 10 125 Q 600 125 1190 125"
//                     stroke="#000"
//                     strokeWidth="5"
//                     fill="transparent"
//                 />
//             </svg>
//         </div>
//     );
// };

// export default String;
