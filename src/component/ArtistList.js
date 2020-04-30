import React from "react";
import AJAX_ArtistItem from "./AJAX_ArtistItem";

function ArtistList(props){

    return (
        props.artists.map(artist => {
            return <AJAX_ArtistItem artist={artist} key={artist.id} />
        })
    )
}

export default ArtistList