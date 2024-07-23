import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../backend/conf";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userid === userData.$id : false;

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8 bg-gray-900 text-white min-h-screen">
      <Container>
        <div className="w-full flex justify-center mb-8 relative border border-gray-700 rounded-xl p-4 bg-gray-800 shadow-lg">
          <img
            src={service.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl max-h-96 object-cover"
          />
          {isAuthor && (
            <div className="absolute right-6 top-6 flex space-x-3">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="hover:bg-green-400">
                  Edit
                </Button>
              </Link>
              <Button
                bgColor="bg-red-500"
                className="hover:bg-red-400"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6 text-center">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        </div>
        <div className="prose prose-invert max-w-full">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}
