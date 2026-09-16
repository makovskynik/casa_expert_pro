import type { PriceRow } from "@/lib/content/types";

export function PriceTable({
  rows,
  title,
  labels,
}: {
  rows: PriceRow[];
  title: string;
  labels: { item: string; range: string; note: string };
}) {
  if (!rows.length) return null;
  return (
    <div className="service-prices">
      <h2>{title}</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>{labels.item}</th>
              <th>{labels.range}</th>
              <th>{labels.note}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.item}>
                <td>{row.item}</td>
                <td>{row.value}</td>
                <td>{row.note ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
