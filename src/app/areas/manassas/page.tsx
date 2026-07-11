import { AreaPage, generateAreaMetadata } from "@/components/AreaPage";

export const metadata = generateAreaMetadata("manassas");

export default function ManassasPage() {
  return <AreaPage slug="manassas" />;
}
