import React from "react";

type IMGViewProps = {
    img_file: string;
}

const IMGView: React.FC<IMGViewProps> = props => {
    if (props.img_file == '') { return null}
    console.log(props.img_file);
    
    return (
        <>
            <div>
                <img src={props.img_file} />
            </div>
        </>
    );
}

export default IMGView;