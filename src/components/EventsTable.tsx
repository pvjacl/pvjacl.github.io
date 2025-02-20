import type { ImageMetadata } from "astro";

import './EventsTable.scss';

export type Event = {
    dateStr: string;
    title: string;
    description: string;
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

  const renderTable = (events:Event[], title:string) => {
    if (events.length < 1) {
      return (
        <h4>No {title} Available</h4>
      )
    };
    return (  
      <>
        <h4>{title}</h4>
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
                  <tr>
                    <td>{event.photo ? <a href={event.photo.src}><img src={event.photo.src} alt="featured image"/></a>: ' '}</td>
                    <td><strong>{event.title}</strong> &ndash; {event.description}</td>
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
      {renderTable(futureEvents, 'Upcoming Events')}
      {renderTable(pastEvents, 'Past Events')}
    </>
  )
}

export default EventsTable;