import supabase from "./supabase";

export async function getExplanationTopics() {
  const { data, error } = await supabase.from("explanation_topics").select("*");
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function getExplanationTopicById(id) {
  const { data, error } = await supabase
    .from("explanation_topics")
    .select("*")
    .eq("id", id)
    .single();

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

export async function updateExplanation(topic) {
  const { data, error } = await supabase
    .from("explanation_topics")
    .update(topic)
    .eq("id", topic.id)
    .select();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export async function deleteExplanation(id) {
  const { data, error } = await supabase
    .from("explanation_topics")
    .delete()
    .eq("id", id);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}
