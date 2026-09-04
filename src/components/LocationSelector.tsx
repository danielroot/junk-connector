import { useState } from "react";
import type { Region } from "@data/types";
import { regionPath, withBasePath } from "@lib/seo";

type LocationSelectorProps = {
  regions: Region[];
};

export default function LocationSelector({ regions }: LocationSelectorProps) {
  const [value, setValue] = useState("");

  function goToLocation() {
    const region = regions.find((candidate) => candidate.slug === value);
    if (region) window.location.href = withBasePath(regionPath(region));
  }

  return (
    <div className="location-selector">
      <label htmlFor="location-select">Choose a service area</label>
      <div className="location-selector-row">
        <select
          id="location-select"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        >
          <option value="">Select a city</option>
          {regions.map((region) => (
            <option key={`${region.stateCode}-${region.slug}`} value={region.slug}>
              {region.city}, {region.state}
            </option>
          ))}
        </select>
        <button type="button" className="button button-secondary" onClick={goToLocation} disabled={!value}>
          <span className="material-symbols-rounded" aria-hidden="true">
            travel_explore
          </span>
          View area
        </button>
      </div>
    </div>
  );
}
