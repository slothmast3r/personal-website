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
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
    </div>
  );
}
