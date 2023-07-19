import { ProgressBar } from "../ProgressBar";
import "./Skills.scss";

export default function Skills() {
  return (
    <div id="skills">
      <div className="text-container">
        <h3 className="small-text-bg">My Skills</h3>
        <h4 className="big-text-bg">Skills</h4>
      </div>
      <div>
      <ProgressBar title="Marketing" percentage={75}></ProgressBar>
      <ProgressBar title="Marketing" percentage={75}></ProgressBar>
      <ProgressBar title="Marketing" percentage={75}></ProgressBar>
      <ProgressBar title="Marketing" percentage={75}></ProgressBar>
      <ProgressBar title="Marketing" percentage={75}></ProgressBar>
      <ProgressBar title="Marketing" percentage={75}></ProgressBar>
      </div>
    </div>
  );
}
