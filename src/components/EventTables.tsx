import './EventTables.scss';

export type Event = {
  dateStr:string;
  title: string;
  description: string;
  photoSrc:string;
};

type Props = {
  events:Event[]
};

const EventTables = ({events}:Props) => {
  const renderTable = (events:Event[], title:string) => {
    if (events.length === 0) return;
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
                        <tr key={`${event.title}${event.dateStr}`}>
                          <td>{event.photoSrc ? <a href={event.photoSrc}><img src={event.photoSrc} /></a>: ' '}</td>
                          <td><strong>{event.title}</strong> &ndash; {event.description}</td>
                          <td>{event.dateStr}</td>
                        </tr>
                  )
                })
              }
            </tbody>
          </table>
      </>
    )}

  const isPastEvent = (event:Event): boolean => {
    return new Date(event.dateStr).getTime() < new Date().getTime();
  }
  const isPendingEvent = (event:Event): boolean => {
    return new Date(event.dateStr).getTime() >= new Date().getTime();
  }

  const pastEvents = events.filter(isPastEvent);
  const pendingEvents = events.filter(isPendingEvent);
  return (
    <>
      {renderTable(pendingEvents, "Upcoming Events")}
      {renderTable(pastEvents, "Past Events")}
    </>
  )

}

export default EventTables;