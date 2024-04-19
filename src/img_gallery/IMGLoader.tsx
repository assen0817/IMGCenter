import React from "react";

type IMGLoaderProps = {
    onClickIMGView: (s: string) => void;
}

const IMGLoader: React.FC<IMGLoaderProps> = props => {
    
    return (
        <>
            <a onClick={ () => {props.onClickIMGView('./img/gura.jpg')}}><img className="width_thumnail" src="./img/gura.jpg" alt="" /></a>
        </>
    );
}

export default IMGLoader;