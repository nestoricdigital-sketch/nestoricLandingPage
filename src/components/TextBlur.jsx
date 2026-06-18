import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TextBlur = ({
    text,
    className = "",
    delay = 0.08,
    animateBy = "words",
    direction = "up",
    once = true,
}) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    const items =
        animateBy === "words" ? text.split(" ") : text.split("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) observer.disconnect();
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [once]);

    const variants = {
        hidden: {
            opacity: 0,
            filter: "blur(24px)",
            y: direction === "up" ? 40 : -40,
            scale: 0.92,
        },
        visible: (i) => ({
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            scale: 1,
            transition: {
                duration: 1.2,
                delay: i * delay,
                ease: [0.22, 1, 0.36, 1], // Apple-style easing
            },
        }),
    };

    return (
        <div ref={ref} className={`flex flex-wrap ${className}`}>
            {items.map((item, index) => (
                <motion.span
                    key={index}
                    custom={index}
                    variants={variants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="inline-block will-change-transform"
                >
                    {item}
                    {animateBy === "words" && index !== items.length - 1 && "\u00A0"}
                </motion.span>
            ))}
        </div>
    );
};

export default TextBlur;