
type Props = {
  text: string;
  source: string;
};

const Quote = ({text, source}:Props) => (
  <div className="quote">
    <p>{text}</p>
    <div className="quote-source">{source}</div>
  </div>
)

export default Quote;