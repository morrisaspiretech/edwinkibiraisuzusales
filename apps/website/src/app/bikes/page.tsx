import { redirect } from "next/navigation";

// Bikes page removed ââ Edwin Kibira Isuzu Sales only sells Isuzu vehicles.
// Redirect to main inventory.
export default function BikesPage() {
  redirect("/inventory");
}
