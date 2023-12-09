import { StyleDescriptionArticle } from "./StyleDescriptionArticle";


export function DescriptionArticle() {

    return (
        <StyleDescriptionArticle>
            <h1>
                Welcome to <span> My Tech World!</span>
            </h1>
            <div className="quote">
                <p>
                    "They say that the ideal is to improve the wheel and not replace it,
                    but before inventing it, what excuse did they say?"
                </p>
                <cite>- Natã Spitz Alves</cite>
            </div>
            <div className="aboutMe">
                <div className="text__Left">
                    <p>
                        Staying in the comfort zone? Not my style! My journey has always
                        been propelled by an unwavering quest to comprehend the intricacies
                        of how things work and discover inspiration along the way.
                    </p>
                    <p>
                        I am a fervent enthusiast for new knowledge and passionate about
                        assisting people. I've found my true passion in technology, where
                        every challenge is an opportunity for learning and growth. After
                        all, comfort has never driven significant innovations.
                    </p>
                </div>
                <div className="text__Right">
                    <p>
                        On my journey as a web developer, I've realized that technology is
                        more than just codes and algorithms; it's the tool that enables the
                        creation of solutions that positively impact people's lives. My
                        creative approach, insatiable thirst for knowledge, and emotional
                        intelligence are the cornerstones shaping my daily work.
                    </p>
                    <p>
                        I am ready to tackle the most complex challenges because I believe
                        every line of code is an opportunity to express my passion for
                        innovation. If you're seeking a professional who goes beyond the
                        conventional, you're in the right place. Let's together turn ideas
                        into reality!
                    </p>
                </div>
            </div>
        </StyleDescriptionArticle>
    )
}