import { artists } from './best-selling-music-artists';
import ArtistDetails from '../../components/ArtistDetails';

function App() {

  const artistDetails = artists.map(artists =>
    <ArtistDetails
      name={artists.name}
      url={artists.photo_url}
      country={artists.country}
      active={artists.years_active}
    />)

  return (
    <div className="app">
      <h1>Best-selling music artists</h1>
      {artistDetails}
    </div>
  );
}

export default App;
