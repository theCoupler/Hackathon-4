import { useEffect, useState } from "react";
import "./Artist.scss"
import { useParams } from "react-router";
import Navigation from "./Navigation";

export default function Artist() {
  const {id} = useParams()
  const [releases, setReleases] = useState();


  const loadData = async () => {
    const response = await fetch(
      `http://musicbrainz.org/ws/2/release?artist=${id}&limit=10&fmt=json`
    );
    const data = await response.json();

    setReleases(data.releases);
   

  };

  useEffect(() => {
    loadData()
}, [])

return (
 
    releases
    ?
    <>
        <Navigation/>
        <div className="releases">
            {
                releases.map(release => {
                    return (
                        <div key={release.id} className="release">
                            <h3 className="release__title">{release.title}</h3>
                            <ul className="release__list">
                                { 
                                    release['text-representation'].language
                                    ?
                                    <li className="release__list-item">Language: {release['text-representation'].language}</li>
                                    :
                                    ""
                                }
                                  { 
                                    release.date
                                    ?
                                    <li className="release__list-item">Release date: {release.date}</li>
                                    :
                                    ""
                                }
                                  { 
                                    release.country
                                    ?
                                    <li className="release__list-item">Country: {release.country}</li>
                                    :
                                    ""
                                  }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    </>
    :
    <p>no music</p>
);

 
}
