import React, { useEffect, useState } from 'react';
import * as dfd from 'danfojs';
import Icon from '../icon/Icon';

const DataFrame = () => {
    const [dataFrame, setDataFrame] = useState<dfd.DataFrame | null>(null);

    const brockaiBg = {
        backgroundColor: 'rgba(255, 75, 75, 0.2)', // Replace with your desired color
    };

    const textColorStyle = {
        color: 'rgba(255, 75, 75, 0.7)'
    }

    useEffect(() => {
        // Create a DataFrame from a JSON object
        const data = {
            "A": [1, 2, 3, 4],
            "B": [5, 6, 7, 8],
            "C": [9, 10, 11, 12]
        };

        const df = new dfd.DataFrame(data);

        // Perform some operations
        df.print(); // Print DataFrame to console
        setDataFrame(df);

    }, []);

    return (
        <div className='m-3'>
            <div className="pt-3">
                <div>
                    {dataFrame ? (
                        <div>
                            <pre>{dataFrame.toString()}</pre>
                        </div>
                    ) : (
                        <p>Loading DataFrame...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DataFrame;
