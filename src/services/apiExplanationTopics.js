import supabase from "./supabase";

export const getExplanationTopics = async () => {
  const { data, error } = await supabase.from("explanation_topics").select("*");
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
};
