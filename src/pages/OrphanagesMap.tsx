/*import React from 'react';
import{Link} from 'react-router-dom';
import{FiPlus} from 'react-icons/fi';
import{ Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Rio do Sul</strong>
                    <span>Santa Catarina</span>
                </footer>
            </aside>
          <Map 
            center={[-22.9148368,-43.6854926]}
            zoom={15}
            style={{width: '100%', height: '100%'}}
          >
            <TileLayer 
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/titles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          //url='https://a.title.openstreetmap.org/{z}/{x}/{y}.png' 
            />
        </Map>
             <Link to="" className="create-orphanage">

            <FiPlus size={32} color="#FFF" /> 
            </Link>
         

           
            
               
        </div>
    )
    //FiPlus -> ícone do sinal de +
}

export default OrphanagesMap;
*/
import React from 'react';

import mapMarkerImg from '../images/map-marker.svg';
import {Link} from "react-router-dom";
import {FiPlus} from "react-icons/fi";
import "../styles/pages/orphanages-map.css";
import {Map} from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="HappyLogoMarker" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Curitiba</strong>
                    <span>Paraná</span>
                </footer>
            </aside>
            {console.log(process.env.REACT_APP_MAPBOX_TOKEN)}
            <Map 
            center={[-25.4533724,-49.1929618]} 
            zoom={15}
            style={{width:'100%', height:'100%'}}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>        
        </div>
    )
}

export default OrphanagesMap