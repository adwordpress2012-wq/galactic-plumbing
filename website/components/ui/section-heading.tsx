type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-black uppercase tracking-wider text-brand-blue">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black uppercase tracking-tight text-brand-deep-navy sm:text-4xl">
        {title}
        {highlight ? (
          <>
            {" "}
            <span className="text-brand-blue">{highlight}</span>
          </>
        ) : null}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
