import './GalleryOpenBannker.scss';

type Event = {
  adStart: string;  //Start showing banner on this day
  fairStart: string;  // Fair Starts on this day
  fairEnd: string;  // Fair ends on this day
  name: string; // Name of the event e.g. "The Spring Fair"
  url: string;  // URL of website or webpage
}

const events:Event[] = [
  {
    adStart: 'July 1, 2025',
    fairStart: 'August 29, 2025',
    fairEnd: 'September 21, 2025',
    name: 'The Washington State Fair',
    url: 'https://www.thefair.com'
  }
];

const millisecondsInADay = 86400000;

const GalleryOpenBanner = () => {
  const today = new Date().getTime();
  for (let i = 0; i < events.length; i += 1) {
    if (today > new Date(events[i].adStart).getTime() &&
    today < new Date(events[i].fairEnd).getTime() + millisecondsInADay) {
      return (
        <div className="open-banner">
          <h4>{`The Gallery will be open during ${events[i].name}`}</h4>
          <p>
            {`${events[i].fairStart} - ${events[i].fairEnd}`}
            <br />
            See <a href={events[i].url}>their website</a> for details
          </p>
        </div>
      );
    } 
  }
}

export default GalleryOpenBanner;