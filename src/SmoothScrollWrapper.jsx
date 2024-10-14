import { Lenis } from "@studio-freight/react-lenis";

const SmoothScrollWrapper = ({ children }) => {
    return (
        <Lenis root smoothWheel smoothTouch lerp={1}>
            {children}
        </Lenis>
    );
};

export default SmoothScrollWrapper;
