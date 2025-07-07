import type { ImageMetadata } from "astro";

import './EventsTable.scss';

export type Event = {
    dateStr: string;
    title: string;
    description: string | TrustedHTML;
    photo: ImageMetadata;
    landingEventPullDate: string;
};

type Props = {
  events:Event[];
};


const EventsTable = ({events}:Props) => {
  const today = new Date().getTime();
  const futureEventFilter = (event:Event) => (new Date(event.landingEventPullDate).getTime() >= today);
  const pastEventFilter = (event:Event) => (new Date(event.landingEventPullDate).getTime() < today);
  const futureEvents = events.filter(event => futureEventFilter(event));
  const pastEvents = events.filter(event => pastEventFilter(event));

  const renderTable = (events:Event[], fUpcoming: boolean) => {
    if (events.length < 1) {
      if (fUpcoming) {
        return (
          <h4>No Announced Upcoming Events</h4>
        )
      } else {
        return;
      }
    };
    return (  
      <>
        <h4>{fUpcoming ? 'Upcoming Events' : 'Past Events'}</h4>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {
              events.map (event => {
                return (
                  <tr key={event.dateStr+event.title}>
                    <td>{event.photo ? <a href={event.photo.src}><img src={event.photo.src} alt="featured image"/></a>: ' '}</td>
                    <td><strong>{event.title}</strong> &ndash; <span dangerouslySetInnerHTML={{__html: event.description}}></span></td>
                    <td>{event.dateStr}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </>
    )
  }

  return (
    <>
      {renderTable(futureEvents, true)}
      {renderTable(pastEvents, false)}
    </>
  )
}

export default EventsTable;