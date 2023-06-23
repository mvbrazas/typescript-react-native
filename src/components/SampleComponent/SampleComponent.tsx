import React from "react";
import { Text, TouchableOpacity } from "react-native";

export interface SampleComponentProps {
  label: string;
}

const SampleComponent = ({label}: SampleComponentProps) => {
  return (
    <TouchableOpacity>
      <Text>Sample Component: {label}</Text>
    </TouchableOpacity>
  );
};

export default SampleComponent;