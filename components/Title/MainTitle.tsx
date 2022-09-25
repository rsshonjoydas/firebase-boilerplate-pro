type ITitle = {
  title: string;
  subtitle: string;
};

const MainTitle = ({ title, subtitle }: ITitle) => (
  <div className="title-main">
    <h2>
      {title} <span className="text-primary-500">{subtitle}</span>
      <span className="text-gray-200 dark:text-gray-500/20 bg-text">{title}</span>
    </h2>
  </div>
);

export default MainTitle;
