import React from 'react';
import ArtistDetail from './ArtistDetail';
import Loading from './Loading';

class ArtistItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isSelected : false
        }
    }

    render(){
        return(
            <>
                <div onClick={()=>this.setState({isSelected : !this.state.isSelected})}>{this.props.artist.nom}</div>
                {this.state.isSelected ? 
                this.props.albums === null ? <Loading /> : <ArtistDetail albums={this.props.albums} />
                : "" }
            </>
        )
    }
}

export default ArtistItem;