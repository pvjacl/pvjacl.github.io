export type Props = {
  url: string;
}

const Redirect = ({url}: Props ) => {
  window.location.replace(url);
}

export default Redirect;