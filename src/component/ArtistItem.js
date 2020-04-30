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
            <div className='ArtistItem'>
                <div className='Artist' onClick={()=>this.setState({isSelected : !this.state.isSelected})}>
                    <div>
                        {this.props.albums === null ? <Loading />:<span>{this.props.albums.length}</span>}
                          {this.props.artist.nom} 
                    </div>
                    <div className="open">{this.state.isSelected?"-":"+"}</div>
                    </div>
                {this.state.isSelected ? 
                this.props.albums === null ? <Loading /> : <ArtistDetail albums={this.props.albums} />
                : "" }
            </div>
        )
    }
}

export default ArtistItem;