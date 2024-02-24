import supabase from "./supabase";

export async function getExplanationTopics() {
  const { data, error } = await supabase.from("explanation_topics").select("*");
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function createExplanation(topic) {
  const { data, error } = await supabase
    .from("explanation_topics")
    .insert([topic])
    .select();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}
