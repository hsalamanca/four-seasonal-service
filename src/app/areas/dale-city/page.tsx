import { AreaPage, generateAreaMetadata } from "@/components/AreaPage";

export const metadata = generateAreaMetadata("dale-city");

export default function DaleCityPage() {
  return <AreaPage slug="dale-city" />;
}
