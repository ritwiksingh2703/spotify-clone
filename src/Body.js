import React from 'react'
import "./Body.css"
import { useDataLayerValue } from './DataLayer'
import Header from "./Header"
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled"
import FavoriteIcon from "@material-ui/icons/Favorite"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import SongRow from './SongRow'

function Body({spotify}) {
  
  const [{discover_weekly},dispatch]=useDataLayerValue();
  console.log(discover_weekly)

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:6pzz7A6ekT3Rbbd4wSLj2S`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  
  return (
    <div className="body">
        <Header spotify={spotify} />
        <div className='body-info'>
           <img src={discover_weekly?.images[0].url} alt="" />
           <div className='body-infotext'>
             <strong>PLAYLIST</strong>
             <h2>Discover Weekly</h2>
             <p>{discover_weekly?.description}</p>

           </div>
        </div>
        <div className="body-songs">
          <div className='body-icons'>
            <PlayCircleFilledIcon className='body__shuffle' onClick={playPlaylist}/>
            <FavoriteIcon fontSize='large'/>
            <MoreHorizIcon />
          </div>
          
          {discover_weekly?.tracks.items.map(item => (
            
            <SongRow playSong={playSong} track={item.track} />
          ))}
          
        </div>
    </div>
  )
}

export default Body