import ResumeBlock from "../ResumeBlock/ResumeBlock";
import "./Resume.scss";
export default function Resume() {
  return (
    <>
      <div className="text-container">
        <h3 className="small-text-bg">Resume</h3>
        <h4 className="big-text-bg">Resume</h4>
      </div>
      <ResumeBlock title="Title" subtitle="subtitle" description="desc" yearFrom={2} yearTo={2}></ResumeBlock>
        
    </>
  );
}
