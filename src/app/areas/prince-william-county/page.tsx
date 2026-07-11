import { AreaPage, generateAreaMetadata } from "@/components/AreaPage";

export const metadata = generateAreaMetadata("prince-william-county");

export default function PrinceWilliamPage() {
  return <AreaPage slug="prince-william-county" />;
}
