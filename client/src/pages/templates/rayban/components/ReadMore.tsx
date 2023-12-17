import { useState } from 'react';


const ReadMore = ({initialText}:{
    initialText:string
}) => {
    const [showMore, setShowMore] = useState(false);
    const text = showMore ? initialText : initialText.slice(0, 200);
    return (
        <>
            <p>
                {text}
                {!showMore && initialText.length > 200 && (
                    <button
                        className="text-blue-500"
                        onClick={() => setShowMore(true)}
                    >
                        Read More
                    </button>
                )}
                {showMore && (
                    <button
                        className="text-blue-500"
                        onClick={() => setShowMore(false)}
                    >
                        Read Less
                    </button>
                )}
            </p>
        </>
    )
}

export default ReadMore