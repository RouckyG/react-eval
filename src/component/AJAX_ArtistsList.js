import React from 'react';
import ArtistList from './ArtistList';

class AJAX_ArtistList extends React.Component {
    constructor(props){
        super(props);
        state : {
            artists : null
        }
    }

    componentDidMount(){
        fetch("https://iut-info.univ-reims.fr/users/jonquet/albums/public/index.php/artistes")
        .then((reponse) => reponse.json() )
        .then(json => this.setState({artists : json}))
    }

    render(){
        return this.state.artists === null ? <Loading /> : <ArtistList artists={this.state.artists}/>
    }
}

export default AJAX_ArtistList