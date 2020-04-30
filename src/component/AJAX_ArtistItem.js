import React from 'react';
import ArtistItem from './ArtistItem';
import Loading from './Loading';

class AJAX_ArtistItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            albums : null
        }
    }

    componentDidMount(){
        fetch("https://iut-info.univ-reims.fr/users/jonquet/albums/public/index.php/artistes/"+this.props.artist.id+"/albums")
        .then((reponse) => reponse.json() )
        .then(json => this.setState({albums : json}))
    }

    render(){
        return this.state.albums === null ? null : <ArtistItem artist={this.props.artist} albums={this.state.albums}/>
    }
}

export default AJAX_ArtistItem;