import React from "react";
import MarkDown from "../../ui/MarkDown";
import { useGetExplanationById } from "./useGetExplanationById";
import { Spinner } from "react-bootstrap";

export default function TheExplanationPage() {
  const { explanation, isLoading } = useGetExplanationById();
  if (isLoading) {
    return <Spinner />;
  }
  return <MarkDown markdown={explanation.explanation} />;
}
