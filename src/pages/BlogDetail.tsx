import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Redirect to the new blog page layout using search param
      navigate(`/blog?id=${id}`, { replace: true });
    } else {
      navigate("/blog", { replace: true });
    }
  }, [id, navigate]);

  return null;
};

export default BlogDetail;
