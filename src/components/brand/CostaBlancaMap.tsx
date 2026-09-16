import { COSTA_BLANCA_PATH } from "@/components/brand/costaBlancaPath";

type Town = {
  name: string;
  x: number;
  y: number;
  hub?: boolean;
  anchor?: "start" | "middle" | "end";
};

const TOWNS: Town[] = [
  { name: "Denia", x: 348, y: 42, anchor: "start" },
  { name: "Javea", x: 358, y: 60, anchor: "start" },
  { name: "Calpe", x: 332, y: 98, anchor: "start" },
  { name: "Altea", x: 298, y: 120, anchor: "end" },
  { name: "Benidorm", x: 274, y: 136, anchor: "end" },
  { name: "Villajoyosa", x: 246, y: 158, anchor: "end" },
  { name: "El Campello", x: 208, y: 182, anchor: "end" },
  { name: "Alicante", x: 168, y: 216, hub: true, anchor: "end" },
  { name: "Elche", x: 118, y: 244, hub: true, anchor: "end" },
  { name: "Santa Pola", x: 172, y: 264, anchor: "start" },
  { name: "Guardamar", x: 140, y: 298, anchor: "end" },
  { name: "Torrevieja", x: 128, y: 332, hub: true, anchor: "end" },
  { name: "Orihuela Costa", x: 112, y: 360, hub: true, anchor: "end" },
];

/** Pure SVG map — silhouette path + vector labels only. */
export function CostaBlancaMap() {
  return (
    <svg
      className="costa-map"
      viewBox="0 0 400 409"
      role="img"
      aria-label="Costa Blanca map with towns from Denia to Orihuela Costa"
    >
      <path className="costa-map-land" d={COSTA_BLANCA_PATH} />
      <text className="costa-map-region" x="286" y="312">
        Costa Blanca
      </text>
      {TOWNS.map((town) => (
        <text
          key={town.name}
          className={town.hub ? "costa-map-town is-hub" : "costa-map-town"}
          x={town.x}
          y={town.y}
          textAnchor={town.anchor ?? "end"}
        >
          {town.name}
        </text>
      ))}
    </svg>
  );
}
