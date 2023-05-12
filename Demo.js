import { View, Text } from "react-native";
import { useState } from "react";

import React from "react";
import StarRating from "react-native-star-rating-widget";
export default Demo = () => {
  const [rating, setRating] = useState(0);
  return <StarRating rating={rating} onChange={setRating} />;
};
