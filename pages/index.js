import Link from "next/link";
import useSWR from "swr";
import Box from "@/components/Box";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage() {
  const {
    data: randomCharacter,
    isLoading,
    error,
  } = useSWR("/api/random-character", fetcher);

  if (isLoading) {
    return <Box randomCharacter={null} />;
  }

  if (error) {
    return <p>ERROR</p>;
  }

  return <Box randomCharacter={randomCharacter} />;
}
