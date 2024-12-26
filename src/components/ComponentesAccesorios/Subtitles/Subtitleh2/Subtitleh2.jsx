import './../Subtitles.css'
function Subtitleh2({text, clase}) {
  return (
    <>
       <h2 className={`Subtitle-h2 ${clase}`}>{text}</h2>
    </>
  );
}

export default Subtitleh2;
