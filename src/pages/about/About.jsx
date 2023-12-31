import React from 'react'
import './About.css'
import video from "../../assets/videos/1.mp4"
import { motion } from "framer-motion";
const About = () => {
    return (
        <motion.section className='about' initial={{ opacity: 0, transition: { delay: 0.3, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, transition: { delay: 0.5, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
            <div className="about__container">
                <motion.div className="about__left" initial={{ opacity: 0, x: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, x: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, x: -500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
                    <h1>About Me</h1>
                    <div className="about__left__container">
                        <h3>Welcome to the vibrant world of Moaaz Askaar, a young Nubian percussionist hailing from Egypt. At the age of 32, Moaaz has already carved a significant name for himself in the music industry, following in the footsteps of his father, the legendary Folklore Nubian Singer, Saaber Askaar. With a profound passion for music flowing through his veins, Moaaz's journey has been a harmonious fusion of traditional Nubian rhythms, the energetic Rai music of Algeria, and the soul-stirring melodies of Sufi music.</h3>
                        <h3>Moaaz's love for music ignited at a tender age, as he was surrounded by the rich musical heritage of his Nubian roots. Growing up in Egypt, he found inspiration in the vibrant cultural tapestry of the region, a melting pot of ancient traditions and contemporary influences. Immersed in the rhythms of life, the young musician embarked on a musical quest that would shape his destiny.</h3>
                        <div className="about__festivals">
                            <h2>Moaaz international festivals:</h2>
                            <h3>•	International Festival of Baltopren, Denmark 2019</h3>
                            <h3>•	Al-Hadra Women's Festival, Morocco 2017</h3>
                            <h3>•	Sur Jahan Festival, Kolkata. India 2023</h3>
                            <h3>•	Kairouan Festival, Tunisia 2019</h3>
                            <h3>•	International Festival of Sufi Music, Morocco 2018</h3>
                            <h3>•	Kuwait Festival at Al-Shaheed Theater, Kuwait, 2017</h3>
                            <h3>    International Jordan Musicial Festival, Jordan, 2017</h3>
                        </div>
                        <h3>His musical odyssey began when he co-founded the band "Raina," a group dedicated to the popular Rai music of Algeria. Rai music, known for its dynamic beats and poetic lyrics, resonated deeply with Moaaz's soul. As the band's heartbeat, Moaaz's percussions added a distinctive Nubian touch to the Rai tunes, creating a harmonious blend of North African melodies. Under his guidance, "Raina" rose to prominence, enchanting audiences far and wide with their electrifying performances.</h3>
                        <h3>However, Moaaz's artistic spirit knew no bounds, and he ventured into yet another mesmerizing realm of music. In collaboration with the renowned Sufi singer Amer Eltony, he co-founded the ethereal band "Mawlwaya El Mawlaweya." Sufi music, with its spiritual essence and transcendent aura, spoke to Moaaz's soul on a profound level. With his masterful percussion skills, he added depth and rhythm to the enchanting Sufi melodies, creating an otherworldly musical experience.</h3>
                        <h3>As an artist, Moaaz's creativity knows no limits. Beyond his involvement in "Raina" and "Mawlwaya El Mawlaweya," he explores diverse genres, constantly pushing the boundaries of his artistry. African Beats, in particular, have captured his heart, allowing him to delve into the rhythmic diversity of the continent. Moaaz's ability to seamlessly blend traditional African rhythms with contemporary sounds sets him apart as an innovative force in the music industry.</h3>
                        <h3>Composing music is not merely a profession for Moaaz; it is a way of life. Drawing inspiration from the intricacies of human emotions, the beauty of nature, and the shared experiences of humanity, he weaves melodic tales that resonate with audiences universally. His compositions are a window into his soul, each note carrying a piece of his journey and the collective human experience.</h3>
                        <h3>In the world of percussion, Moaaz is a virtuoso. Driven by his passion for rhythm, he has mastered an array of percussion instruments, including the darbuka, djembe, tabla, and the traditional Nubian drum called "tambour." With his skilled hands, he breathes life into these instruments, allowing them to communicate in the universal language of music.</h3>
                        <h3>Moaaz's performances transcend mere entertainment; they are soul-stirring experiences that transport listeners to another realm. The rhythm of his beats, infused with the essence of his Nubian heritage, evokes a sense of unity and oneness with the music. Whether on stage or in the studio, his energy and passion are palpable, leaving an indelible mark on all who have the privilege to hear him play.</h3>
                        <h3>Beyond his musical endeavors, Moaaz is an advocate for preserving and promoting the cultural heritage of Nubia. He believes in the power of music to bridge gaps, connect communities, and preserve the essence of tradition in the ever-changing modern world. Through his art, he aims to showcase the beauty and depth of Nubian culture, ensuring that its legacy continues to thrive for generations to come.</h3>
                        <h3>As Moaaz's journey unfolds, he remains steadfast in his dedication to the art of music. A beacon of inspiration for aspiring musicians and music enthusiasts alike, he continues to explore, innovate, and create music that transcends boundaries. From the heart of Egypt to the far reaches of the world, Moaaz's rhythmic magic spreads joy, love, and unity, making the world a more harmonious place, one beat at a time.</h3>
                        <h3>Join him on his musical voyage, and let the enchanting rhythms of Moaaz Askaar take you on a transformative journey of melodies and emotions. Experience the essence of Nubia, the passion of Rai, and the spirituality of Sufi music through the percussive artistry of a young maestro whose beats echo the very rhythm of life.</h3>
                    </div>
                </motion.div>
                <div className="about__right">
                    <motion.div className="right__video__background" initial={{ opacity: 0, x: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, x: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, x: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
                        <motion.video controls loop autoPlay initial={{ opacity: 0, x: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, x: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, x: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
                            <source src={video} type="video/mp4" />
                        </motion.video>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default About