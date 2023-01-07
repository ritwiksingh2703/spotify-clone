import React from 'react'
import "./SongRow.css"

function SongRow({track,playSong}) {
  return (
    <div className='song-row' onClick={() => playSong(track.id)}>
        <img src={track.album.images[0].url} alt='' />
        <div className="song-rowinfo">
            <h1>{track.name}</h1>
            
            <p className='song-rowalbum'>
                {track.artists.map((artist) => artist.name).join(",")}
                
            </p>
        </div>
    </div>
  )
}

export default SongRow