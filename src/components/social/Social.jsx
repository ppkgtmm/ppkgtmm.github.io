import Link from "./Link";
import {
  EnvelopeIcon,
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  LocationIcon,
} from "../../icons";

function Social() {
  return (
    <div className="flex overflow-auto no-scrollbar">
      <Link to="mailto:pinky.gtm@outlook.com">
        <EnvelopeIcon />
      </Link>
      <Link to="https://www.linkedin.com/in/pinky-gautam/">
        <LinkedinIcon />
      </Link>
      <Link to="https://github.com/ppkgtmm/">
        <GithubIcon />
      </Link>
      <Link to="https://medium.com/@ppkgtmm">
        <MediumIcon />
      </Link>
      <Link to="https://goo.gl/maps/XvfHavq873BBm7fb9">
        <LocationIcon />
      </Link>
    </div>
  );
}

export default Social;