import supabase from "./supabase";

export async function getQuiz(id) {
  const { data, error } = await supabase
    .from("quizzes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

export async function createQuiz(quiz) {
  const { data, error } = await supabase
    .from("quizzes")
    .insert([quiz])
    .select();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}
