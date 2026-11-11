import './GalleryOpenBannker.scss';

type Event = {
  adStart: string;  //Start showing banner on this day
  eventStart: string;  // Fair Starts on this day
  eventEnd: string;  // Fair ends on this day
  addenda: string;  // e.g. "(Closed Tuesdays & Sept 3)"
  name: string; // Name of the event e.g. "The Spring Fair"
  url: string;  // URL of website or webpage
}

const events:Event[] = [
  {
    adStart: 'January 1, 2027',
    eventStart: 'January 30, 2027',
    eventEnd: 'January 30, 2027',
    addenda: '',
    name: 'our Day of Remembrance',
    url: '/gallery/gallery-events/day-of-remembrance-2027'
  }
];

const millisecondsInADay = 86400000;

const GalleryOpenBanner = () => {
  const today = new Date().getTime();
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    if (today > new Date(event.adStart).getTime() &&
    today < new Date(event.eventEnd).getTime() + millisecondsInADay) {
      return (
        <div className="open-banner">
          <h4>{`The Gallery will be open during ${event.name}`}</h4>
          <p>
            {`${event.eventStart} - ${event.eventEnd} ${event.addenda}`}
            <br />
            See <a href={events[i].url}>our event page</a> for details
          </p>
        </div>
      );
    } 
  }
}

export default GalleryOpenBanner;