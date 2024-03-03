import supabase from "./supabase";

export async function getPosts() {
  const { data, error } = await supabase.from("posts").select("*");
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function createPost(post) {
  const { data, error } = await supabase.from("posts").insert([post]).select();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function updatePost(post) {
  const { data, error } = await supabase
    .from("posts")
    .update(post)
    .eq("id", post.id)
    .select();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}
