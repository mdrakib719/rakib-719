import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  read_time: string;
  author: string;
  categories: string;
  slug: string;
}

const DashboardPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<Partial<BlogPost>>({});
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({});

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("date", { ascending: false });
    if (error) console.error(error.message);
    else setPosts(data as BlogPost[]);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleFormChange = (field: keyof BlogPost, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleNewChange = (field: keyof BlogPost, value: string) => {
    setNewPost((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = async () => {
    if (!editingId) return;
    const { error } = await supabase
      .from("blog_posts")
      .update(form)
      .eq("id", editingId);
    if (!error) {
      setEditingId(null);
      setForm({});
      fetchPosts();
    }
  };

  const handleDelete = async (id: number) => {
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (!error) fetchPosts();
  };

  const handleAddNew = async () => {
    const { error } = await supabase.from("blog_posts").insert([newPost]);
    if (!error) {
      setNewPost({});
      fetchPosts();
    }
  };

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "2rem" }}>
      <h1>📚 Blog Dashboard</h1>

      <h2 style={{ marginTop: "2rem" }}>➕ Add New Blog</h2>
      <div
        style={{
          border: "2px dashed #ccc",
          padding: "1rem",
          marginBottom: "2rem",
        }}
      >
        <input
          value={newPost.title || ""}
          onChange={(e) => handleNewChange("title", e.target.value)}
          placeholder="Title"
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
        <input
          value={newPost.excerpt || ""}
          onChange={(e) => handleNewChange("excerpt", e.target.value)}
          placeholder="Excerpt"
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
        <input
          value={newPost.date || ""}
          onChange={(e) => handleNewChange("date", e.target.value)}
          type="date"
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
        <input
          value={newPost.read_time || ""}
          onChange={(e) => handleNewChange("read_time", e.target.value)}
          placeholder="Read Time"
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
        <input
          value={newPost.author || ""}
          onChange={(e) => handleNewChange("author", e.target.value)}
          placeholder="Author"
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
        <input
          value={newPost.categories || ""}
          onChange={(e) => handleNewChange("categories", e.target.value)}
          placeholder="Categories"
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
        <input
          value={newPost.slug || ""}
          onChange={(e) => handleNewChange("slug", e.target.value)}
          placeholder="Slug"
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
        <button onClick={handleAddNew}>🚀 Add Blog</button>
      </div>

      <h2>📝 All Blog Posts</h2>
      {posts.map((post) =>
        editingId === post.id ? (
          <div
            key={post.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <input
              value={form.title || ""}
              onChange={(e) => handleFormChange("title", e.target.value)}
              placeholder="Title"
              style={{ width: "100%", marginBottom: "0.5rem" }}
            />
            <input
              value={form.excerpt || ""}
              onChange={(e) => handleFormChange("excerpt", e.target.value)}
              placeholder="Excerpt"
              style={{ width: "100%", marginBottom: "0.5rem" }}
            />
            <input
              value={form.date || ""}
              onChange={(e) => handleFormChange("date", e.target.value)}
              type="date"
              style={{ width: "100%", marginBottom: "0.5rem" }}
            />
            <input
              value={form.read_time || ""}
              onChange={(e) => handleFormChange("read_time", e.target.value)}
              placeholder="Read Time"
              style={{ width: "100%", marginBottom: "0.5rem" }}
            />
            <input
              value={form.author || ""}
              onChange={(e) => handleFormChange("author", e.target.value)}
              placeholder="Author"
              style={{ width: "100%", marginBottom: "0.5rem" }}
            />
            <input
              value={form.categories || ""}
              onChange={(e) => handleFormChange("categories", e.target.value)}
              placeholder="Categories"
              style={{ width: "100%", marginBottom: "0.5rem" }}
            />
            <input
              value={form.slug || ""}
              onChange={(e) => handleFormChange("slug", e.target.value)}
              placeholder="Slug"
              style={{ width: "100%", marginBottom: "0.5rem" }}
            />
            <button onClick={handleUpdate}>✅ Save</button>
            <button
              onClick={() => setEditingId(null)}
              style={{ marginLeft: "1rem" }}
            >
              ❌ Cancel
            </button>
          </div>
        ) : (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <h3>{post.title}</h3>
            <p>
              <strong>Excerpt:</strong> {post.excerpt}
            </p>
            <p>
              <strong>Date:</strong> {post.date} | <strong>Read Time:</strong>{" "}
              {post.read_time}
            </p>
            <p>
              <strong>Author:</strong> {post.author}
            </p>
            <p>
              <strong>Categories:</strong> {post.categories}
            </p>
            <p>
              <strong>Slug:</strong> {post.slug}
            </p>
            <button
              onClick={() => {
                setEditingId(post.id);
                setForm(post);
              }}
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => handleDelete(post.id)}
              style={{ marginLeft: "1rem" }}
            >
              🗑️ Delete
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default DashboardPage;
