import React from 'react';
import ArtistDetail from './ArtistDetail';
import Loading from './Loading';

class ArtistItem extends React.Component {
    constructor(props){
        super(props);
        state : {
            isSelected : false
        }
    }

    render(){
        return(
            <>
                <div>{this.props.artist.nom}</div>
                {isSelected ? "" :
                this.props.albums === null ? <Loading /> : <ArtistDetail albums={this.props.albums} />}
            </>
        )
    }
}

export default ArtistItem;