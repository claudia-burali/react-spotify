

const AlbumCard =  ({ singleSong }) => {
    return (
      <div class="col text-center">
          <img class="img-fluid" src={singleSong.album.cover_medium} alt="track" />
        <p>
            Track: "{`${singleSong.title}`}" <br/>
            Artist: {singleSong.artist.name}
        </p>
      </div>
    );
  }

export default AlbumCard
