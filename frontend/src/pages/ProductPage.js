import { useParams } from "react-router-dom";

function ProductPage() {
  const params = useParams();
  const { slug } = params;
  return <div>{slug}</div>;
}

export default ProductPage;
