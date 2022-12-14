/**
 * Main page of website. Contains a grid showing the information retrieved from the API.
 */

import { useEffect, useState } from 'react';
import './App.css';
import { DomainList } from "./components/DomainList";
import { DataChart } from './components/DataChart';
import { PreviewBox } from './components/PreviewBox';
import { LightBox } from './components/LightBox';

function App() {
  const backendURL = "https://workers.navidgeneral.workers.dev";

  const [popularDomains, setPopularDomains] = useState({});
  const [trafficChange, setTrafficChange] = useState({});
  const [attackLayer3, setAttackLayer3] = useState({});
  const [isLightBoxVisible, setIsLightBoxVisible] = useState(false);
  const [lightBoxComponent, setLightBoxComponent] = useState(null);

  // set the state variables based on API info
  useEffect(() => {
    const fetchPopularDomains = async () => {
      const res = await fetch(`${backendURL}/popular-domains`, {
        method: "get",
        mode: "cors"
      });

      const json = await res.json();

      setPopularDomains(json);
    };

    const fetchTrafficChange = async () => {
      const res = await fetch(`${backendURL}/traffic-change`, {
        method: "get",
        mode: "cors"
      });

      const json = await res.json();

      setTrafficChange(json);
    };

    const fetchAttackLayer3 = async () => {
      const res = await fetch(`${backendURL}/attack-layer3`, {
        method: "get",
        mode: "cors"
      });

      const json = await res.json();

      setAttackLayer3(json);
    };

    fetchPopularDomains().catch(console.error);
    fetchTrafficChange().catch(console.error);
    fetchAttackLayer3().catch(console.error);
  }, []);

  let trafficChartSpecs, attackLayerChartSpecs;

  // ensure that data is defined
  // set the styles and labels of the traffic change chart
  if(trafficChange.data) {
    trafficChartSpecs = {
      title: "Traffic Change Over the Last 30 Days: Total vs HTTP",
      datasets: [
        {
            label: "Total Traffic",
            data: trafficChange.data.total.value,
            borderColor: 'green',
            backgroundColor: 'green',
        },
        {
            label: "HTTP Traffic",
            data: trafficChange.data.http.value,
            borderColor: 'red',
            backgroundColor: 'red',
        }
      ],
      xAxisLabels: trafficChange.data.total.date,
    };
  }

  // ensure that data is defined
  // set the styles and labels of attacklayer3 chart
  if(attackLayer3.data) {
    attackLayerChartSpecs = {
      title: "Volume of Layer 3 DDoS Attacks Over the Last 30 Days",
      datasets: [
        {
            label: "Layer 3 DDoS Attack Volume",
            data: attackLayer3.data.value,
            borderColor: 'green',
            backgroundColor: 'green',
        },
      ],
      xAxisLabels: attackLayer3.data.date,
    };
  }

  // makes the lightbox visible and displays the component that is passed in as an argument
  const showLightBox = (component) => {
    setLightBoxComponent(component);
    setIsLightBoxVisible(true);
  }

  // hides the lightbox
  const hideLightBox = () => {
    setLightBoxComponent(null);
    setIsLightBoxVisible(false);
  }

  return (
    <div id="main-wrapper">
      <h1>Navid Boloorian's Super Cool Cloudflare General Task</h1>
      {isLightBoxVisible ? <LightBox hideLightBox={hideLightBox} component={lightBoxComponent} /> : null }
      <div id="grid-wrapper">
        <PreviewBox showLightBox={showLightBox} component={<DataChart dataObj={trafficChange} chartSpecs={trafficChartSpecs} />} />
        <PreviewBox showLightBox={showLightBox} component={<DomainList popularDomains={popularDomains} />} />
        <PreviewBox showLightBox={showLightBox} component={<DataChart dataObj={attackLayer3} chartSpecs={attackLayerChartSpecs} />} />
      </div>
    </div>
  );
}

export default App;
