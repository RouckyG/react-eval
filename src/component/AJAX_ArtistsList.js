import React from 'react';
import ArtistList from './ArtistList';
import Loading from './Loading';

class AJAX_ArtistList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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