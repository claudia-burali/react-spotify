import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fillMusicSection, fillMusicSectionEminem, fillMusicSectionPerry, fillMusicSectionQueen } from '../redux/actions';
import AlbumCard from './AlbumCard';

const SpotifyMain = () => {
  const dispatch = useDispatch()
  const dispatchQueen = useDispatch()
  const dispatchPerry = useDispatch()
  const dispatchEminem = useDispatch()
  const queenSongs = useSelector((state) => state.song.resultsQueen)
  const perrySongs = useSelector((state) => state.song.resultsPerry)
  const eminemSongs = useSelector((state) => state.song.resultsEminem)
  const query = useSelector((state) => state.query.results)
  const searchSongs = useSelector((state) => state.song.results)
  useEffect(()=> {
    dispatchQueen(fillMusicSectionQueen('Queen'));
    dispatchPerry(fillMusicSectionPerry('Katy Perry'));
    dispatchEminem(fillMusicSectionEminem('Eminem'));
  },[]);
  useEffect(() => {
    if (query) {
      dispatch(fillMusicSection(query));
    }
  }, [query]);
  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#1">TRENDING</a>
          <a href="#2">PODCAST</a>
          <a href="#3">MOODS AND GENRES</a>
          <a href="#4">NEW RELEASES</a>
          <a href="#5">DISCOVER</a>
        </div>
      </div>
       
       <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Best Results</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              { searchSongs && searchSongs.slice(0,4).map((song) => (<AlbumCard key={song.id} singleSong={song}/>))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              { queenSongs && queenSongs.slice(0,4).map((song) => (<AlbumCard key={song.id} singleSong={song}/>))}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            >
              { perrySongs && perrySongs.slice(0,4).map((song) => (<AlbumCard key={song.id} singleSong={song}/>))}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            >
              { eminemSongs && eminemSongs.slice(0,4).map((song) => (<AlbumCard key={song.id} singleSong={song}/>))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SpotifyMain;
