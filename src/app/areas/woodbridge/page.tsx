import { AreaPage, generateAreaMetadata } from "@/components/AreaPage";

export const metadata = generateAreaMetadata("woodbridge");

export default function WoodbridgePage() {
  return <AreaPage slug="woodbridge" />;
}
