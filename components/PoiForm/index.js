export default function PoiForm({ onSubmit, formName }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newPoi = {};

    onSubmit(newPoi);
  }
  return <></>;
}
