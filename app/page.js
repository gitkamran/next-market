import Amazing from "@/components/amazing-products/Amazing";
import Banners from "@/components/banners/Banners";
import CategoriesSlider from "@/components/categories-slider/CategoriesSlider";
import Newest from "@/components/newest-products/Newest";

const getDataMenu = async () => {
  const res = await fetch("https://api.qazvinmarket.com/api/v1/menu", { cache: "no-store" });
  return res.json();
}

const getDataIndex = async () => {
  const res = await fetch("https://api.qazvinmarket.com/api/v1/index", { cache: "no-store" });
  return res.json();
}

export default async function Home() {
  const dataMenu = await getDataMenu();
  const dataIndex = await getDataIndex();

  return (
    <main className="flex flex-col gap-4 items-center w-full min-h-screen bg-neutral-200/50 py-4">
      <CategoriesSlider data={dataMenu.menus} />
      <Amazing data={dataIndex.data.amazing} />
      <Banners data={dataIndex.data.advertises} />
      <Newest data={dataIndex.data.newest} />
    </main>
  )
}
