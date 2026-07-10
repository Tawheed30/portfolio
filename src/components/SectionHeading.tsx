export default function SectionHeading({
  index,
  title,
  className = "mb-4",
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
