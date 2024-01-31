import useSWR from "swr";

export default function PoisPage() {
  const { data: pois, isLoading, error } = useSWR("/api/pois");
  if (isLoading) {
    return <h1>lädt POIs...</h1>;
  }
  if (!pois) {
    return <h1>keine POIs gefunden.</h1>;
  }
  if (error) {
    return <h1>error! fehlerhafte Daten.</h1>;
  }
  console.log(pois);
}
