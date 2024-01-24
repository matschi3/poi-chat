import {
  FormContainer,
  Fieldset,
  Label,
  Input,
  Select,
} from "./PoiForm.styled";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

export default function PoiForm({ onSubmit, formName }) {
  const [fetchedCategories, setFetchedCategories] = useState([]);
  const [geometryArray, setGeometryArray] = useState(null);
  const [enteredSeating, setEnteredSeating] = useState(0);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setFetchedCategories(data);
    }
    fetchCategories();
  }, []);

  function getCurrentPosition() {
    const geolocation = navigator.geolocation.getCurrentPosition((position) => {
      setGeometryArray([position.coords.longitude, position.coords.latitude]);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newPoi = {
      uuid: uuidv4(),
      categories: fetchedCategories.find((category) => {
        category.uuid === data.category;
        return category;
      }),
      location: {
        geometry:
          geometryArray !== null
            ? {
                uuid: uuidv4(),
                type: "point",
                coordinates: geometryArray,
              }
            : {},
        adress: {
          uuid: uuidv4(),
          street: data.street,
          housenumber: data.housenumber,
          postcode: data.postcode,
          city: data.city,
        },
        hint: data.hint ? data.hint : "",
      },
      properties: {
        uuid: uuidv4(),
        name: data.name,
        description: data.description,
        seating: parseInt(enteredSeating),
        seatingBackrest: parseInt(data.seatingBackrest),
        garbagecan: parseInt(data.garbagecan),
        locationAccessible: data.locationAccessible,
        devicesAccessible: [],
        communityHint:
          "Servicenummer der Stadt x für Spiel und Sportplätze: +49 228 000 000",
      },
    };
    /* onSubmit(newPoi); */
    console.log(newPoi);
  }

  return (
    <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
      {/* category */}
      <Fieldset>
        <legend>Was für ein POI möchtest du hinzufügen?</legend>
        <Label htmlFor="category">Kategorie</Label>
        <Select id="category" name="category" required>
          {fetchedCategories.map((category) => {
            return (
              <option key={category.uuid} value={category.uuid}>
                {category.name}
              </option>
            );
          })}
        </Select>
      </Fieldset>
      {/* location */}
      <Fieldset>
        <legend>Standort - Adresse</legend>
        <button
          onClick={(event) => {
            event.preventDefault();
            getCurrentPosition();
          }}
        >
          {geometryArray === null
            ? "Aktuellen Standort verwenden"
            : "Aktueller Standort erfolgreich eingetragen!"}
        </button>
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
        <Label htmlFor="properties-seating">
          Anzahl vorhandener Sitzgelegenheiten
        </Label>
        <Input
          id="properties-seating"
          name="seating"
          type="number"
          min={0}
          max={99}
          onChange={(event) => {
            setEnteredSeating(event.target.value);
          }}
        />
        <Label htmlFor="properties-seatingBackrest">
          davon Sitzgelegenheiten mit Rückenlehne
        </Label>
        <Input
          id="properties-seatingBackrest"
          name="seatingBackrest"
          type="number"
          min={0}
          max={enteredSeating}
        />
        <Label htmlFor="properties-garbagecan">
          Anzahl vorhandener Mülleimer
        </Label>
        <Input
          id="properties-garbagecan"
          name="garbagecan"
          type="number"
          min={0}
          max={99}
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
