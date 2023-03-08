import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';

const TextSpan = ({children}) => {

    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false); 
    // usestate hook, set to see if playing or not playing, on mouse hover its initial state is false so we play the function, 
    // and on function start animation, after that we set to true, so next time we hover over it, it wont play again, on animation 
    // complete it sets to false, so now the animation plays one time every time we hover it

    const rubberBand = () => {
        controls.start({
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.4, .55, 1)",
                "scale3d(.75, 1.25, 1)",
                "scale3d(1, 1, 1)",
                "scale3d(1.25, .85, 1)",
                "scale3d(.9, 1.05, 1)",
                "scale3d(1, 1, 1)",
            ],
            transition: {
                // ease: "easeInOut",
                times: [0, .4, .6, .7, .8, .9],
            },
            animate: {
                backgroundColor: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)']
            },
        })
        setIsPlaying(true)
    }

    return (
        <motion.span 
            className='inline-block text-4xl font-bold mt-6 md:mt-0 md:text-7xl'
            animate={controls}
            onMouseOver={() => {
            if (!isPlaying) {
                rubberBand()
            }
        }}
        onAnimationComplete={() => setIsPlaying(false)}
        >
            {children}
        </motion.span>
    );
}

export default TextSpan;