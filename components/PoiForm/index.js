import {
  FormContainer,
  Fieldset,
  Label,
  Input,
  Select,
} from "./PoiForm.styled";
import { v4 as uuidv4 } from "uuid";

export default function PoiForm({ onSubmit, formName }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    /* DummyData: location.geometry, activities, assets, events, properties.devicesAccessible, properties.communityHint */
    const newPoi = {
      id: uuidv4(),
      type: data.type,
      location: {
        geometry: {
          type: "point",
          coordinates: [7.0973271268, 50.7203277288],
        },
        adress: {
          street: data.street,
          housenumber: data.housenumber,
          postcode: data.postcode,
          city: data.city,
        },
        hint: data.hint ? data.hint : "",
      },
      properties: {
        name: data.name,
        description: data.description,
        locationAccessible: data.locationAccessible,
        devicesAccessible: [],
        communityHint:
          "Servicenummer der Stadt x für Spiel und Sportplätze: +49 228 000 000",
      },
      activities: {
        devices: [
          "rutsche",
          "Klettergerüst",
          "pull-up Stange",
          "TrimmDichPfad",
          "Tennisfeld",
          "basketballplatz",
        ],
        sports: [
          "basketball",
          "tennis",
          "calisthenics",
          "endurance",
          "power",
          "mobility",
        ],
      },
      assets: {
        mainImage: "",
        images: [],
      },
      events: {
        date: "August 19, 2023 13:15:30",
        dateEnd: "August 19, 2023 15:15:30",
        title: "Basketball",
        description:
          "Wir spielen Basketball. Sind zu dritt und suchen noch Mitspieler",
        createdBy: {
          name: "testuser",
          userId: "b1761545-2b75-48d3-b555-22b0108261803",
        },
      },
    };
    onSubmit(newPoi);
  }

  return (
    <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
      {/* type */}
      <Fieldset>
        <legend>Was für ein POI möchtest du hinzufügen?</legend>
        <Label htmlFor="type">Typ</Label>
        <Select name="type" id="type" required>
          <option value="sports">Sportplatz</option>
          <option value="playground">Spielplatz</option>
        </Select>
      </Fieldset>
      {/* location */}
      <Fieldset>
        <legend>Standort - Adresse</legend>
        <Label htmlFor="adress-street">Straße</Label>
        <Input
          id="adress-street"
          name="street"
          type="text"
          maxLength={20}
          required
        />
        <Label htmlFor="adress-housenumber">Haus Nr.</Label>
        <Input
          id="adress-housenumber"
          name="housenumber"
          type="number"
          maxLength={3}
          required
        />
        <Label htmlFor="adress-postcode">PLZ</Label>
        <Input
          id="adress-postcode"
          name="postcode"
          type="number"
          minLength={4}
          maxLength={5}
          required
        />
        <Label htmlFor="adress-city">Stadt</Label>
        <Input
          id="adress-city"
          name="city"
          type="text"
          maxLength={20}
          required
        />
        <Label htmlFor="location-hint">
          Hinweis zum auffinden der Location
        </Label>
        <Input
          id="location-hint"
          name="hint"
          type="text"
          maxLength={50}
          placeholder="z.B. Eingang über Hofdurchgang ecke Gartenstraße"
        />
      </Fieldset>
      {/* properties */}
      <Fieldset>
        <legend>Beschreibung</legend>
        <Label htmlFor="properties-name">Name der Location</Label>
        <Input
          id="properties-name"
          name="name"
          type="text"
          maxLength={20}
          placeholder="z.B. Spielplatz Zentrum"
          required
        />
        <Label htmlFor="properties-description">
          Beschreibung der Location
        </Label>
        <Input
          id="properties-description"
          name="description"
          type="text"
          maxLength={50}
          placeholder="z.B. schöner Platz unter Bäumen"
        />
        <Label htmlFor="properties-locationAccessible">
          Zugänglich für Bewegungseingeschränkte Personen?
        </Label>
        <Select
          id="properties-locationAccessible"
          name="locationAccessible"
          required
        >
          <option value={false}>nicht zugänglich</option>
          <option value={true}>zugänglich</option>
        </Select>
      </Fieldset>
      {/* activities, choose from predefined devices+sports, added on another form */}
      {/* assets, containing img-upload */}
      <button type="submit">POI hinzufügen</button>
    </FormContainer>
  );
}
