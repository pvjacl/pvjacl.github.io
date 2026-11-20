import "./ShowBetweenDates.scss";

type Props = {
	startDate: string;
  endDate: string;
  wrapper: boolean;
  children: React.ReactNode
}

const ShowBetweenDates = ({startDate, endDate, wrapper, children}:Props) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const now = new Date();

  if (now < start || now > end) {
    return;
  }
  return (
    <div id="period-div-wrapper" className={wrapper ? "wrapper" : ""}>
      {children}
    </div>
  )
}

export default ShowBetweenDates;