export function getDate(id: number) {
  const startDate = new Date("2024-01-01").getTime();
  const endDate = new Date("2026-12-31").getTime();
  const randomTime = startDate + ((id * 1234567890) % (endDate - startDate));

  return new Date(randomTime).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
