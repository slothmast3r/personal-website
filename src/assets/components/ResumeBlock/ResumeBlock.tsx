import "./ResumeBlock.scss";

type ResumeBlockProps = {
  title: string;
  subtitle: string;
  description: string;
  yearFrom: string | number;
  yearTo: string | number;
};

export default function ResumeBlock({
  title,
  subtitle,
  description,
  yearFrom,
  yearTo,
}: ResumeBlockProps) {
  return (
    <div className="block-container">
      <p className="date-period">
        {yearFrom} - {yearTo}
      </p>
      <h2 className="title">{title}</h2>
      <span className="subtitle">{subtitle}</span>
      <p className="description">{description}</p>
    </div>
  );
}
