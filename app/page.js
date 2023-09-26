import PageComp from "@/components/page-comp/PageComp";

const getDataMenu = async () => {
  const res = await fetch("https://api.qazvinmarket.com/api/v1/menu", { cache: "no-store" });
  return res.json();
}

const getDataIndex = async () => {
  const res = await fetch("https://api.qazvinmarket.com/api/v1/index", { cache: "no-store" });
  return res.json();
}

const getDataComment = async () => {
  const res = await fetch("https://api.qazvinmarket.com/api/v1/comments", { cache: "no-store" });
  return res.json();
}

export default async function Home({ searchParams }) {
  const dataMenu = await getDataMenu();
  const dataIndex = await getDataIndex();
  const dataComment = await getDataComment();

  return (
    <PageComp data={{ dataMenu, dataIndex, dataComment }} url={searchParams} />
  )
}
