import Link from "next/link";

export function IndexCard({
  href,
  title,
  text,
}: {
  href: string;
  title: string;
  text: string;
}) {
  return (
    <Link className="index-card" href={href}>
      <h3>{title}</h3>
      <p className="muted clamp-3">{text}</p>
    </Link>
  );
}
