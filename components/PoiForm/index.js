import { FormContainer, Label, Input, Select } from "./PoiForm.styled";

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
      {/* properties */}
      {/* activities */}
      {/* assets */}
    </FormContainer>
  );
}
