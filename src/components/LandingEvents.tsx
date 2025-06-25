import './LandingEvents.scss';

export type EventInfo = {
  landingEventPulldate: number; // event date in milliseconds (Unix)
  slug: string;
  imgSrc: string | undefined;
  title: string;
  description: string;
}

type Props = {
  eventInfos: EventInfo[];
}

const LandingEvents = ({eventInfos}:Props) => {
    // today's date set at midnight
    const today = new Date().setHours(0, 0, 0, 0);
    const upcoming = eventInfos.filter((info) => info.landingEventPulldate && info.landingEventPulldate >= today);

    if (upcoming.length === 0) return;
    return (
      <div className='event-list'>
        <h3>Upcoming Events</h3>
        <ul>
          {
            upcoming.map(info => (
              <li>
                <a href={info.slug}>{info.title}</a> - {info.description}
              </li>
            ))
          }
        </ul>
      </div>
    )
}

export default LandingEvents;