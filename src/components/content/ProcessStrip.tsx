type ProcessItem = {
  title: string;
  body?: string;
  meta?: string;
};

export function ProcessStrip({
  steps,
  variant = "default",
}: {
  steps: ProcessItem[];
  variant?: "default" | "home" | "service";
}) {
  const className =
    variant === "home"
      ? "process-strip process-strip-home"
      : variant === "service"
        ? "service-process-grid"
        : "process-strip";

  return (
    <ol className={className}>
      {steps.map((step, i) => (
        <li key={`${step.title}-${i}`}>
          <span className="process-num" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="process-copy">
            <h3>{step.title}</h3>
            {step.body ? <p>{step.body}</p> : null}
            {step.meta ? <p className="process-meta">{step.meta}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
