/** Allows users to browse through the episodes of the given show */
import { useState } from 'react';
import "./shows.css";
import EpisodeList from '../episodes/EpisodeList.jsx';
import EpisodeDetails from '../episodes/EpisodeDetails.jsx';

export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return (
      <section className="episode-details">
        <h2>Episode Details</h2>
        <p>Select an episode to learn more.</p>
      </section>
    );
  }

  return (
    <div className="show-details">
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}