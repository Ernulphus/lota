import './LibVsArchive.css';
import { lib_archive_text } from '../../constants';

function LibVsArchive () {
  return (
    <div className="lib-archive-wrapper">
      <h1>Library or Archive?</h1>
      {lib_archive_text}
    </div>
  );
}

export default LibVsArchive;