import {
  FormContainer,
  Fieldset,
  Label,
  Input,
  Select,
} from "./PoiForm.styled";

export default function PoiForm({ onSubmit, formName }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newPoi = {};

    onSubmit(newPoi);
  }
  return (
    <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
      {/* type */}
      <Label htmlFor="type">Typ</Label>
      <Select name="type" id="type" required>
        <option value="sports">Sportplatz</option>
        <option value="playground">Spielplatz</option>
      </Select>
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
      {/* activities */}
      {/* assets */}
    </FormContainer>
  );
}
