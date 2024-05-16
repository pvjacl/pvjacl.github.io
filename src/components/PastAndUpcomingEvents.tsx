import { useState, useEffect } from 'react';

import './PastAndUpcomingEvents.scss';

export type EventInfo = {
  date: number;
  slug: string;
  imgSrc: string | undefined;
  title: string;
}

type Props = {
  eventInfos: EventInfo[];
}

const PastAndUpcomingEvents = ({eventInfos}: Props) => {

  const [ upcomingEvents, setUpcomingEvents] = useState([] as EventInfo[]);
  const [ pastEvents, setPastEvents] = useState([] as EventInfo[]);

  useEffect(() => {
    const today = new Date().getTime();
    console.log('today time is', today);
    eventInfos.forEach(info => {
      console.log(info.date);
    })
    const upcoming = eventInfos.filter((info) => info.date > today);
    setUpcomingEvents(upcoming);
    setPastEvents(eventInfos.filter((info) => info.date <= today));
  }, []);

  const renderEvents = (listTitle: string, eventList: EventInfo[], fUpcoming: boolean ) => {

    if (eventList.length === 0) return;
    const classList = fUpcoming ? "eventList emphasize-first" : "eventList";
    console.log(eventList.length, fUpcoming);

    return (
      <div className={classList}>
      <h2>{listTitle}</h2>
      <ul>
        {eventList.map((info) => {
          let dateTime = new Date()
          dateTime.setTime(info.date); 
          return (
          <li key={info.date}>
            <a href={`/gallery-events/${info.slug}/`}>
              {info.imgSrc ? <img width={720} height={360} src={info.imgSrc} alt="" /> : null}
              <h4 className="title">{info.title}</h4>
              <p className="date">
                <time dateTime={dateTime.toISOString()}>
                  {
                    dateTime.toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })
                  }
                </time>
              </p>
            </a>
          </li>
          )})}
        </ul>
      </div>
    )
  }

  return (
    <>
      {renderEvents('Upcoming Events', upcomingEvents, true)}
      {renderEvents('Past Events', pastEvents, false)}
    </>
  );
}

export default PastAndUpcomingEvents;