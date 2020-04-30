import React from 'react';

function ArtistDetail(props){

    return(
        <div className='AlbumsDetail'>
        {props.albums.map(album => {
            return (<> 
            <div className='AlbumDetail'> {album.année} - {album.nom}</div>
            </>)
        })}
        </div>
    )
}

export default ArtistDetail