import React from "react";
import IMGLoader from "./IMGLoader";
import IMGView from "./IMGView";

type IMGGalleryState = {
    img_file: string;
}

class IMGGallery extends React.Component<{}, IMGGalleryState> {
    constructor(props: {}){
        super(props);
        this.state = {img_file: ""}
    }
    handleIMGView(s: string) {
        this.setState( {img_file: s});
    }
    
    render() {
        return (
            <>
                <IMGLoader onClickIMGView={s => this.handleIMGView(s)} />
                <IMGView img_file={this.state.img_file}/>
            </>
        );
    }
}

export default IMGGallery;