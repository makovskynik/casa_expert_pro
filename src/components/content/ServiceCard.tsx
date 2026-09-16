import { serviceMedia } from "@/content/media";
import { getService } from "@/lib/content/registry";
import { getPath, type ServiceId } from "@/lib/i18n/routing";
import type { Locale } from "@/lib/i18n/config";
import Image from "next/image";
import Link from "next/link";

export function ServiceCard({
  locale,
  id,
  teaser,
  featured = false,
}: {
  locale: Locale;
  id: ServiceId;
  teaser?: string;
  featured?: boolean;
}) {
  const item = getService(locale, id);
  const img = serviceMedia[id];
  return (
    <Link
      className={`service-card${featured ? " service-card-featured" : ""}`}
      href={getPath({ kind: "service", locale, id })}
    >
      <div className="cover-photo">
        <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 40vw, 33vw" />
      </div>
      <div className="service-card-copy">
        <h3>{item.name}</h3>
        {teaser ? <p className="muted">{teaser}</p> : null}
      </div>
    </Link>
  );
}
